<template>

    
    
    <body>
      <nav class="navbar dark-mode lg:overflow-x-auto lg:whitespace-wrap " role="navigation">
        <div class="container relative lg:inline-block lg:min-w-max lg:scroll-mx-14 ">
          <ul class="navbar__links fixed top-6 xl:sclo">
            <li class="navbar__link first"><a class="navbarre"><NuxtLink to="/">Accueil</NuxtLink></a></li>
            <li class="navbar__link third"><a class="navbarre"><NuxtLink to="/technologie_science">Technologie & Science</NuxtLink></a></li>
            <li class="navbar__link four"><a class="navbarre"><NuxtLink to="/politique">Politique</NuxtLink></a></li>
            <li class="navbar__link fifth"><a class="navbarre"><NuxtLink to="/culture">Culture</NuxtLink></a></li>
            <li class="navbar__link six"><a class="navbarre"><NuxtLink to="/literature">Littérature</NuxtLink></a></li>
            <li class="navbar__link seven"><a class="navbarre"><NuxtLink to="/histoire">Histoire & Vie</NuxtLink></a></li>
            <li class="navbar__link eight"><a class="navbarre"><NuxtLink to="/amour">Amour & Conseil</NuxtLink></a></li>
            <li class="navbar__link nine"><a class="navbarre"><NuxtLink to="/sport">Sport</NuxtLink></a></li>

          <ColorMode class=" sm:hidden md:hidden xl:hidden 2xl:hidden mr-[2rem]" />
          </ul>
          <ColorMode class=" lg:hidden xl:hidden 2xl:hidden mr-[2rem]" />

          <button class="burger">
            <span class="bar"></span>
          </button>
        </div>
        <ColorMode class="sm:hidden md:hidden lg:hidden mr-[2rem]" />
      </nav>
    </body>
 
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');

  if (burger && navbar) {
    burger.addEventListener('click', (e) => {
      navbar.classList.toggle('show-nav');
    });

    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
      });
    });
  }
}

onMounted(() => {
  toggleMenu();
});
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

:root {
  --font-size: 1rem;
}

.dark-mode {
  --navbar-color: #FFF;
  --navbar-bg-color: #000;
}

* {
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
  margin-bottom: 2rem;
}

body {
  margin: 0;
  font-size: var(--font-size);
  font-family: 'Poppins', sans-serif;
}
.main-content {
  padding: 1rem;
}

.navbar {
  display: flex;
  justify-content: center;
  background: var(--navbar-bg-color);
  color: var(--navbar-color);
  height: 4rem;
  position: fixed;
  top: 0;
 
  left: 0%;
  width: 100%;
  z-index: 1000;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.navbar__links {
  display: flex;
}

.navbar__link {
  padding: 0 10px;
}

.navbar__link > a {
  color: var(--navbar-color);
  text-decoration: none;
}

.burger {
  display: none;
}

@media screen and (max-width: 767.98px) {
  .navbar__links {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 0;
    height: calc(100vh - 65px);
    position: absolute;
    top: 65px;
    right: 0;
    background: var(--navbar-bg-color);
    transform: translateX(110%);
    transition: all .5s ease-in-out;
  }

  .show-nav .navbar__links {
    width: 100vw;
    transform: translateX(0);
  }

  .navbar__link {
    transform: translateX(101%);
    transition: all .5s ease-in-out;
  }

  .show-nav .navbar__link {
    transform: translateX(0);
  }

  .navbar__link > a {
    display: block;
    padding: 0.75rem;
    font-size: 1.6rem;
    color: var(--navbar-color);
    transition: all .4s ease-in-out;
  }

  .navbar__link > a:hover {
    padding-left: 2rem;
    letter-spacing: 5px;
  }

  .burger {
    display: block;
    position: relative;
    padding: 0;
    width: 45px;
    height: 45px;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .bar {
    display: block;
    width: 45px;
    height: 4px;
    border-radius: 3px;
    background: var(--navbar-color);
    transition: all .5s ease-in-out;
  }

  .bar::before, .bar::after {
    content: "";
    width: 45px;
    height: 4px;
    position: absolute;
    left: 0;
    background: var(--navbar-color);
    border-radius: 3px;
    transition: all .5s ease-in-out;
  }

  .bar::before {
    transform: translateY(-12px);
  }

  .bar::after {
    transform: translateY(12px);
  }

  .show-nav .bar {
    width: 0;
    background: transparent;
  }

  .show-nav .bar::before {
    transform: rotate(45deg);
  }

  .show-nav .bar::after {
    transform: rotate(-45deg);
  }

  .show-nav .first {
    transition: all 1s ease-out;
  }

  .show-nav .second {
    transition: all 1.1s ease-out;
  }

  .show-nav .third {
    transition: all 1.2s ease-out;
  }

  .show-nav .four {
    transition: all 1.3s ease-out;
  }

  .show-nav .fifth {
    transition: all 1.4s ease-out;
  }

  .show-nav .six {
    transition: all 1.5s ease-out;
  }

  .show-nav .seven {
    transition: all 1.6s ease-out;
  }

  .show-nav .eight {
    transition: all 1.7s ease-out;
  }

  .show-nav .nine {
    transition: all 1.8s ease-out;
  }
}

@media screen and (min-width: 768px) {
  .navbar__link > a::after {
    display: block;
    content: "";
    width: 0;
    height: 1px;
    background: var(--navbar-color);
    transition: width .4s;
  }
  
  .navbar__link:hover > a::after {
    width: 100%;
  }
}
</style>
