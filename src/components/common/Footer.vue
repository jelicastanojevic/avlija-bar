<template>
  <footer class="footer">
    <div class="columns">
      <div class="column column-icons">
        <a
          href="https://www.facebook.com"
          class="social-net-link"
          target="blank"
        >
          <i class="fab fa-facebook-square"></i>
        </a>
        <a
          href="https://www.instagram.com/avlija.bar/"
          class="social-net-link"
          target="blank"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <div class="column column-copyright">
        <span class="footer-block--padding">
          C Copyright Avlijabar
          <br />
          Powered by <a href="" style="color: #24644f">Lelica</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  background-color: black;
  background-image: url("../../assets/dot-pattern.png");
  padding: 0.8rem 2.5rem;
}

.svg-inline--fa.fa-w-14 {
  width: 3em;
  height: 6em !important;
  padding-right: 1em;
  cursor: pointer;
}

.svg-inline--fa {
  height: 4rem;
}

.column--center {
  display: flex;
  align-items: center;
}

.column-icons {
  justify-content: center;
  padding: 0;
}

.column-copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.columns {
  padding-top: 0.75rem;
}

.social-net-link {
  font-size: 1rem;
  color: #2c3e50;
}

@media screen and (min-width: 1020px) {
  .column-icons {
    text-align: left !important;
  }

  .column-copyright {
    justify-content: flex-end;
  }
}
</style>