import { hot } from 'react-hot-loader/root'
import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Issues from './components/Issues'
import createIssueLink from './components/IssueLink'
import IssuesLink from './components/IssuesLink'

const OuterDiv = styled.div`
  text-align: left;
`

const PageHeader = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export function App() {
  return (
    <Router>
      <OuterDiv>
        <PageHeader>GitHub Issues Page</PageHeader>

        <Switch>
          <Route
            path={["/:user/:repo/issues/:number", "/:user/:repo"]}
            render={props => {
              const repoPath = `${props.match.params.user}/${props.match.params.repo}`
              return (
                <Issues
                  {...props.match.params}
                  IssueLink={createIssueLink(repoPath)}
                  IssuesLink={IssuesLink} />
              )
            }}
          />
        </Switch>
      </OuterDiv>
    </Router>
  )
}

export default hot(App)