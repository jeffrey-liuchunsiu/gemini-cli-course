<template>
  <div
    class="avatar"
    :style="avatarStyles"
  >
    {{ initial }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type ColorOption = 'primary' | 'secondary' | 'accent' | 'neutral';

const props = defineProps<{
  initial: string;
  bgColor?: ColorOption;
}>();

const avatarStyles = computed(() => {
  let backgroundColor: string;
  
  switch (props.bgColor) {
    case 'primary':
      backgroundColor = 'var(--primary-accent-color)';
      break;
    case 'secondary':
      backgroundColor = 'var(--secondary-accent-color)';
      break;
    case 'accent':
      backgroundColor = '#ffbe0b';
      break;
    case 'neutral':
      backgroundColor = 'var(--background-light)';
      break;
    default:
      backgroundColor = 'var(--primary-accent-color)';
  }

  return {
    backgroundColor
  };
});
</script>

<style scoped>
.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 500;
  font-size: 1.25rem;
  text-transform: uppercase;
  user-select: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
