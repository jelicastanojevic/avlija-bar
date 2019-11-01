<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div @click="$emit('closeImageModal')">
        <i class="fas fa-times" style="color:white"></i>
      </div>
      <div class="image-box">
        <img :src="getImgUrl(image)" alt="Avlija bar" />
      </div>
    </div>
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

  .modal-wrapper {
    .svg-inline--fa.fa-w-11 {
      width: 128%;
    }
    .svg-inline--fa {
      height: 2rem;
      display: table-cell;
      cursor: pointer;
    }
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  /*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>