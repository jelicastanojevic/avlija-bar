<template>
  <div class="home">
    <carousel :images="urls"></carousel>
    <container-about></container-about>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import ContainerAbout from "@/components/container/ContainerAbout";
export default {
  name: "home",
  components: {
    Carousel,
    ContainerAbout
  },
  data() {
    return {
      urls: ["spolja.jpg", "unutra.jpg"]
    };
  }
};
</script>
