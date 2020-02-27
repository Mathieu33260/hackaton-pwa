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
                    <img src="" alt="">
                    <h2></h2>
                </div>
            </div>
            <div class="right">
                <div class="wrapper">
                    <p>
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

                </div>
            </div>
        </section>

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

    
    #first-hero{
        background-color: #EEE;
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
    }

    #infos-hero .right{
        flex-basis: 60%;
        background-color: #333;
    }

    #timeline-hero{
        display: flex;
        min-height: 100vh;
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
        left: 40%;
        bottom: 0;
        height: calc(100% - (8px));
        width: 2px;
        background-color: #333;
        transform: translateX(11px);
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

</style>
