<template>
	<div class="flex justify-center py-12 mb-12">
		<div class="py-4 px-6 lg:block hidden">
			<div class="flex flex-col items-center md:flex-row items-start bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
				<img class="rounded-t-lg h-80 ml-2 py-2" src="@/assets/images/healthy-diet/profile/profile2.jpeg" alt="">
				<div class="flex flex-col justify-between p-4 leading-normal">
					<h5 class="lg:text-lg text-md font-bold tracking-tight text-gray-900 dark:text-white">Bersama Dokter Professional</h5>
					<small class="text-slate-400 mb-2">konsultasikan permasalahan <span class="text-emerald-500">Diet</span> Anda</small>
					<h2 class="font-semibold lg:text-2xl text-lg">dr. Ade Erni, M.Gizi, SpGK, AIFO-K</h2>
					<div class="flex justify-between space-x-6">
						<div class="shrink-0 w-80 text-justify">
							<p class="lg:text-md text-sm lg:text-left text-justify font-normal text-gray-700 dark:text-gray-400 py-4">Dalam pengawasan dan bimbingan langsung <span class="font-semibold">dr. Ade Erni, M.Gizi, SpGK, AIFO-K</span> yang berpengalaman ebagai spesialis gizi, saat ini Berpraktek langsung di Poli / Klinik Gizi RSUD Oto Iskandar Di Nata.</p>
						</div>
						<div class="py-6">
							<button @click="whatsappRedirect" type="button" class="text-white bg-gradient-to-br from-emerald-500 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">
								<font-awesome-icon icon="fa-brands fa-whatsapp fa-2xl" />  Konsultasikan Sekarang
							</button>
						</div>
					</div>

					<div class="flex justify-start space-x-2 mb-6 text-gray-600">
						<div>
							<font-awesome-icon icon="fa-solid fa-business-time" /> Jam Praktek
						</div>
						<div>
							Senin - Jumat , Jam : 19:00 s/d 21:00
						</div>
					</div>

					<div class="flex justify-start space-x-4 text-gray-600">
						<div>
							<font-awesome-icon icon="fa-solid fa-thumbs-up" /> 99%
						</div>
						<div>
							<font-awesome-icon icon="fa-solid fa-business-time" /> 
						</div>
					</div>

					<div class="flex justify-start py-2">
						<div>
							<h5 class="font-semibold text-gray-700">Mulai Dari</h5>
							<h4 class="font-semibold text-orange-500">Rp. 1000.00</h4>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="max-w-lg py-4 px-6 xl:hidden lg:hidden block">
			<div class="flex flex-col items-center md:flex-row items-start bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
				<!-- Gambar -->
				<img class="rounded-t-lg h-auto md:h-auto w-full md:w-80" src="@/assets/images/healthy-diet/profile/profile2.jpeg" alt="">

				<!-- Isi -->
				<div class="flex flex-col justify-between p-4 leading-normal">

					<!-- Judul -->
					<h5 class="lg:text-lg text-md font-bold tracking-tight text-gray-900 dark:text-white">Bersama Dokter Professional</h5>
					<small class="text-slate-400 mb-2">konsultasikan permasalahan <span class="text-emerald-500">Diet</span> Anda</small>
					<h2 class="font-semibold lg:text-2xl text-lg">dr. Ade Erni, M.Gizi, SpGK, AIFO-K</h2>

					<!-- Deskripsi -->
					<div class="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-6">
						<div class="w-full md:w-1/2">
							<p class="lg:text-md text-sm lg:text-left text-justify font-normal text-gray-700 dark:text-gray-400 py-4">Dalam pengawasan dan bimbingan langsung <span class="font-semibold">dr. Ade Erni, M.Gizi, SpGK, AIFO-K</span> yang berpengalaman sebagai spesialis gizi, saat ini Berpraktek langsung di Poli / Klinik Gizi RSUD Oto Iskandar Di Nata.</p>
						</div>
						<div class="w-full md:w-auto">
							<button @click="whatsappRedirect" type="button" class="text-white bg-gradient-to-br from-emerald-500 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">
								<font-awesome-icon icon="fa-brands fa-whatsapp fa-2xl" />  Konsultasikan Sekarang
							</button>
						</div>
					</div>

					<div class="grid grid-cols-1 mt-6 mb-6 text-gray-600">
						<div class="font-semibold">
							<font-awesome-icon icon="fa-solid fa-business-time" /> Jam Praktek :
						</div>
						<div>
							Senin - Jumat , Jam : 19:00 s/d 21:00
						</div>
					</div>

					<div class="flex justify-start space-x-4 text-gray-600">
						<div>
							<font-awesome-icon icon="fa-solid fa-thumbs-up" /> 99%
						</div>
						<div>
							<font-awesome-icon icon="fa-solid fa-business-time" /> 
						</div>
					</div>

					<div class="flex justify-start py-2">
						<div>
							<h5 class="font-semibold text-gray-600">Mulai Dari</h5>
							<h4 class="font-semibold text-orange-500">Rp. 1000.00</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script setup>
	const imgHorizontal = '@/assets/images/healthy-diet/profile/profile2.jpeg'

	function whatsappRedirect() {
		const whatsappNumber = '6282117086745';
		const name = 'dr. Ade Erni, M.Gizi, SpGK'

		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=`;
		const text = `Halo, ${name} saya ingin berkonsultasi seputar Diet & Gizi...`;
		const encodeText = encodeURIComponent(text);
		window.open(`${whatsappUrl}${encodeText}`)
	}
</script>