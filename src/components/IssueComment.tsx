import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import marked from 'marked'
import { CommentData } from '../api'

const OuterDiv = styled.div`
  margin-top: 2em;
  border: 1px solid #ddd;
  border-radius: 5px;
  max-width: 700px;
`

const Header = styled.div`
  padding: 1em;
  color: #666;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
`

const UserLink = styled.a`
  color: black;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: blue;
  }
`

const Body = styled.div`
  padding: 1em;

  pre {
    display: block;
    background-color: #eee;    
    padding: 0.5em;
    overflow-x: scroll;
  }

  code {
    display: inline-block;
    padding: 0.3em;
    font-size: 0.8em;
    background-color: #eee;
  }
`

export default function IssueComment({ comment }: IssueCommentProps) {
  const { body, user, created_at } = comment
  const timeAgo = moment(created_at).fromNow()
  const bodyHtml = marked(body)

  return (
    <OuterDiv>
      <Header>
        <UserLink href={user.html_url}>{ user.login }</UserLink> commented { timeAgo }
      </Header>
      <Body dangerouslySetInnerHTML={{ __html: bodyHtml }}>
      </Body>
    </OuterDiv>
  )
}

interface IssueCommentProps {
  comment: CommentData
}