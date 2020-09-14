import React from 'react'
import { IssueLinkProps } from './components/IssueLink'
import { IssuesLinkProps } from './components/IssuesLink'

export const createIssueLink = (repoPath: string) => ({ number, title }: IssueLinkProps) => (
  <a href={`/${repoPath}/issues/${number}`}>{ title }</a>
)

export const IssuesLink = ({ repoPath }: IssuesLinkProps) => <a href={repoPath}>{ repoPath }</a>