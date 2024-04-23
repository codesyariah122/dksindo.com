<template>
	<div>
		<!-- Spinner Start -->
		<div v-if="loading" class="loader_bg">
			<div class="loader"><img src="/milina/images/loading.gif" alt="#"/></div>
		</div>
		<!-- Spinner End -->

		<!-- header -->
		<header>
			<!-- header inner -->
			<div class="header">
				<div class="container-fluid">
					<div class="row">
						<div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
							<div class="full">
								<div class="center-desk">
									<div class="logo">
										<a href="/"><img src="/milina/images/logo.png" alt="#" /></a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-7 col-lg-7 col-md-9 col-sm-9">
							<nav class="navigation navbar navbar-expand-md navbar-dark ">
								<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
									<span class="navbar-toggler-icon"></span>
								</button>
								<div class="collapse navbar-collapse" id="navbarsExample04">
									<ul class="navbar-nav mr-auto">
										<li class="nav-item active">
											<a class="nav-link" href="index.html">Home</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="about.html">About</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="we-do.html">What we do</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="pricing.html">Pricing</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="contact.html">Contact Us</a>
										</li>
									</ul>
								</div>
							</nav>
						</div>
						<div class="col-md-2">
							<ul class="social_icon">
								<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
		<!-- end header inner -->
		<!-- end header -->
		<!-- banner -->
		<section class="banner_main">
			<div id="myCarousel" class="carousel slide banner1" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<div class="container-fluid">
							<div class="carousel-caption relative">
								<div class="row d_flex">
									<div class="col-md-6">
										<img class="bann_img" src="/milina/images/banner_ing.jpg" alt="#"/>
									</div>
									<div class="col-md-6">
										<span>01/03</span>
										<h1>Milina nail Salon Creating Beauty</h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
										<a class="get_btn" href="Javascript:void(0)" role="button">Get Appoinment</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="container-fluid">
							<div class="carousel-caption relative">
								<div class="row d_flex">
									<div class="col-md-6">
										<img class="bann_img" src="/milina/images/banner_ing.jpg" alt="#"/>
									</div>
									<div class="col-md-6">
										<span>02/03</span>
										<h1>Milina nail Salon Creating Beauty</h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
										<a class="get_btn" href="Javascript:void(0)" role="button">Get Appoinment</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="container-fluid">
							<div class="carousel-caption relative">
								<div class="row d_flex">
									<div class="col-md-6">
										<img class="bann_img" src="/milina/images/banner_ing.jpg" alt="#"/>
									</div>
									<div class="col-md-6">
										<span>03/03</span>
										<h1>Milina nail Salon Creating Beauty</h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
										<a class="get_btn" href="Javascript:void(0)" role="button">Get Appoinment</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
						<i class="fa fa-long-arrow-left" aria-hidden="true"></i>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
						<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
		</section>
		<!-- end banner -->
		<!-- what we do  -->
		<div class="we_do slin">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="titlepage">
							<h2>What We Do </h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-10 offset-lg-1 col-md-12">
						<div class="row">
							<div class="col-md-3 col-sm-6">
								<div class="we_box">
									<i><img src="/milina/images/weicon1.png" alt="#"/></i>
									<h3>Nail Art</h3>
									<p>Lorem ipsum dolor sit amet, consectetur </p>
								</div>
							</div>
							<div class="col-md-3 col-sm-6">
								<div class="we_box">
									<i><img src="/milina/images/weicon2.png" alt="#"/></i>
									<h3>Manicure</h3>
									<p>Lorem ipsum dolor sit amet, consectetur </p>
								</div>
							</div>
							<div class="col-md-3 col-sm-6">
								<div class="we_box">
									<i><img src="/milina/images/weicon3.png" alt="#"/></i>
									<h3>Pedicure</h3>
									<p>Lorem ipsum dolor sit amet, consectetur </p>
								</div>
							</div>
							<div class="col-md-3 col-sm-6">
								<div class="we_box">
									<i><img src="/milina/images/weicon4.png" alt="#"/></i>
									<h3>Paraffin wax</h3>
									<p>Lorem ipsum dolor sit amet, consectetur </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- end what we do  -->
		<!-- about -->
		<div class="about slin2">
			<div class="container">
				<div class="row d_flex">
					<div class="col-md-6">
						<div class="titlepage">
							<h2>About Us</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
							<a class="read_more" href="Javascript:void(0)"> Read More</a>
						</div>
					</div>
					<div class="col-md-6">
						<div class="about_img">
							<figure><img src="/milina/images/about.png" alt="#"/></figure>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- end about -->
		<!-- our pricing -->
		<div  class="pricing slin">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="titlepage">
							<h2>Our Pricing</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4">
						<div class="pricing_box">
							<div class="pricing_box_ti">
								<h3> <span>$</span>20<strong>/one Day</strong></h3>
							</div>
							<div class="our_pricing">
								<span>Regular</span>
								<p>Lorem ipsum dolor sit amet, iscing elit, sed do magna</p>
							</div>
						</div>
						<a class="read_more mar_top" href="Javascript:void(0)"> Book Now</a>
					</div>
					<div class="col-md-4">
						<div class="pricing_box">
							<div class="pricing_box_ti">
								<h3> <span>$</span>30<strong>/one Day</strong></h3>
							</div>
							<div class="our_pricing">
								<span>Standard</span>
								<p>Lorem ipsum dolor sit amet, iscing elit, sed do magna</p>
							</div>
						</div>
						<a class="read_more mar_top" href="Javascript:void(0)"> Book Now</a>
					</div>
					<div class="col-md-4">
						<div class="pricing_box">
							<div class="pricing_box_ti">
								<h3> <span>$</span>40<strong>/one Day</strong></h3>
							</div>
							<div class="our_pricing">
								<span>Premium</span>
								<p>Lorem ipsum dolor sit amet, iscing elit, sed do magna</p>
							</div>
						</div>
						<a class="read_more mar_top" href="Javascript:void(0)"> Book Now</a>
					</div>
				</div>
			</div>
		</div>
		<!-- end our pricing -->
		<!-- experts -->
		<div  class="experts slin2">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="titlepage">
							<h2>Meet Our Experts</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-12">
						<div class="row">
							<div class="col-md-4">
								<div id="exp" class="experts_box">
									<div class="experts_img">
										<figure><img src="/milina/images/blog1.jpg" alt="#"/></figure>
									</div>
									<div class="meet">
										<h3>Jacob</h3>
										<p>Lorem ipsum dolor sit amet, iscing elit, sed do magna </p>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div id="exp" class="experts_box">
									<div class="experts_img">
										<figure><img src="/milina/images/blog2.jpg" alt="#"/></figure>
									</div>
									<div class="meet">
										<h3>Lonut</h3>
										<p>Lorem ipsum dolor sit amet, iscing elit, sed do magna</p>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div id="exp" class="experts_box">
									<div class="experts_img">
										<figure><img src="/milina/images/blog3.jpg" alt="#"/></figure>
									</div>
									<div class="meet">
										<h3>Irina</h3>
										<p>Lorem ipsum dolor sit amet, iscing elit, sed do magna</p>
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<a class="read_more mar_top exper" href="Javascript:void(0)"> Read More</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- end experts -->
		<!--  contact -->
		<div class="contact">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="titlepage">
							<h2>Get In Touch</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 offset-md-3">
						<form id="request" class="main_form">
							<div class="row">
								<div class="col-md-12 ">
									<input class="contactus" placeholder="Full Name" type="type" name="Full Name"> 
								</div>
								<div class="col-md-12">
									<input class="contactus" placeholder="Email " type="type" name="Email "> 
								</div>
								<div class="col-md-12">
									<input class="contactus" placeholder="Phone Number" type="type" name="Phone Number">                          
								</div>
								<div class="col-md-12">
									<textarea class="textarea" placeholder="Message" type="type" Message="Name">Message</textarea>
								</div>
								<div class="col-md-12">
									<button class="send_btn">Send</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12">
						<div class="map_main">
							<div class="map-responsive">
								<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="386" frameborder="0" style="border:0; width: 100%;" allowfullscreen=""></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- end contact -->
		<!--  footer -->
		<footer>
			<div class="footer">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<ul class="conta">
								<li><i class="fa fa-map-marker" aria-hidden="true"></i> Passages of Lorem Ipsum available</li>
								<li><i class="fa fa-phone" aria-hidden="true"></i> Call : +012334567890</li>
								<li> <i class="fa fa-envelope" aria-hidden="true"></i><a href="#"> demo@gmail.com</a></li>
							</ul>
						</div>
						<div class=" col-md-3 col-sm-6">
							<h3>About </h3>
							<p class="variat">There are many variations of passages of Lorem Ipsum available, but the majority have suffered le</p>
						</div>
						<div class=" col-md-3 col-sm-6">
							<h3>Nail Salon  </h3>
							<p class="variat" >There are many variations of passages of Lorem Ipsum available, but the majority have suffered le</p>
						</div>
						<div class="col-md-2 col-sm-6">
							<h3>Useful Link</h3>
							<ul class="link_menu">
								<li class="active"><a href="/">Home</a></li>
								<li><a href="/"> About</a></li>
								<li><a href="/">What we do</a></li>
								<li><a href="/">Pricing</a></li>
								<li><a href="/">Contact Us</a></li>
							</ul>
						</div>
						<div class="col-md-4 col-sm-6">
							<h3>Subscribe</h3>
							<form class="bottom_form">
								<a class="right_btn" href="Javascript:void(0)"> <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
								<input class="enter" placeholder="Enter your email" type="text" name="Enter your email">
								<p >There are many variations of passages </p>
							</form>
						</div>
					</div>
				</div>
				<div class="copyright">
					<div class="container">
						<div class="row">
							<div class="col-md-10 offset-md-1">
								<p>© {{year}} All Rights Reserved. Design by  <a href="/"> Free Html Templates</a> Distributed By <a href="https://dksindo.com">Phoenix Digital Tech Solution</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<!-- end footer -->
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
		title: 'Milina  - Phoenix Digital Tech Solution',
		bodyAttrs: {
			class: 'main-layout'
		},
		link: [
		{
			rel: 'stylesheet',
			href: "/milina/css/bootstrap.min.css"
		},
		{
			rel: 'stylesheet',
			href: '/milina/css/style.css'
		},
		{
			rel: 'stylesheet',
			href: '/milina/css/responsive.css'
		},
		{
			rel: 'stylesheet',
			href: '/milina/css/jquery.mCustomScrollbar.min.css'
		},
		{
			rel: 'stylesheet',
			href: 'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css'
		},
		{
			rel: 'stylesheet',
			href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css'
		},
		],

		script: [
		{
			src: '/milina/js/jquery.min.js',
		},
		{
			src: '/milina/js/bootstrap.bundle.min.js',
		},
		{
			src: '/milina/js/jquery-3.0.0.min.js',
		},
		{
			src: '/milina/js/jquery.mCustomScrollbar.concat.min.js',
		},
		{
			src: '/milina/js/custom.js',
			body: true
		}
		],

		meta: [
			{ name: 'description', content: 'Milina Official Store adalah toko online yang menyediakan produk kecantikan dan gaya wanita. Temukan skincare, makeup, fashion, dan aksesori berkualitas tinggi untuk menyempurnakan penampilan Anda. Dengan pelayanan yang ramah dan pengiriman cepat, Milina menjadi pilihan tepat bagi wanita yang ingin tampil cantik setiap hari.' },
			{
				name: 'og:title', content: 'Phoenix Digital Tech Solution'
			},
			{
				name: 'description', content: 'Milina Official Store adalah toko online yang menyediakan produk kecantikan dan gaya wanita. Temukan skincare, makeup, fashion, dan aksesori berkualitas tinggi untuk menyempurnakan penampilan Anda. Dengan pelayanan yang ramah dan pengiriman cepat, Milina menjadi pilihan tepat bagi wanita yang ingin tampil cantik setiap hari.'
			},
			{
				name: 'og:description', content: 'kami Phoenix Digital Tech Solution sebagai Konsultan IT, Web Development, dan seputar solusi digital, kami membantu memimpin Anda melalui perjalanan digital, mulai dari perencanaan hingga pelaksanaan. Dengan pengetahuan mendalam tentang teknologi terbaru dan praktik terbaik, kami membawa solusi yang inovatif dan terukur untuk membantu bisnis Anda mencapai tujuan online mereka dengan percaya diri'
			},
			{
				name: 'og:image', content: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			}
			],
	})

	useSeoMeta({
		title: 'Phoenix Digital Tech Solution',
		ogTitle: 'Phoenix Digital Tech Solution',
		description: 'Milina Official Store adalah toko online yang menyediakan produk kecantikan dan gaya wanita. Temukan skincare, makeup, fashion, dan aksesori berkualitas tinggi untuk menyempurnakan penampilan Anda. Dengan pelayanan yang ramah dan pengiriman cepat, Milina menjadi pilihan tepat bagi wanita yang ingin tampil cantik setiap hari.',
		ogDescription: 'Milina Official Store adalah toko online yang menyediakan produk kecantikan dan gaya wanita. Temukan skincare, makeup, fashion, dan aksesori berkualitas tinggi untuk menyempurnakan penampilan Anda. Dengan pelayanan yang ramah dan pengiriman cepat, Milina menjadi pilihan tepat bagi wanita yang ingin tampil cantik setiap hari.',
		ogImage: 'https://dksindo.com//milina/images/portfolio/coffee-shop.png',
		twitterCard: 'summary_large_image',
	});
</script>