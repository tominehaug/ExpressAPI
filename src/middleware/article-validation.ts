import { z } from "zod";
import { Request, Response, NextFunction } from "express";

const articleDataSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  body: z.string().trim().optional(),
  category: z.string().trim().optional(),
});

export const validateArticleData = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result = articleDataSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: result.error.issues.map((issue) => issue.message),
    });
  }

  req.body = result.data;
  next();
};
