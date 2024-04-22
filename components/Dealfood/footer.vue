<template>
	<footer class="footer_section">
		<div class="container">
			<p>
				&copy; {{year}} All Rights Reserved By
				<a href="https://pujiermanto-portfolio.vercel.app/">Free Html Templates</a><br>
				Distributed By: <a href="https://dksindo.com/">Phoenix Digital Tech Solution</a>
			</p>
		</div>
	</footer>
</template>

<script setup>
	const date = new Date;
	const year = date.getFullYear();
</script>