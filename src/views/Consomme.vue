<template>
    <div class="wrapper">
    <div class="content">
      <h1>Les pratiques digitales <br>des utilisateurs</h1>
      <p>
        Le numérique a un impact environnemental conséquent. Si l’on prend l’exemple d’Internet, on a réalisé une analyse de cycle de vie simplifié en 2015, on a regardé son empreinte écologique et c’est à peu près deux fois celle de la France. C’est un sixième continent tant sur les émissions de gaz à effet de serre que sur l’épuisement de ressources naturelles ou encore la consommation d’énergie.
      </p>

    </div>

    <section id="infos-hero">
      <div class="left">
        <div class="wrapper">
          <img
            src="./../assets/illu-cloud.svg"
            alt="Illutration fabrication"
          />
          <h2>
            Est-ce bien d'utiliser le cloud ?
          </h2>
        </div>
      </div>
      <div class="right">
        <div class="wrapper">
          <p>
            On entend souvent dire : « Le Cloud a un impact 
            environnemental » très fort, est-ce vrai ? <br><br>

            Le Cloud a un impact environnemental très fort car 
            l’idée du Cloud, c’est de déplacer ses données 
            personnelles ou professionnelles au milieu de 
            l’Internet plutôt que d’accéder localement à ses 
            données comme on le faisait avant sur son disque dur. 
            On va avoir beaucoup d’échanges réseaux : quelque 
            soit le document utilisé, vous allez fréquemment le 
            télécharger. La promesse du Cloud, c’est que vous 
            allez pouvoir accéder à vos données de n’importe où 
            avec n’importe quel équipement. <br><br>

            Le Cloud nous incite à multiplier les équipements. 
            Plus on ajoute des objets, plus on ajoute de 
            l’empreinte environnementale.
          </p>
        </div>
      </div>
    </section>
    <div class="content fit">

        <h2>Comment gérer les mails ?</h2>
      <p>

        Contrairement aux idées reçues, l’envoi d’un mail d’un poids d’un mégaoctet génère près de <strong>20 
        grammes équivalent CO2</strong>, en raison de l’énergie consommée par les ordinateurs de l’expéditeur 
        et du destinataire, à laquelle s’ajoute celle des serveurs stockant les données informatiques 
        échangées.

        Sachant qu’un salarié français reçoit en moyenne 58 mails par jour et en envoie 33, les courriels 
        gérés par une entreprise de 100 personnes entraînent l’émission de <strong>13,6 tonnes équivalent CO2 
        par an</strong>, soit l’équivalent, en termes de pollution, de près de <strong>14 allers-retours en avion entre Paris 
        et New York</strong>, selon l’Ademe (Agence de l’environnement et de la maîtrise de l’énergie).

      </p>
    </div>
    
    <div class="content two-columns">
        <div class="left">
            <img src="./../assets/illu-music.svg" alt="Music">
        </div>
        <div class="content right">
            <h2>La musique en streaming</h2>
            <p>
                Les disques ont presque tous disparu au profit des plateformes de streaming. On 
                pourrait penser qu’opter pour les plateformes de streaming est un geste 
                écoresponsable. Dans un sens, cela permet de <strong>limiter les déchets</strong>, notamment 
                plastiques. À l’âge d’or des CD en 2000, 61 millions de kilogrammes de plastiques ont 
                été utilisés pour leur fabrication. En 2016, ce chiffre tombe à <strong>8 millions de 
                kilogrammes</strong>. <br><br>

                Mais un autre facteur de pollution est venu remplacer l’utilisation de ces matières 
                premières. Toutes les musiques proposées sur les plateformes de streaming sont en 
                effet <strong>stockées sur des serveurs</strong> très gourmands en énergie. D’après une équipe de 
                chercheurs de l’université d’Oslo, ces serveurs rendent la <strong>musique en ligne plus nocive 
                pour l’environnement</strong> que les supports physiques.
            </p>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Consomme"
    }
</script>

<style>
    .content.fit{
        max-width: 60%;
    }
    .content.fit h2{
        margin-top: 3rem;
        font-family: 'BreeSerif';
        color: #333;
        font-size: 2rem;
        line-height: 1.2;
        margin-bottom: 3rem;
        text-transform: uppercase;
    }
    .content.two-columns{
        background-color: #999;
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        padding: 5rem 10% 0;
        margin-bottom: 0;
    }
    .content.two-columns .left{
        padding-top: 5rem;
    }
    .content.two-columns .left img{
        width: 285px;
    }
    .content.two-columns .right{
        margin-left: 6rem;
    }

    .content.two-columns .right h2{
        
        margin-top: 3rem;
        font-family: 'BreeSerif';
        color: #333;
        font-size: 2rem;
        line-height: 1.2;
        margin-bottom: 3rem;
        text-transform: uppercase;
    }
</style>
