<template>
	<div>
		<!-- Navigation -->
		<Navigation />

		<!-- Hero Section -->
		<Hero v-if="$device.isDesktop" @open-chat="openOrder"/>

		<HeroMobile v-if="$device.isMobile" @open-chat="openOrder" />

		<!-- Profile -->
		<Profile />
		<!-- Services Section -->
		<!-- <Services /> -->

		<!-- Article section -->
		<!-- <Articles /> -->

		<!-- Kontak section -->
		<Kontak />

		<div v-if="!hideChat" class="fixed bottom-24 right-4">
			<ChatButton @toggle-popup="togglePopup" />
			<ChatPopup :isPopupOpen="isPopupOpen" @close-popup="closePopup"/>
		</div>

		<!-- Footer -->
		<Footer />
	</div>
</template>


<script>
	import Navigation from '~/components/HealthyDiet/Navigation';
	import Hero from '~/components/HealthyDiet/Hero';
	import HeroMobile from '~/components/HealthyDiet/HeroMobile';
	import Slider from '~/components/HealthyDiet/Slider';
	import Profile from '~/components/HealthyDiet/Profile';
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
			HeroMobile,
			Slider,
			Profile,
			ChatButton,
			ChatPopup,
			Services,
			Articles,
			Kontak,
			Footer
		},
		data() {
			return {
				isPopupOpen: false,
				hideChat: false
			}
		},
		mounted(){
			$crisp.push(['do', 'chat:hide']);
		},
		methods: {
			togglePopup() {
				this.isPopupOpen = !this.isPopupOpen;
				this.openOrder();
			},
			closePopup() {
				console.log("clicked")
				this.isPopupOpen = false;
			},

			openOrder(){
				setTimeout(() => {
					this.hideChat = true;
				}, 1000)
				$crisp.push(['do', 'chat:show']);
				$crisp.push(['do', 'chat:open']);
				console.log("aktif now")
			}
		}
	}
</script>