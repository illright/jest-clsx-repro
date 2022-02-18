import { render } from '@testing-library/svelte';

import Index from './index.svelte';

test('renders', () => {
  render(Index);
  expect(1).toBe(1);
});
