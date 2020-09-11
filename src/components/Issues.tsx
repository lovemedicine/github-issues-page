import React, { useState, useEffect } from 'react'
import RepoLink from './RepoLink'
import IssuesHeader from './IssuesHeader'
import Issue, { IssueState } from './Issue'
import styled from 'styled-components'
import api from '../api'

const OuterDiv = styled.div`
  padding: 1em;

  a {
    text-decoration: none;
  }
`

const IssueListDiv = styled.div`
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
`

export default function Issues({ repo }: IssuesProps) {
  const [loading, setLoading] = useState(false)
  const [issues, setIssues] = useState<IssueState[] | null>(null)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    api.fetchRepoIssues(repo)
      .then(issues => {
        setIssues(issues)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [repo])

  return (
    <OuterDiv>
      <h2>
        Issues for <RepoLink repo={repo} />
      </h2>

      <IssuesHeader issues={issues} error={error} loading={loading} />

      { issues && issues?.length > 0 && 
        <IssueListDiv role="list">
          { issues.map(issue => <Issue key={issue.id} issue={issue} />) }
        </IssueListDiv>
      }

    </OuterDiv>
  )
}

interface IssuesProps {
  repo: string
}