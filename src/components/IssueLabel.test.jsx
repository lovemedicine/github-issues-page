import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import IssueLabel, { isLightColor } from './IssueLabel'

describe('isLightColor', () => {
  it('returns true for light color', () => {
    expect(isLightColor('e7e7e7')).toBe(true)
    expect(isLightColor('fbca04')).toBe(true)
    expect(isLightColor('d4c5f9')).toBe(true)
  })

  it('returns false for dark colors', () => {
    expect(isLightColor('0366d6')).toBe(false)
    expect(isLightColor('b60205')).toBe(false)
    expect(isLightColor('9149d1')).toBe(false)
  })
})

describe('IssueLabel', () => {
  it('displays black text when label color is light', () => {
    const label = {
      name: 'bug',
      description: 'to fix',
      color: 'fbca04'
    }
    const { getByText } = render(<IssueLabel label={label} />)
    const element = getByText(label.name)
    expect(element).toHaveStyleRule('color', 'black')
  })

  it('displays white text when label color is light', () => {
    const label = {
      name: 'feature',
      description: 'to build',
      color: 'b60205'
    }
    const { getByText } = render(<IssueLabel label={label} />)
    const element = getByText(label.name)
    expect(element).toHaveStyleRule('color', 'white')
  })
})
