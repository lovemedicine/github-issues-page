import React from 'react'
import { Link } from 'react-router-dom'

export default function IssuesLink({ repoPath }: IssuesLinkProps) {
  return (
    <Link to={`/${repoPath}`}>&laquo; View all issues for { repoPath }</Link>
  )
}

export interface IssuesLinkProps {
  repoPath: string
}