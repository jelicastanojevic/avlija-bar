<template>
  <div class="box box--size">
    <div class="box-img-container">
      <a href="">
        <img
          :src="getImgUrl(image)"
          :alt="title"
          class="box-img--border"
          style="height: 240px; width:240px"
        />
      </a>
    </div>
    <h1 class="box-title--size">{{ title }}</h1>
    <div>
      <a
        class="button is-primary is-inverted is-outlined is-large box-button--margin"
        >{{ button }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    button: String
  },
  methods: {
    getImgUrl(pic) {
      return require("../../assets/" + pic);
    }
  }
};
</script>

<style lang="scss">
.box {
  background-color: #191919;
  background-image: url("../../assets/brilliant.png");
  margin: auto;
}

.box--size {
  width: 45%;
}

.box-img-container {
  margin: 2.5rem 2rem !important;
  height: 240px;
  width: 80%;
  margin: auto;
  opacity: 0.8;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.7, transparent), to(rgba(0, 0, 0, 0.1)));
}

.box-img-container:hover {
  opacity: 1;
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.7, transparent), to(rgba(0, 0, 0, 0.4)));
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.8);
}

.box-img--border {
  border: 2px solid #000;
}

.box-title--size {
  color: white;
  font-size: 2rem;
  line-height: 3rem;
  margin: auto;
  padding: 1rem;
}

.box-button--margin {
  margin-bottom: 2rem;
}

@media screen and (max-width: 1020px) {
  .box--size {
    width: 95%;
  }
}
</style>