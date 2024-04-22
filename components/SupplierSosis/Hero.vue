 <style>
 	.parallax {
 		background-image: url('https://agrobogautama.co.id/assets/img/intro_img/1.jpg');
 		background-size: cover;
 		background-repeat: no-repeat;
 		background-attachment: fixed;
 		background-position: center;
 		color: #fff;
 		text-align: center;
 		height: 95vh;
 		display: flex;
 		align-items: center;
 		justify-content: center;
 		flex-direction: column;
 		position: relative;
 		overflow: hidden;
 		margin-top:1rem;
 	}

 	.parallax h1 {
 		font-size: 4rem;
 	}

 	.parallax p {
 		font-size: 1.5rem;
 	}

 	.parallax::before {
 		content: '';
 		position: absolute;
 		top: 0;
 		left: 0;
 		width: 100%;
 		height: 100%;
 		background: rgba(0, 0, 0, 0.5);
 		z-index: -1;
 	}
 </style>

 <template>
 	<div class="parallax">
 		<h1>Welcome to Saudagar Sosis</h1>
 		<p>Providing the best sausages for your business needs</p>
 		<a href="#content" class="mt-12 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-5xl">
 			<font-awesome-icon icon="fa-solid fa-arrow-down" />
 		</a>
 	</div>
 </template>


 <script>
 	export default {

 		mounted() {
 			this.playParallax();
 		},

 		methods: {
 			playParallax() {
 				document.addEventListener("DOMContentLoaded", function() {
 					var observer = new IntersectionObserver(function(entries) {
 						entries.forEach(function(entry) {
 							if (entry.isIntersecting) {
 								entry.target.classList.add('animate-fadeIn');
 							}
 						});
 					}, {
 						threshold: 0.5
 					});

 					document.querySelectorAll('.animate-on-scroll').forEach(function(elem) {
 						observer.observe(elem);
 					});
 				});
 			}
 		}
 	}
 </script>