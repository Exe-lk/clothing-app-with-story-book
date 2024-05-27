import { StoryObj, Meta } from "@storybook/react";
import { Button1 } from "./Button1";

const meta = {
  title: 'Arrival Button',
  component: Button1,

  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs'],

  argTypes: {
    backgroundC: { control: 'color' },
  },

} satisfies Meta<typeof Button1>

export default meta;
type Story = StoryObj<typeof meta>

export const Rounded: Story = {
  args: {
    label: 'click',
    rounded: 'yes'
  }
}

export const NoRounded: Story = {
  args: {
    label: 'click',
    rounded: 'no'
  }
}
