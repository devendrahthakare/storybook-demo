import type { Meta, StoryObj } from '@storybook/angular';

import { ValueComponent } from './value.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ValueComponent> = {
  title: 'Example/Value',
  component: ValueComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ValueComponent>;

export const Default: Story = {
  args: {
    value: 'Value'
  }
};