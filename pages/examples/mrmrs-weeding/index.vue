<template>
	<div>
		<!-- Preloader Start -->
		<div v-if="loading">
			<div class="preloader d-flex align-items-center justify-content-center">
				<div class="preloader-inner position-relative">
					<div class="preloader-circle"></div>
					<div class="preloader-img pere-text">
						<img src="/weeding-page/assets/img/logo/logo.png" alt="">
					</div>
				</div>
			</div>
		</div>
		<!-- Preloader Start -->
		<header>
			<!-- Header Start -->
			<div class="header-area">
				<div class="main-header header-sticky">
					<div class="container">
						<div class="row align-items-center">
							<!-- Logo -->
							<div class="col-xl-2 col-lg-2">
								<div class="logo">
									<a href="/"><img src="/weeding-page/assets/img/logo/logo.png" alt=""></a>
								</div>
							</div>
							<div class="col-xl-10 col-lg-10 col-md-10">
								<!-- Main-menu -->
								<div class="main-menu f-right d-none d-lg-block">
									<nav>                              
										<ul id="navigation">                                                          
											<li><a href="/"> home</a></li>
											<li><a href="/">About</a></li>
											<li><a href="/">gallery</a></li>
											<li><a href="/">Guestbook</a></li>
											<li><a href="/">Blog</a>
												<ul class="submenu">
													<li><a href="/">Blog</a></li>
													<li><a href="/">Blog Details</a></li>
													<li><a href="/">Element</a></li>
												</ul>
											</li>
											<li><a href="/">Contact Us</a></li>
										</ul>
									</nav>
								</div>
							</div> 
							<!-- Mobile Menu -->
							<div class="col-12">
								<div class="mobile_menu d-block d-lg-none"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Header End -->
		</header>
		<main>
			<!--? Slider Area Start-->
			<div class="slider-area">
				<div class="slider-active">
					<!-- Single Slider -->
					<div class="single-slider slider-height hero-overly d-flex align-items-center">
						<div class="container">
							<div class="row d-flex align-items-center">
								<div class="col-xl-8 col-lg-6 col-md-8 ">
									<div class="hero__caption">
										<span data-animation="fadeInLeft" data-delay=".3s">january 23</span>
										<h1 data-animation="fadeInLeft" data-delay=".5s" data-duration="2000ms">Dennis<strong> & </strong> Judith</h1>
										<p data-animation="fadeInLeft" data-delay=".9s">will get married</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Single Slider -->
					<div class="single-slider slider-height hero-overly d-flex align-items-center">
						<div class="container">
							<div class="row d-flex align-items-center">
								<div class="col-xl-8 col-lg-6 col-md-8 ">
									<div class="hero__caption">
										<span data-animation="fadeInLeft" data-delay=".3s">january 23</span>
										<h1 data-animation="fadeInLeft" data-delay=".5s" data-duration="2000ms">Dennis<strong> & </strong> Judith</h1>
										<p data-animation="fadeInLeft" data-delay=".9s">will get married</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Slider Area End-->
			<!--? Our Story Start -->
			<div class="Our-story-area story-padding">
				<div class="container">
					<!-- Section Tittle -->
					<div class="row d-flex justify-content-center">
						<div class="col-xl-7 col-lg-8">
							<div class="section-tittle text-center mb-70">
								<h2>Our Love Story​</h2>
								<img src="/weeding-page/assets/img/gallery/tittle_img.png" alt="">
								<p>Quisque nec facilisis sem. In at commodo velit. Aliquam tempor volutpat laoreet. Quisque non tellus eleifend arcu gravida aliquam. Vivamus quis consequat nisl, nec luctus libero. Nam sodales sem
								egestas sem blandit volutpat. </p>
							</div>
						</div>
					</div>
					<div class="row justify-content-center">
						<div class="col-lg-5">
							<div class="story-caption background-img mb-40" style="background-image: url(/weeding-page/assets/img/gallery/story2.jpg);">
								<div class="story-details">
									<h4>The Proposal</h4>
									<p>Proin at sapien ipsum. Aenean placerat, quam ac tempor congue, orci est luctus ex, ut vestibulum ipsum nisl eu nisi.</p>
									<p>Proin at sapien ipsum. Aenean placerat, quam ac tempor.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-5">
							<div class="story-img">
								<img  class="story2" src="/weeding-page/assets/img/gallery/story1.jpg" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Our Story End -->
			<!--? Services Start -->
			<section class="pricing-card-area section-padding30 section-bg" data-background="/weeding-page/assets/img/gallery/section_bg1.png">
				<div class="container">
					<!-- Section Tittle -->
					<div class="row d-flex justify-content-center">
						<div class="col-lg-8">
							<div class="section-tittle text-center mb-70">
								<h2>Wedding Info</h2>
								<img src="/weeding-page/assets/img/gallery/tittle_img.png" alt="">
								<p>Quisque nec facilisis sem. In at commodo velit. Aliquam tempor volutpat laoreet. Quisque non tellus eleifend arcu gravida aliquam. Vivamus quis consequat nisl</p>
							</div>
						</div>
					</div>
					<div class="row align-items-end">
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="single-card text-center mb-30">
								<div class="card-top">
									<span class="flaticon-chart"></span>
									<h4>The Ceremony</h4>
								</div>
								<div class="card-bottom">
									<ul>
										<li><i class="fas fa-calendar-alt"></i>April 20, 2016</li>
										<li><i class="far fa-clock"></i>5:30 PM</li>
										<li><i class="fas fa-map-marker-alt"></i>The Mayflower Hotel</li>
										<li>1127 Connecticut Avenue,NY</li>
										<li><i class="far fa-map"></i> Check out the map</li>
									</ul>
								</div>
								<div class="card-buttons mt-30">
									<a href="#" class="btn card-btn1">Get Started</a>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="single-card active text-center mb-30">
								<div class="card-top">
									<span class="flaticon-project"></span>
									<h4>The Reception</h4>
								</div>
								<div class="card-bottom">
									<ul>
										<li><i class="fas fa-calendar-alt"></i>April 20, 2016</li>
										<li><i class="far fa-clock"></i>5:30 PM</li>
										<li><i class="fas fa-map-marker-alt"></i>The Mayflower Hotel</li>
										<li>1127 Connecticut Avenue,NY</li>
										<li><i class="far fa-map"></i> Check out the map</li>
									</ul>
								</div>
								<div class="card-buttons mt-30">
									<a href="#" class="btn card-btn1">Get Started</a>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="single-card text-center mb-30">
								<div class="card-top">
									<span class="flaticon-award"></span>
									<h4>The Party</h4>
								</div>
								<div class="card-bottom">
									<ul>
										<li><i class="fas fa-calendar-alt"></i>April 20, 2016</li>
										<li><i class="far fa-clock"></i>5:30 PM</li>
										<li><i class="fas fa-map-marker-alt"></i>The Mayflower Hotel</li>
										<li>1127 Connecticut Avenue,NY</li>
										<li><i class="far fa-map"></i> Check out the map</li>
									</ul>
								</div>
								<div class="card-buttons mt-30">
									<a href="#" class="btn card-btn1">Get Started</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- Services Card End -->
			<!--? Count Down Start -->
			<div class="count-down-area">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-12 col-md-12">
							<div class="count-down-wrapper" data-background="/weeding-page/assets/img/gallery/section_bg2.png">
								<div class="row justify-content-between">
									<div class="col-lg-3 col-md-6 col-sm-6">
										<!-- Counter Up -->
										<div class="single-counter text-center">
											<span class="counter">23</span>
											<p>days</p>
										</div>
									</div>
									<div class="col-lg-2 col-md-6 col-sm-6">
										<!-- Counter Up -->
										<div class="single-counter active text-center">
											<span class="counter">15</span>
											<p>hours</p>
										</div>
									</div>
									<div class="col-lg-2 col-md-6 col-sm-6">
										<!-- Counter Up -->
										<div class="single-counter text-center">
											<span class="counter">46</span>
											<p>mins</p>
										</div>
									</div>
									<div class="col-lg-3 col-md-6 col-sm-6">
										<!-- Counter Up -->
										<div class="single-counter text-center">
											<span class="counter">20</span>
											<p>secs</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Count Down End -->
			<!--? Gallery Area Start -->
			<div class="gallery-area section-padding4">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 col-md-6">
							<div class="single-gallery mb-30">
								<div class="gallery-img" style="background-image: url(/weeding-page/assets/img/gallery/gallery1.png);">
								</div>
								<div class="thumb-content-box">
									<div class="thumb-content">
										<h3>image 01</h3>
										<a href="/weeding-page/assets/img/gallery/gallery1.png" class="menorie-icon"> <i class="ti-plus"></i></a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-8 col-md-6">
							<div class="single-gallery mb-30">
								<div class="gallery-img" style="background-image: url(/weeding-page/assets/img/gallery/gallery2.png);">
								</div>
								<div class="thumb-content-box">
									<div class="thumb-content">
										<h3>image 02</h3>
										<a href="/weeding-page/assets/img/gallery/gallery1.png" class="menorie-icon"> <i class="ti-plus"></i></a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-8 col-md-6">
							<div class="single-gallery mb-30">
								<div class="gallery-img" style="background-image: url(/weeding-page/assets/img/gallery/gallery3.png);">
								</div>
								<div class="thumb-content-box">
									<div class="thumb-content">
										<h3>image 03</h3>
										<a href="/weeding-page/assets/img/gallery/gallery1.png" class="menorie-icon"> <i class="ti-plus"></i></a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="single-gallery mb-30">
								<div class="gallery-img" style="background-image: url(/weeding-page/assets/img/gallery/gallery4.png);">
								</div>
								<div class="thumb-content-box">
									<div class="thumb-content">
										<h3>image 04</h3>
										<a href="/weeding-page/assets/img/gallery/gallery1.png" class="menorie-icon"> <i class="ti-plus"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Gallery Area End -->
			<!--? Gift Start -->
			<section class="gift-area gift-padding fix" data-background="/weeding-page/assets/img/gallery/section_bg3.png">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="gift-caption text-center">
								<h2>The Best Gift From You</h2>
								<p>Will be your presentation in our wedding</p>
								<a href="#" class="btn btn-whit">resarve your Seat</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- Gift End -->
			<!--? Contact form Start -->
			<div class="contact-form section-padding30 fix">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-xl-6 col-lg-6">
							<div class="form-wrapper">
								<form id="contact-form" action="#" method="POST">
									<!-- section tittle -->
									<div class="row ">
										<div class="col-lg-12">
											<div class="section-tittle tittle-form text-center mb-30">
												<h2>Are you attending?</h2>
												<img src="/weeding-page/assets/img/gallery/tittle_img2.png" alt="">
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-lg-12">
											<div class="form-box mb-30">
												<input type="text" name="name" placeholder="Name">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="form-box subject-icon mb-30">
												<input type="Email" name="subject" placeholder="Email">
											</div>
										</div>
										<div class="col-lg-12 mb-30">
											<div class="select-itms">
												<select name="select" id="select2">
													<option value="">1 Guest</option>
													<option value="">2 Guest</option>
													<option value="">3 Guest</option>
													<option value="">4 Guest</option>
												</select>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="form-box message-icon mb-30">
												<textarea name="message" id="message" placeholder="Your Message"></textarea>
											</div>
											<div class="submit-info">
												<button class="btn" type="submit">Confirm now</button>
											</div>
										</div>
									</div>
								</form>
								<!-- Shape inner Flower -->
								<div class="shape-inner-flower">
									<img src="/weeding-page/assets/img/gallery/shape2.png" class="shpe2" alt="">
								</div>
								<!-- Shape outer Flower -->
								<div class="shape-outer-flower">
									<img src="/weeding-page/assets/img/flower/from-top.png" class="outer-top" alt="">
									<img src="/weeding-page/assets/img/flower/from-bottom.png" class="outer-bottom" alt="">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Contact form End -->
			<section class="brand-area section-padding-b">
				<div class="container">
					<!-- Section Tittle -->
					<div class="row d-flex justify-content-center">
						<div class="col-lg-8">
							<div class="section-tittle text-center mb-80">
								<h2>Registry Gift</h2>
								<img src="/weeding-page/assets/img/gallery/tittle_img.png" alt="">
								<p>Quisque nec facilisis sem. In at commodo velit. Aliquam tempor volutpat laoreet. Quisque non tellus eleifend arcu gravida aliquam. Vivamus quis consequat nisl</p>
							</div>
						</div>
					</div>
					<div class="brand-active brand-border">
						<div class="single-brand">
							<img src="/weeding-page/assets/img/service/brand1.jpg" alt="">
						</div>
						<div class="single-brand">
							<img src="/weeding-page/assets/img/service/brand2.jpg" alt="">
						</div>
						<div class="single-brand">
							<img src="/weeding-page/assets/img/service/brand3.jpg" alt="">
						</div>
						<div class="single-brand">
							<img src="/weeding-page/assets/img/service/brand4.jpg" alt="">
						</div>
						<div class="single-brand">
							<img src="/weeding-page/assets/img/service/brand5.jpg" alt="">
						</div>
						<div class="single-brand">
							<img src="/weeding-page/assets/img/service/brand3.jpg" alt="">
						</div>
					</div>
				</div>
			</section>
			<!-- Gallery-2 img Start-->
			<div class="gallery-area2 fix">
				<div class="container-fluid p-0">
					<div class="row">
						<div class="col-md-12">
							<div class="gallery-active owl-carousel">
								<div class="gallery-img">
									<a href="#"><img src="/weeding-page/assets/img/gallery/gallery01.png" alt=""></a>
								</div>
								<div class="gallery-img">
									<a href="#"><img src="/weeding-page/assets/img/gallery/gallery02.png" alt=""></a>
								</div>
								<div class="gallery-img">
									<a href="#"><img src="/weeding-page/assets/img/gallery/gallery03.png" alt=""></a>
								</div>
								<div class="gallery-img">
									<a href="#"><img src="/weeding-page/assets/img/gallery/gallery04.png" alt=""></a>
								</div>
								<div class="gallery-img">
									<a href="#"><img src="/weeding-page/assets/img/gallery/gallery05.png" alt=""></a>
								</div>
								<div class="gallery-img">
									<a href="#"><img src="/weeding-page/assets/img/gallery/gallery06.png" alt=""></a>
								</div>
								<div class="gallery-img">
									<a href="#"><img src="/weeding-page/assets/img/gallery/gallery07.png" alt=""></a>
								</div>
								<div class="gallery-img">
									<a href="#"><img src="/weeding-page/assets/img/gallery/gallery08.png" alt=""></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Gallery-2 img End-->
		</main>
		<footer>
			<!-- Footer Start-->
			<div class="footer-main" data-background="/weeding-page/assets/img/gallery/section_bg4.png">
				<div class="footer-area footer-padding">
					<div class="container">
						<div class="row d-flex justify-content-between">
							<div class="col-xl-2  col-lg-3 col-md-5 col-sm-6">
								<div class="single-footer-caption mb-50">
									<div class="single-footer-caption mb-30">
										<!-- logo -->
										<div class="footer-logo">
											<a href="index.html"><img src="/weeding-page/assets/img/logo/logo2_footer.png" alt=""></a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3  col-lg-3 col-lg-2 col-md-5 col-sm-6">
								<div class="single-footer-caption mb-50">
									<div class="footer-tittle">
										<h4>WEDDING INFO</h4>
										<ul>
											<li><a href="#">Why Hire a Planner?</a></li>
											<li><a href="#">How Can I Make An</a></li>
											<li><a href="#">Appointment?</a></li>
											<li><a href="#">How to Choose a Venue</a></li>
											<li><a href="#">Event Catalogue</a></li>
											<li><a href="#"> Accept</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-xl-2  col-lg-3 col-md-5 col-sm-6">
								<div class="single-footer-caption mb-50">
									<div class="footer-tittle">
										<h4>ABOUT US</h4>
										<ul>
											<li><a href="#">Bridesmaids</a></li>
											<li><a href="#">November 22, 2020</a></li>
											<li><a href="#">Groomsmen</a></li>
											<li><a href="#">Groomsmen</a></li>
											<li><a href="#">November 22, 2020</a></li>
											<li><a href="#">JEWELRY</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-xl-2  col-lg-3 col-md-5 col-sm-6">
								<div class="single-footer-caption mb-50">
									<div class="footer-tittle">
										<h4>LOCATION</h4>
										<ul>
											<li><a href="#">Coloelib.com</a></li>
											<li>+(123) 456 - 7890 - 456 35 W 46nd Street NY</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- footer-bottom area -->
				<div class="footer-bottom-area">
					<div class="container">
						<div class="footer-border">
							<div class="row d-flex align-items-center">
								<div class="col-xl-12 ">
									<div class="footer-copy-right text-center">
										<p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
											Copyright &copy; {{year}} All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://dksindo.com" target="_blank">Phoenix Digital Tech Solution</a>
											<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Footer End-->
			</footer>
		</div>
	</template>

	<script setup>
		import {ref} from 'vue';

		const date = new Date;
		const year = date.getFullYear();
		let loading = ref(true);

		onMounted(() => {
			setTimeout(() => {
				loading.value = false
			}, 1500)
		})


		useHead({
			title: 'Mr & Mrs Weeding Website - Phoenix Digital Tech Solution',
			
			link: [
			{
				rel: 'stylesheet',
				src: "/weeding-page/assets/css/bootstrap.min.css",
			},
			{
				rel: 'stylesheet',
				href: "/weeding-page/assets/css/owl.carousel.min.css"
			},
			{
				rel: 'stylesheet',
				href: '/weeding-page/assets/css/flaticon.css'
			},
			{
				rel: 'stylesheet',
				href: '/weeding-page/assets/css/slicknav.css'
			},
			{
				rel: 'stylesheet',
				href: '/weeding-page/assets/css/animate.min.css'
			},
			{
				rel: 'stylesheet',
				href: '/weeding-page/assets/css/magnific-popup.css'
			},
			{
				rel: 'stylesheet',
				href: '/weeding-page/assets/css/fontawesome-all.min.css'
			},
			{
				rel: 'stylesheet',
				href: '/weeding-page/assets/css/themify-icons.css'
			},
			{
				rel: 'stylesheet',
				href: '/weeding-page/assets/css/slick.css'
			},
			{
				rel: 'stylesheet',
				href: '/weeding-page/assets/css/nice-select.css'
			},
			{
				rel: 'stylesheet',
				href: '/weeding-page/assets/css/style.css'
			},
			],

			script: [
			{
				src: '/weeding-page/assets/js/vendor/modernizr-3.5.0.min.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/vendor/jquery-1.12.4.min.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/popper.min.js',
				body: true
			},

			{
				src: '/weeding-page/assets/js/bootstrap.min.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/jquery.slicknav.min.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/owl.carousel.min.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/slick.min.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/gijgo.min.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/wow.min.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/animated.headline.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/jquery.magnific-popup.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/jquery.scrollUp.min.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/jquery.nice-select.min.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/jquery.sticky.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/jquery.counterup.min.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/waypoints.min.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/contact.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/jquery.form.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/jquery.validate.min.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/mail-script.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/jquery.ajaxchimp.min.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/plugins.js',
				body: true
			},
			{
				src: '/weeding-page/assets/js/main.j',
				body: true
			},
			],

			meta: [
				{ name: 'description', content: 'Menyentuh hati, mempesona, dan mengabadikan momen indah, landing page kami adalah pintu gerbang ke kisah cinta Anda yang tak terlupakan. Dengan desain yang elegan dan penuh kasih, kami mengundang Anda untuk merayakan cinta sejati Anda dalam sebuah perjalanan visual yang memukau. Setiap detailnya dipelajari dengan cermat untuk menciptakan pengalaman yang menakjubkan dan memukau bagi setiap pasangan yang merencanakan pernikahan mereka. Sambutlah tamu Anda dengan hangat, jelajahi pilihan yang tak terbatas, dan nikmati momen abadi dalam landing page kami yang dipenuhi dengan cahaya, harapan, dan kebahagiaan.' },
				{
					name: 'og:title', content: 'Phoenix Digital Tech Solution'
				},
				{
					name: 'description', content: 'Menyentuh hati, mempesona, dan mengabadikan momen indah, landing page kami adalah pintu gerbang ke kisah cinta Anda yang tak terlupakan. Dengan desain yang elegan dan penuh kasih, kami mengundang Anda untuk merayakan cinta sejati Anda dalam sebuah perjalanan visual yang memukau. Setiap detailnya dipelajari dengan cermat untuk menciptakan pengalaman yang menakjubkan dan memukau bagi setiap pasangan yang merencanakan pernikahan mereka. Sambutlah tamu Anda dengan hangat, jelajahi pilihan yang tak terbatas, dan nikmati momen abadi dalam landing page kami yang dipenuhi dengan cahaya, harapan, dan kebahagiaan.'
				},
				{
					name: 'og:description', content: 'Menyentuh hati, mempesona, dan mengabadikan momen indah, landing page kami adalah pintu gerbang ke kisah cinta Anda yang tak terlupakan. Dengan desain yang elegan dan penuh kasih, kami mengundang Anda untuk merayakan cinta sejati Anda dalam sebuah perjalanan visual yang memukau. Setiap detailnya dipelajari dengan cermat untuk menciptakan pengalaman yang menakjubkan dan memukau bagi setiap pasangan yang merencanakan pernikahan mereka. Sambutlah tamu Anda dengan hangat, jelajahi pilihan yang tak terbatas, dan nikmati momen abadi dalam landing page kami yang dipenuhi dengan cahaya, harapan, dan kebahagiaan.'
				},
				{
					name: 'og:image', content: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				}
				],
		})

