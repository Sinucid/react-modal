import type { Meta, StoryObj } from '@storybook/react';

import Button from '../Button';
import { ButtonComponentSchemas } from '../model';

const meta = {
  title: 'Storybook/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    children: 'Title',
    schema: ButtonComponentSchemas.Primary,
  }
};