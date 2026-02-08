import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color'
    }, color: {
      control: 'color'
    }, label: {
      control: 'text'
    }, bColor: {
      control: 'color'
    }
  }
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    backgroundColor: 'transparent',
    color: 'black',
    label: 'Sample button',
    bColor: 'black'
  }
};

export const Primary: Story = {
  args: {
    backgroundColor: 'blue',
    color: 'white',
    label: 'Sample button',
    bColor: 'white'
  }
};


