<template>
  <div class="container-about">
    <div class="level">
      <image-box
        class="level-left level--overflow-hidden"
        image="pljeskavice.jpg"
      ></image-box>
      <card
        class="level-right level--overflow-not-hidden"
        title="HRANA"
        text="Uživajte u obroku spremljenom od strane iskusnih kulinarskih majstora. Obavezno probajte specijalitet bara - kobasice uz dobro vino po izboru."
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

.level-right {
  margin: 0 !important;
}

@media screen and (min-width: 816px) {
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

  .level--overflow-hidden {
    z-index: 9;
  }
  .level--overflow-not-hidden {
    z-index: 10;
  }
}
</style>