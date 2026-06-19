import {z} from "zod";

const envSchema= z.object({
    MONGODB_URI: z.url(),

    NEXTAUTH_SECRET: z.string().min(1),

    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),

    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),

    GEMINI_API_KEY: z.string().min(1),

    REDIS_HOST: z.string().min(1),
    REDIS_PORT: z.string().min(1),
});

export const env = envSchema.parse(process.env);