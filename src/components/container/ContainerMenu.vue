<template>
  <div class="container-menu">
    <div class="level">
      <card
        class="level-left level--overflow-not-hidden"
        title="MENI"
        text="Uživajte u obroku spremljenom od strane iskusnih kulinarskih majstora. Da li ste za doručak (do 13h) ili dnevni meni?"
        button="Izaberite"
        page="/offer"
      ></card>
      <image-box
        class="level-right level--overflow-hidden"
        image="kobasice.jpg"
      ></image-box>
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
.container-menu {
  background-color: #0c0c0c;
  background-repeat: repeat;
  background-image: url("../../assets/unutra.jpg") !important;
}

@media screen and (min-width: 1020px) {
  .container-menu {
    padding: 100px 0px;
  }
}
</style>