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
        <router-link to="/" @click.native="toggleMobileNav">
          <li class="nav-link nav-item--border"><a href="">POČETNA</a></li>
        </router-link>
        <router-link to="/about" @click.native="toggleMobileNav">
          <li class="nav-link nav-item--border"><a href="">O NAMA</a></li>
        </router-link>
        <router-link to="/offer" @click.native="toggleMobileNav">
          <li class="nav-link nav-item--border"><a href="">PONUDA</a></li>
        </router-link>
        <router-link
          to="/"
          @click="toggleMobileNav"
          class="nav-brand-desktop--display"
        >
          <div class="nav-brand">
            <a class="nav-item" href="#">
              <img src="@/assets/newLogo.png" />
            </a>
          </div>
        </router-link>
        <router-link to="/events" @click.native="toggleMobileNav">
          <li class="nav-link nav-item--border"><a href="">DEŠAVANJA</a></li>
        </router-link>
        <router-link to="/gallery" @click.native="toggleMobileNav">
          <li class="nav-link nav-item--border"><a href="">GALERIJA</a></li>
        </router-link>
        <router-link to="/contact" @click.native="toggleMobileNav">
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
    handleScroll() {
      if (window.scrollY > 0) {
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
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
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

.nav-link {
  padding: 1rem;
}

.nav-link a {
  color: #fff8d5;
  font-size: 1.5rem;
  font-weight: bold;
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
    background-image: none !important;
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
  }

  .nav-link a {
    font-size: 1.1rem;
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
    color: #fff8d5;
    width: 100%;
    background: #fff8d5;
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