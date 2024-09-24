import Nav from '$lib/components/Nav.svelte';
import { setContext } from 'svelte'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Nav',
  component: Nav,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  // Reminder: I got this from these two places and kind of stitched it together:
  //   1. https://github.com/storybookjs/storybook/issues/26896
  //   2. https://tylergaw.com/blog/mocking-sveltekit-stores-in-storybook/
  // This was kind of to prove to myself that it can be done. Still, the "right" way to do this is to make my
  // components into presentational components and pass the values into them instead of mocking the context.
  decorators: [
    (Story) => {
      setContext('page-ctx', {
        url: new URL('http://localhost:8000'),
      });
      return Story;
    },
  ],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
  },
};
