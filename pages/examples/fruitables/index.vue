<template>
	<div>
		<!-- Spinner Start -->
		<div v-if="loading" id="spinner" class="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
			<div class="spinner-grow text-primary" role="status"></div>
		</div>
		<!-- Spinner End -->

		<fruitables-navigation />

		<!-- Modal Search Start -->
		<div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-fullscreen">
				<div class="modal-content rounded-0">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Search by keyword</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body d-flex align-items-center">
						<div class="input-group w-75 mx-auto d-flex">
							<input type="search" class="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1">
							<span id="search-icon-1" class="input-group-text p-3"><i class="fa fa-search"></i></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Modal Search End -->


		<fruitables-hero />


		<fruitables-features />


		<fruitables-shop />


		<fruitables-panel />


		<fruitables-visitables />


		<fruitables-banner />


		<fruitables-best-seller />


		<fruitables-fact />


		<fruitables-testimoni />


		<fruitables-footer />


		<!-- Back to Top -->
		<a href="#" class="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>
	</div>
</template>

<script setup>
	import {ref} from 'vue';

	const date = new Date;
	const year = date.getFullYear();
	let loading = ref(true);

	onMounted(() => {
		setTimeout(() => {
			loading.value = false
		}, 1500)
	})

	useHead({
		title: 'Fruitables  - Phoenix Digital Tech Solution',
		link: [
		{
			rel: 'stylesheet',
			href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@600;800&display=swap"
		},
		{
			rel: 'stylesheet',
			href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css'
		},
		{
			rel: 'stylesheet',
			href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css'
		},
		{
			rel: 'stylesheet',
			href: '/fruitable/lib/lightbox/css/lightbox.min.css'
		},
		{
			rel: 'stylesheet',
			href: '/fruitable/lib/owlcarousel/assets/owl.carousel.min.css'
		},
		{
			rel: 'stylesheet',
			href: '/fruitable/css/bootstrap.min.css'
		},
		{
			rel: 'stylesheet',
			href: '/fruitable/css/style.css'
		}
		],

		script: [
		{
			src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js',
		},
		{
			src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js',
			body: true,
			crossorigin: 'anonymous'
		},
		{
			src: '/fruitable/lib/easing/easing.min.js',
		},
		{
			src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA',
		},
		{
			src: '/fruitable/lib/waypoints/waypoints.min.js',
		},
		{
			src: '/fruitable/lib/lightbox/js/lightbox.min.js',
		},
		{
			src: '/fruitable/lib/owlcarousel/owl.carousel.min.js',
		},
		{
			src: '/fruitable/js/main.js',
			body: true
		}
		],

		meta: [
			{ name: 'description', content: 'Landing page online shop Seraya Coffee House dirancang untuk menghadirkan pengalaman yang menarik dan menawan bagi para pengunjung. Dengan desain yang bersih dan elegan, kami mengundang Anda untuk menjelajahi berbagai jenis kopi dan produk-produk berkualitas tinggi yang kami tawarkan. Dari aroma kopi segar hingga tata letak yang intuitif, kami berusaha menciptakan lingkungan online yang memikat yang memperkuat identitas merek kami sebagai tujuan utama bagi para pecinta kopi.' },
			{
				name: 'og:title', content: 'Phoenix Digital Tech Solution'
			},
			{
				name: 'description', content: 'Landing page online shop Seraya Coffee House dirancang untuk menghadirkan pengalaman yang menarik dan menawan bagi para pengunjung. Dengan desain yang bersih dan elegan, kami mengundang Anda untuk menjelajahi berbagai jenis kopi dan produk-produk berkualitas tinggi yang kami tawarkan. Dari aroma kopi segar hingga tata letak yang intuitif, kami berusaha menciptakan lingkungan online yang memikat yang memperkuat identitas merek kami sebagai tujuan utama bagi para pecinta kopi.'
			},
			{
				name: 'og:description', content: 'kami Phoenix Digital Tech Solution sebagai Konsultan IT, Web Development, dan seputar solusi digital, kami membantu memimpin Anda melalui perjalanan digital, mulai dari perencanaan hingga pelaksanaan. Dengan pengetahuan mendalam tentang teknologi terbaru dan praktik terbaik, kami membawa solusi yang inovatif dan terukur untuk membantu bisnis Anda mencapai tujuan online mereka dengan percaya diri'
			},
			{
				name: 'og:image', content: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			}
			],
	})

	useSeoMeta({
		title: 'Phoenix Digital Tech Solution',
		ogTitle: 'Phoenix Digital Tech Solution',
		description: 'Landing page online shop Seraya Coffee House dirancang untuk menghadirkan pengalaman yang menarik dan menawan bagi para pengunjung. Dengan desain yang bersih dan elegan, kami mengundang Anda untuk menjelajahi berbagai jenis kopi dan produk-produk berkualitas tinggi yang kami tawarkan. Dari aroma kopi segar hingga tata letak yang intuitif, kami berusaha menciptakan lingkungan online yang memikat yang memperkuat identitas merek kami sebagai tujuan utama bagi para pecinta kopi.',
		ogDescription: 'Landing page online shop Seraya Coffee House dirancang untuk menghadirkan pengalaman yang menarik dan menawan bagi para pengunjung. Dengan desain yang bersih dan elegan, kami mengundang Anda untuk menjelajahi berbagai jenis kopi dan produk-produk berkualitas tinggi yang kami tawarkan. Dari aroma kopi segar hingga tata letak yang intuitif, kami berusaha menciptakan lingkungan online yang memikat yang memperkuat identitas merek kami sebagai tujuan utama bagi para pecinta kopi.',
		ogImage: 'https://dksindo.com/images/portfolio/coffee-shop.png',
		twitterCard: 'summary_large_image',
	});
</script>