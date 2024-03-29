<style scoped>
	.brand-nav {
		font-family: 'poppins';
	}
</style>

<template>
	<nav class="bg-emerald-500 text-white p-4 sticky top-0 z-10 shadow-lg">
		<div class="container mx-auto flex justify-between items-center">
			<a href="#" class="text-3xl font-semibold brand-nav"><font-awesome-icon icon="fa-solid fa-notes-medical" /> Healthy Diet</a>
			<!-- Tampilan Desktop -->
			<ul class="hidden md:flex space-x-4">
				<li><a href="#" class="hover:text-gray-300">Beranda</a></li>
				<li><a href="#" class="hover:text-gray-300">Kontak</a></li>
			</ul>
			<!-- Akhir Tampilan Desktop -->
			
			<!-- Tombol Menu untuk Tampilan Seluler -->
			<div class="md:hidden">
				<button @click="toggleMenu" class="text-white hover:text-gray-300 focus:outline-none">
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>
			<!-- Akhir Tombol Menu untuk Tampilan Seluler -->
		</div>
		<!-- Menu Tampilan Seluler -->
		<div v-show="isMenuOpen" class="md:hidden py-2 px-2">
			<ul class="flex flex-col space-y-2 text-center mt-4">
				<li><a href="#" class="hover:text-gray-300">Beranda</a></li>
				<li><a href="#" class="hover:text-gray-300">Kontak</a></li>
			</ul>
		</div>
		<!-- Akhir Menu Tampilan Seluler -->
	</nav>
</template>

<script>
export default {
	data() {
		return {
			isMenuOpen: false
		};
	},
	methods: {
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen;
		}
	}
};
</script>
