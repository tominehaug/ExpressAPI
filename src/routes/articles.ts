import { Router } from "express";
import { pool } from "../database.js";
import { ResultSetHeader } from "mysql2";
import { Article } from "../interfaces.js";
import { authenticateToken } from "../middleware/auth-validation.js";
import { validateArticleData } from "../middleware/article-validation.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const offset = (page - 1) * limit;

    const [rows] = await pool.execute(
      "SELECT * FROM articles ORDER BY created_at DESC LIMIT ? OFFSET ?",
      [limit.toString(), offset.toString()],
    );
    const articles = rows as Article[];

    res.json(articles);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({
      error: "Failed to fetch articles",
    });
  }
});

router.post("/", authenticateToken, validateArticleData, async (req, res) => {
  try {
    const { title, body, category } = req.body;

    if (!req.user) {
      return res.status(401).json({
        error: "Authentication required to post article",
      });
    }

    const submitted_by = req.user.id;

    const [result]: [ResultSetHeader, any] = await pool.execute(
      "INSERT INTO articles (title, body, category, submitted_by) VALUES (?, ?, ?, ?)",
      [title, body ?? null, category ?? null, submitted_by],
    );

    const [newArticleRows] = await pool.execute(
      "SELECT id, title, body, category, submitted_by, created_at FROM articles WHERE id = ?",
      [result.insertId],
    );
    const article = (newArticleRows as Article[])[0];

    res.status(201).json(article);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({
      error: "Failed to create article",
    });
  }
});

export default router;
