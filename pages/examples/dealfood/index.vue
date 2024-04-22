<template>
	<div>
		<dealfood-hero />

		<dealfood-recipe />

		<dealfood-app-section />

		<dealfood-about />

		<dealfood-news />

		<dealfood-testimoni />

		<dealfood-footer />
	</div>
</template>



<script setup>
	const date = new Date;
	const year = date.getFullYear();

	useHead({
		title: 'Dealfood - Phoenix Digital Tech Solution',
		link: [
		{
			rel: 'stylesheet',
			src: "/dealfood/css/bootstrap.css",
			crossorigin: "anonymous"
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap'
		},
		{
			rel: 'stylesheet',
			href: '/dealfood/css/font-awesome.min.css'
		},
		{
			rel: 'stylesheet',
			href: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css'
		},
		{
			rel: 'stylesheet',
			href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css'
		},
		{
			rel: 'stylesheet',
			href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css.map'
		},
		{
			rel: 'stylesheet',
			src: "/dealfood/css/style.css",
			crossorigin: "anonymous"
		},
		{
			rel: 'stylesheet',
			src: "/dealfood/css/responsive.css",
			crossorigin: "anonymous"
		},
		],

		script: [
		{
			src: '/dealfood/js/jquery-3.4.1.min.js',
			body: true
		},
		{
			src: '/dealfoor/js/bootstrap.js',
			body: true
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.js',
			body: true
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js',
			body: true
		},
		{
			src: '/dealfood/js/custom.js',
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