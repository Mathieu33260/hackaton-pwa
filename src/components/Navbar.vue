<template>
    <div>
        <nav>
            <router-link to="/">
                <h2>
                    NEOS
                </h2>
            </router-link>

            <router-link to="/consommation">
                <h2>
                    Pourquoi tu consommes ?
                </h2>
            </router-link>

            <extension :text="'Télécharger l\'extension'"></extension>
        </nav>
    </div>
</template>

<script>
    import Extension from "../components/Extension";

    export default {
        name: "Navbar",
        components: {
            Extension,
        }
    }
</script>

<style scoped>

</style>
