import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Issues from './Issues'
import api from '../api'
import { issues } from '../testData'
import { createIssueLink, IssuesLink } from '../testHelpers'

jest.mock('../api')

describe('Issues', () => {
  const user = 'githubber'
  const repo = 'somerepo'
  const repoPath = `${user}/${repo}`

  let getByText, findAllByRole

  beforeEach(async () => {
    api.fetchRepo.mockResolvedValue({ open_issues_count: 100 })
    api.fetchRepoIssues.mockResolvedValue(issues)
    api.fetchIssueComments.mockResolvedValue([])
  })

  describe('viewing issues list', () => {
    beforeEach(async () => {
      await act (async () => {
        ({ getByText, findAllByRole } = render(
          <Issues
            user={user}
            repo={repo}
            IssueLink={createIssueLink(repoPath)}
            IssuesLink={IssuesLink} />
        ))
      })
    })
  
    it('renders repo link', () => {
      const link = getByText(repoPath)
      expect(link).toHaveAttribute('href', expect.stringContaining(repoPath))
    })  

    it('renders issues', async () => {
      const issues = await findAllByRole('listitem')
      expect(issues.length).toStrictEqual(2)
    })  
  })

  describe('viewing single issue', () => {
    beforeEach(async () => {
      await act (async () => {
        ({ getByText, findAllByRole } = render(
          <Issues
            user={user}
            repo={repo}
            number={issues[0].number}
            IssueLink={createIssueLink(repoPath)}
            IssuesLink={IssuesLink} />
        ))
      })
    })
    
    it('renders single issue', () => {
      const header = getByText(issues[0].title)
      expect(header).toBeInTheDocument()
    })
  })
})