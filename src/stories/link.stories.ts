import type { Meta, StoryObj } from '@storybook/angular';

import { LinkComponent } from './link.component';

const meta: Meta<LinkComponent> = {
  title: 'Example/Link',
  component: LinkComponent,
  tags: ['autodocs'],
  argTypes: {
    hrefURL: {
      control: 'text',
    },
    linkText: {
      control: 'text',
    }
  }
};

export default meta;
type Story = StoryObj<LinkComponent>;

export const Default: Story = {
  args: {
    hrefURL: '#',
    linkText: 'Link',
  },
};

export const OtherLink: Story = {
  args: {
    hrefURL: 'https://storybook.js.org/docs/get-started/frameworks/angular',
    linkText: 'Angular Storybook',
  },
};
