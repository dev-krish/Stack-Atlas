import { octokit } from "./octokit";

export async function getRepository(
  owner: string,
  repo: string
) {
  const response =
    await octokit.rest.repos.get({
      owner,
      repo,
    });

  return response.data;
}