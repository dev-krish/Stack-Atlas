import { z } from "zod";

export const reviewSchema = z.object({
  repoUrl: z
    .string()
    .min(1, "Repository URL is required")
    .regex(
      /^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/,
      "Please enter a valid GitHub repository URL"
    ),
});

export type ReviewInput = z.infer<typeof reviewSchema>;