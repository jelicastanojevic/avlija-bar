<template>
  <div class="container--instagram">
    <div class="block--instagram block--instagram-font">
      Na instagramu si?
      <br />
      Zaprati nas!
    </div>
    <div class="container-images--instagram">
      <iframe
        src="//lightwidget.com/widgets/8da2336e85935a3bb7d8f23f7eb8368b.html"
        scrolling="no"
        allowtransparency="true"
        class="lightwidget-widget widget-visibility--desktop"
        style="width:100%;border:0;overflow:hidden;height: 400px; width: 400px;"
      ></iframe>
      <iframe
        src="//lightwidget.com/widgets/881a98ac6ee15ebfae3688b33ffe30ab.html"
        scrolling="no"
        allowtransparency="true"
        class="lightwidget-widget widget-visibility--mobile"
        style="width:100%;border:0;overflow:hidden;height: 100%;"
      ></iframe>
    </div>
    <div class="block--instagram-tag block--instagram-font">
      <a href="www.google.rs">@avlijabar</a>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss">
.widget-visibility--desktop {
  display: none;
}

.container-images--instagram {
  height: 100%;
  width: 100%;
}

.block--instagram {
  background-color: #24644f;
  padding: 32px 30px 20px;
}

.block--instagram-tag {
  background-color: #24644f;
  padding: 20px 30px 61px;
}

a,
.block--instagram-font {
  font-size: 18px;
  line-height: 1.7;
  letter-spacing: 1px;
  font-weight: 600;
  color: #fff;
}

@media screen and (min-width: 1020px) {
  .container-images--instagram {
    height: 400px;
    width: 400px;
  }

  .container--instagram {
    padding: 100px 0px;
  }

  .widget-visibility--mobile {
    display: none;
  }

  .widget-visibility--desktop {
    display: block;
  }
}
</style>