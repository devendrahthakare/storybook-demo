import type { Meta, StoryObj } from '@storybook/angular';

import { ReplaceMeComponent } from './replaceMe.component';

const meta: Meta<ReplaceMeComponent> = {
  title: 'Example/ReplaceMe',
  component: ReplaceMeComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text'
    },
    color: {
      control: 'color'
    },
    bgColor: {
      control: 'color'
    },
    borderColor: {
      control: 'color'
    },
    onClick: {
      action: 'Replace button clicked'
    }
  }

};

export default meta;
type Story = StoryObj<ReplaceMeComponent>;

export const Default: Story = {
  args: {
    label: 'Replace me',
    color: '#000',
    bgColor: '#DDD1EB',
    borderColor: '#503A6A'
  }
};

export const Primary: Story = {
  args: {
    label: 'Replace me',
    color: '#000',
    bgColor: '#9169C0',
    borderColor: '#B59BD5'
  }
};
