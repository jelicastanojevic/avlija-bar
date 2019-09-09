<template>
  <section class="hero is-small is-bold hero--background">
    <div class="hero-body">
      <div class="container">
        <div class="columns has-text-grey-light">
          <div class="column column-icon--size">
            <div class="container">
              <i class="fa fa-phone"></i>
            </div>
          </div>
          <div class="column column-title--size">
            <div class="container ">
              <strong> <span>REZERVACIJE</span></strong>
              <br />
              <strong> +381 64 64 00 022 <br /> </strong>
            </div>
          </div>

          <div class="column column-icon--size">
            <i class="fa fa-location-arrow"></i>
          </div>
          <div class="column column-title--size">
            <div class="container">
              <strong> <span>LOKACIJA</span></strong>
              <br />
              <strong> 22. Divizije 104 <br /> </strong>
              Vlasotince
            </div>
          </div>

          <div class="column column-icon--size">
            <i class="far fa-clock"></i>
          </div>
          <div class="column column-title--size">
            <div class="container">
              <strong> <span>Radno vreme</span></strong>
              <br />
              8-22
              <br />
              <strong> PET-SUB <br /> </strong>
              8-2
              <br />
            </div>
          </div>

          <div class="column column-icon--size">
            <i class="fa fa-desktop"></i>
          </div>
          <div class="column column-title--size">
            <div class="container">
              <strong> <span>WEB</span></strong>
              <br />
              <strong> www.avlijabar.com <br /> </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hero--background {
  background-color: #191919;
  background-image: url("../assets/brilliant.png");
  border-top: 1rem solid #000;
  border-bottom: 1rem solid #000;
}

.column-icon--size {
  color: #fff8d5;
  font-size: 4rem;
  margin: auto;
}

.column-title--size {
  color: #fff8d5;
  font-size: 1.08rem;
  line-height: 1.8rem;
  margin: auto;
}

strong {
  color: #fff8d5;
}
</style>