<template>
	<div class="site-footer">
		<div class="container">
			<div class="row">
				<div class="col-lg-4">
					<div class="widget">
						<h3>Contact</h3>
						<address>43 Raymouth Rd. Baltemoer, London 3910</address>
						<ul class="list-unstyled links">
							<li><a href="tel://456789898">(021)-456-7890</a></li>
							<li><a href="tel://4223787878">(021)-456-7890</a></li>
							<li>
								<a href="mailto:info@mydomain.com">info@mydomain.com</a>
							</li>
						</ul>
					</div>
					<!-- /.widget -->
				</div>
				<!-- /.col-lg-4 -->
				<div class="col-lg-4">
					<div class="widget">
						<h3>Sources</h3>
						<ul class="list-unstyled float-start links">
							<li><a href="#">About us</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Vision</a></li>
							<li><a href="#">Mission</a></li>
							<li><a href="#">Terms</a></li>
							<li><a href="#">Privacy</a></li>
						</ul>
						<ul class="list-unstyled float-start links">
							<li><a href="#">Partners</a></li>
							<li><a href="#">Business</a></li>
							<li><a href="#">Careers</a></li>
							<li><a href="#">Blog</a></li>
							<li><a href="#">FAQ</a></li>
							<li><a href="#">Creative</a></li>
						</ul>
					</div>
					<!-- /.widget -->
				</div>
				<!-- /.col-lg-4 -->
				<div class="col-lg-4">
					<div class="widget">
						<h3>Links</h3>
						<ul class="list-unstyled links">
							<li><a href="#">Our Vision</a></li>
							<li><a href="#">About us</a></li>
							<li><a href="#">Contact us</a></li>
						</ul>

						<ul class="list-unstyled social">
							<li>
								<a href="#"><span class="icon-instagram"></span></a>
							</li>
							<li>
								<a href="#"><span class="icon-twitter"></span></a>
							</li>
							<li>
								<a href="#"><span class="icon-facebook"></span></a>
							</li>
							<li>
								<a href="#"><span class="icon-linkedin"></span></a>
							</li>
							<li>
								<a href="#"><span class="icon-pinterest"></span></a>
							</li>
							<li>
								<a href="#"><span class="icon-dribbble"></span></a>
							</li>
						</ul>
					</div>
					<!-- /.widget -->
				</div>
				<!-- /.col-lg-4 -->
			</div>
			<!-- /.row -->

			<div class="row mt-5">
				<div class="col-12 text-center">
            <!-- 
              **==========
              NOTE: 
              Please don't remove this copyright link unless you buy the license here https://untree.co/license/  
              **==========
          -->

          <p>
          	Copyright &copy; {{year}}
          	. All Rights Reserved. &mdash; Designed with love by
          	<a href="/">rumah-property.co</a>
          	<!-- License information: https://untree.co/license/ -->
          </p>
          <div>
          	Distributed by
          	<a href="/" target="_blank">Phoenix Digital Tech Solution</a>
          </div>
      </div>
  </div>
</div>
<!-- /.container -->
</div>
<!-- /.site-footer -->
</template>

<script setup>
	const date = new Date;
	const year = date.getFullYear();
</script>