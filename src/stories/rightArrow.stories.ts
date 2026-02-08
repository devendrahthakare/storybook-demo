import type { Meta, StoryObj } from '@storybook/angular';

import { RightArrowComponent } from './rightArrow.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<RightArrowComponent> = {
  title: 'Example/RightArrow',
  component: RightArrowComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'text'
    },
    color: {
      control: 'color'
    }
  }
};

export default meta;
type Story = StoryObj<RightArrowComponent>;

export const Default: Story = {
  args: {
    size: '1em',
    color: 'black'
  }
};

export const White: Story = {
  args: {
    size: '1em',
    color: 'white'
  }
};
