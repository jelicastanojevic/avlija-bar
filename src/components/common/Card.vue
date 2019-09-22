<template>
  <div class="card">
    <section class="section">
      <div class="container section-container--size">
        <div class="has-text-left" style="width: 100%; min-width: 241px;">
          <h3 class="title is-1">
            {{ title }} <br />
            {{ subtitle }}
          </h3>
          <p class="subtitle subtitle-padding">{{ text }}</p>
          <router-link :to="page">
            <a class="button is-large" v-if="button != null">{{ button }}</a>
          </router-link>
          <a
            :class="{ 'button-visibility': href == null }"
            class="button is-large"
            v-if="button != null"
            :href="href"
            >{{ button }}</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    text: String,
    button: String,
    page: String,
    href: String
  }
};
</script>

<style lang="scss">
.card {
  padding: 1rem;
  background-color: #0c0c0c;
  background-image: url("../../assets/dot-pattern.png") !important;
}

.section {
  background-color: #fff8d5;
  background-image: url("../../assets/pattern.png");
}

.button {
  color: #363636;
  background: transparent;
  border: 1px solid #363636;
}

.button:hover {
  color: #fff8d5;
  background: #363636;
  border: 1px solid #fff8d5;
}

.button-visibility {
  display: none;
}
@media screen and (min-width: 1020px) {
  .card {
    padding: 0rem;
    width: 50%;
  }

  .section-container--size {
    padding: 110px;
  }

  .title,
  .subtitle {
    color: #363636;
  }

  .title {
    padding-bottom: 1.2rem;
  }

  .subtitle {
    line-height: 1.6;
  }

  .subtitle-padding {
    padding-bottom: 2rem;
  }
}
</style>