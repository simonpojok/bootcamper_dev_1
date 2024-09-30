import App from './App'
import { render, screen } from '@testing-library/react'

test('renders the app component', () => {
  render(<App />)
  const headingElement = screen.getByText(/hello world/i)
  expect(headingElement).toBeInTheDocument()
})
