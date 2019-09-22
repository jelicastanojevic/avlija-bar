<template>
  <div id="app">
    <navbar></navbar>
    <transition
      appear
      appear-active-class="animated faster fadeIn"
      mode="out-in"
      enter-active-class="animated faster fadeIn"
      leave-active-class="animated faster fadeOut"
    >
      <router-view />
    </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default {
  components: {
    Navbar,
    MyFooter: Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: Open Sans, sans-serif;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
