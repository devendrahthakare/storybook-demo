import type { Meta, StoryObj } from '@storybook/angular';

import { TitleComponent } from './title.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TitleComponent> = {
  title: 'Example/Title',
  component: TitleComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text'
    },
    fontSize: {
      control: 'text'
    },
    fontWeight: {
      control: 'text'
    },
    color: {
      control: 'color'
    }
  }
};

export default meta;
type Story = StoryObj<TitleComponent>;

export const Default: Story = {
  args: {
    title: 'Title',
    fontSize: '1em',
    fontWeight: 'bold',
    color: '#000'
  }
};
export const NormalTitle: Story = {
  args: {
    title: 'Title',
    fontSize: '0.7em',
    fontWeight: 'normal',
    color: '#000'
  }
};