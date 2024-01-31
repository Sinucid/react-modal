import type { Meta, StoryObj } from '@storybook/react';

import {Modal} from '..';

const header = 'Header';
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequuntur delectus enim expedita ipsa illum? Tempora facilis vitae dolores aut molestiae voluptas numquam nobis repellendus accusantium laudantium, quisquam amet dolor?';

const meta = {
  title: 'Storybook/Modal',
  component: Modal,
  parameters: {
    controls: { include: ['open', 'header', 'preventCloseByBackdrop'] },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    open: true,
    header,
    children: content,
    preventCloseByBackdrop: false,
  }
};

export const LongContent: Story = {
  args: {
    open: true,
    header,
    children: Array(10).fill(content).join(' '),
  }
};

export const WithoutHeaderAndFooter: Story = {
  args: {
    open: true,
    header: '',
    footer: false,
    children: Array(2).fill(content).join(' '),
  }
};