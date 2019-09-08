<template>
  <div class="slideshow-container">
    <div v-for="(slide, index) in slides" :key="index">
      <div>
        <img
          :src="getImgUrl(slide.image)"
          style="width:100%; height: 758px;"
          v-show="slide.visible"
          class="fade-in"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["images"],
  data() {
    return {
      slideIndex: 0,
      slides: this.getSlides()
    };
  },
  created() {
    this.showSlides();
  },
  methods: {
    getSlides() {
      let slides = this.images.map(e => {
        return { image: e, visible: false };
      });
      slides[0].visible = true;
      return slides;
    },
    showSlides() {
      let i;
      for (i = 0; i < this.images.length; i++) {
        this.slides[i].visible = false;
      }
      this.slideIndex++;
      if (this.slideIndex > this.slides.length) {
        this.slideIndex = 1;
      }
      this.slides[this.slideIndex - 1].visible = true;
      setTimeout(this.showSlides, 5000);
    },
    getImgUrl(pic) {
      return require("../assets/" + pic);
    }
  }
};
</script>

<style lang="scss">
.slideshow-container {
  background-color: #0c0c0c;
}

.fade-in {
  opacity: 1;
  animation-name: fadeInOut;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 5s;
}

@-webkit-keyframes fadeInOut {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>