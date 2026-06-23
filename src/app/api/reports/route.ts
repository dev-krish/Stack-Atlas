import { NextResponse } from "next/server";

import { auth } from "@/lib/auth/auth";
import { connectDB } from "@/lib/db/mongodb";

import { Report } from "@/models/Report";
import { User } from "@/models/UserModel";

import { reviewSchema } from "@/lib/validators/review";

import { parseRepoUrl } from "@/lib/github/parse-repo-url";
import { getRepository } from "@/lib/github/get-repository";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const validatedData = reviewSchema.parse(body);
    const { owner, repo } = parseRepoUrl(validatedData.repoUrl);

    const repository = await getRepository(owner, repo);

    await connectDB();

    const dbUser = await User.findOne({
      email: session.user.email,
    });

    if (!dbUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const report = await Report.create({
      userId: dbUser._id,

      repositoryName: repository.name,

      repositoryUrl: validatedData.repoUrl,

      description: repository.description,

      primaryLanguage: repository.language,

      stars: repository.stargazers_count,

      sourceType: "github",

      status: "pending",
    });

    return NextResponse.json(report);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to create report",
      },
      {
        status: 500,
      },
    );
  }
}
