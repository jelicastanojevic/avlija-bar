<template>
  <div class="container-images">
    <div class="container-images--gallery">
      <container-gallery></container-gallery>
    </div>
    <div class="container-instagram--feed">
      <vue-instagram></vue-instagram>
    </div>
  </div>
</template>

<script>
import ContainerGallery from "@/components/container/ContainerGallery";
import VueInstagram from "@/components/common/VueInstagram";

export default {
  components: {
    ContainerGallery,
    VueInstagram
  }
};
</script>

<style lang="scss" >
.container-images {
  display: flex;
  flex-direction: column;
  background-color: #0c0c0c;
  background-image: url("../../assets/dot-pattern.png");
}

@media screen and (min-width: 816px) {
  .container-images {
    flex-direction: row;
  }

  .container-instagram--feed {
    padding-right: 100px;
  }
}
</style>