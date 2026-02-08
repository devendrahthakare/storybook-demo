import type { Meta, StoryObj } from '@storybook/angular';

import { LabelComponent } from './label.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<LabelComponent> = {
  title: 'Example/Label',
  component: LabelComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color'
    },
    color: {
      control: 'color'
    },
    borderColor: {
      control: 'color'
    },
    label: {
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<LabelComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    backgroundColor: '#F1F1F1',
    color: '#000',
    borderColor: '#D5D5D5',
    label: 'Label'
  },
};

