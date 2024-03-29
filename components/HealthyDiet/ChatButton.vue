<template>
  <button @click="togglePopup" class="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-full shadow-md">
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
