<template>
  <section
    class="hero is-small is-primary is-bold"
    style="align-items: center;"
  >
    <div class="hero-body ">
      <div class="container container--size">
        <h1 class="title is-3">
          22. DIVIZIJE 104 , VLASOTINCE - DORĆOL
        </h1>
        <h2 class="subtitle is-4 has-text-weight-bold ">
          BOOKING:
        </h2>
        <h2 class="subtitle is-4 has-text-weight-bold">
          +381 64 64 00 022
        </h2>
        <router-link to="/contact">
          <a class="button is-dark is-medium">POGLEDAJ MAPU</a>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.subtitle {
  margin-top: -1.5rem;
}

.container--size {
  margin: 3rem;
}

@media screen and (min-width: 816px) {
  .title.is-3 {
    font-size: 2.5rem;
  }

  .subtitle.is-4 {
    font-size: 2rem;
  }
}
</style>