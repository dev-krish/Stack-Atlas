import { parseRepoUrl } from "@/lib/github/parse-repo-url";

export default function TestGithubPage() {
  const result = parseRepoUrl(
    "https://github.com/hey/next.js"
  );

  return (
    <pre>
      {JSON.stringify(result, null, 2)}
    </pre>
  );
}