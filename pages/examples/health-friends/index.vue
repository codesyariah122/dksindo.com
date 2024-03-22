<style>
	.hero {
		position: relative;
		height: 100vh;
		background-color: #f7fafc;
	}

	.hero-image {
		background-image: url('https://img.freepik.com/premium-photo/doctor-online-medical-communication-with-patient-tablet-healthcare-network-consultation_34200-498.jpg');
		background-size: cover;
		background-position: center;
		height: 100%;
		width: 100%;
	}

	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.hero-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		z-index: 1;
		color: #ffffff;
	}

</style>

<template>
	<div>
		<!-- Navigation -->
		<Navigation />

		<!-- Hero Section -->
		<section class="hero">
			<div class="hero-image">
				<!-- Gambar latar belakang (background image) -->
			</div>
			<div class="hero-overlay"></div>
			<div class="hero-content">
				<!-- Konten hero Anda -->
				<h1 class="text-4xl font-semibold mb-4 text-white">Selamat Datang di Healthy Friend</h1>
				<p class="text-xl text-white">Temukan informasi kesehatan terpercaya dan konsultasikan masalah kesehatan Anda dengan dokter profesional.</p>
				<a href="#" class="mt-8 inline-block px-6 py-3 bg-white text-blue-500 font-semibold rounded-full hover:bg-blue-200">Mulai Konsultasi</a>
			</div>
		</section>

		<!-- Services Section -->
		<Services />

		<!-- Article section -->
		<Articles />

		<!-- Kontak section -->
		<Kontak />

		<div class="fixed bottom-4 right-4">
			<ChatButton @toggle-popup="togglePopup" />
			<ChatPopup :isPopupOpen="isPopupOpen" @close-popup="closePopup"/>
		</div>

		<!-- Footer -->
		<footer class="bg-gray-900 text-white py-8">
			<div class="container mx-auto text-center">
				<p>&copy; 2024 Konsultasi Dokter. All rights reserved.</p>
			</div>
		</footer>
	</div>
</template>


<script>
	import ChatButton from '~/components/HealthyFriend/ChatButton.vue';
	import ChatPopup from '~/components/HealthyFriend/ChatPopup.vue';
	import Navigation from '~/components/HealthyFriend/Navigation.vue';
	import Services from '~/components/HealthyFriend/Services.vue';
	import Articles from '~/components/HealthyFriend/Articles.vue';
	import Kontak from '~/components/HealthyFriend/Kontak.vue';

	export default{
		components: {
			Navigation,
			ChatButton,
			ChatPopup,
			Services,
			Articles,
			Kontak
		},
		data() {
			return {
				isPopupOpen: false
			}
		},
		methods: {
			togglePopup() {
				this.isPopupOpen = !this.isPopupOpen;
			},
			closePopup() {
				console.log("clicked")
				this.isPopupOpen = false;
			}
		}
	}
</script>