<template>
  <div class="container-menu">
    <div class="level">
      <card
        class="level-left level--overflow-not-hidden"
        title="PIĆE"
        text="Da li ste za jutarnju kafu ili dobru čašu vina? Izbor je samo Vaš. Dođite sa društvom da uz hranu i vino stvaramo uspomene."
      ></card>
      <image-box
        class="level-right level--overflow-hidden"
        image="avlijaVino.jpg"
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

@media screen and (min-width: 816px) {
  .container-menu {
    padding: 100px 0px;
  }
}
</style>