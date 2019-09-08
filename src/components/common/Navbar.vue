<template>
  <div>
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
      :class="{ 'navbar-scrolled': scrolled }"
    >
      <router-link to="/" class="nav-brand--mobile-display">
        <div class="nav-brand nav-brand-logo--mobile">
          <a class="nav-item nav-item-logo--mobile" href="#">
            <img src="@/assets/newLogo.png" />
          </a>
        </div>
      </router-link>

      <div class="hamburger--display" @click="toggleMobileNav">
        <a
          role="button"
          class="hamburger"
          aria-label="menu"
          aria-expanded="false"
        >
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </a>
      </div>

      <ul class="nav-links" :class="{ open: openedMobileNav }">
        <router-link to="/">
          <li class="nav-link nav-item--border"><a href="">POČETNA</a></li>
        </router-link>
        <router-link to="/about">
          <li class="nav-link nav-item--border"><a href="">O NAMA</a></li>
        </router-link>
        <router-link to="/offer">
          <li class="nav-link nav-item--border"><a href="">PONUDA</a></li>
        </router-link>
        <router-link to="/">
          <div class="nav-brand">
            <a class="nav-item nav-brand-desktop--display" href="#">
              <img src="@/assets/newLogo.png" />
            </a>
          </div>
        </router-link>
        <router-link to="/events">
          <li class="nav-link nav-item--border"><a href="">DEŠAVANJA</a></li>
        </router-link>
        <router-link to="/gallery">
          <li class="nav-link nav-item--border"><a href="">GALERIJA</a></li>
        </router-link>
        <router-link to="/contact">
          <li class="nav-link nav-item--border"><a href="">KONTAKT</a></li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
      openedMobileNav: false
    };
  },
  computed: {
    isBurgerActive() {
      return this.$store.isSidebarVisible;
    }
  },
  methods: {
    handleScroll(e) {
      if (e.deltaY !== 0) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
    toggleMobileNav() {
      this.openedMobileNav = !this.openedMobileNav;
    }
  },
  created() {
    window.addEventListener("wheel", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("wheel", this.handleScroll);
  }
};
</script>

<style>
.navbar {
  position: fixed;
  width: 100%;
  height: 15vh;
  background-color: #0c0c0c;
  background-repeat: repeat;
  background-image: url("../../assets/dot-pattern.png") !important;
  transition: 400ms;
}

.nav-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #0c0c0c;
  background-repeat: repeat;
  background-image: url("../../assets/dot-pattern.png") !important;
  clip-path: circle(100px at 90% -20%);
  -webkit-clip-path: circle(100px at 90% -20%);
  transition: all 1s ease-out;
}

.open {
  clip-path: circle(1000px at 90% -20%);
  -webkit-clip-path: circle(1000px at 90% -20%);
}

.nav-item img {
  height: 5rem;
  width: 5rem;
}

a.nav-item-logo--mobile {
  display: flex;
  margin: auto;
}

.nav-brand {
  display: inline-flex;
  height: 100%;
  z-index: 2;
}

.nav-brand-logo--mobile {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translate(-5%, -50%);
}

.nav-brand--mobile-display {
  display: inline-flex;
  align-items: center;
  z-index: 2;
}

.nav-brand-desktop--display {
  display: none;
}

.hamburger {
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translate(-5%, -50%);
  z-index: 2;
}

.line {
  width: 30px;
  height: 3px;
  background: white;
  margin: 5px;
}

@media screen and (min-width: 1020px) {
  .navbar {
    position: fixed;
    min-height: 0;
    z-index: 9999;
    background: transparent !important;
    transition: 400ms;
  }

  .navbar-scrolled {
    position: fixed;
    width: 100%;
    height: 17vh;
    background: #0c0c0c !important;
    background-repeat: repeat !important;
    background-image: url("../../assets/dot-pattern.png") !important;
    transition: 400ms;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background: transparent;
    clip-path: none;
    -webkit-clip-path: none;
  }

  .nav-brand {
    position: unset;
    margin-top: 3rem;
    padding: 3rem;
  }

  .nav-item img {
    height: 160px;
    width: 160px;
  }

  .nav-link {
    margin-top: 1rem;
    padding: 1rem;
  }

  .nav-link a {
    color: #fff8d5;
    font-size: 1.1rem;
    font-weight: bold;
  }

  .nav-link a:hover {
    color: #fff8d5;
  }
  .nav-item--border:after {
    content: "";
    display: block !important;
    margin: auto;
    height: 3px;
    width: 0px;
    background: transparent;
    transition: width 0.5s ease, background-color 0.5s ease;
  }

  .nav-item--border:hover:after {
    color: white;
    width: 100%;
    background: white;
  }

  .nav-brand--mobile-display {
    display: none;
  }

  .nav-brand-desktop--display {
    display: block;
  }

  .hamburger--display {
    display: none;
  }
}
</style>