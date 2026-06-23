import { octokit } from "./octokit";

export async function getRepositoryTree(
  owner: string,
  repo: string
) {
  const repository =
    await octokit.rest.repos.get({
      owner,
      repo,
    });

  const defaultBranch =
    repository.data.default_branch;

  const branch =
    await octokit.rest.repos.getBranch({
      owner,
      repo,
      branch: defaultBranch,
    });

  const tree =
    await octokit.rest.git.getTree({
      owner,
      repo,
      tree_sha:
        branch.data.commit.sha,
      recursive: "true",
    });

  return tree.data.tree;
}