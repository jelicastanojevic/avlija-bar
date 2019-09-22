<template>
  <div class="event">
    <div class="image-container">
      <img src="../assets/unutra.jpg" style="width:100%; height: 758px;"></img>
    </div>
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
  overflow: hidden;
}
</style>