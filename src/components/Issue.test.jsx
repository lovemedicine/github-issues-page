import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import moment from 'moment'
import Issue from './Issue'
import { issues } from '../testData'
import { createIssueLink } from '../testHelpers'

describe('Issue', () => {
  let container, getByText, getByTestId
  let issue = issues[0]
  const repoPath = "someuser/somerepo"
  const IssueLink = createIssueLink(repoPath)

  beforeEach(() => {
    ({ container, getByText, getByTestId } = render(
      <Issue issue={issue} IssueLink={IssueLink} />
    ))
  })

  it('renders title link', () => {
    const title = getByText(issue.title)
    expect(title).toBeInTheDocument()
    expect(title).toHaveAttribute('href', `/${repoPath}/issues/${issue.number}`)
  })

  it('renders labels', () => {
    issue.labels.forEach(label => {
      const element = getByText(label.name)
      expect(element).toBeInTheDocument()
      expect(element).toHaveStyleRule('background-color', '#' + label.color)
    })
  })

  it('renders issue number', () => {
    expect(container).toHaveTextContent('#' + issue.number)
  })

  it('renders issue opening time', () => {
    expect(container).toHaveTextContent(moment(issue.created_at).fromNow())
  })

  it('renders issuer name', () => {
    const user = getByText(issue.user.login)
    expect(user).toBeInTheDocument()
    expect(user).toHaveAttribute('href', user.html_url)
  })

  it('renders comment count', () => {
    const comments = getByTestId('comments')
    expect(Number(comments.textContent.trim())).toBe(issue.comments)
  })
})