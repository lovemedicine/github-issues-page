import React from 'react'
import { render, within } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Issues from './Issues'
import api from '../api'
import { issues } from '../testData'

jest.mock('../api')

describe('Issues', () => {
  const repo = "githubber/somerepo"
  let getByText, findAllByRole
  
  beforeEach(async () => {
    api.fetchRepoIssues.mockResolvedValue(issues)
    await act (async () => {
      ({ getByText, findAllByRole } = render(<Issues repo={repo} />))
    })
  })

  it('renders repo link', () => {
    const header = within(getByText(/issues for/i))
    const link = header.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveTextContent('githubber/somerepo')
    expect(link).toHaveAttribute('href', expect.stringContaining('githubber/somerepo'))
  })

  it('renders issues', async () => {
    const issues = await findAllByRole('listitem')
    expect(issues.length).toStrictEqual(2)
  })
})