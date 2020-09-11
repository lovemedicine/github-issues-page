import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { VscComment } from 'react-icons/vsc'
import IssueLabel, { IssueLabelState } from './IssueLabel'

export interface IssueState {
  id: string,
  title: string,
  number: number,
  user: {
    login: string,
    html_url: string
  },
  labels: IssueLabelState[],
  comments: number
  html_url: string,
  created_at: string
}

const OuterDiv = styled.div`
  padding: 1em;
  border-bottom: 1px solid #eee;
  
  &:hover {
    background-color: #f8f8f8;
  }
`

const TitleLink = styled.a`
  font-weight: bold;
  margin-bottom: 0.1em;
`

const InfoDiv = styled.div`
  font-size: 0.8em;
  color: #444;
`

const UserLink = styled.a`
  color: #444;

  &:hover {
    color: blue;
  }
`

const CommentsDiv = styled.div`
  float: right;
  font-size: 0.8em;
  font-weight: bold;
  color: #666;

  svg {
    height: 1.2em;
    width: 1.2em;
    position: relative;
    top: 0.3em
  }
`

export default function Issue({ issue }: IssueProps) {
  const { title, number, user, labels, comments, html_url, created_at } = issue
  const timeAgo = moment(created_at).fromNow()

  return (
    <OuterDiv role="listitem">
      { comments > 0 && 
        <CommentsDiv data-testid="comments">
          <VscComment /> { comments }
        </CommentsDiv>
      }

      <TitleLink 
        href={html_url} 
        target="_blank" 
        rel="noopener noreferrer"
      >{ title }</TitleLink>

      { labels.map(label => (
        <IssueLabel key={label.name} label={label} />
      )) }

      <InfoDiv>
        #{ number } opened { timeAgo } by <UserLink href={user.html_url}>{ user.login }</UserLink>
      </InfoDiv>
    </OuterDiv>
  )
}

interface IssueProps {
  issue: IssueState
}