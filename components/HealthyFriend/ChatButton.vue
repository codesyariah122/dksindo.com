<template>
  <button @click="togglePopup" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md">
    <font-awesome-icon icon="fas fa-comment" />
    Live Chat
  </button>
</template>

<script>
export default {
  methods: {
    togglePopup() {
      this.$emit('toggle-popup');
    }
  }
}
</script>
