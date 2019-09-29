<template>
  <div class="event">
    <div class="image-container"></div>
    <container-event></container-event>
  </div>
</template>

<script>
import ContainerEvent from "@/components/container/ContainerEvent";
export default {
  components: {
    ContainerEvent
  }
};
</script>

<style lang="scss">
.image-container {
  height: 300px;
  background-image: url("../assets/unutra.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>