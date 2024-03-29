<template>
	<footer class="bg-emerald-500">
		<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
			<div class="sm:flex sm:items-center sm:justify-between">
				<span class="text-sm text-white sm:text-center dark:text-gray-400">© {{year}} <a href="https://dksindo.com/examples/healthy-diet" class="hover:underline"><font-awesome-icon icon="fa-solid fa-notes-medical" />  Healthy Diet</a>. All Rights Reserved.
				</span>
				<div class="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
					<a v-for="link in socialLinks" :key="link.name" :href="link.url" target="blank" class="text-white text-3xl">
						<!-- <font-awesome-icon :icon="['fab', link.icon]" /> -->
						<img :src="link.img">
					</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
const date = new Date();
const year = date.getFullYear();

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'facebook',
    img: 'https://asset-cdn.medkomtek.com/banner/icon-desktop/social-media/facebook+1.svg?w=32&q=100'

  },
  {
    name: 'instagram',
    url: 'https://instagram.com',
    icon: 'instagram',
    img: 'https://asset-cdn.medkomtek.com/banner/icon-desktop/social-media/instagram.svg?w=32&q=100'
  }

]
</script>