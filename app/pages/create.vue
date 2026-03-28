<script setup lang="ts">
import { ref } from 'vue';
import { X } from 'lucide-vue-next'; // Only X is needed here

const foodOne = ref('');
const foodTwo = ref('');
const description = ref('');
const comboTags = ref<string[]>([]); // Changed to an array
const currentTagInput = ref(''); // For the current input field

const addTag = () => {
  const tagText = currentTagInput.value.trim();
  if (tagText && comboTags.value.length < 5 && !comboTags.value.includes(tagText)) {
    comboTags.value.push(tagText);
    currentTagInput.value = ''; // Clear input after adding
  }
};

const removeTag = (index: number) => {
  comboTags.value.splice(index, 1);
};

const handleTagsInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.value.includes(',')) {
    input.value = input.value.replace(',', ''); // Remove the comma
    addTag();
  }
};

const handleSubmit = () => {
  if (!foodOne.value || !foodTwo.value || !description.value) {
    alert('Please fill out all required fields.');
    return;
  }
  
  const comboData = {
    foodOne: foodOne.value,
    foodTwo: foodTwo.value,
    description: description.value,
    tags: comboTags.value, // Use the array of tags
  };

  console.log('New Combo Data:', comboData);

  // Clear form
  foodOne.value = '';
  foodTwo.value = '';
  description.value = '';
  comboTags.value = [];
  currentTagInput.value = '';
};
</script>

<template>
  <div class="create-page">
    <h1 class="page-title">Create a New Combo</h1>
    <form @submit.prevent="handleSubmit" class="create-form">
      <div class="form-group">
        <label for="foodOne">Food One</label>
        <input
          type="text"
          id="foodOne"
          v-model="foodOne"
          required
        />
      </div>
      <div class="form-group">
        <label for="foodTwo">Food Two</label>
        <input
          type="text"
          id="foodTwo"
          v-model="foodTwo"
          required
        />
      </div>
      <div class="form-group">
        <label for="tags">Tags (max 5, separate with comma)</label>
        <input
          type="text"
          id="tags"
          v-model="currentTagInput"
          @input="handleTagsInput"
          @keydown.enter.prevent="addTag"
          placeholder="e.g. sweet, savory, crunchy"
          :disabled="comboTags.length >= 5"
        />
        <div class="tag-pills-container">
          <span v-for="(tag, index) in comboTags" :key="tag" class="tag-pill">
            {{ tag }}
            <X :size="16" class="tag-pill-icon" @click="removeTag(index)" />
          </span>
        </div>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          id="description"
          v-model="description"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn submit-btn">Create Combo</button>
    </form>
  </div>
</template>

<style scoped>
.tag-pills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.tag-pill {
  display: inline-flex;
  align-items: center;
  background-color: white; /* Changed to white for pill */
  color: black; /* Changed to black for pill text */
  padding: 6px 12px;
  border-radius: 20px; /* Rounded corners for pill */
  font-size: 0.9rem;
  font-weight: 500;
  cursor: default;
  gap: 5px;
}

.tag-pill-icon {
  cursor: pointer;
  color: #666; /* Darker color for icon */
  margin-left: 5px;
  transition: color 0.2s ease;
}

.tag-pill-icon:hover {
  color: #333;
}
</style>
