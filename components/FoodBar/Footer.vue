<template>
	<!--================ start footer Area  =================-->
	<footer class="footer-area p_120">
		<div class="container">
			<div class="row">
				<div class="col-lg-2  col-md-6 col-sm-6">
					<div class="single-footer-widget tp_widgets">
						<h6 class="footer_title">Top Products</h6>
						<ul class="list">
							<li>
								<a href="#">Managed Website</a>
							</li>
							<li>
								<a href="#">Manage Reputation</a>
							</li>
							<li>
								<a href="#">Power Tools</a>
							</li>
							<li>
								<a href="#">Marketing Service</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-2  col-md-6 col-sm-6">
					<div class="single-footer-widget tp_widgets">
						<h6 class="footer_title">Quick Links</h6>
						<ul class="list">
							<li>
								<a href="#">Jobs</a>
							</li>
							<li>
								<a href="#">Brand Assets</a>
							</li>
							<li>
								<a href="#">Investor Relations</a>
							</li>
							<li>
								<a href="#">Terms of Service</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-2  col-md-6 col-sm-6">
					<div class="single-footer-widget tp_widgets">
						<h6 class="footer_title">Features</h6>
						<ul class="list">
							<li>
								<a href="#">Jobs</a>
							</li>
							<li>
								<a href="#">Brand Assets</a>
							</li>
							<li>
								<a href="#">Investor Relations</a>
							</li>
							<li>
								<a href="#">Terms of Service</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-2  col-md-6 col-sm-6">
					<div class="single-footer-widget tp_widgets">
						<h6 class="footer_title">Resources</h6>
						<ul class="list">
							<li>
								<a href="#">Guides</a>
							</li>
							<li>
								<a href="#">Research</a>
							</li>
							<li>
								<a href="#">Experts</a>
							</li>
							<li>
								<a href="#">Agencies</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-6">
					<aside class="f_widget news_widget">
						<div class="f_title">
							<h3 class="footer_title">Newsletter</h3>
						</div>
						<p>Stay updated with our latest trends</p>
						<div id="mc_embed_signup">
							<form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
							method="get" class="subscribe_form relative">
							<div class="input-group d-flex flex-row">
								<input name="EMAIL" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '"
								required="" type="email">
								<button class="btn sub-btn">
									<span class="lnr lnr-arrow-right"></span>
								</button>
							</div>
							<div class="mt-10 info"></div>
						</form>
					</div>
				</aside>
			</div>
		</div>
		<div class="row footer-bottom d-flex justify-content-between align-items-center">
			<p class="col-lg-8 col-md-8 footer-text m-0"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
				Copyright &copy; {{year}} All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
				<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
			</p>
			<div class="col-lg-4 col-md-4 footer-social">
				<a href="#">
					<i class="fa fa-facebook"></i>
				</a>
				<a href="#">
					<i class="fa fa-twitter"></i>
				</a>
				<a href="#">
					<i class="fa fa-dribbble"></i>
				</a>
				<a href="#">
					<i class="fa fa-behance"></i>
				</a>
			</div>
		</div>
	</div>
</footer>
<!--================ End footer Area  =================-->
</template>

<script setup>
	const date = new Date;
	const year = date.getFullYear();
</script>