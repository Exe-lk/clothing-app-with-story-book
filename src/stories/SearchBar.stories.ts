import type { Meta, StoryObj } from '@storybook/react';
// import SearchBar from '@/components/Home/Header/Search/SearchBar';
import {SearchBar} from './SearchBar';


const meta = {
  title: 'SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' }
} 
}satisfies Meta<typeof SearchBar>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'enter search',
  },
};