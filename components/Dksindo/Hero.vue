 <style>
    .parallax {
        background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlnaXRhbCUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        color: #fff;
        text-align: center;
        height: 75vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        overflow: hidden;
    }

    .parallax h1 {
        font-family: 'Poppins';
        text-shadow: 2px 2px rgb(244 244 245);
    }

    .parallax p {
        font-family: 'Caveat';
        text-shadow: 2px 2px rgb(203 213 225);
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
        <h1 class="mt-12 md:mt-0 text-5xl md:text-7xl">Welcome to Phoenix Digital Tech Solusion</h1>
        <p class="mt-4 md:mt-4 text-3xl md:text-5xl">Where Imagination Meets Innovation.</p>
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