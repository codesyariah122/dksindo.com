<template>
	<div>
		<dksindo-navigation />
		<dksindo-hero />
		<ContentQuery
		path="/"
		:only="['title', 'description', 'headline', 'excerpt', 'date', 'tags', '_path', 'src']"
		:sort="{
			date: 1
		}"
		:limit="blogCountLimit"
		v-slot="{ data }"
		>
		<dksindo-products :data="data"/>
	</ContentQuery>
	<dksindo-portfolio />
	<dksindo-samples />
	<dksindo-contact :teams="teams"/>
	<dksindo-footer />
</div>
</template>


<script setup>
	import teamsData from '~/content/teams.json';

	const blogCountLimit = 3;

	const { data } = await useAsyncData(`content-/services`, async () => {
		const _services = await queryContent('/services').only('headline').find()
		return Math.ceil(_services.length / blogCountLimit);
	});

	const teams= teamsData;

	// defineOgImageComponent('Nuxt', {
	// 	headline: 'Dksindo 👨🏻‍💻',
	// 	title: 'Selamat Datang di Phoenix Digital Tech Solution',
	// 	description: 'Hello, kami Phoenix Digital Tech Solution sebagai Konsultan IT, Web Development, dan seputar solusi digital, kami membantu memimpin Anda melalui perjalanan digital, mulai dari perencanaan hingga pelaksanaan. Dengan pengetahuan mendalam tentang teknologi terbaru dan praktik terbaik, kami membawa solusi yang inovatif dan terukur untuk membantu bisnis Anda mencapai tujuan online mereka dengan percaya diri. salaam...',
	// })

	useHead({
		title: 'Phoenix Digital Tech Solution',
		meta: [
			{ name: 'description', content: 'kami Phoenix Digital Tech Solution sebagai Konsultan IT, Web Development, dan seputar solusi digital, kami membantu memimpin Anda melalui perjalanan digital, mulai dari perencanaan hingga pelaksanaan. Dengan pengetahuan mendalam tentang teknologi terbaru dan praktik terbaik, kami membawa solusi yang inovatif dan terukur untuk membantu bisnis Anda mencapai tujuan online mereka dengan percaya diri' },
			{
				name: 'og:title', content: 'Phoenix Digital Tech Solution'
			},
			{
				name: 'description', content: 'kami Phoenix Digital Tech Solution sebagai Konsultan IT, Web Development, dan seputar solusi digital, kami membantu memimpin Anda melalui perjalanan digital, mulai dari perencanaan hingga pelaksanaan. Dengan pengetahuan mendalam tentang teknologi terbaru dan praktik terbaik, kami membawa solusi yang inovatif dan terukur untuk membantu bisnis Anda mencapai tujuan online mereka dengan percaya diri...'
			},
			{
				name: 'og:description', content: 'kami Phoenix Digital Tech Solution sebagai Konsultan IT, Web Development, dan seputar solusi digital, kami membantu memimpin Anda melalui perjalanan digital, mulai dari perencanaan hingga pelaksanaan. Dengan pengetahuan mendalam tentang teknologi terbaru dan praktik terbaik, kami membawa solusi yang inovatif dan terukur untuk membantu bisnis Anda mencapai tujuan online mereka dengan percaya diri'
			},
			{
				name: 'og:image', content: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			}
			],
	});

	useSeoMeta({
		title: 'Phoenix Digital Tech Solution',
		ogTitle: 'Phoenix Digital Tech Solution',
		description: 'kami Phoenix Digital Tech Solution sebagai Konsultan IT, Web Development, dan seputar solusi digital, kami membantu memimpin Anda melalui perjalanan digital, mulai dari perencanaan hingga pelaksanaan. Dengan pengetahuan mendalam tentang teknologi terbaru dan praktik terbaik, kami membawa solusi yang inovatif dan terukur untuk membantu bisnis Anda mencapai tujuan online mereka dengan percaya diri...',
		ogDescription: 'kami Phoenix Digital Tech Solution sebagai Konsultan IT, Web Development, dan seputar solusi digital, kami membantu memimpin Anda melalui perjalanan digital, mulai dari perencanaan hingga pelaksanaan. Dengan pengetahuan mendalam tentang teknologi terbaru dan praktik terbaik, kami membawa solusi yang inovatif dan terukur untuk membantu bisnis Anda mencapai tujuan online mereka dengan percaya diri',
		ogImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		twitterCard: 'summary_large_image',
	});

</script>