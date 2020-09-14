import React from 'react'
import { render } from '@testing-library/react'
import IssuesListHeader from './IssuesListHeader'

describe('IssuesListHeader', () => {
  it('renders error', async () => {
    const { getByText } = render(<IssuesListHeader error="error" />)
    const message = getByText(/error/i)
    expect(message).toBeInTheDocument()
  })

  it('renders loading message', async () => {
    const { getByText } = render(<IssuesListHeader loading={true} />)
    const message = getByText(/loading/i)
    expect(message).toBeInTheDocument()
  })

  it('renders no open issues', async () => {
    const { getByText } = render(<IssuesListHeader issues={[]} />)
    const message = getByText(/no open issues/i)
    expect(message).toBeInTheDocument()
  })

  it('renders issue count', async () => {
    const { getByText } = render(<IssuesListHeader issues={['issue1', 'isssue2']} count={10} />)
    const message = getByText(/Showing 2 issues out of 10/i)
    expect(message).toBeInTheDocument()
  })
})