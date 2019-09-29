<template>
  <div class="container-gallery">
    <div class="level level--margin container-gallery-wrapper">
      <image-box
        class="level-left"
        image="wines.jpg"
        style="width:296px;"
      ></image-box>
      <card
        class="level-right level-right-gallery"
        title="Galerija"
        text="Pogledajte šta je to što Bistro izdvaja od ostalih. Ambijent, hrana ili dešavanja?"
        button="Pogledaj"
        page="/gallery"
      ></card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/common/Card.vue";
import ImageBox from "@/components/common/ImageBox.vue";

export default {
  components: {
    Card,
    ImageBox
  }
};
</script>
<style lang="scss">
.level--margin {
  margin-right: 0px;
  margin-left: 0px;
}

.container-gallery {
  background: #0c0c0c;
  background-repeat: repeat;
  background-image: url("../../assets/dot-pattern.png") !important;
  padding: 0px;
}

.container-gallery-wrapper {
  height: 338px !important;
}

.level-right-gallery {
  display: block;
  width: 100%;
}

@media screen and (min-width: 816px) {
  .level-right-gallery {
    display: block;
    width: 50%;
  }

  .container-gallery {
    padding: 80px 0px;
  }

  .container-gallery-wrapper {
    height: 522px !important;
  }
}
</style>