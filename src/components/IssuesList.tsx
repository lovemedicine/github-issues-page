import React from 'react'
import styled from 'styled-components'
import Issue from './Issue'
import { IssueData } from '../api'
import { IssueLinkProps } from './IssueLink'

const IssueListDiv = styled.div`
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
`

export default function IssuesList({ issues, IssueLink }: IssuesListProps) {
  return (
    <IssueListDiv role="list">
      { issues.map(issue => (
        <Issue 
          key={issue.id}
          issue={issue}
          IssueLink={IssueLink} />
      )) }
    </IssueListDiv>
  )  
}

interface IssuesListProps {
  issues: IssueData[],
  IssueLink: React.FunctionComponent<IssueLinkProps>
}