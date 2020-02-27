<template>
    <div>
        <section class="good-practices">
            <h1>Les bonnes pratiques</h1>
            <p>Nous ne sommes qu’au début du phénomène de la pollution numérique. Elle va s’accroître exponentiellement dans les prochaines années si nous ne faisons rien. Nous avons déjà des solutions pour lutter contre elle et nous n’avons aucune excuse valable pour ne pas agir dès maintenant. Afin de devenir un internaute plus écolo et diminuer sa pollution numérique, plusieurs éco-gestes sont préconisés :</p>
        </section>
        <section class="practices-list">
            <div class="filters">
                <ul>
                    <li>
                        <button @click="filterCategory(null)">Tout</button>
                    </li>
                    <li v-for="category in categories" v-if="category !== ''">
                        <button @click="filterCategory(category)">{{ category }}</button>
                    </li>
                </ul>
            </div>


            <div v-for="data in filteredData">
                {{ data.fact }}
                {{ data.tip }}
                {{ data.category }}
            </div>
        </section>
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
                    ? data.filter(dat => dat.category === this.category)
                    : data;
            },
            categories() {
                return Array.from(new Set(this.data.map(dat => dat.category)));
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
    .good-practices{
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        background-color: #EEEEEE;
    }

    .good-practices h1{
        display: block;
        max-width: 960px;
        width: 100%;
        font-size: 5.5rem;
        color: #55B55B;
        text-transform: uppercase;
        text-align: center;
        margin: 0 auto 3rem auto;
    }

    .good-practices p{
        display: block;
        max-width: 960px;
        font-size: 1.625rem;
        color: #707070;
        text-align: justify;
        margin: 0 auto;
    }

    .practices-list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        background-color: #EEEEEE;
    }

    .filters{
        display: block;
        width: 80%;
        margin: 0 auto;
        padding: 2rem;
        background-color: #ffffff;
    }

    .filters ul{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .filters ul li{
        display: inline-block;
    }

    .filters ul li button{
        appearance: none;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        border: 2px solid #707070;
        background-color: #707070;
        cursor: pointer;
        margin: 0.5rem 1rem;
    }
</style>
