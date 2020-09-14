import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import RepoLink from './RepoLink'
import IssuesListHeader from './IssuesListHeader'
import IssuesList from './IssuesList'
import IssueDetails from './IssueDetails'
import { IssueLinkProps } from './IssueLink'
import { IssuesLinkProps } from './IssuesLink'
import api, { IssueData } from '../api'

const OuterDiv = styled.div`
  padding: 1em;

  a {
    text-decoration: none;
  }
`

export default function Issues({ user, repo, number, IssueLink, IssuesLink }: IssuesProps) {
  const repoPath = `${user}/${repo}`

  const [loading, setLoading] = useState(false)
  const [issues, setIssues] = useState<IssueData[] | null>(null)
  const [count, setCount] = useState<number | null>(null)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    api.fetchRepo(repoPath)
      .then(repo => {
        setCount(repo.open_issues_count)
      })
      .then(() => api.fetchRepoIssues(repoPath))
      .then(issues => {
        setIssues(issues)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [repoPath])

  const issue = number ? issues?.find(issue => issue.number === Number(number)) : null

  return (
    <OuterDiv>
      <h2>
        { number 
          ? <IssuesLink repoPath={repoPath} /> 
          : <RepoLink repoPath={repoPath} /> 
        }
      </h2>

      { number && issue &&
        <IssueDetails user={user} repo={repo} issue={issue} />
      }

      { !number &&
        <>
          <IssuesListHeader count={count} issues={issues} error={error} loading={loading} />
          { issues && issues?.length > 0 && 
            <IssuesList issues={issues} IssueLink={IssueLink} />
          }
        </>
      
      }
    </OuterDiv>
  )
}

interface IssuesProps {
  user: string,
  repo: string,
  number: string,
  IssueLink: React.FunctionComponent<IssueLinkProps>
  IssuesLink: React.FunctionComponent<IssuesLinkProps>
}