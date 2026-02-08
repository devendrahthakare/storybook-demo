import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Example/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    }
  }
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Blue: Story = {
  args: {
    backgroundColor: '#236FBC'
  },
};

export const Green: Story = {
  args: {
    backgroundColor: '#6EC58F'
  },
};

export const Yellow: Story = {
  args: {
    backgroundColor: '#FCB76E'
  },
};

export const Orange: Story = {
  args: {
    backgroundColor: '#E57C71'
  },
};

export const Brown: Story = {
  args: {
    backgroundColor: '#545454'
  },
};


