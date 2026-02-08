import type { Meta, StoryObj } from '@storybook/angular';

import { ToggleComponent } from './toggle.component';

const meta: Meta<ToggleComponent> = {
  title: 'Example/Toggle',
  component: ToggleComponent,
  tags: ['autodocs'],
  argTypes: {
    checkedChange: { action: 'checkedChange' },
  }
};

export default meta;
type Story = StoryObj<ToggleComponent>;

export const Default: Story = {
  args: {
    checked: false,
  }
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};