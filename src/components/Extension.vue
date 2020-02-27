<template>
    <button @click="alert('Téléchargement en cours FAKE')">
        {{ text }}
    </button>
</template>

<script>
    export default {
        name: "Extension",
        props: {
            text: String
        }
    }
</script>

<style scoped>

</style>
