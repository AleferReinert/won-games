import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import FormProfileComponent from './FormProfile'

const meta: Meta<typeof FormProfileComponent> = {
  title: 'Components/FormProfile',
  component: FormProfileComponent
}

export default meta

type Story = StoryObj<typeof FormProfileComponent>

export const FormProfile: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /my profile/i })
    const inputName = canvas.getByRole('textbox', { name: /name/i })
    const inputEmail = canvas.getByRole('textbox', { name: /e-mail/i })
    const inputPassword = canvas.getByPlaceholderText(/type your password/i)
    const inputNewPassword = canvas.getByPlaceholderText(/new password/i)
    const button = canvas.getByRole('button', { name: /save/i })

    expect(title).toBeInTheDocument()
    expect(inputName).toBeInTheDocument()
    expect(inputEmail).toBeDisabled()
    expect(inputPassword).toBeInTheDocument()
    expect(inputNewPassword).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  }
}
