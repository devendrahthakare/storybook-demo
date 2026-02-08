import type { Meta, StoryObj } from '@storybook/angular';

import { DropdownComponent } from './dropdown.component';

const meta: Meta<DropdownComponent> = {
  title: 'Example/Dropdown',
  component: DropdownComponent,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
    },
    label: {
      control: 'text'
    },
    options: {
      control: 'object'
    }
  }
};

export default meta;
type Story = StoryObj<DropdownComponent>;

export const Default: Story = {
  args: {
    color: '#545454',
    label: 'Dropdown',
    options: ['Option 1', 'Option 2', 'Option 3']
  }
};


export const CustomOptions: Story = {
  args: {
    color: '#545454',
    label: 'Select Storybook Language',
    options: ['Angular', 'Vue', 'React']
  }
};


