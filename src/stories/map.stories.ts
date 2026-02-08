import type { Meta, StoryObj } from '@storybook/angular';

import { MapComponent } from './map.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<MapComponent> = {
  title: 'Example/Map',
  component: MapComponent,
  tags: ['autodocs'],
  argTypes: {
    hrefURL: {
      control: 'text'
    },
    size: {
      control: { type: 'number', min: 16, max: 32 }
    },
    color: {
      control: 'color'
    }
  }
};

export default meta;
type Story = StoryObj<MapComponent>;

export const Default: Story = {
  args: {
    hrefURL: '#',
    size: 24,
    color: '#000'
  }
};

export const White: Story = {
  args: {
    hrefURL: '#',
    size: 32,
    color: '#fff'
  }
};
