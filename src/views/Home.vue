<template>
  <div class="home">
    <carousel :images="urls"></carousel>
    <container-about></container-about>
    <container-menu></container-menu>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import ContainerAbout from "@/components/container/ContainerAbout";
import ContainerMenu from "@/components/container/ContainerMenu";

export default {
  name: "home",
  components: {
    Carousel,
    ContainerAbout,
    ContainerMenu
  },
  data() {
    return {
      urls: ["spolja.jpg", "unutra.jpg"]
    };
  }
};
</script>
