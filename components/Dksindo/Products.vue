<template>
	<section id="service" class="py-24">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <!-- Product List -->
            <div class="grid grid-cols-1 md:place-items-center place-items-center md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="service in data"
                :key="service._path">
                <div class="bg-white w-80 md:w-full max-w-lg rounded-lg shadow-md p-6">
                    <div class="flex justify-center">
                        <div>
                            <img :src="service.src" class="w-48 max-w-md">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:place-items-center place-items-center">
                        <div>
                            <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                {{service.title}}
                            </span>
                            <h3 class="text-xl font-semibold mb-4">
                                {{service.headline}}
                            </h3>
                            <p>
                                {{service.description}}
                            </p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 place-items-center mt-6">
                        <div class="col-span-full">
                            <NuxtLink :to="service._path + '/'" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Detail &nbsp;<font-awesome-icon icon="fa-solid fa-glasses text-2xl" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
    const props = defineProps({
        data: {
            type: Array,
            required: true
        },
    })
    const { $formatDate } = useNuxtApp();
</script>