import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { VscComment } from 'react-icons/vsc'
import IssueLabel from './IssueLabel'
import { IssueData } from '../api'
import { IssueLinkProps } from './IssueLink'

const OuterDiv = styled.div`
  padding: 1em;
  border-bottom: 1px solid #eee;
  
  &:hover {
    background-color: #f8f8f8;
  }
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

export default function Issue({ issue, IssueLink }: IssueProps) {
  const { title, number, user, labels, comments, created_at } = issue
  const timeAgo = moment(created_at).fromNow()

  return (
    <OuterDiv role="listitem">
      { comments > 0 && 
        <CommentsDiv data-testid="comments">
          <VscComment /> { comments }
        </CommentsDiv>
      }

      <IssueLink
        number={number}
        title={title} />

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
  issue: IssueData,
  IssueLink: React.FunctionComponent<IssueLinkProps>
}