<style scoped>
    .brand-nav {
        font-family: 'poppins';
    }
</style>

<template>
    <nav class="bg-sky-800 text-white border-sky-800 fixed top-0 z-50 w-full shadow-lg">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a href="https://flowbite.com" class="flex items-center space-x-3 text-3xl rtl:space-x-reverse">
                <img src="@/assets/images/phoenix-logo.png" class="max-w-sm w-[30px] bg-transparent">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Phoenix Digital</span>
            </a>
            <button @click="toggleMenu" data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white hover:text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-800" aria-controls="mega-menu-full" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div id="mega-menu-full" class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-sky-800 font-semibold">
                    <li>
                        <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#service" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Service</a>
                    </li>
                    <li>
                        <a href="#portfolio" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Portfolio</a>
                    </li>
                    <li>
                        <a href="#kontak" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Kontak</a>
                    </li>
                </ul>
            </div>
        </div>
        <div  v-show="isMenuOpen" id="mega-menu-full-dropdown" class="border-sky-800 shadow-sm bg-sky-800 md:bg-sky-800 border-y">
            <div class="grid max-w-screen-xl mx-auto text-white text-center sm:grid-cols-2 md:px-6">
                <ul>
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:text-gray-500">
                            <div class="font-semibold">Home</div>
                        </a>
                    </li>
                    <li>
                        <a href="#service" class="block p-3 rounded-lg hover:text-gray-500">
                            <div class="font-semibold">Service</div>
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" class="block p-3 rounded-lg hover:text-gray-500">
                            <div class="font-semibold">Portfolio</div>
                        </a>
                    </li>
                    <li>
                        <a href="#kontak" class="block p-3 rounded-lg hover:text-gray-500">
                            <div class="font-semibold">Kontak</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                isMenuOpen: false
            };
        },
        methods: {
            toggleMenu() {
                this.isMenuOpen = !this.isMenuOpen;
            }
        }
    };
</script>
