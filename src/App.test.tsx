import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders header', () => {
    const { getByText } = render(<App />)
    const header = getByText(/github issues page/i)
    expect(header).toBeInTheDocument()
  })
})