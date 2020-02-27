<template>
    <div>
        <section class="good-practices">
            <h1>Les bonnes pratiques</h1>
            <p>Nous ne sommes qu’au début du phénomène de la pollution numérique. Elle va s’accroître exponentiellement
                dans les prochaines années si nous ne faisons rien. Nous avons déjà des solutions pour lutter contre
                elle et nous n’avons aucune excuse valable pour ne pas agir dès maintenant. Afin de devenir un
                internaute plus écolo et diminuer sa pollution numérique, plusieurs éco-gestes sont préconisés :</p>
        </section>
        <section class="practices-list">
            <div class="filters">
                <ul>
                    <li>
                        <button @click="filterCategory(null)" :class="selectedCategories.length === 0 ? 'active' : ''">Tout</button>
                    </li>
                    <li v-for="category in categories" v-if="category !== ''">
                        <button @click="filterCategory(category)" :class="classCategory(category)">{{ category }}</button>
                    </li>
                </ul>
            </div>

            <div v-for="data in filteredData">
                {{ data.fact }}
                {{ data.tip }}
                {{ data.category }}
                <button @click="more(data)">
                    Voir plus
                </button>
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
                selectedCategories: [],
                data: data.map(dat => {
                    return {
                        fact: dat.fact,
                        tips: dat.tips,
                        category: dat.category,
                        extended: false,
                    }
                })
            }
        },
        computed: {
            filteredData() {
                return this.selectedCategories.length !== 0
                    ? data.filter(dat => this.selectedCategories.includes(dat.category))
                    : data;
            },
            categories() {
                return Array.from(new Set(this.data.map(dat => dat.category)));
            },
        },
        methods: {
            filterCategory(cat) {
                if (cat === null) {
                    this.selectedCategories = [];
                } else {
                    if (this.selectedCategories.includes(cat)) {
                        this.selectedCategories.splice(this.selectedCategories.indexOf(cat), 1);
                    } else {
                        this.selectedCategories.push(cat);
                    }
                }
            },
            classCategory(cat) {
                let slug = cat.toString().toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w\-]+/g, '')
                    .replace(/\-\-+/g, '-')
                    .replace(/^-+/, '')
                    .replace(/-+$/, '');
                return this.selectedCategories.includes(cat)
                    ? 'active ' + slug
                    : slug;
            },
            more(data) {
                let newData = {
                    fact: data.fact,
                    tips: data.tips,
                    category: data.category,
                    extended: !this.data[this.data.findIndex(dat => dat.tips === data.tips)].extended,
                };
                this.$set(this.data, this.data.findIndex(dat => dat.tips === data.tips), newData)
            }
        }
    }
</script>

<style>
    .good-practices {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        background-color: #EEEEEE;
    }

    .good-practices h1 {
        display: block;
        max-width: 960px;
        width: 100%;
        font-size: 5.5rem;
        color: #55B55B;
        text-transform: uppercase;
        text-align: center;
        margin: 0 auto 3rem auto;
        font-family: "BreeSerif";
    }

    .good-practices p {
        display: block;
        max-width: 960px;
        font-size: 1.625rem;
        line-height: 1.3;
        color: #707070;
        text-align: justify;
        margin: 0 auto;
        font-family: "OpenSans";
    }

    .practices-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        background-color: #EEEEEE;
    }

    .filters {
        display: block;
        width: 80%;
        margin: 0 auto;
        padding: 2rem;
        background-color: #ffffff;
    }

    .filters ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .filters ul li {
        display: inline-block;
    }

    .filters ul li button {
        appearance: none;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        border: 2px solid #707070;
        background-color: transparent;
        cursor: pointer;
        margin: 0.5rem 1rem;
        color: #707070;
        font-family: "OpenSans";
        font-weight: bold;
    }

    .filters ul li button.active {
        background-color: #707070;
    }

    .filters ul li button.services-mail {
        color: #FFAAC7;
        border-color: #FFAAC7;
    }

    .filters ul li button.services-mail.active {
        background-color: #FFAAC7;
    }

    .filters ul li button.economie {
        color: #D698F2;
        border-color: #D698F2;
    }

    .filters ul li button.economie.active {
        background-color: #D698F2;
    }

    .filters ul li button.moteur-de-recherche {
        color: #83C5F1;
        border-color: #83C5F1;
    }

    .filters ul li button.moteur-de-recherche.active {
        background-color: #83C5F1;
    }

    .filters ul li button.impact-environnement {
        color: #9ED87A;
        border-color: #9ED87A;
    }

    .filters ul li button.impact-environnement.active {
        background-color: #9ED87A;
    }

    .filters ul li button.info-insolite {
        color: #FDB327;
        border-color: #FDB327;
    }

    .filters ul li button.info-insolite.active {
        background-color: #FDB327;
    }

    .filters ul li button.conso-donnees {
        color: #FC7676;
        border-color: #FC7676;
    }

    .filters ul li button.conso-donnees.active {
        background-color: #FC7676;
    }
</style>