useSeoMeta({
	title: 'Phoenix Digital Tech Solution',
	ogTitle: 'Phoenix Digital Tech Solution',
	description: 'Landing page online shop Seraya Coffee House dirancang untuk menghadirkan pengalaman yang menarik dan menawan bagi para pengunjung. Dengan desain yang bersih dan elegan, kami mengundang Anda untuk menjelajahi berbagai jenis kopi dan produk-produk berkualitas tinggi yang kami tawarkan. Dari aroma kopi segar hingga tata letak yang intuitif, kami berusaha menciptakan lingkungan online yang memikat yang memperkuat identitas merek kami sebagai tujuan utama bagi para pecinta kopi.',
	ogDescription: 'Landing page online shop Seraya Coffee House dirancang untuk menghadirkan pengalaman yang menarik dan menawan bagi para pengunjung. Dengan desain yang bersih dan elegan, kami mengundang Anda untuk menjelajahi berbagai jenis kopi dan produk-produk berkualitas tinggi yang kami tawarkan. Dari aroma kopi segar hingga tata letak yang intuitif, kami berusaha menciptakan lingkungan online yang memikat yang memperkuat identitas merek kami sebagai tujuan utama bagi para pecinta kopi.',
	ogImage: 'https://dksindo.com/images/portfolio/weeding-website.png',
	twitterCard: 'summary_large_image',
});
</script>