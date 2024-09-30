import { it } from 'vitest'
import App from './App'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('renders the app component', () => {
  render(<App />)
  const headingElement = screen.getByText(/Software QA/i)
  expect(headingElement).toBeInTheDocument()
})

it('should render a button', () => {
  render(<App />)
  const btn = screen.getByRole('button')

  expect(btn).toBeInTheDocument()
})

it('should render an input', async() => {
  const user = userEvent.setup();
  render(<App />)
  const username = screen.getByTestId('username')

  expect(username).toBeInTheDocument()

  await user.type(username, 'test')

  expect(username).toHaveValue('test')
})

it('should have a title', () => {
  render(<App />)
  const title = screen.getByTestId('title')
  expect(title).toBeInTheDocument()
})
