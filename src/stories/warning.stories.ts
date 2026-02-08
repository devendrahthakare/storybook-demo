import type { Meta, StoryObj } from '@storybook/angular';

import { WarningComponent } from './warning.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<WarningComponent> = {
  title: 'Example/Warning',
  component: WarningComponent,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
    },
    fontSize: {
      control: 'text',
    }
  }
};

export default meta;
type Story = StoryObj<WarningComponent>;

export const Blue: Story = {
  args: {
    color: '#236FBC',
    fontSize: '1em'
  }
};

export const Green: Story = {
  args: {
    color: '#6EC58F',
    fontSize: '1em'
  }
};

export const Yellow: Story = {
  args: {
    color: '#FCB76E',
    fontSize: '1em'
  }
};

export const Orange: Story = {
  args: {
    color: '#E57C71',
    fontSize: '1em'
  }
};

export const Brown: Story = {
  args: {
    color: '#545454',
    fontSize: '1em'
  }
};


