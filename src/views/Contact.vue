<template>
  <div class="contact">
    <div class="image-container"></div>
    <hero-about></hero-about>
    <container-map></container-map>
  </div>
</template>

<script>
import HeroAbout from "@/components/HeroAbout";
import ContainerMap from "@/components/container/ContainerMap";

export default {
  name: "home",
  components: {
    HeroAbout,
    ContainerMap
  }
};
</script>

<style lang="scss">
.contact {
  height: auto;
  background-color: #0c0c0c;
  background-image: url("../assets/dot-pattern.png");
}

.image-container {
  height: 300px;
  background-image: url("../assets/unutra.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (min-width: 816px) {
}
</style>
AIzaSyAt9ytgb_fAeTb83HpIaSkROsMdeF51RrA
