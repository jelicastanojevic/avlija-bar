<template>
  <div class="container-about">
    <div class="level">
      <image-box class="level-left" image="spolja.jpg"></image-box>
      <card
        class="level-right"
        title="AVLIJA BAR"
        subtitle="Vlasotince"
        text="Lociran u Dorćolskom delu Vlasotinca, u blizini reke Vlasine, Avlija bar je mesto koje će Vas oduševiti svojom energijom i izvrsnom uslugom."
        button="Nastavi obilazak"
      ></card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/common/Card";
import ImageBox from "@/components/common/ImageBox";
export default {
  components: {
    Card,
    ImageBox
  }
};
</script>

<style lang="scss">
.container-about {
  background-color: #0c0c0c;
  background-repeat: repeat;
  background-image: url("../../assets/dot-pattern.png") !important;
}

@media screen and (min-width: 1020px) {
  .level {
    margin-right: 90px;
    margin-left: 90px;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: center;
  }

  .container-about {
    padding: 100px 0px;
  }
}
</style>