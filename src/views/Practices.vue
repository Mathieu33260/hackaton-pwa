<template>
    <div>
        <section class="good-practices">
            <h1>Les bonnes pratiques</h1>
            <p>Nous ne sommes qu’au début du phénomène de la pollution numérique. Elle va s’accroître exponentiellement
                dans les prochaines années si nous ne faisons rien. Nous avons déjà des solutions pour lutter contre
                elle et nous n’avons aucune excuse valable pour ne pas agir dès maintenant.</p>
            <h2>Comment devenir un internaute plus écolo et diminuer sa pollution numérique ?</h2>
        </section>
        <section class="practices-list">
            <div class="filters">
                <span class="title">Filtres de recherche</span>
                <ul>
                    <li>
                        <button @click="filterCategory(null)" :class="selectedCategories.length === 0 ? 'active' : ''">Tout</button>
                    </li>
                    <li v-for="category in categories" v-if="category !== ''">
                        <button @click="filterCategory(category)" :class="classCategory(category)">{{ category }}</button>
                    </li>
                </ul>
            </div>
            <div class="content">
                <div class="block" v-for="(data, index) in filteredData">
                    <p class="fact">{{ data.fact }}</p>
                    <p :class="`tip ` + classExtended(data.extended)">{{ data.tip }}</p>
                    <button @click="more(index, data)" :class="`more ` + classExtended(data.extended)">
                        <span class="text">Voir la solution</span>
                        <span class="chevron">
                            <img src="./../assets/img/icon-angle-btn-solution.svg"
                                 alt="" aria-haspopup="false">
                        </span>
                    </button>
                </div>
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
                data: data
            }
        },
        computed: {
            filteredData() {
                if (data) {
                    let rdm1 = Math.floor(Math.random() * (5 - 1) + 1);
                    let rdm2 = Math.floor(Math.random() * (9 - 5) + 5);
                    data.map((dat, index) => {
                        let highlight;
                        if (index % 9 === 0) {
                            rdm1 = Math.floor( Math.random() * ((index + 5) - index) + index);
                            rdm2 = Math.floor(Math.random() * ((index + 9) - (index + 5)) + (index + 5));
                        }
                        if (index === rdm1) {
                            highlight = true;
                        } else if (index === rdm2) {
                            highlight = true;
                        } else {
                            highlight = false;
                        }
                        let newData = {
                            fact: dat.fact,
                            tip: dat.tip,
                            category: dat.category,
                            extended: dat.extended,
                            highlight: highlight,
                        };
                        console.log(index, highlight);
                        this.$set(this.data, index, Object.assign(
                            {},
                            this.data[index],
                            newData
                        ));
                    });
                }
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
            more(index, data) {
                let newData = {
                    fact: data.fact,
                    tip: data.tip,
                    category: data.category,
                    extended: !this.data[index].extended,
                };
                this.$set(this.data, index, Object.assign(
                    {},
                    this.data[index],
                    newData
                ));
            },
            classExtended(extended){
                return extended
                    ? 'extended'
                    : '';
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
        width: 80%;
        font-size: 4rem;
        color: #55B55B;
        text-transform: uppercase;
        margin: 0 auto 3rem auto;
        font-family: "BreeSerif";
    }

    .good-practices p {
        display: block;
        max-width: 960px;
        width: 80%;
        font-size: 1rem;
        line-height: 1.3;
        color: #707070;
        text-align: justify;
        margin: 0 auto;
        font-family: "OpenSans";
    }

    .good-practices h2 {
        display: block;
        max-width: 960px;
        width: 80%;
        font-size: 1rem;
        line-height: 1.3;
        color: #707070;
        margin: 0 auto;
        font-family: "OpenSans";
        font-weight: bold;
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

    .filters .title{
        font-family: "BreeSerif";
        font-size: 1.5rem;
        margin: 0.5rem 1rem;
        display: block;
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
        font-size: 1rem;
        appearance: none;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        border: none;
        background-color: #F1F1F1;
        cursor: pointer;
        margin: 0.5rem 1rem;
        color: #707070;
        font-family: "OpenSans";
        font-weight: bold;
    }

    .filters ul li button.active {
        background-color: #55B55B;
        color: #ffffff;
    }

    .content{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        width: 80%;
        margin: 4rem auto;
    }

    .content .block{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: calc(25% - 0.5rem);
        background-color: #ffffff;
        box-shadow: 0 0 3px #33333329;
        border-radius: 5px;
        margin-bottom: 2rem;
        padding: 2rem;
        border-left: 5px solid #999999;
    }

    @media (max-width: 1366px) {
        .content .block{
            width: calc(33.33% - 0.66rem);
        }
    }

    @media (max-width: 1280px) {
        .content .block{
            width: calc(50% - 1rem);
        }
    }

    @media (max-width: 640px) {
        .content .block{
            width: 100%;
        }
    }

    .content .block.highlighted{
        background-color: #EEEEEE;
        border-left-color: #333333;
    }

    .content .block .fact{
        font-family: "BreeSerif";
        color: #707070;
        font-size: 1rem;
        margin-bottom: 1rem;
    }

    .content .block .tip{
        font-family: "OpenSans";
        color: #55B55B;
        font-size: 1rem;
        border-top: 2px solid #F1F1F1;
        padding-top: 1rem;
        max-height: 0;
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s ease;
    }

    .content .block .tip.extended{
        max-height: 20rem;
        opacity: 1;
        visibility: visible;
        margin-bottom: 2rem;
        transition: all 0.5s ease;
    }

    .content .block button{
        appearance: none;
        border: none;
        border-radius: 2rem;
        padding: 1rem 1.5rem;
        margin-top: auto;
        color: #707070;
        font-size: 1rem;
        background-color: #EEEEEECC;
    }

    .content .block .more .text{
        margin-right: 1rem;
    }

    .content .block .more.extended .text{
        display: none;
    }

    .content .block .more .chevron{
        display: inline-block;
        vertical-align: middle;
        font-size: 2rem;
        line-height: 0;
        transition: all 0.250s ease;
    }

    .content .block .more.extended .chevron{
        transform: rotate(180deg);
        transition: all 0.250s ease;
    }
</style>
