<template>
	<div>
		<property-website-navigation />

		<property-website-hero />

		<property-website-property-item />

		<property-website-customer />

		<property-website-find-home />

		<property-website-part-home />

		<property-website-agen />

		<property-website-footer />
	</div>
</template>



<script setup>
	const date = new Date;
	const year = date.getFullYear();

	useHead({
		title: 'Rumah Property - Phoenix Digital Tech Solution',
		link: [
		{
			rel: 'stylesheet',
			src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
			crossorigin: "anonymous"
		},
		{
			rel: 'stylesheet',
			href: '/property-website/fonts/icomoon/style.css'
		},
		{
			rel: 'stylesheet',
			href: '/property-website/fonts/flaticon/font/flaticon.css'
		},
		{
			rel: 'stylesheet',
			href: '/property-website/css/tiny-slider.css'
		},
		{
			rel: 'stylesheet',
			href: '/property-website/css/aos.css'
		},
		{
			rel: 'stylesheet',
			href: '/property-website/css/style.css'
		}
		],

		script: [
		{
			src: '/coffee-master/js/vendor/jquery-2.2.4.min.js',
			body: true
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
			body: true,
			crossorigin: 'anonymous'
		},
		{
			src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js',
			body: true
		},
		{
			src: '/property-website/js/tiny-slider.js',
			body: true
		},
		{
			src: '/property-website/js/navbar.js',
			body: true
		},
		{
			src: '/property-website/js/aos.js',
			body: true
		},
		{
			src: '/property-website/js/counter.js',
			body: true
		},
		{
			src: '/property-website/js/custom.js',
			body: true
		},
		],

		meta: [
			{ name: 'description', content: 'Landing page Rumah Property dirancang untuk menghadirkan pengalaman yang menarik dan menawan bagi para pengunjung. Dengan desain yang bersih dan elegan, kami mengundang Anda untuk menjelajahi berbagai jenis kopi dan produk-produk berkualitas tinggi yang kami tawarkan. Dari aroma kopi segar hingga tata letak yang intuitif, kami berusaha menciptakan lingkungan online yang memikat yang memperkuat identitas merek kami sebagai tujuan utama bagi pencari dan pebisnis property.' },
			{
				name: 'og:title', content: 'Phoenix Digital Tech Solution'
			},
			{
				name: 'description', content: 'Landing page Rumah Property dirancang untuk menghadirkan pengalaman yang menarik dan menawan bagi para pengunjung. Dengan desain yang bersih dan elegan, kami mengundang Anda untuk menjelajahi berbagai jenis kopi dan produk-produk berkualitas tinggi yang kami tawarkan. Dari aroma kopi segar hingga tata letak yang intuitif, kami berusaha menciptakan lingkungan online yang memikat yang memperkuat identitas merek kami sebagai tujuan utama bagi pencari dan pebisnis property.'
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
		description: 'Landing page Rumah Property dirancang untuk menghadirkan pengalaman yang menarik dan menawan bagi para pengunjung. Dengan desain yang bersih dan elegan, kami mengundang Anda untuk menjelajahi berbagai jenis kopi dan produk-produk berkualitas tinggi yang kami tawarkan. Dari aroma kopi segar hingga tata letak yang intuitif, kami berusaha menciptakan lingkungan online yang memikat yang memperkuat identitas merek kami sebagai tujuan utama bagi pencari dan pebisnis property.',
		ogDescription: 'Landing page Rumah Property dirancang untuk menghadirkan pengalaman yang menarik dan menawan bagi para pengunjung. Dengan desain yang bersih dan elegan, kami mengundang Anda untuk menjelajahi berbagai jenis kopi dan produk-produk berkualitas tinggi yang kami tawarkan. Dari aroma kopi segar hingga tata letak yang intuitif, kami berusaha menciptakan lingkungan online yang memikat yang memperkuat identitas merek kami sebagai tujuan utama bagi pencari dan pebisnis property.',
		ogImage: 'https://dksindo.com/images/portfolio/coffee-shop.png',
		twitterCard: 'summary_large_image',
	});
</script>