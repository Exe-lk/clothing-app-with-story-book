import { StoryObj, Meta } from "@storybook/react";
import ShopByCategories from './ShopByCategories';

const meta = {

  title: 'ShopByCategories',
  component: ShopByCategories,

  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs'],

} satisfies Meta<typeof ShopByCategories>

export default meta;
type Story = StoryObj<typeof meta>

export const Slide: Story = {
  args: {
    view: "slide"
  }
}