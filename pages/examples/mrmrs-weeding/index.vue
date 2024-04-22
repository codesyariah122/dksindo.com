<template>
	<div>
		<client-only>
			<mrms-weeding-navigation />

			<mrms-weeding-carousel />

			<mrms-weeding-hello />

			<mrms-weeding-story />

			<mrms-weeding-date />

			<mrms-weeding-backtotop />
		</client-only>
	</div>
</template>



<script setup>
	const date = new Date;
	const year = date.getFullYear();

	useHead({
		title: 'Mr & Mrs Weeding Website - Phoenix Digital Tech Solution',
		bodyAttrs: {
			'data-bs-spy': 'scroll',
			'data-bs-target': '#navBar',
			id: 'weddingHome'
		},
		link: [
		{
			rel: 'stylesheet',
			src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
			crossorigin: "anonymous"
		},
		{
			rel: 'stylesheet',
			href: "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Open+Sans:wght@400;500;600&family=Petit+Formal+Script&display=swap"
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
			href: '/weeding-page/lib/animate/animate.min.css'
		},
		{
			rel: 'stylesheet',
			href: '/weeding-page/lib/lightbox/css/lightbox.min.css'
		},
		{
			rel: 'stylesheet',
			href: '/weeding-page/css/bootstrap.min.css'
		},
		{
			rel: 'stylesheet',
			href: '/weeding-page/css/style.css'
		},
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
			src: '/weeding-page/lib/wow/wow.min.js',
			body: true
		},
		{
			src: '/weeding-page/lib/easing/easing.min.js',
			body: true
		},
		{
			src: '/weeding-page/lib/waypoints/waypoints.min.js',
			body: true
		},
		{
			src: '/weeding-page/lib/lightbox/js/lightbox.min.js',
			body: true
		},
		{
			src: '/weeding-page/js/main.js',
			body: true
		},
		],

		meta: [
			{ name: 'description', content: 'Menyentuh hati, mempesona, dan mengabadikan momen indah, landing page kami adalah pintu gerbang ke kisah cinta Anda yang tak terlupakan. Dengan desain yang elegan dan penuh kasih, kami mengundang Anda untuk merayakan cinta sejati Anda dalam sebuah perjalanan visual yang memukau. Setiap detailnya dipelajari dengan cermat untuk menciptakan pengalaman yang menakjubkan dan memukau bagi setiap pasangan yang merencanakan pernikahan mereka. Sambutlah tamu Anda dengan hangat, jelajahi pilihan yang tak terbatas, dan nikmati momen abadi dalam landing page kami yang dipenuhi dengan cahaya, harapan, dan kebahagiaan.' },
			{
				name: 'og:title', content: 'Phoenix Digital Tech Solution'
			},
			{
				name: 'description', content: 'Menyentuh hati, mempesona, dan mengabadikan momen indah, landing page kami adalah pintu gerbang ke kisah cinta Anda yang tak terlupakan. Dengan desain yang elegan dan penuh kasih, kami mengundang Anda untuk merayakan cinta sejati Anda dalam sebuah perjalanan visual yang memukau. Setiap detailnya dipelajari dengan cermat untuk menciptakan pengalaman yang menakjubkan dan memukau bagi setiap pasangan yang merencanakan pernikahan mereka. Sambutlah tamu Anda dengan hangat, jelajahi pilihan yang tak terbatas, dan nikmati momen abadi dalam landing page kami yang dipenuhi dengan cahaya, harapan, dan kebahagiaan.'
			},
			{
				name: 'og:description', content: 'Menyentuh hati, mempesona, dan mengabadikan momen indah, landing page kami adalah pintu gerbang ke kisah cinta Anda yang tak terlupakan. Dengan desain yang elegan dan penuh kasih, kami mengundang Anda untuk merayakan cinta sejati Anda dalam sebuah perjalanan visual yang memukau. Setiap detailnya dipelajari dengan cermat untuk menciptakan pengalaman yang menakjubkan dan memukau bagi setiap pasangan yang merencanakan pernikahan mereka. Sambutlah tamu Anda dengan hangat, jelajahi pilihan yang tak terbatas, dan nikmati momen abadi dalam landing page kami yang dipenuhi dengan cahaya, harapan, dan kebahagiaan.'
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
	ogImage: 'https://dksindo.com/images/portfolio/weeding-website.png',
	twitterCard: 'summary_large_image',
});
</script>