<template>
	<section id="kontak" class="py-6 mb-8">
		<div class="max-w-full mx-auto">
			<div class="bg-white shadow-sm rounded px-8 pt-6 pb-8 mb-4">
				<h2 class="text-xl font-bold mb-4">Kontak Kami</h2>
				<div class="mb-4">
					<p class="text-gray-700 mb-2"><span class="font-semibold">Alamat:</span> Kaum Kaler No.1, Pamekaran, Kec. Soreang, Kabupaten Bandung, Jawa Barat 40912</p>
					<p class="text-gray-700 mb-2"><span class="font-semibold">Telepon:</span>
						
					</p>
					<div class="bg-white shadow-md rounded-md p-4 mb-4">
						<ul>
							<li v-for="team in teams" :key="team.id" class="flex items-center space-x-3 py-4">
								<button @click="whatsappRedirect(team.phoneNum, team)" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md">
									<font-awesome-icon icon="fa-brands fa-whatsapp fa-2xl" />
									Contact via WhatsApp
								</button>

								<p class="text-gray-800 font-semibold">{{team.phone}} ( {{team.name}} )</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="mb-4">
					<!-- Replace the src attribute with your Google Maps embed URL -->
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15839.440772443566!2d107.5161966!3d-7.0257149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ed59301487bb%3A0x6188b89b69e78858!2sBebeb%20Net!5e0!3m2!1sid!2sid!4v1711148758749!5m2!1sid!2sid" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				teams: [
					{id: 1, name: "Jily Tijanlina", phone: "0823 1779 5068", phoneNum: "622317795068"},
					{id: 2, name: "Komarasari Vio", phone: "0896 7584 0664", phoneNum: "629675840664"},
					{id: 3, name: "Puji Ermanto", phone: "0882 2266 8778", phoneNum: "6288222668778"}
				]
			}
		},
		methods: {
			whatsappRedirect(num, data) {
				const whatsappNumber = num;
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=`;
                const text = `Hello, ${data.name} saya perlu layanan jasa IT Consultant untuk bisnis saya ?? apakah bisa berkonsultasi untuk layanan yang dimiliki dksindo.`;
                    const encodeText = encodeURIComponent(text);
                    window.open(`${whatsappUrl}${encodeText}`)
			}
		}
	}
</script>