<template>
    <footer>
        <div class="agence">
            <div class="image">
                <img src="./../assets/logo-9percent.svg" alt="Logo">
            </div>
            <div class="intro">
                <span>Agence 9%</span>
                <p>Des professionnels passionnés du web et protecteurs de notre planète.
                9% c’est aussi la croissance de la consommation numérique dans le monde.
                </p>
            </div>
        </div>
        <hr>
        <div class="more-pages">
            <a href="">Mentions légales</a>
            <a href="">Aide et support</a>
            <a href="">Informations de confidentialité</a>
        </div>
    </footer>

</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style>

    footer{
        background-color: #333;
        color: #999;
        padding: 3rem 10%;
    }

    footer .agence{
        max-width: 50%;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }

    footer .agence .image{
        margin-right: 2.5rem;
    }

    footer .agence .intro{
        font-family: 'OpenSans';
    }

    footer .agence .intro span{
        display: block;
        font-family: 'BreeSerif';
        font-size: 1.4rem;
        margin-bottom: .5rem;
    }

    footer hr{
        margin: 4rem 0 2rem;
    }

    footer .more-pages{
        font-family: 'BreeSerif';
        text-align: center;
    }

    footer .more-pages a{
        margin: 4rem 0 2rem;
        font-family: 'BreeSerif';
        font-size: 1.2rem;
        color: #999;
        margin: 0 .8rem;
    }

</style>
