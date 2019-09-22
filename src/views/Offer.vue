<template>
  <div class="offer">
    <div class="image-container">
      <img src="../assets/unutra.jpg" style="width:100%; height: 758px;"></img>
    </div>
    <hero-about></hero-about>
     <!-- <div class="columns columns--background columns--padding">
      <div class="column">
        <offer-box title="Hrana" image="sausages-menu.jpg" button="Pogledajte"></offer-box>
      </div>
      <div class="column">
        <offer-box title="Piće" image="wines.jpg" button="Pogledajte"></offer-box>
      </div>
    </div> -->
     <container-food></container-food>
    <container-drinks></container-drinks>
  </div>
</template>

<script>
import HeroAbout from "@/components/HeroAbout";
import OfferBox from "@/components/common/OfferBox";
import ContainerFood from "@/components/container/ContainerFood";
import ContainerDrinks from "@/components/container/ContainerDrinks";

export default {
  name: "home",
  components: {
    HeroAbout,
    OfferBox,
    ContainerFood,
    ContainerDrinks
  }
};
</script>

<style lang="scss">
.offer {
  height: auto;
  background-image: url("../assets/dot-pattern.png");
  background-color: #2c3e50;
}

.image-container {
  height: 300px;
  overflow: hidden;
}

.columns--background {
  background-color: #fff8d5;
  background-image: url("../assets/pattern.png");
}

.columns--padding {
  padding: 5rem;
}

.columns:last-child {
  margin-bottom: 0;
}

@media screen and (max-width: 1020px) {
  .columns--padding {
    padding: 2rem;
  }
}
</style>