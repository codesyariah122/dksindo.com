<template>
  <div class="mb-12">
    <div class="flex justify-center">
      <div>
        <h2 class="text-2xl font-bold mb-8">Our Products</h2>
      </div>
    </div>
    <CCarousel :items-to-show="carouselItemsToShow" :wrap-around="true">
      <CSlide v-for="slide in products" :key="slide">
        <div class="carousel__item">
          <div class="bg-white rounded-lg shadow-md p-4 h-100">
            <img :src="slide.image" :alt="slide.name" class="rounded-lg mb-4">
            <h3 class="text-lg font-semibold">{{ slide.name }}</h3>
            <p class="mt-2">{{ slide.price }}</p>
          </div>
        </div>
      </CSlide>

      <template #addons>
      	<CNavigation />
      	<CPagination />
      </template>
    </CCarousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { name: 'Beef Sausage', image: 'https://asset-2.tstatic.net/style/foto/bank/images/sosis-ayam_20170713_220956.jpg', price: '$9.99' },
        { name: 'Chicken Sausage', image: 'https://duaputraperkasa.com/wp-content/uploads/2015/12/Sosis-Kingfood.png', price: '$8.99' },
      ],
      carouselItemsToShow: 5, // Default jumlah item ditampilkan
    };
  },
  mounted() {
    this.updateCarouselItemsToShow(); // Panggil metode ini setelah komponen dimuat
    window.addEventListener('resize', this.updateCarouselItemsToShow); // Tambahkan event listener untuk perubahan ukuran layar
  },
  methods: {
  	prev() {
      this.$emit('prev'); // Emit event untuk navigasi ke slide sebelumnya
    },
    next() {
      this.$emit('next'); // Emit event untuk navigasi ke slide berikutnya
    },
    updateCarouselItemsToShow() {
      // Update jumlah item ditampilkan berdasarkan lebar layar
      if (window.innerWidth < 768) { // Ubah nilai sesuai kebutuhan Anda
        this.carouselItemsToShow = 1; // Misalnya, pada layar ponsel, hanya tampilkan 2 item
      } else {
        this.carouselItemsToShow = 5; // Pada layar yang lebih besar, tampilkan 5 item
      }
    },
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateCarouselItemsToShow); // Hapus event listener sebelum komponen di-unmount
  },
};
</script>




<style>
.carousel__item {
  background-color: rgb(134, 239, 172);
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>