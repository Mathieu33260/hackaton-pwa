<template>
    <div>

        <section id="first-hero">
            <div>
                <span>
                    État des lieux
                </span>
                <h1>
                    La pollution numérique
                </h1>
            </div>
        </section>

        <section id="infos-hero">
            <div class="left">
                <div class="wrapper">
                    <img src="./../assets/illu-pollution.svg" alt="Illutration pollution">
                    <h2>La pollution,<br> face cachée du numérique</h2>
                </div>
            </div>
            <div class="right">
                <div class="wrapper">
                    <p>
                        Le numérique pollue, c’est un fait avéré. Avec ses 1400 millions de tonnes de CO2 émis par   an, la pollution dite virtuelle porte mal son   nom puisqu’elle est bien réelle et augmente au fil du temps !<br><br>

                        <strong>D’ici 2025 le numérique pourrait représenter l’équivalent des émissions de gaz à effet de serre des véhicules légers.</strong><br><br>

                        En autre, la pollution numérique est issue d’un design addictif visant à une consommation massive des utilisateurs. La pollution numérique est une pollution invisible qui grandit à une vitesse vertigineuse. Elle est la conséquence directe de la digitalisation de nos sociétés.
                    </p>
                </div>
            </div>
        </section>

        <section id="timeline-hero">
            <div class="wrapper">
                <div class="row">
                    <div class="left">
                        Une ampoule allumée chez vous pendant une heure
                    </div>
                    <div class="bullet">

                    </div>
                    <div class="right">
                        Une recherche sur le moteur Google
                    </div>
                </div>
                <div class="row">
                    <div class="left">
                        Une lessive
                    </div>
                    <div class="bullet">

                    </div>
                    <div class="right">
                        Télécharger la version électronique d'un quotidien
                    </div>
                </div>
                <div class="row">
                    <div class="left">
                        4g de Co2
                    </div>
                    <div class="bullet">

                    </div>
                    <div class="right">
                        Un mail envoyé
                    </div>
                </div>
                <div class="row">
                    <div class="left">
                        6g de Co2 / an
                    </div>
                    <div class="bullet">

                    </div>
                    <div class="right">
                        Un destinataire en plus dans un mail
                    </div>
                </div>
                <div class="row">
                    <div class="left">
                        La même consommation d'énergie qu'un réfrigérateur allumé pendant un an.
                    </div>
                    <div class="bullet">

                    </div>
                    <div class="right">
                        1 heure de vidéo visionnée sur smartphone
                    </div>
                </div>
                <div class="line">
                </div>
            </div>
        </section>

        <section id="consomme-hero">
            <div class="wrapper">
                <div class="header">
                    <span>Comprendre le phénomène</span>
                    <h2>Pourquoi le web consomme</h2>
                </div>
                <div class="body">
                    <p>
                        L'expression « pollution numérique » désigne les impacts environnementaux négatifs de ces technologies qui ressortent de leur bilan environnemental.<br>
                        La consommation d'électricité non négligeable des systèmes, l'usage de matières premières et d'énergie grise pour la fabrication des appareils, leur transformation en déchets après leur remplacement sont généralement évalués.
                    </p>
                </div>
                <div class="cta-wrapper">
                    <router-link to="/consommation/fabrication">
                        Examiner la fabrication
                    </router-link>
                </div>
            </div>
        </section>



        <section id="bonnes-pratiques-hero">
            <div class="wrapper">
                <div class="header">
                    <span>Alors que faire ?</span>
                    <h2>Les bonnes pratiques</h2>
                </div>
                <div class="content-tips" v-if="data">
                    <div class="block" v-for="index in 3">
                        <p class="fact">{{ data[index].fact }}</p>
                        <p :class="`tip ` + classExtended(data[index].extended)">{{ data[index].tip }}</p>
                        <button @click="more(index, data[index])" :class="`more ` + classExtended(data[index].extended)">
                            <span class="text">Voir la solution</span>
                            <span class="chevron">
                            <img src="./../assets/img/icon-angle-btn-solution.svg"
                                 alt="" aria-haspopup="false">
                        </span>
                        </button>
                    </div>
                </div>
                <div class="cta-wrapper">
                    <router-link to="/practices">
                        Explorer toutes les bonnes pratiques
                    </router-link>
                </div>
            </div>
        </section>

        <section id="sensi-hero">
            <div class="wrapper">
                <div class="header">
                    <span>Interpeller et sensibiliser à</span>
                    <h2>La pollution numérique</h2>
                </div>
                <div class="body">
                    <p>
                        Découvrez l’extension Néos et profitez chaque jour de faits et astuces sur les impacts du numérique sur l’environnement.
                    </p>
                </div>
                <div class="image">
                    <img src="./../assets/illu-extension.svg" alt="Illustration navigateur">
                </div>
                <div class="cta-wrapper">
                    <Extension :text="'Télécharger l\'extension navigateur'"></Extension>
                </div>
            </div>
        </section>


    </div>
