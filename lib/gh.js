export async function getTop5RecentlyUsedRepos() {
  const repoUrl = `https://api.github.com/search/repositories?q=user:projectaki&sort=updated&order=desc&per_page=1`;

  const top1Repos = await fetch(repoUrl, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });

  const repos = top1Repos.items;

  const toprepo = repos[0];

  const commits = await getCommitsForRepo(toprepo.name);

  return commits[0];
}

async function getCommitsForRepo(repo_name) {
  const apiUrl = `https://api.github.com/repos/projectaki/${repo_name}/commits?per_page=1`;

  const commits = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });

  return commits.map((c) => {
    return c.commit.author.date;
  });
}
