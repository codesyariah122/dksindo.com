<template>
	<section id="portfolio" class="bg-slate-200 py-24 px-6">
		<div class="max-w-4xl mx-auto">
			<!-- Portfolio content -->
			<h2 class="text-3xl font-semibold mb-8 text-center">Sample</h2>
			<!-- Portfolio items -->
			<div class="grid grid-cols-1 md:place-content-center md:grid-cols-3 md:gap-60">
				<div v-for="sample in samples" :key="sample.id" class="place-self-center md:-mb-60 mb-10">
					<div class="max-w-full w-[300px] md:max-w-lg md:w-[350px] bg-white border border-gray-200 rounded-lg shadow">
						<span>
							<CCarousel :items-to-show="carouselItemsToShow" :wrap-around="true">
								<CSlide v-for="slide in sample.items" :key="slide">
									<div class="bg-white rounded-lg shadow-md">
										<img :src="`/images/samples/${slide.src}`" :alt="slide.src" class="w-full h-48 object-cover">
										
									</div>
								</CSlide>

								<template #addons>
									<CNavigation />
									<CPagination />
								</template>
							</CCarousel>
						</span>
						<div class="p-5">
							<a href="#">
								<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									{{sample.title}}
								</h5>
							</a>
							<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{{sample.desc}}
							</p>
							<a :href="sample.link" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
								View Sample
								<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 md:place-self-center place-items-center md:py-72 py-6">
				<div class="col-span-full md:col-span-1">
					<NuxtLink to="/samples" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md flex items-center">
						View All &nbsp; <font-awesome-icon icon="fa-solid fa-circle-arrow-right fa-2xl" />
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				imagePath: '',
				carouselItemsToShow: 1,
				samples: [
				{
					id: 1,
					title: "Mr & Mrs - Weeding Website",
					img: "weeding-website.png",
					desc: "Menyentuh hati, mempesona, dan mengabadikan momen indah, landing page kami adalah pintu gerbang ke kisah cinta Anda yang tak terlupakan. Dengan desain yang elegan dan penuh kasih, kami mengundang Anda untuk merayakan cinta sejati Anda dalam sebuah perjalanan visual yang memukau.",
					link: "/examples/mrmrs-weeding",
					items: [
						{id: 1, src: '/mrmrs-weeding/mrmrs-weeding1.png'},
						{id: 2, src: '/mrmrs-weeding/mrmrs-weeding2.png'},
						{id: 3, src: '/mrmrs-weeding/mrmrs-weeding3.png'},
						{id: 4, src: '/mrmrs-weeding/mrmrs-weeding4.png'},
						{id: 5, src: '/mrmrs-weeding/mrmrs-weeding5.png'}
						]
				},
				{
					id: 2,
					title: "Rumah Property - Property Website",
					img: "weeding-website.png",
					desc: "Menyentuh hati, mempesona, dan mengabadikan momen indah, landing page kami adalah pintu gerbang ke kisah cinta Anda yang tak terlupakan. Dengan desain yang elegan dan penuh kasih, kami mengundang Anda untuk merayakan cinta sejati Anda dalam sebuah perjalanan visual yang memukau.",
					link: "/examples/property-website",
					items: [
						{id: 1, src: '/property-website/property-website1.png'},
						{id: 2, src: '/property-website/property-website2.png'},
						{id: 3, src: '/property-website/property-website3.png'},
						{id: 4, src: '/property-website/property-website4.png'},
						{id: 5, src: '/property-website/property-website5.png'}
						]
				},
				{
					id: 3,
					title: "Dealfood - F&B Website",
					img: "weeding-website.png",
					desc: "Dengan memiliki situs web catering makanan yang impresif, bisnis dapat menarik lebih banyak pelanggan, meningkatkan penjualan, dan membangun presensi online yang kuat. Desain bersih dan modern: Desain visual menarik dengan huruf yang mudah dibaca dan rute situs yang sederhana.",
					link: "/examples/dealfood",
					items: [
						{id: 1, src: '/dealfood/dealfood1.png'},
						{id: 2, src: '/dealfood/dealfood2.png'},
						{id: 3, src: '/dealfood/dealfood3.png'},
						{id: 4, src: '/dealfood/dealfood4.png'},
						{id: 5, src: '/dealfood/dealfood5.png'},
						{id: 6, src: '/dealfood/dealfood6.png'}
						]
				},
				{
					id: 4,
					title: "Foodbar - F&B Website",
					img: "weeding-website.png",
					desc: "Website Foodbar ini di tujukan untuk rumah terbaik untuk semua jenis roti dan kue! Kami menyediakan berbagai macam jenis roti dengan rasa dan tekstur terbaik, serta kue-kue tradisional dan modern yang pasti akan membuat hari Anda lebih nikmat. Kualitas dan freshness untuk produk akan selalu dipastikan dengan proses pembuatan yang hati-hati dan bahan-bahan berkualitas tinggi.",
					link: "/examples/foodbar",
					items: [
						{id: 1, src: '/foodbar/foodbar1.png'},
						{id: 2, src: '/foodbar/foodbar2.png'},
						{id: 3, src: '/foodbar/foodbar3.png'},
						{id: 4, src: '/foodbar/foodbar4.png'},
						{id: 5, src: '/foodbar/foodbar5.png'},
						{id: 6, src: '/foodbar/foodbar6.png'},
						{id: 7, src: '/foodbar/foodbar7.png'},
						{id: 8, src: '/foodbar/foodbar8.png'}
						]
				},
				{
					id: 5,
					title: "Baker - F&B Website",
					img: "weeding-website.png",
					desc: "Website Baker ini di tujukan untuk rumah terbaik untuk semua jenis roti dan kue! Kami menyediakan berbagai macam jenis roti dengan rasa dan tekstur terbaik, serta kue-kue tradisional dan modern yang pasti akan membuat hari Anda lebih nikmat. Kualitas dan freshness untuk produk akan selalu dipastikan dengan proses pembuatan yang hati-hati dan bahan-bahan berkualitas tinggi.",
					link: "/examples/foodbar",
					items: [
						{id: 1, src: '/baker/baker1.png'},
						{id: 2, src: '/baker/baker2.png'},
						{id: 3, src: '/baker/baker3.png'},
						{id: 4, src: '/baker/baker4.png'},
						{id: 5, src: '/baker/baker5.png'},
						{id: 6, src: '/baker/baker6.png'},
						{id: 7, src: '/baker/baker7.png'},
						{id: 8, src: '/baker/baker8.png'},
						{id: 9, src: '/baker/baker9.png'}
						]
				},
				{
					id: 5,
					title: "Swangky - Life Style Online Shoping",
					img: "weeding-website.png",
					desc: "Website Swangky ini platform daring yang menawarkan berbagai produk dan layanan terkait gaya hidup, yang mencakup busana, aksesoris, produk kecantikan, perawatan diri, peralatan rumah tangga, dekorasi, dan banyak lagi. Tujuan utama dari situs ini adalah untuk menyediakan pengalaman belanja yang mudah, nyaman, dan menarik bagi konsumen yang mencari tren terbaru dan produk berkualitas tinggi.",
					link: "/examples/foodbar",
					items: [
						{id: 1, src: '/swangky/swangky1.png'},
						{id: 2, src: '/swangky/swangky2.png'},
						{id: 3, src: '/swangky/swangky3.png'},
						{id: 4, src: '/swangky/swangky4.png'},
						{id: 5, src: '/swangky/swangky5.png'},
						{id: 6, src: '/swangky/swangky6.png'},
						{id: 7, src: '/swangky/swangky7.png'},
						{id: 8, src: '/swangky/swangky8.png'},
						{id: 9, src: '/swangky/swangky9.png'},
						{id: 10, src: '/swangky/swangky10.png'},
						{id: 11, src: '/swangky/swangky11.png'}
						]
				},
				{
					id: 5,
					title: "Fruitables - Official Store Agricultural Fruit",
					img: "weeding-website.png",
					desc: "FruitAble adalah sebuah website yang berfokus pada pertanian buah-buahan berkualitas tinggi. Melalui platform ini, pengunjung dapat menjelajahi berbagai jenis buah-buahan segar yang ditanam secara berkelanjutan dan ramah lingkungan.",
					link: "/examples/fruitables",
					items: [
						{id: 1, src: '/fruitable/fruitable1.png'},
						{id: 2, src: '/fruitable/fruitable2.png'},
						{id: 3, src: '/fruitable/fruitable3.png'},
						{id: 4, src: '/fruitable/fruitable4.png'},
						{id: 5, src: '/fruitable/fruitable5.png'},
						{id: 6, src: '/fruitable/fruitable6.png'},
						{id: 7, src: '/fruitable/fruitable7.png'},
						{id: 8, src: '/fruitable/fruitable8.png'},
						{id: 9, src: '/fruitable/fruitable9.png'},
						{id: 10, src: '/fruitable/fruitable10.png'}
						]
				},
				]
};
},
mounted() {
	this.updateCarouselItemsToShow(); 
	window.addEventListener('resize', this.updateCarouselItemsToShow);
},
methods: {
	prev() {
		this.$emit('prev');
	},
	next() {
		this.$emit('next');
	},
	updateCarouselItemsToShow() {
		if (window.innerWidth < 768) {
			this.carouselItemsToShow = 1;
		} else {
			this.carouselItemsToShow = 2.5;
		}
	},
},
beforeUnmount() {
	window.removeEventListener('resize', this.updateCarouselItemsToShow);
},
}
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
		background-color: rgba(0, 0, 0, 1.0);
		padding: 5px;
		border-radius: 50%;
		color: rgba(255,255,255,1);
	}
	.carousel__prev:hover,
	.carousel__next:hover {
		color: #fdc6ba;
	}
</style>