import React from 'react'
import { render } from '@testing-library/react'
import IssuesHeader from './IssuesHeader'

describe('IssuesHeader', () => {
  it('renders error', async () => {
    const { getByText } = render(<IssuesHeader error="error" />)
    const message = getByText(/error/i)
    expect(message).toBeInTheDocument()
  })

  it('renders loading message', async () => {
    const { getByText } = render(<IssuesHeader loading={true} />)
    const message = getByText(/loading/i)
    expect(message).toBeInTheDocument()
  })

  it('renders no open issues', async () => {
    const { getByText } = render(<IssuesHeader issues={[]} />)
    const message = getByText(/no open issues/i)
    expect(message).toBeInTheDocument()
  })

  it('renders issue count', async () => {
    const { getByText } = render(<IssuesHeader issues={['issue1', 'isssue2']} />)
    const message = getByText(/2 open/i)
    expect(message).toBeInTheDocument()
  })
})