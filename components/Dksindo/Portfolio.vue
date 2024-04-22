<template>
	<section id="portfolio" class="bg-gray-200 py-24 px-6">
		<div class="max-w-4xl mx-auto">
			<!-- Portfolio content -->
			<h2 class="text-3xl font-semibold mb-8 text-center">Portfolio</h2>
			<!-- Portfolio items -->
			<CCarousel :items-to-show="carouselItemsToShow" :wrap-around="true">
				<CSlide v-for="slide in products.slice().reverse()" :key="slide">
					<div class="bg-white rounded-lg shadow-md">
						<img :src="`/images/portfolio/${slide.img}`" :alt="slide.title" class="w-full h-48 object-cover">
						<div class="p-6">
							<h3 class="text-xl font-semibold mb-2">{{slide.title}}</h3>
							<p>{{slide.desc}}</p>
							<a :href="slide.link" class="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
								<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
									Lihat Website
								</span>
							</a>
						</div>
					</div>
				</CSlide>

				<template #addons>
					<CNavigation />
					<CPagination />
				</template>
			</CCarousel>

			<div class="grid grid-cols-1 place-items-center py-6">
				<div>
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
				carouselItemsToShow: 2.5,
				products: [
				{
					id: 1,
					title: "PD Barokah - Pabrik Gula",
					img: "pd-barokah.png",
					desc: "Aplikasi berbasis website untuk management penjualan , pembelian , laporan-laporan keuangan untuk skala industri.",
					link: "https://sirmuh.dksindo.com"
				},
				{
					id: 2,
					title: "SA Istiqamah - Travel Umroh",
					img: "ssa-istiqamah.png",
					desc: "Website company profile yang mendeskripsikan layanan-layanan travel umroh, perjalanan umroh dan juga dokumentasi untuk admin.",
					link: "https://ssa-istiqamah.dksindo.com"
				},
				{
					id: 3,
					title: "D&N Tour Travel - City Tour",
					img: "dntourtravel.png",
					desc: "Rental mobil dan Tour & Travel website dimana customer bisa langsung melakukan pemesanan online langsung ke admin dari Tour & Travel tersebut.",
					link: "https://dntourtravel.dksindo.com"
				},
				{
					id: 4,
					title: "Healthy Diet - Dr. Ade Erni, M.Gizi, SpGK, AIFO-K",
					img: "healthy-diet.png",
					desc: "Konsulatasi gizi bersama dokter profesional untuk programm diet sehat anda, di lakukan secara offline maupun live dari perangkat mobile anda.",
					link: "https://draet.dksindo.com"
				},
				{
					id: 4,
					title: "Seraya Coffee Shop - Start your day with coffee",
					img: "coffee-shop.png",
					desc: "Landing page online shop Seraya Coffee House dirancang untuk menghadirkan pengalaman yang menarik dan menawan bagi para pengunjung. Dengan desain yang bersih dan elegan, kami mengundang Anda untuk menjelajahi berbagai jenis kopi dan produk-produk berkualitas tinggi yang kami tawarkan.",
					link: "/examples/seraya-coffee"
				},
				// {
				// 	id: 5,
				// 	title: "Mr & Mrs - Weeding Website",
				// 	img: "weeding-website.png",
				// 	desc: "Menyentuh hati, mempesona, dan mengabadikan momen indah, landing page kami adalah pintu gerbang ke kisah cinta Anda yang tak terlupakan. Dengan desain yang elegan dan penuh kasih, kami mengundang Anda untuk merayakan cinta sejati Anda dalam sebuah perjalanan visual yang memukau.",
				// 	link: "/examples/mrmrs-weeding"
				// },
				{
					id: 5,
					title: "Saudagar Sosis - Supplier Sosis",
					img: "supplier-sosis.png",
					desc: "Selamat datang di dunia rasa yang autentik dan berkualitas tinggi dengan landing page kami untuk supplier sosis terkemuka. Kami adalah titik pertemuan antara keahlian tradisional dan inovasi modern dalam dunia sosis yang lezat. Dengan dedikasi kami untuk kualitas terbaik dan kepuasan pelanggan yang tak tertandingi, kami hadir untuk memenuhi setiap kebutuhan dan keinginan Anda dalam hal produk sosis yang segar dan lezat.",
					link: "/examples/supplier-sosis"
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