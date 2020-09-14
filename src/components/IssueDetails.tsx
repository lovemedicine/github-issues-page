import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import IssueComment from './IssueComment'
import api, { IssueData, CommentData } from '../api'

const Title = styled.header`
  font-size: 2.5em;
  display: inline-block;
  margin-bottom: 0.5em;
`

const Number = styled.span`
  margin-left: 0.5em;
  color: #666;
`

const UserLink = styled.a`
  color: #666;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: blue;
  }
`

export default function IssueDetails({ issue, user, repo }: IssueDetailsProps) {
  const repoPath = `${user}/${repo}`

  const [comments, setComments] = useState<CommentData[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const time = moment(issue.created_at).format('MMM DD[,] YYYY')

  useEffect(() => {
    setLoading(true)
    api.fetchIssueComments(repoPath, issue.number)
      .then(comments => {
        console.log(comments)
        setComments(comments)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [repoPath, issue.number])

  return (
    <>
      <Title>
        { issue.title }

        <Number>
          #{ issue.number }
        </Number>
      </Title>

      <UserLink>{ issue.user.login }</UserLink> opened this issue on { time }
      
      <IssueComment comment={issue} />

      { comments && comments.length > 0 && comments.map(comment => (
        <IssueComment key={comment.id} comment={comment} />
      )) }
    </>
  )
}

interface IssueDetailsProps {
  user: string,
  repo: string,
  issue: IssueData
}