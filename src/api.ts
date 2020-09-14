export interface RepoData {
  open_issues_count: number
}

export interface UserData {
  login: string,
  html_url: string
}

export interface IssueData {
  id: number,
  title: string,
  number: number,
  body: string,
  user: UserData,
  labels: IssueLabelData[],
  comments: number
  html_url: string,
  created_at: string
}

export interface IssueLabelData {
  name: string,
  description: string,
  color: string
}

export interface CommentData {
  id: number,
  body: string,
  user: UserData,
  created_at: string
}

function fetchRepo(repoPath: string): Promise<RepoData> {
  const apiUrl = "https://api.github.com/repos/" + repoPath

  return fetch(apiUrl).then(response => response.json())
}

function fetchRepoIssues(repoPath: string): Promise<IssueData[]> {
  const apiUrl = `https://api.github.com/repos/${repoPath}/issues`

  return fetch(apiUrl).then(response => response.json())
}

function fetchIssueComments(repoPath: string, number: number): Promise<CommentData[]> {
  const apiUrl = `https://api.github.com/repos/${repoPath}/issues/${number}/comments`

  return fetch(apiUrl).then(response => response.json())
}

export default {
  fetchRepo,
  fetchRepoIssues,
  fetchIssueComments
}