import type { Meta, StoryObj } from "@storybook/react"

import RadioInput from "."

const meta: Meta<typeof RadioInput> = {
  title: "components/RadioInput",
  component: RadioInput,
}

export default meta
type Story = StoryObj<typeof RadioInput>

export const Default: Story = {
  render: () => (
    <>
      <RadioInput />
      <RadioInput isChecked />
    </>
  ),
}
