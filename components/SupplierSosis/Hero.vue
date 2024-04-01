 <style>
 	.parallax {
 		background-image: url('https://agrobogautama.co.id/assets/img/intro_img/1.jpg');
 		background-size: cover;
 		background-repeat: no-repeat;
 		background-attachment: fixed;
 		background-position: center;
 		color: #fff;
 		text-align: center;
 		height: 70vh;
 		display: flex;
 		align-items: center;
 		justify-content: center;
 		flex-direction: column;
 		position: relative;
 		overflow: hidden;
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
        <h1>Welcome to Supplier Sosis</h1>
        <p>Providing the best sausages for your business needs</p>
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