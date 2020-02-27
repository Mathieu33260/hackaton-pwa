<template>
    <div>
        Pourquoi tu consommes ?
        <router-link to="/consommation/fabrication">
            <button>
                FABRICATION
            </button>
        </router-link>

        <router-link to="/consommation/utilisation">
            <button>
                UTILISATION
            </button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Consomme"
    }
</script>

<style scoped>

</style>
