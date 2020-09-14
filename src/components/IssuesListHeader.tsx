import React from 'react'
import styled from 'styled-components'
import { IssueData } from '../api'

const OuterDiv = styled.div`
  background-color: #f8f8f8;
  padding: 1em;
  font-weight: bold;
  border: 1px solid #eee;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export default function IssuesListHeader({ error, count, issues, loading }: IssuesListHeaderProps) {
  let message

  if (error) {
    message = 'There was an error retrieving issues for this repo.'
  } else if (loading) {
    message = 'Loading issues...'
  } else if (issues && issues.length === 0) {
    message = 'No open issues'
  } else if (issues && issues.length > 0 && count) {
    message = `Showing ${issues.length} issues out of ${count}`
  }

  return (
    <OuterDiv>
      { message }
    </OuterDiv>
  )
}

interface IssuesListHeaderProps {
  error: any,
  count: number | null,
  issues: IssueData[] | null,
  loading: boolean
}