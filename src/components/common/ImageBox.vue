<template>
  <div class="image-box">
    <img :src="getImgUrl(image)" alt="Avlija bar" width="500" height="333" />
  </div>
</template>

<script>
export default {
  props: ["image"],
  methods: {
    getImgUrl(pic) {
      return require("../../assets/" + pic);
    }
  }
};
</script>

<style lang="scss">
.image-box {
  display: none;
}

@media screen and (min-width: 816px) {
  .image-box {
    display: inline-block;
    position: relative;
    margin: 0;
    overflow: hidden;
    width: 400px;
  }

  .image-box img {
    display: block;
    // width: 80%;
    height: auto;
    max-width: 100%;
    transition: all 2s;
    transform: scale(1);
  }

  .image-box:hover img {
    transform: scale(1.3);
  }
}
</style>