<template>
    <div>

        <div>
            Gros titre
        </div>

        <div>
            Etat des lieux
            <div>

            </div>
            <div>

            </div>
        </div>

        <div>Consomme</div>

        <div>
            Accès bonnes pratiques
            <router-link to="/practices">
                <button>
                    Accéder aux bonnes pratiques
                </button>
            </router-link>
        </div>

        <div>
            <Extension :text="'Télécharger'"></Extension>
        </div>

    </div>
</template>

<script>
    import Footer from "../components/Footer";
    import Extension from "../components/Extension";
    import Navbar from "../components/Navbar";

    export default {
        name: "Home",
        components: {
            Navbar,
            Extension,
            Footer
        }
    }
</script>

<style>
    body {
        background: red;
    }
</style>
