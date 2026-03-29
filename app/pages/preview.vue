<template>
  <div class="preview-page">
    <h1 class="page-title">Component Preview</h1>
    
    <section class="component-section">
      <h2 class="section-subtitle">Avatar Component</h2>
      <div class="avatar-examples">
        <div class="example-item">
          <Avatar initial="JD" bgColor="primary" />
          <p>Primary</p>
        </div>
        <div class="example-item">
          <Avatar initial="AB" bgColor="secondary" />
          <p>Secondary</p>
        </div>
        <div class="example-item">
          <Avatar initial="XY" bgColor="accent" />
          <p>Accent</p>
        </div>
        <div class="example-item">
          <Avatar initial="MK" bgColor="neutral" />
          <p>Neutral</p>
        </div>
        <div class="example-item">
          <Avatar initial="?" />
          <p>Default (Primary)</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Nuxt automatically imports components from the components directory
</script>

<style scoped>
.preview-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.page-title {
  text-align: center;
  margin-bottom: 3rem;
}

.component-section {
  background-color: var(--component-bg-color);
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.section-subtitle {
  margin-top: 0;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.5rem;
}

.avatar-examples {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.example-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.example-item p {
  margin: 0;
  font-size: 0.8rem;
  color: var(--text-color-secondary);
}
</style>
