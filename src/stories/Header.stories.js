import Header from '$lib/components/Header.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
  },
};
