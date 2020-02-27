<template>
  <div>
    <nav id="main-nav">
      <div class="logo">
        <img src="./../assets/logo-bright.svg" alt="Logo Neos" />
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
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5rem 10% 0;
  transition: all .4s ease-in-out;
}
nav .logo img{
  height: auto;
}
nav .links {
  display: flex;
  align-items: center;
}
nav .links a {
  font-family: "BreeSerif";
  color: #999;
  text-decoration: none;
  margin-right: 2rem;
  transition: all 0.4s ease-in-out;
}
nav .links a:hover {
  font-family: "BreeSerif";
  color: #55b55b;
  text-decoration: none;
  margin-right: 2rem;
}
nav .links a:last-of-type {
  display: inline-block;
  font-size: 1rem;
  font-family: "BreeSerif";
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  background-color: #55b55b;
  color: #fff;
  text-decoration: none;
  padding: 1.1rem 1.7rem;
  transition: all 0.4s ease-in-out;
}
nav .links a:last-of-type:hover {
  background-color: #333;
  color: #55b55b;
  border-top-right-radius: 100px;
}
nav.scrollable {
  background-color: #FFF;
  padding: 0 5% ;
}
nav.scrollable *{
  transition: all .4s ease-in-out;
}
nav.scrollable .links a {
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.4s ease-in-out;
}
nav.scrollable .logo {
  display: flex;
  align-items: center;
  height: 4rem;
}
nav.scrollable .logo img {
  height: 55%;
}
nav.scrollable .links a:last-of-type {
  display: inline-block;
  font-size: 1rem;
  font-family: "BreeSerif";
  border-radius: 0px;
  background-color: #55b55b;
  color: #fff;
  text-decoration: none;
  padding: 1.5rem 1.7rem;
  transition: all 0.4s ease-in-out;
}
nav.scrollable .links a:last-of-type:hover {
  background-color: #333;
  color: #55b55b;
}
</style>
