import type { Meta, StoryObj } from '@storybook/angular';

import { BriefcaseIconComponent } from './briefcaseIcon.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<BriefcaseIconComponent> = {
  title: 'Example/BriefcaseIcon',
  component: BriefcaseIconComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<BriefcaseIconComponent>;

export const Default: Story = {
  args: {
    value: 'Value'
  }
};