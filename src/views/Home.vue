<template>
  <div class="home">
    <carousel :images="urls"></carousel>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  name: "home",
  components: {
    Carousel
  },
  data() {
    return {
      urls: ["spolja.jpg", "unutra.jpg"]
    };
  }
};
</script>
