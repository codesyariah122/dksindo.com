<template>
	<section class="bg-gray-200 py-16 px-6">
		<div class="max-w-4xl mx-auto">
			<!-- Portfolio content -->
			<h2 class="text-3xl font-semibold mb-8">Portfolio</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<!-- Portfolio items -->
				<div class="bg-white rounded-lg shadow-md overflow-hidden">
					<img src="/assets/images/portfolio/pd-barokah.png" alt="Portfolio 1" class="w-full h-48 object-cover">
					<div class="p-6">
						<h3 class="text-xl font-semibold mb-2">PD Barokah - Pabrik Gula</h3>
						<p>Aplikasi berbasis website untuk management penjualan , pembelian , laporan-laporan keuangan untuk skala industri.</p>
					</div>
				</div>
				<div class="bg-white rounded-lg shadow-md overflow-hidden">
					<img src="https://via.placeholder.com/500" alt="Portfolio 2" class="w-full h-48 object-cover">
					<div class="p-6">
						<h3 class="text-xl font-semibold mb-2">Project 2</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis risus eget risus luctus, sed semper dui varius.</p>
					</div>
				</div>
				<div class="bg-white rounded-lg shadow-md overflow-hidden">
					<img src="https://via.placeholder.com/500" alt="Portfolio 3" class="w-full h-48 object-cover">
					<div class="p-6">
						<h3 class="text-xl font-semibold mb-2">Project 3</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis risus eget risus luctus, sed semper dui varius.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				imagePath: ''
			};
		},
		mounted() {
		}
	}
</script>