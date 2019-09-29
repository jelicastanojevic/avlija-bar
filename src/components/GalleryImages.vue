<template>
  <div class="gallery-images">
    <figure class="gallery__item gallery_item--1">
      <img src="../assets/saksofon.jpg" class="gallery__img" alt="Image 1" />
    </figure>
    <figure class="gallery__item gallery__item--2">
      <img
        src="../assets/DSC_5832-400x284.jpg"
        class="gallery__img"
        alt="Image 2"
      />
    </figure>
    <figure class="gallery__item gallery__item--3">
      <img
        src="../assets/DSC_5842-400x284.jpg"
        class="gallery__img"
        alt="Image 3"
      />
    </figure>
    <figure class="gallery__item gallery__item--4">
      <img
        src="../assets/DSC_5824-400x284.jpg"
        class="gallery__img"
        alt="Image 4"
      />
    </figure>
    <figure class="gallery__item gallery__item--5">
      <img
        src="../assets/DSC_6136-400x284.jpg"
        class="gallery__img"
        alt="Image 5"
      />
    </figure>
    <figure class="gallery__item gallery__item--6">
      <img
        src="../assets/DSC_6182-400x284.jpg"
        class="gallery__img"
        alt="Image 6"
      />
    </figure>
    <figure class="gallery__item gallery__item--7">
      <img
        src="../assets/DSC_6213-400x284.jpg"
        class="gallery__img"
        alt="Image 6"
      />
    </figure>
    <figure class="gallery__item gallery__item--8">
      <img src="../assets/pljeskavice.jpg" class="gallery__img" alt="Image 6" />
    </figure>
    <figure class="gallery__item gallery__item--9">
      <img
        src="../assets/kobasiceAvlija.jpg"
        class="gallery__img"
        alt="Image 6"
      />
    </figure>
    <figure class="gallery__item gallery__item--10">
      <img
        src="../assets/IMG_3991-400x284.jpg"
        class="gallery__img"
        alt="Image 6"
      />
    </figure>
    <figure class="gallery__item gallery__item--11">
      <img
        src="../assets/IMG_4788-400x284.jpg"
        class="gallery__img"
        alt="Image 6"
      />
    </figure>
    <figure class="gallery__item gallery__item--12">
      <img
        src="../assets/IMG_4799-400x284.jpg"
        class="gallery__img"
        alt="Image 6"
      />
    </figure>
  </div>
</template>

<script>
export default {};
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