<template>
  <div v-if="isPopupOpen" class="fixed bottom-16 right-4 bg-white border border-gray-300 shadow-lg rounded-lg p-4">
    <!-- Tombol Close -->
    <button @click="closePopup" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
      <font-awesome-icon icon="fa-solid fa-xmark" />
    </button>
    <!-- Akhir Tombol Close -->
    
    <!-- Konten Popup Chat -->
    <h2 class="text-lg font-semibold mb-2">Live Chat</h2>
    <div class="overflow-y-auto max-h-40">
      <!-- Daftar Chat -->
      <div v-for="(chat, index) in chats" :key="index" class="mb-2">
        <div v-if="chat.type === 'user'" class="text-right">
          <span class="bg-blue-500 text-white px-2 py-1 rounded-lg inline-block">{{ chat.message }}</span>
        </div>
        <div v-else class="text-left">
          <span class="bg-gray-200 px-2 py-1 rounded-lg inline-block">{{ chat.message }}</span>
        </div>
      </div>
      <!-- Akhir Daftar Chat -->
    </div>
    <!-- Input Message -->
    <div class="mt-2">
      <input v-model="newMessage" @keydown.enter="sendMessage" type="text" placeholder="Ketik pesan..." class="w-full border border-gray-300 rounded-lg px-2 py-1">
    </div>
    <!-- Akhir Input Message -->
  </div>
</template>

<script>
export default {
  props: {
    isPopupOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      chats: [
        { type: 'user', message: 'Halo! Saya tertarik dengan produk Anda.' },
        { type: 'agent', message: 'Halo! Ada yang bisa saya bantu?' }
      ],
      newMessage: ''
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.chats.push({ type: 'user', message: this.newMessage });
        this.newMessage = '';
        // Logika untuk menanggapi pesan dapat ditambahkan di sini
      }
    },
    closePopup() {
      this.$emit('close-popup');
    }
  }
};
</script>
