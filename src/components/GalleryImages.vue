<template>
  <div class="gallery-images">
    <figure class="gallery__item gallery_item--1">
      <img
        src="../assets/saksofon.jpg"
        class="gallery__img"
        alt="Image 1"
        @click="selectImage(1)"
      />
    </figure>
    <figure class="gallery__item gallery__item--2">
      <img
        src="../assets/DSC_5832-400x284.jpg"
        class="gallery__img"
        alt="Image 2"
        @click="selectImage(2)"
      />
    </figure>
    <figure class="gallery__item gallery__item--3">
      <img
        src="../assets/DSC_5842-400x284.jpg"
        class="gallery__img"
        alt="Image 3"
        @click="selectImage(3)"
      />
    </figure>
    <figure class="gallery__item gallery__item--4">
      <img
        src="../assets/DSC_5824-400x284.jpg"
        class="gallery__img"
        alt="Image 4"
        @click="selectImage(4)"
      />
    </figure>
    <figure class="gallery__item gallery__item--5">
      <img
        src="../assets/DSC_6136-400x284.jpg"
        class="gallery__img"
        alt="Image 5"
        @click="selectImage(5)"
      />
    </figure>
    <figure class="gallery__item gallery__item--6">
      <img
        src="../assets/DSC_6182-400x284.jpg"
        class="gallery__img"
        alt="Image 6"
        @click="selectImage(6)"
      />
    </figure>
    <figure class="gallery__item gallery__item--7">
      <img
        src="../assets/DSC_6213-400x284.jpg"
        class="gallery__img"
        alt="Image 7"
        @click="selectImage(7)"
      />
    </figure>
    <figure class="gallery__item gallery__item--8">
      <img
        src="../assets/pljeskavice.jpg"
        class="gallery__img"
        alt="Image 8"
        @click="selectImage(8)"
      />
    </figure>
    <figure class="gallery__item gallery__item--9">
      <img
        src="../assets/kobasiceAvlija.jpg"
        class="gallery__img"
        alt="Image 9"
        @click="selectImage(9)"
      />
    </figure>
    <figure class="gallery__item gallery__item--10">
      <img
        src="../assets/IMG_3991-400x284.jpg"
        class="gallery__img"
        alt="Image 10"
        @click="selectImage(10)"
      />
    </figure>
    <figure class="gallery__item gallery__item--11">
      <img
        src="../assets/IMG_4788-400x284.jpg"
        class="gallery__img"
        alt="Image 11"
        @click="selectImage(11)"
      />
    </figure>
    <figure class="gallery__item gallery__item--12">
      <img
        src="../assets/IMG_4799-400x284.jpg"
        class="gallery__img"
        alt="Image 12"
        @click="selectImage(12)"
      />
    </figure>
    <image-modal
      :image="imageUrl"
      v-if="selectedImage != 0"
      @closeImageModal="selectedImage = 0"
    ></image-modal>
  </div>
</template>

<script>
import ImageModal from "@/components/common/ImageModal";

export default {
  components: {
    ImageModal
  },
  data() {
    return {
      selectedImage: 0
    };
  },
  computed: {
    imageUrl() {
      switch (this.selectedImage) {
        case 1:
          return "saksofon.jpg";
        case 2:
          return "DSC_5824-400x284.jpg";
        case 3:
          return "DSC_5842-400x284.jpg";
        case 4:
          return "DSC_5824-400x284.jpg";
        case 5:
          return "DSC_6136-400x284.jpg";
        case 6:
          return "DSC_6182-400x284.jpg";
        case 7:
          return "DSC_6213-400x284.jpg";
        case 8:
          return "pljeskavice.jpg";
        case 9:
          return "kobasiceAvlija.jpg";
        case 10:
          return "IMG_3991-400x284.jpg";
        case 11:
          return "IMG_4788-400x284.jpg";
        case 12:
          return "IMG_4799-400x284.jpg";
      }
    }
  },
  methods: {
    selectImage(n) {
      this.selectedImage = n;
    }
  }
};
</script>

<style lang="scss">
.gallery-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(337px, 1fr));
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (min-width: 816px) {
}
</style>