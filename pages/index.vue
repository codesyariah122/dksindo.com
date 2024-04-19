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
</script>