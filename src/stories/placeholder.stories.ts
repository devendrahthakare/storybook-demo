import type { Meta, StoryObj } from '@storybook/angular';

import { PlaceholderComponent } from './placeholder.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<PlaceholderComponent> = {
  title: 'Example/Placeholder',
  component: PlaceholderComponent,
  tags: ['autodocs'],
  argTypes: {
    pholder: {
      control: 'text'
    },
    bgColor: {
      control: 'color'
    }
  }
};

export default meta;
type Story = StoryObj<PlaceholderComponent>;

export const Default: Story = {
  args: {
    pholder: 'Placeholder',
    bgColor: '#1E1E1E'
  },
};