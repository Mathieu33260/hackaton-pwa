<template>
  <div>
    <nav id="main-nav">
      <div class="logo">
        <router-link to="/">
          <img src="./../assets/logo-bright.svg" alt="Logo Neos" />
        </router-link>
      </div>
      <div class="links">
        <router-link to="/">
          <h2>
            Etats des lieux
          </h2>
        </router-link>

        <router-link to="/consommation">
          <h2>
            Pourquoi le web consomme
          </h2>
        </router-link>

        <router-link to="/practices">
          <h2>
            Bonnes pratiques
          </h2>
        </router-link>

        <extension :text="'Télécharger l\'extension'"></extension>
      </div>
    </nav>
  </div>
</template>

<script>
import Extension from "../components/Extension";

export default {
  name: "Navbar",
  components: {
    Extension
  },
  data() {
    return {
        category: null,
        data: data,
        derniere_position_de_scroll_connue : 0
    }
  },
  created() {

    window.addEventListener('scroll', function(e) {
    this.derniere_position_de_scroll_connue = window.scrollY;

    if(this.derniere_position_de_scroll_connue > 150){
        document.querySelector("nav#main-nav").classList.add("scrollable");
    }else{
        document.querySelector("nav#main-nav").classList.remove("scrollable");
    }
    })
  }
};
</script>

<style>

</style>
