import {
  getRepositoryTree,
} from "@/lib/github/get-repository-tree";

export default async function TestTreePage() {
  const tree =
    await getRepositoryTree(
      "vercel",
      "next.js"
    );

  const firstTwenty =
    tree.slice(0, 20);

  return (
    <pre>
      {JSON.stringify(
        firstTwenty,
        null,
        2
      )}
    </pre>
  );
}