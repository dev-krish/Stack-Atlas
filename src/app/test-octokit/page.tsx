import { getRepository } from "@/lib/github/get-repository";

export default async function TestOctokitPage() {
  const repo = await getRepository(
    "vercel",
    "next.js"
  );

  return (
    <pre>
      {JSON.stringify(
        {
          name: repo.name,
          stars: repo.stargazers_count,
          language: repo.language,
        },
        null,
        2
      )}
    </pre>
  );
}