<template>
  <div class="about">
    <div class="image-container"></div>
    <hero-about></hero-about>
    <container-about></container-about>
  </div>
</template>

<script>
import HeroAbout from "@/components/HeroAbout";
import ContainerAbout from "@/components/container/ContainerAbout";

export default {
  name: "home",
  components: {
    HeroAbout,
    ContainerAbout
  }
};
</script>

<style lang="scss">
.about {
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
