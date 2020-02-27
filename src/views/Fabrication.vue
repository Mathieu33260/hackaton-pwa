<template>
  <div class="wrapper">
    <div class="content">
      <h1>La fabrication des <br> équipements numériques</h1>
      <p>
        Internet représente 7% de la consommation électrique mondiale et pollue
        désormais plus que tout le secteur de l’aviation civile. Cette pollution
        numérique est liée à quatre entités énergivores :
      </p>

      <ul>
        <li>les centres de données (data centers),</li>
        <li>les réseaux et les serveurs,</li>
        <li>la fabrication des équipement numériques,</li>
        <li>leurs utilisations.</li>
      </ul>

      <p>
        Parmi les émission de CO2 du numérique, 47% sont dues aux équipements
        des consommateurs (ordinateurs, smartphones, tablettes,..). La
        fabrication des équipements en France en 2017, le marché des objets
        connectés a connu une croissance de 33% (en volume) soit une
        augmentation de 31% comparé à 2016.
      </p>
    </div>

    <section id="infos-hero">
      <div class="left">
        <div class="wrapper">
          <img
            src="./../assets/illu-fabrication.svg"
            alt="Illutration fabrication"
          />
          <h2>
            Comment fabrique-t-on un ordinateur ?
          </h2>
        </div>
      </div>
      <div class="right">
        <div class="wrapper">
          <p>
            Alors que d'autres biens de consommation, comme un réfrigérateur, ou
            une voiture ne demande qu'une à deux fois leur poids en combustible
            fossile et en produits chimiques, un ordinateur de 24 kilogrammes en
            réclame au moins dix fois le sien. Soit 240 kg de combustible et 22
            kg de produits chimiques, sans compter 1,5 tonne d'eau claire.<br /><br />

            La fabrication des puces en silicium, pièces qui permettent la
            transformation de l'information au sein de chaque machine, est
            particulièrement gourmande en énergie. Il ne faut pas moins de 1,6
            kg de matières fossiles, 72 grammes de produits chimiques et 30
            litres d'eau pure pour fondre chacune d'elle.
          </p>
        </div>
      </div>
    </section>
    <div class="content">
      <p>
        <strong>Les ordinateurs recèlent nombre de substances polluantes,</strong> dangereuses
        pour ceux qui les manipulent au moment de leur fabrication et pour toute
        personne qui sera plus tard au contact des déchets électroniques,
        directement ou indirectement. <br><br>
        Outre le plomb et le mercure, dont les
        effets néfastes sont connus, on trouve une série de composés aux noms
        imprononçables. Les retardateurs de flamme en font partie. Ces
        contaminants, utilisés pour contrer les risques d'incendie, se trouvent
        à l'intérieur des moniteurs. <br><br>
        Si leurs effets ne sont pas tous encore connus, <strong>une étude du Centre d'expertise en analyse environnementale au
        Québec les soupçonne d'être responsables d'hyperthyroïdie et de troubles
        du développement du système nerveux.</strong>
      </p>
    </div>
    <section id="infos-hero" class="info-start">
      <div class="left">
        <div class="wrapper">
          <img
            src="./../assets/illu-eco.svg"
            alt="Illutration eco"
          />
          <h2>
            Quelles solutions pour réduire l’impact de notre matériel ?
          </h2>
        </div>
      </div>
      <div class="right">
        <div class="wrapper">
          <p>
            Il est important de réaliser l’impact de chacun de nos appareils. <br><br>

            Pour réduire celui-ci, le premier geste est simple : rallonger la durée de vie de nos appareils, ne pas changez tous les 2 ans de téléphone quand ce dernier fonctionne parfaitement. <br><br>

            Voici quelques autres astuces : <br><br>

            <ul>
                <li>Entretenir nos produits et installer des protections contre les virus.</li>
                <li>Penser au don, au troc ou à la vente d’occasion. Quand un appareil est remplacé alors qu’il n’a pas de défaut majeur et fonctionne encore, il est possible de donner, ou revendre ce dernier. <br> Cela prolonge leur durée de vie.</li>
                <li>Penser aussi à acheter reconditionné.</li>
            </ul>
            <br><br>
            Du même principe que l’on peut revendre son appareil encore fonctionnel, on peut aussi en racheter un en très bon état. Différents site existent pour permettre une revente d’appareils reconditionnés et donc garantie.
          </p>
        </div>
      </div>
    </section>
    <div class="content image-center">
        <img src="./../assets/illu-reduction-empreinte.svg" alt="Illustration réduction">
      <p>
        Maintenant que vous avez connaissance de cette pollution numérique, et que vous avez aussi 
        quelques astuces pour lutter contre celle-ci, vous avez le pouvoir entre vos mains pour réduire 
        vos propres émissions carbones.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fabrication"
};
</script>

<style>
    .content{
        font-family: 'OpenSans';
    }
    .content h1{
        font-family: 'BreeSerif';
        text-transform: uppercase;
        font-size: 5rem;
        margin-bottom: 3rem;
    }
    .content:first-of-type{
        padding-top: 15rem;
    }
    .content p{
        font-size: 1.4rem;
        line-height: 1.3;
        margin: .5rem 0 1rem;
    }
    .content p strong{
        font-weight: bold;
    }
    .content ul{
        font-size: 1.4rem;
        list-style-type: disc;
        padding-left: 1.3rem;
        margin: .5rem 0 1rem;
    }
    .content.image-center img{
        margin: 0 auto 2rem;
    }
    #infos-hero.info-start .right {
        padding: 6rem 0;
    }
    #infos-hero.info-start .left {
        justify-content: flex-start;
        padding-top: 6rem;
    }
</style>
