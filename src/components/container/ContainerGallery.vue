<template>
  <div class="container-gallery">
    <div class="level level--margin">
      <image-box
        class="level-left"
        image="wines.jpg"
        style="width:370px;"
      ></image-box>
      <card
        class="level-right"
        title="Galerija"
        text="Pogledajte šta je to što Bistro izdvaja od ostalih. Ambijent, hrana ili dešavanja?"
        button="Pogledaj"
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
  padding: 100px 0px;
}

@media screen and (min-width: 1020px) {
  .level-right {
    display: block;
  }
}
</style>