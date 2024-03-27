<template>
	<div>
		<!-- Navigation -->
		<Navigation />

		<!-- Hero Section -->
		<Hero />

		<!-- Services Section -->
		<!-- <Services /> -->

		<!-- Article section -->
		<!-- <Articles /> -->

		<!-- Kontak section -->
		<Kontak />

		<!-- <div class="fixed bottom-24 right-4">
			<ChatButton @toggle-popup="togglePopup" />
			<ChatPopup :isPopupOpen="isPopupOpen" @close-popup="closePopup"/>
		</div> -->

		<!-- Footer -->
		<Footer />
	</div>
</template>


<script>
	import Navigation from '~/components/HealthyDiet/Navigation';
	import Hero from '~/components/HealthyDiet/Hero';
	import ChatButton from '~/components/HealthyDiet/ChatButton';
	import ChatPopup from '~/components/HealthyDiet/ChatPopup';
	import Services from '~/components/HealthyDiet/Services';
	import Articles from '~/components/HealthyDiet/Articles';
	import Kontak from '~/components/HealthyDiet/Kontak';
	import Footer from '~/components/HealthyDiet/Footer';

	export default{
		components: {
			Navigation,
			Hero,
			ChatButton,
			ChatPopup,
			Services,
			Articles,
			Kontak,
			Footer
		},
		data() {
			return {
				isPopupOpen: false
			}
		},
		mounted(){
			$crisp.push(['do', 'chat:hide']);
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