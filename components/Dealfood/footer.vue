<template>
	<div class="footer_container">
		<!-- info section -->
		<section class="info_section ">
			<div class="container">
				<div class="contact_box">
					<a href="">
						<i class="fa fa-map-marker" aria-hidden="true"></i>
					</a>
					<a href="">
						<i class="fa fa-phone" aria-hidden="true"></i>
					</a>
					<a href="">
						<i class="fa fa-envelope" aria-hidden="true"></i>
					</a>
				</div>
				<div class="info_links">
					<ul>
						<li class="active">
							<a href="index.html">
								Home
							</a>
						</li>
						<li>
							<a href="about.html">
								About
							</a>
						</li>
						<li>
							<a class="" href="blog.html">
								Blog
							</a>
						</li>
						<li>
							<a class="" href="testimonial.html">
								Testimonial
							</a>
						</li>
					</ul>
				</div>
				<div class="social_box">
					<a href="">
						<i class="fa fa-facebook" aria-hidden="true"></i>
					</a>
					<a href="">
						<i class="fa fa-twitter" aria-hidden="true"></i>
					</a>
					<a href="">
						<i class="fa fa-linkedin" aria-hidden="true"></i>
					</a>
				</div>
			</div>
		</section>
		<!-- end info_section -->


		<!-- footer section -->
		<footer class="footer_section">
			<div class="container">
				<p>
					&copy; {{year}} All Rights Reserved By
					<a href="https://dksindo.com/examples/dealfood">Dealfood</a><br>
					Distributed By: <a href="https://dksindo.com">Phoenix Digital Tech Solution</a>
				</p>
			</div>
		</footer>
		<!-- footer section -->

	</div>
</template>

<script setup>
	const date = new Date;
	const year = date.getFullYear();
</script>