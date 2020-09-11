import { IssueState } from './components/Issue'

function fetchRepoIssues(repo: string): Promise<IssueState[]> {
  const apiUrl = "https://api.github.com/repos/" + repo + "/issues"

  return fetch(apiUrl).then(response => response.json())
}

export default {
  fetchRepoIssues
}