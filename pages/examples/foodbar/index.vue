<template>
	<div>
		<client-only>
			<FoodBarHeader />

			<FoodBarBanner />

			<FoodBarTopDish />

			<FoodBarMenuArea />

			<FoodBarGallery />

			<FoodBarMemberArea />

			<FoodBarBookTable />

			<foodbar-footer />
		</client-only>
	</div>
</template>



<script setup>
	useHead({
		title: 'Foodbar - Phoenix Digital Tech Solution',
		link: [
		{
			rel: 'stylesheet',
			src: "/foodbar/css/bootstrap.css"
		},
		{
			rel: 'stylesheet',
			href: '/foodbar/vendors/linericon/style.css'
		},
		{
			rel: 'stylesheet',
			href: '/foodbar/css/font-awesome.min.css'
		},
		{
			rel: 'stylesheet',
			href: '/foodbar/vendors/owl-carousel/owl.carousel.min.css'
		},
		{
			rel: 'stylesheet',
			href: 'https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.11/css/lightgallery.min.css'
		},
		{
			rel: 'stylesheet',
			href: '/foodbar/vendors/nice-select/css/nice-select.css'
		},
		{
			rel: 'stylesheet',
			href: "/foodbar/vendors/animate-css/animate.css"
		},
		{
			rel: 'stylesheet',
			href: "/foodbar/vendors/popup/magnific-popup.css",
		},
		{
			rel: 'stylesheet',
			href: "/foodbar/vendors/swiper/css/swiper.min.css",
		},
		{
			rel: 'stylesheet',
			href: "/foodbar/vendors/scroll/jquery.mCustomScrollbar.css",
		},
		{
			rel: 'stylesheet',
			href: "/foodbar/css/style.css",
		},
		{
			rel: 'stylesheet',
			href: "/foodbar/css/responsive.css",
		},
		],

		script: [
		{
			src: '/foodbar/js/jquery-3.2.1.min.js',
			body: true
		},
		{
			src: '/foodbar/js/popper.js',
			body: true
		},
		{
			src: '/foodbar/js/bootstrap.min.js',
			body: true
		},
		{
			src: '/foodbar/js/stellar.js',
			body: true
		},
		{
			src: '/foodbar/js/jquery.lightbox.js',
			body: true
		},
		{
			src: '/foodbar/vendors/nice-select/js/jquery.nice-select.min.js',
			body: true
		},
		{
			src: '/foodbar/vendors/isotope/imagesloaded.pkgd.min.js',
			body: true
		},
		{
			src: '/foodbar/vendors/isotope/isotope-min.js',
			body: true
		},
		{
			src: '/foodbar/vendors/owl-carousel/owl.carousel.min.js',
			body: true
		},
		{
			src: '/foodbar/js/jquery.ajaxchimp.min.js',
			body: true
		},
		{
			src: '/foodbar/vendors/counter-up/jquery.waypoints.min.js',
			body: true
		},
		{
			src: '/foodbar/vendors/counter-up/jquery.counterup.js',
			body: true
		},
		{
			src: '/foodbar/js/mail-script.js',
			body: true
		},
		{
			src: '/foodbar/vendors/popup/jquery.magnific-popup.min.js',
			body: true
		},
		{
			src: '/foodbar/vendors/swiper/js/swiper.min.js',
			body: true
		},
		{
			src: '/foodbar/vendors/scroll/jquery.mCustomScrollbar.js',
			body: true
		},
		{
			src: '/foodbar/js/theme.js',
			body: true
		},
		],

		meta: [
			{ name: 'description', content: 'Situs web dealfood makanan adalah platform online yang menampilkan layanan, menu, dan merek bisnis F&B. Ia menyediakan kemudahan untuk pelanggan memesan, mengonfigurasi, dan menjadwalkan acara mereka. Situs web dealfood yang baik harus memiliki elemen-elemen berikut:' },
			{
				name: 'og:title', content: 'Phoenix Digital Tech Solution'
			},
			{
				name: 'description', content: 'Situs web dealfood makanan adalah platform online yang menampilkan layanan, menu, dan merek bisnis F&B. Ia menyediakan kemudahan untuk pelanggan memesan, mengonfigurasi, dan menjadwalkan acara mereka. Situs web dealfood yang baik harus memiliki elemen-elemen berikut:'
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
		description: 'Situs web dealfood makanan adalah platform online yang menampilkan layanan, menu, dan merek bisnis dealfood. Ia menyediakan kemudahan untuk pelanggan memesan, mengonfigurasi, dan menjadwalkan acara mereka. Situs web dealfood yang baik harus memiliki elemen-elemen berikut:',
		ogDescription: 'Situs web dealfood makanan adalah platform online yang menampilkan layanan, menu, dan merek bisnis dealfood. Ia menyediakan kemudahan untuk pelanggan memesan, mengonfigurasi, dan menjadwalkan acara mereka. Situs web dealfood yang baik harus memiliki elemen-elemen berikut:',
		ogImage: 'https://dksindo.com/images/portfolio/coffee-shop.png',
		twitterCard: 'summary_large_image',
	});
</script>