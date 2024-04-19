<template>
	<div>
		<ContentDoc>
			<template v-slot="{ doc }">
				<div class="flex justify-center">
					<div>
						<section class="bg-center bg-cover bg-no-repeat bg-gray-700 bg-blend-multiply" :style="`background-image: url('${doc.heroImage}')`">
							<div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
								<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
									{{doc.headline}}
								</h1>
								<span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
									{{doc.title}}
								</span>
								<p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"></p>
								<div class="flex flex-col space-y-4 justify-center items-center sm:space-y-0">
									<a href="#content" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
										Read &nbsp;<font-awesome-icon icon="fa-solid fa-arrow-down fa-2xl text-xl" />
									</a>
								</div>
							</div>
						</section>
					</div>
				</div>

				<section id="content" class="p-12">
					<div class="flex justify-start mb-6">
						<div>
							<span class="blog-post-text text-lg leading-lg font-light"
							>By
							<a class="hover:underline italic" :href="doc.authorUrl" target="_blank" rel="noopener noreferrer">{{
								doc.author
							}}</a></span
							>
						</div>
					</div>
					<div class="grid grid-cols-1 place-content-start">
						<div>
							<div class="flex justify-between space-x-4">
								<div>
									<span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
										<font-awesome-icon icon="fa-solid fa-tree-city fa-2xl text-xl" />&nbsp; {{doc.city}}
									</span>
								</div>
								<div v-show="doc.dateUpdated">
									<time>
										{{formatDate(doc.dateUpdated)}}
									</time>
								</div>
							</div>
						</div>
					</div>

					<div class="grid grid-cols-1 place-content-start py-6">
						<div>
							<article>
								<ContentDoc />
							</article>
						</div>
					</div>
				</section>
			</template>
		</ContentDoc>
	</div>
</template>


<script setup>
	const { $formatDate } = useNuxtApp();
	const { path } = useRoute();
	const cleanPath = path.replace(/\/+$/, '');
	const { data, error } = await useAsyncData(`content-${cleanPath}`, async () => {
		let service = queryContent('/services').where({ _path: cleanPath }).findOne();
		let surround = queryContent('/services').sort({ date: -1 }).only(['_path', 'date','city', 'headline', 'excerpt','heroImage']).findSurround(cleanPath, { before: 1, after: 1 });
		return {
			service: await service,
			surround: await surround
		};
	});

	const baseUrl = 'https://dksindo.com';
	const canonicalPath = baseUrl + (path + '/').replace(/\/+$/, '/');
	const image = baseUrl + (data.value?.service?.src || '/sample.webp');
	const { data: authorData } = await useAsyncData('home', () => queryContent('/authors').findOne());

	const formatDate = (dateString) => {
		if (!dateString) {
			return '';
		}

		const date = new Date(dateString);
		if (isNaN(date.getTime())) {
			return '';
		}

		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	}

	const jsonScripts = [
	{
		type: 'application/ld+json',
		children: JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': 'https://example.com/'
			},
			url: canonicalPath,
			image: image,
			headline: data.value?.article?.headline,
			abstract: data.value?.article?.excerpt,
			datePublished: data.value?.article?.date,
			dateModified: data.value?.article?.dateUpdated || data.value?.article?.date,
			author: authorData.value[data.value?.article?.author],
			publisher: authorData.value['Gonzalo Hirsch']
		})
	}
	];
	useHead({
		title: data.value?.article?.title,
		meta: [
			{ name: 'author', content: data.value?.article?.author },
			{ name: 'description', content: data.value?.article?.description },
			{ property: 'article:published_time', content: data.value?.article?.date.split('T')[0] },
		// OG
			{ hid: 'og:title', property: 'og:title', content: data.value?.article?.headline },
			{ hid: 'og:url', property: 'og:url', content: canonicalPath },
			{ hid: 'og:description', property: 'og:description', content: data.value?.article?.description },
			{ hid: 'og:image', name: 'image', property: 'og:image', content: image },
			{ hid: 'og:type', property: 'og:type', content: 'Article' },
			{ hid: 'og:image:type', property: 'og:image:type', content: `${data.value?.article?.src}` },
			{ hid: 'og:image:width', property: 'og:image:width', content: 100 || 190 },
			{ hid: 'og:image:height', property: 'og:image:height', content: 100 || 190 },
			{ hid: 'og:image:alt', property: 'og:image:alt', content: data.value?.article?.alt },
		// Twitter
			{ hid: 'twitter:card', name: 'twitter:card', content: 'Summary' },
			{ hid: 'twitter:title', name: 'twitter:title', content: data.value?.article?.headline },
			{ hid: 'twitter:url', name: 'twitter:url', content: canonicalPath },
			{ hid: 'twitter:description', name: 'twitter:description', content: data.value?.article?.description },
			{ hid: 'twitter:image', name: 'twitter:image', content: image },
			{ hid: 'twitter:image:alt', name: 'twitter:image:alt', content: data.value?.article?.alt }
			],
		link: [
		{
			hid: 'canonical',
			rel: 'canonical',
			href: canonicalPath
		}
		],
		script: jsonScripts
	});
</script>