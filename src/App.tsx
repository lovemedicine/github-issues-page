import { hot } from 'react-hot-loader/root'
import React from 'react'
import styled from 'styled-components'
import Issues from './components/Issues'

const OuterDiv = styled.div`
  text-align: left;
`

const Header = styled.header`
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
    <OuterDiv>
      <Header>GitHub Issues Page</Header>
      <Issues repo="facebook/react" />
    </OuterDiv>
  )
}

export default hot(App)