<template>
	<div class="flex justify-center py-12">
		<div>
			<h1>Slider Content</h1>
		</div>
		<div>
			<Swiper
			:modules="[SwiperAutoplay, SwiperEffectCreative]"
			:slides-per-view="5"
			:loop="true"
			:effect="'creative'"
			:autoplay="{
				delay: 8000,
				disableOnInteraction: true,
			}"
			:creative-effect="{
				prev: {
					shadow: false,
					translate: ['-20%', 0, -1],
				},
				next: {
					translate: ['100%', 0, 0],
				},
			}"
			>
			<SwiperSlide v-for="slide in 10" :key="slide">
				<h1 class="text-rose-800">Slider - {{ slide }}</h1>
			</SwiperSlide>
		</Swiper>
	</div>
</div>
</template>
