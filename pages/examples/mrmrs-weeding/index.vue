<template>
	<div>
		<Head>
			<Title>Mr & Mrs - Weeding Website</Title>
		</Head>

		<div v-show="loading" id="spinner" class="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
			<div class="spinner-grow text-primary" role="status"></div>
		</div>

		<div class="container-fluid sticky-top px-0">
			<div class="container-fluid">
				<div class="container px-0">
					<nav class="navbar navbar-light navbar-expand-xl" id="navBar">
						<a href="/" class="navbar-brand">
							<h4 class="text-primary display-6 fw-bold mb-0">Mr<strong class="text-secondary">&amp;</strong>Mrs</h4>
						</a>
						<button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
							<span class="fa fa-bars text-primary"></span>
						</button>
						<div class="collapse navbar-collapse py-3 block" id="navbarCollapse">
							<div class="navbar-nav mx-auto border-top text-pink-700">
								<a href="#weddingHome" class="nav-item nav-link active">Home</a>
								<a href="#weddingAbout" class="nav-item nav-link">About</a>
								<a href="#weddingStory" class="nav-item nav-link">Story</a>
								<a href="#weddingTimeline" class="nav-item nav-link">Timeline</a>
								<a href="#weddingGallery" class="nav-item nav-link">Gallery</a>
								<a href="#weddingRsvp" class="nav-item nav-link">RSVP</a>
							</div>
							<div class="d-flex align-items-center flex-nowrap pt-xl-0">
								<a href="#weddingRsvp" class="btn btn-primary btn-primary-outline-0 py-2 px-4 ms-4">Book Attendance</a>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>

		<!-- Carousel -->
		<div class="container-fluid carousel-header px-0">
			<div id="carouselId" class="carousel slide" data-bs-ride="carousel">
				<ol class="carousel-indicators">
					<li data-bs-target="#carouselId" data-bs-slide-to="0" class="active"></li>
					<li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
					<li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
				</ol>
				<div class="carousel-inner" role="listbox">
					<div class="carousel-item active">
						<img src="/weeding-page/img/carousel-1.jpg" class="img-fluid" alt="Image">
						<div class="carousel-caption">
							<div class="p-3 mx-auto animated zoomIn" style="max-width: 900px;">
								<div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
									<h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">WE ARE GETTING MARRIED</h4>
								</div>
								<h1 class="display-1 text-capitalize text-white mb-3">Evelyn <i class="fa fa-heart text-primary"></i> Anthony</h1>
								<div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5" style="border-style: double;">
									<h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">June 28 2024</h4>
								</div>
								<div class="d-flex align-items-center justify-content-center">
									<a class="btn btn-primary btn-primary-outline-0 py-3 px-5" href="#">RSVP Now</a>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<img src="/weeding-page/img/carousel-2.jpg" class="img-fluid" alt="Image">
						<div class="carousel-caption">
							<div class="p-3 mx-auto animated zoomIn" style="max-width: 900px;">
								<div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5" style="border-style: double;">
									<h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">WE ARE GETTING MARRIED</h4>
								</div>
								<h1 class="display-1 text-capitalize text-white mb-3">Evelyn <i class="fa fa-heart text-primary"></i> Anthony</h1>
								<div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
									<h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">June 28 2024</h4>
								</div>
								<div class="d-flex align-items-center justify-content-center">
									<a class="btn btn-primary btn-primary-outline-0 py-3 px-5" href="#">RSVP Now</a>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<img src="/weeding-page/img/carousel-3.png" class="img-fluid bg-secondary" alt="Image">
						<div class="carousel-caption">
							<div class="p-3 mx-auto animated zoomIn" style="max-width: 900px;">
								<div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
									<h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">WE ARE GETTING MARRIED</h4>
								</div>
								<h1 class="display-1 text-capitalize text-white mb-3">Evelyn <i class="fa fa-heart text-primary"></i> Anthony</h1>
								<div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
									<h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">June 28 2024</h4>
								</div>
								<div class="d-flex align-items-center justify-content-center">
									<a class="btn btn-primary btn-primary-outline-0 py-3 px-5" href="#">RSVP Now</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>

		<!-- Hello! Start -->
		<div class="container-fluid position-relative py-5" id="weddingAbout">
			<div class="position-absolute" style="top: -35px; right: 0;">
				<img src="/weeding-page/img/tamp-bg-1.png" class="img-fluid" alt="">
			</div>
			<div class="position-absolute" style="top: -10px; left: 0; transform: rotate(150deg);">
				<img src="/weeding-page/img/tamp-bg-1.png" class="img-fluid" alt="">
			</div>
			<div class="container position-relative py-5">
				<div class="mx-auto text-center mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 800;">
					<h1 class="text-primary display-1">Hello!</h1>
					<h4 class="text-dark mb-0">We invite you to celebrate our wedding</h4>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<div class="row g-4 align-items-center">
							<div class="col-lg-5 wow fadeInUp" data-wow-delay="0.3s">
								<div class="d-flex">
									<div class="text-end my-auto pe-4">
										<h3 class="text-primary mb-3">Evelyn</h3>
										<p class="text-dark mb-0" style="line-height: 30px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
										</p>
									</div>
									<img src="/weeding-page/img/bride.jpg" class="img-fluid img-border" alt="">
								</div>
							</div>
							<div class="col-lg-2 wow fadeIn" data-wow-delay="0.5s">
								<div class="d-flex align-items-center justify-content-center">
									<i class="fa fa-heart fa-5x text-primary"></i>
								</div>
							</div>
							<div class="col-lg-5 wow fadeInUp" data-wow-delay="0.3s">
								<div class="d-flex">
									<img src="/weeding-page/img/Groom.jpg" class="img-fluid img-border" alt="">
									<div class="my-auto ps-4">
										<h3 class="text-primary mb-3">Anthony</h3>
										<p class="text-dark mb-0" style="line-height: 30px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Hello! End -->

		<!-- Story Start -->
		<div class="container-fluid story position-relative py-5" id="weddingStory">
			<div class="position-absolute" style="top: -35px; right: 0;">
				<img src="/weeding-page/img/tamp-bg-1.png" class="img-fluid" alt="">
			</div>
			<div class="position-absolute" style="top: -15px; left: 0; transform: rotate(150deg);">
				<img src="/weeding-page/img/tamp-bg-1.png" class="img-fluid" alt="">
			</div>
			<div class="container position-relative py-5">
				<div class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
					<h5 class="text-uppercase text-primary fw-bold mb-4">Story</h5>
					<h1 class="display-4">Our Love Story</h1>
				</div>
				<div class="story-timeline">
					<div class="row wow fadeInUp" data-wow-delay="0.2s">
						<div class="col-md-6 text-end border-0 border-top border-end border-secondary p-4">
							<div class="d-inline-flex align-items-center h-100">
								<img src="/weeding-page/img/story-1.jpg" class="img-fluid w-100 img-border" alt="">
							</div>
						</div>
						<div class="col-md-6 border-start border-top border-secondary p-4 pe-0">
							<div class="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
								<h4 class="mb-2 text-dark">First Meet</h4>
								<p class="text-uppercase text-primary mb-2" style="letter-spacing: 3px;">01 Jan 2050</p>
								<p class="m-0 fs-5">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
							</div>
						</div>
					</div>
					<div class="row flex-column-reverse flex-md-row wow fadeInUp" data-wow-delay="0.3s">
						<div class="col-md-6 text-end border-end border-top border-secondary p-4 ps-0">
							<div class="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
								<h4 class="text-dark mb-2">First Date</h4>
								<p class="text-uppercase text-primary mb-2" style="letter-spacing: 3px;">01 Jan 2050</p>
								<p class="m-0 fs-5">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
							</div>
						</div>
						<div class="col-md-6 border-start border-top border-secondary p-4">
							<div class="d-inline-flex align-items-center h-100">
								<img src="/weeding-page/img/story-2.jpg" class="img-fluid w-100 img-border" alt="">
							</div>
						</div>
					</div>
					<div class="row wow fadeInUp" data-wow-delay="0.4s">
						<div class="col-md-6 text-end border-end border-top border-secondary p-4 ps-0">
							<div class="d-inline-flex align-items-center h-100">
								<img src="/weeding-page/img/story-3.jpg" class="img-fluid w-100 img-border" alt="">
							</div>
						</div>
						<div class="col-md-6 border-start border-top border-secondary p-4 pe-0">
							<div class="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
								<h4 class="text-dark mb-2">Proposal</h4>
								<p class="text-uppercase text-primary mb-2" style="letter-spacing: 3px;">01 Jan 2050</p>
								<p class="m-0 fs-5">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
							</div>
						</div>
					</div>
					<div class="row flex-column-reverse flex-md-row wow fadeInUp" data-wow-delay="0.5s">
						<div class="col-md-6 text-end border border-start-0 border-secondary p-4 ps-0">
							<div class="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
								<h4 class="text-dark mb-2">Enagagement</h4>
								<p class="text-uppercase text-primary mb-2" style="letter-spacing: 3px;">01 Jan 2050</p>
								<p class="m-0 fs-5">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
							</div>
						</div>
						<div class="col-md-6 border border-end-0 border-secondary p-4">
							<div class="d-inline-flex align-items-center h-100">
								<img src="/weeding-page/img/story-4.jpg" class="img-fluid w-100 img-border" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Story End -->

		<!--- Wedding Date -->
		<div class="container-fluid wedding-date-bg position-relative py-5">
			<div class="position-absolute" style="top: -100px; right: 0;">
				<img src="/weeding-page/img/tamp-bg-1.png" class="img-fluid" alt="">
			</div>
			<div class="position-absolute" style="top: -80px; left: 0; transform: rotate(150deg);">
				<img src="/weeding-page/img/tamp-bg-1.png" class="img-fluid" alt="">
			</div>
			<div class="container py-5 wow zoomIn" data-wow-delay="0.1s">
				<div class="wedding-date text-center bg-light p-5" style="border-style: double !important; border: 15px solid rgba(253, 93, 93, 0.5);">
					<div class="wedding-date-content">
						<div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
							<h4 class="text-dark text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">June 28, 2024</h4>
						</div>
						<h1 class="display-4">We Are Getting Married</h1>
						<p class="text-dark fs-5">Niloy Hotel New York , 123 West 23th Street, NY</p>
						<div class="d-flex align-items-center justify-content-center mb-5">
							<div class="text-dark fs-2 me-4">
								<div>00</div>
								<span>Days</span>
							</div>
							<div class="text-dark fs-2 me-4">
								<div>00</div>
								<span>Hours</span>
							</div>
							<div class="text-dark fs-2 me-4">
								<div>00</div>
								<span>Mins</span>
							</div>
							<div class="text-dark fs-2 me-0">
								<div>00</div>
								<span>Secs</span>
							</div>
						</div>
						<a class="btn btn-primary btn-primary-outline-0 py-3 px-5" href="#">Book Your Attendance</a>
					</div>
					<div class="position-absolute" style="top: 15%; right: -30px; transform: rotate(320deg); opacity: 0.5; z-index: 1;">
						<img src="/weeding-page/img/attendance-bg.png" class="img-fluid" alt="">
					</div>
					<div class="position-absolute" style="top: 15%; left: -10px; transform: rotate(-320deg); opacity: 0.5; z-index: 1;">
						<img src="/weeding-page/img/attendance-bg.png" class="img-fluid" alt="">
					</div>
				</div>
			</div>
		</div>
		<!-- Wedding Date -->

		<!-- Back to Top -->
		<a href="#" class="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"><i class="fa fa-arrow-up"></i></a>  
	</div>