</template>

<script>
    import Footer from "../components/Footer";
    import Extension from "../components/Extension";
    import Navbar from "../components/Navbar";
    import data from "../data.json";

    export default {
        name: "Home",
        components: {
            Navbar,
            Extension,
            Footer
        },
        data() {
            return {
                data: data
            }
        },
        methods: {
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


    #first-hero{
        background-color: #EEE;
        background-image: url('./../assets/motif.svg');
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #first-hero > div {
        font-family: 'BreeSerif';
        text-transform: uppercase;
        color: #333;
        font-size: 5rem;
    }

    #first-hero > div span {
        color: #999;
        font-size: 2.5rem;
    }

    #infos-hero{
        min-height: 100vh;
        display: flex;
    }

    #infos-hero .left{
        flex-basis: 40%;
        background-color: #55B55B;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #infos-hero .left .wrapper{
        flex-basis: 40%;
        background-color: #55B55B;
        text-align: center
    }

    #infos-hero .left .wrapper h2{
        margin-top: 3rem;
        font-family: 'BreeSerif';
        color: #FFF;
        font-size: 2rem;
        line-height: 1.2;
        margin-bottom: 3rem;
        text-transform: uppercase;
        text-align: left;
        max-width: 87%;
        margin-left: auto;
        margin-right: auto;
    }

    #infos-hero .right{
        flex-basis: 60%;
        background-color: #333;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #infos-hero .right .wrapper{
        max-width: 75%;
        font-size: 1.7rem;
        font-family: 'OpenSans';
        color: #FFF;
    }

    #infos-hero .right .wrapper{
        max-width: 75%;
        font-size: 1.7rem;
        font-family: 'OpenSans';
        color: #FFF;
        line-height: 1.3;
    }

    #infos-hero .right .wrapper strong{
        font-weight: bold;
    }

    #timeline-hero{
        display: flex;
        min-height: 100vh;
        padding: 2rem;
    }

    #timeline-hero .wrapper{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 10% 0;
    }
    #timeline-hero .wrapper .line{
        position: absolute;
        left: 39.93%;
        bottom: 0;
        height: calc(100% - (8px));
        width: 2px;
        background-color: #333;
    }

    #timeline-hero .wrapper .row{
        display: flex;
        align-items: center;
        font-size: 1.9rem;
        font-family: 'OpenSans';
    }
    #timeline-hero .wrapper .row:first-child{
        align-items: flex-start;
    }
    #timeline-hero .wrapper .row:first-of-type .bullet{
        margin-top: .5rem;
    }
    #timeline-hero .wrapper .row:nth-child(5) {
        align-items: flex-end;
    }
    #timeline-hero .wrapper .row:nth-child(5) > * {
        transform: translateY(50%);
    }

    #timeline-hero .wrapper .row .left{
        width: calc(40% - 8px);
        text-align: right;
        padding: 0 1em;
    }

    #timeline-hero .wrapper .row .bullet{
        width: 16px;
        height: 16px;
        border-radius: 100px;
        background-color: #333;
    }

    #timeline-hero .wrapper .row .right{
        width: calc(60% - 8px);
        font-weight: bold;
        padding: 0 1em;
    }

    #consomme-hero{
        background-color: #333;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }

    #consomme-hero .wrapper{
        max-width: 80%;
    }

    #consomme-hero .wrapper .header {
        font-family: 'BreeSerif';
        text-transform: uppercase;
        color: #FFF;
        font-size: 5rem;
        margin-bottom: 4rem;
    }

    #consomme-hero .wrapper .header span{
        color: #999;
        font-size: 2.5rem;
    }

    #consomme-hero .wrapper .body {
        font-family: 'OpenSans';
        color: #FFF;
        font-size: 1.8rem;
        line-height: 1.2;
        margin-bottom: 3rem;
    }

    #consomme-hero .wrapper .cta-wrapper a {
        display: inline-block;
        font-size: 1.3rem;
        font-family: 'BreeSerif';
        background-color: #55B55B;
        color: #FFF;
        text-decoration: none;
        padding: 1.3rem 1.9rem;
        border-top-right-radius: 100px;
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 100px;
        transition: all .4s ease-in-out;
        margin-right: 2rem;
    }

    #consomme-hero .wrapper .cta-wrapper a:last-of-type {
        background-color: white;
        color: #333;
    }

    #consomme-hero .wrapper .cta-wrapper a:hover {
        border-top-left-radius: 100px;
        background-color: white;
        color: #55B55B;
    }

    #bonnes-pratiques-hero{
        background-color: #EEE;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }

    #bonnes-pratiques-hero .wrapper{
        max-width: 80%;
    }

    #bonnes-pratiques-hero .wrapper .header {
        font-family: 'BreeSerif';
        text-transform: uppercase;
        color: #55B55B;
        font-size: 5rem;
        margin-bottom: 4rem;
    }

    #bonnes-pratiques-hero .wrapper .header span{
        color: #999;
        font-size: 2.5rem;
        display: block;
        text-align: right;
    }

    #bonnes-pratiques-hero .wrapper .cta-wrapper{
        text-align: center;
    }

    #bonnes-pratiques-hero .wrapper .cta-wrapper a {
        display: inline-block;
        font-size: 1.3rem;
        font-family: 'BreeSerif';
        background-color: #55B55B;
        color: #FFF;
        text-decoration: none;
        padding: 1.3rem 1.9rem;
        border-top-right-radius: 100px;
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 100px;
        transition: all .4s ease-in-out;
        margin-right: 2rem;
    }

    #bonnes-pratiques-hero .wrapper .cta-wrapper a:hover {
        border-top-left-radius: 100px;
        background-color: white;
        color: #55B55B;
    }

    #sensi-hero{
        overflow: hidden;
        position: relative;
        background-color: #55B55B;
        min-height: 100vh;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    #sensi-hero .wrapper{
        max-width: 80%;
    }

    #sensi-hero .wrapper .header {
        font-family: 'BreeSerif';
        text-transform: uppercase;
        color: #333;
        font-size: 5rem;
        margin-bottom: 4rem;
    }

    #sensi-hero .wrapper .header span{
        color: #FFF;
        font-size: 2.5rem;
    }

    #sensi-hero .wrapper .body p{
        font-family: 'OpenSans';
        color: #FFF;
        font-size: 1.8rem;
        line-height: 1.2;
        margin-bottom: 3rem;
    }

    #sensi-hero .wrapper .image{
        text-align: center;
    }

    #sensi-hero .wrapper .image img{
        max-width: 68%;
        margin: 0 auto;
        transform: translateY(2px);
    }

    #sensi-hero .wrapper .cta-wrapper{
        position: absolute;
        bottom: 3rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        text-align: center;
    }

    #sensi-hero .wrapper .cta-wrapper a {
        display: inline-block;
        font-size: 1.3rem;
        font-family: 'BreeSerif';
        background-color: #FFF;
        color: #333;
        text-decoration: none;
        padding: 1.3rem 1.9rem;
        border-top-right-radius: 100px;
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 100px;
        transition: all .4s ease-in-out;
        margin-right: 2rem;
    }

    #sensi-hero .wrapper .cta-wrapper a:hover {
        border-top-left-radius: 100px;
        background-color: white;
        color: #55B55B;
    }



</style>
