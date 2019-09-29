<template>
  <div class="home">
    <carousel :images="urls"></carousel>
    <container-about></container-about>
    <container-menu id="container-menu"></container-menu>
    <hero></hero>
    <container-gallery-and-instagram></container-gallery-and-instagram>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import ContainerAbout from "@/components/container/ContainerAbout";
import ContainerMenu from "@/components/container/ContainerMenu";
import Hero from "@/components/Hero";
import ContainerGalleryAndInstagram from "@/components/container/ContainerGalleryAndInstagram";

export default {
  name: "home",
  components: {
    Carousel,
    ContainerAbout,
    ContainerMenu,
    Hero,
    ContainerGalleryAndInstagram
  },
  data() {
    return {
      urls: ["spolja.jpg", "unutra.jpg"]
    };
  }
};
</script>

<style lang="scss">
</style>