</template>



<script setup>
	import {ref} from 'vue';

	const date = new Date;
	const year = date.getFullYear();
	let loading = ref(true);

	useHead({
		title: 'Mr & Mrs - Weeding Website',
		bodyAttrs: {
			'data-bs-spy': 'scroll',
			'data-bs-target': '#navBar',
			id: 'weddingHome'
		},
		link: [
		{
			rel: 'stylesheet',
			href: "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Open+Sans:wght@400;500;600&family=Petit+Formal+Script&display=swap"
		},
		{
			rel: 'stylesheet',
			href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css'
		},
		{
			rel: 'stylesheet',
			href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css'
		},
		{
			rel: 'stylesheet',
			href: '/weeding-page/lib/animate/animate.min.css'
		},
		{
			rel: 'stylesheet',
			href: '/weeding-page/lib/lightbox/css/lightbox.min.css'
		},
		{
			rel: 'stylesheet',
			href: '/weeding-page/css/bootstrap.min.css'
		},
		{
			rel: 'stylesheet',
			href: '/weeding-page/css/style.css'
		},
		],

		script: [
		{
			src: '/coffee-master/js/vendor/jquery-2.2.4.min.js',
			body: true
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
			body: true,
			crossorigin: 'anonymous'
		},
		{
			src: '/coffee-master/js/vendor/bootstrap.min.js',
			body: true,
		},
		{
			src: '/weeding-page/lib/wow/wow.min.js',
			body: true
		},
		{
			src: '/weeding-page/lib/easing/easing.min.js',
			body: true
		},
		{
			src: '/weeding-page/lib/waypoints/waypoints.min.js',
			body: true
		},
		{
			src: '/weeding-page/lib/lightbox/js/lightbox.min.js',
			body: true
		},
		{
			src: '/weeding-page/js/main.js',
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

	onMounted(() => {
		setTimeout(() => {
			loading = false
		}, 1000)
	})
</script>