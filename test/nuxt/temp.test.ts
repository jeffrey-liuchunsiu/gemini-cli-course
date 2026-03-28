import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import Index from '../../app/pages/index.vue';
import Create from '../../app/pages/create.vue';

describe('Temporary Tests', () => {
  it('should mount Index page', async () => {
    const wrapper = await mountSuspended(Index);
    expect(wrapper.exists()).toBe(true);
  });

  it('should mount Create page', async () => {
    const wrapper = await mountSuspended(Create);
    expect(wrapper.exists()).toBe(true);
  });
});