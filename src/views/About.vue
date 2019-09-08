<template>
  <div class="about">
     <div class="image-container">
      <img src="../assets/unutra.jpg" style="width:100%; height: 758px;"></img>
    </div>
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
  overflow: hidden;
}
@media screen and (min-width: 1020px) {
}
</style>
