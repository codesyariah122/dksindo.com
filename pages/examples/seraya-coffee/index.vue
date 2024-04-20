<template>
	<div>
		<client-only>
			<seraya-coffee-header />

			<seraya-coffee-banner-area />

			<seraya-coffee-video-section />

			<seraya-coffee-menu />

			<seraya-coffee-gallery />

			<seraya-coffee-review />

			<seraya-coffee-blog />

			<seraya-coffee-footer />
		</client-only>
	</div>
</template>



<script setup>
	const date = new Date;
	const year = date.getFullYear();

	useHead({
		title: 'Seraya Coffee Shop - Phoenix Digital Tech Solution',
		link: [
		{
			rel: 'stylesheet',
			href: "/coffee-master/css/linearicons.css"
		},
		{
			rel: 'stylesheet',
			href: '/coffee-master/css/font-awesome.min.css'
		},
		{
			rel: 'stylesheet',
			href: '/coffee-master/css/bootstrap.css'
		},
		{
			rel: 'stylesheet',
			href: '/coffee-master/css/magnific-popup.css'
		},
		{
			rel: 'stylesheet',
			href: '/coffee-master/css/nice-select.css'
		},
		{
			rel: 'stylesheet',
			href: '/coffee-master/css/animate.min.css'
		},
		{
			rel: 'stylesheet',
			href: '/coffee-master/css/owl.carousel.css'
		},
		{
			rel: 'stylesheet',
			href: '/coffee-master/css/main.css'
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
			src: '/coffee-master/js/vendor/bootstrap.min.js',
			body: true
		},
		{
			src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA',
			body: true
		},
		{
			src: '/coffee-master/js/easing.min.js',
			body: true
		},
		{
			src: '/coffee-master/js/hoverIntent.js',
			body: true
		},
		{
			src: '/coffee-master/js/superfish.min.js',
			body: true
		},
		{
			src: '/coffee-master/js/jquery.ajaxchimp.min.js',
			body: true
		},
		{
			src: '/coffee-master/js/jquery.magnific-popup.min.js',
			body: true
		},
		{
			src: '/coffee-master/js/owl.carousel.min.js',
			body: true
		},
		{
			src: '/coffee-master/js/jquery.sticky.js',
			body: true
		},
		{
			src: '/coffee-master/js/jquery.nice-select.min.js',
			body: true
		},
		{
			src: '/coffee-master/js/parallax.min.js',
			body: true
		},
		{
			src: '/coffee-master/js/waypoints.min.js',
			body: true
		},
		{
			src: '/coffee-master/js/jquery.counterup.min.js',
			body: true
		},
		{
			src: '/coffee-master/js/mail-script.js',
			body: true
		},
		{
			src: '/coffee-master/js/main.js',
			body: true
		},
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