<template>
  <div class="gallery">
    <div class="nav-background"></div>
    <gallery-images></gallery-images>
  </div>
</template>

<script>
import GalleryImages from "@/components/GalleryImages";

export default {
  components: {
    GalleryImages
  }
};
</script>

<style lang="scss">
.gallery {
  height: auto;
  background-color: #0c0c0c;
  background-image: url("../assets/dot-pattern.png");
}

@media screen and (min-width: 1020px) {
  .nav-background {
    height: 30vh;
  }
}
</style>