import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TitleLink = styled(Link)`
  font-weight: bold;
  margin-bottom: 0.1em;
`

export default (repoPath: string): React.FunctionComponent<IssueLinkProps> => ({ number, title }) => {
  return (
    <TitleLink
      to={`/${repoPath}/issues/${number}`}
    >{ title }</TitleLink>
  )
}

export interface IssueLinkProps {
  number: number,
  title: string
}
