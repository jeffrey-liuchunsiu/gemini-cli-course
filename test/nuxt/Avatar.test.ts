import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import Avatar from '../../app/components/Avatar.vue';

describe('Avatar', () => {
  it('should render the initial', async () => {
    const wrapper = await mountSuspended(Avatar, {
      props: {
        initial: 'G'
      }
    });
    expect(wrapper.text()).toBe('G');
  });

  it('should have a circular shape', async () => {
    const wrapper = await mountSuspended(Avatar, {
      props: {
        initial: 'G'
      }
    });
    // We check the class as a proxy for the style in unit tests
    expect(wrapper.classes()).toContain('avatar');
  });

  it('should accept bgColor prop', async () => {
     const wrapper = await mountSuspended(Avatar, {
      props: {
        initial: 'G',
        bgColor: 'secondary'
      }
    });
    expect(wrapper.props().bgColor).toBe('secondary');
  });
});
