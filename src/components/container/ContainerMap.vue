<template>
  <div id="map-area">
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=avlija%20bar%20vlasotince&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          style="height: 500px; width: 100%;"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.mapouter {
  position: relative;
  text-align: right;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
}
</style>