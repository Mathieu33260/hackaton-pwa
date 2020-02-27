<template>
    <div>

        <button @click="filterCategory(null)">
            Tout
        </button>
        <button v-for="categorie in categories" @click="filterCategory(categorie)" v-if="categorie !== ''">
            {{ categorie }}
        </button>

        <div v-for="data in filteredData">
            {{ data.Faits }}
            {{ data.Astuces }}
            {{ data.categorie }}
        </div>

    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";
    import data from '../data.json';

    export default {
        name: "Practices",
        components: {
            Footer,
            Navbar
        },
        data() {
            return {
                category: null,
                data: data
            }
        },
        computed: {
            filteredData() {
                return this.category
                    ? data.filter(dat => dat.categorie === this.category)
                    : data;
            },
            categories() {
                return Array.from(new Set(this.data.map(dat => dat.categorie)));
            },
        },
        methods: {
            filterCategory(cat) {
                this.category = cat;
            }
        }
    }
</script>

<style>

</style>
