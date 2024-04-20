<template>
	<footer class="bg-stone-800 text-white py-8">
        <div class="container mx-auto text-center">
            <p>&copy; {{year}} Saudagar Sosis. All rights reserved.</p>
        </div>
    </footer>
</template>

<script setup>
    const date = new Date;
    const year = date.getFullYear();
</script>