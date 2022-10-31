<template>
  <main>
    <div class="about-content">
      <h1>Over Fabrice Hund</h1>

      <section>
        Zijn tekeningen en schilderijen zijn vooral figuratief van karakter en
        bevatten vaak sterk gestileerde, soms dromerige, soms groteske
        elementen. De onderwerpen, die Fabrice kiest zijn niet gemakkelijk samen
        te vatten: mensen en dieren, vaak voorgesteld in ingewikkelde
        lichamelijke strukturen, portretten, naakten, achtergronden met bomen en
        planten, stadsgezichten en cafe-scenes en last but not least de vrouw in
        al haar hoedanigheden. Fabrice ordent heldere kleuren, dansende lijnen
        en compositie op een speelse, wonderbaarlijk rake en verrassende manier.
        De vrolijke vormen en de wisselwerking tussen lijn, kleur, atmosfeer en
        toeschouwer maken blij en nodigen uit te delen in een gevoel van geluk,
        vrijheid en nieuwe verbondenheid. De bezielde en levende beelden, die
        Fabrice in zijn werk creert zijn dikwijls erotisch van karakter.
        Erotisch in de bredere zin van het begrip: het verlangen om opgenomen te
        zijn in een liefhebbende, koesterende omgeving. Bezieling is de
        kernwaarde van het werk van Fabrice.
      </section>

      <div class="image-with-text">
        <img
            src="../assets/photos/fabrice.jpeg"
            alt="fabrice in gallery"
          />
          <span>Fabrice in zijn gallerij in de Pijp.</span>
      </div>
        <section>
          Als je het hem zou vragen, zou hij de schaamteloos direkte manier
          waarop hij zijn werkelijkheid weergeeft ’hardop denken’ noemen.
          Fabrice gebruikt een grote verscheidenheid aan technieken en
          materialen. Desondanks is zijn werk altijd herkenbaar. Deze
          verscheidenheid past bij zijn warmbloedige en heftig zoekende
          temperament. Als ondergrond voor zijn schilderingen gebruikt hij niet
          alleen doek en papier, maar ook veelvuldig panelen van gerecycled
          materiaal of oude eikenhouten kastdeurtjes. De schilderijen van
          Fabrice zijn vaak van groot formaat en zijn soms opgebouwd uit
          penseelstreken van groot gebaar, maar vaak ook uit een subtiele
          lijnvoering of een combinatie van beide. De tekeningen zijn niet
          wezenlijk anders dan de schilderijen. Nu eens lijken ze schetsmatig,
          alsof de mogelijkheid geboden wordt voor aanvulling, dan weer is een
          tekening tot in het kleinste detail doorwerkt. Men ervaart een soort
          spanning, die veroorzaakt wordt door de confrontatie met een
          voortdurend zoeken: de essentie van het creatieve proces.Tekst Fabrice
          Naast de schilderijen en de tekeningen heeft Fabrice ook veel
          wandschilderingen gemaakt in Amsterdam en andere plaatsen in
          Nederland, sommige van zeer grote afmetingen, zoals langs de spoorlijn
          Amsterdam-Hilversum (110m lengte) en het projekt ’Kunst in de Bogen’
          bij het Centraal Station in Amsterdam.
        </section>

      <div class="two-section">
        <div class="image-with-text">
          <img
            src="../assets/photos/fabrice-in-gallery.jpeg"
            alt="fabrice in gallery"
          />
          <span>Fabrice in zijn gallerij in de Pijp.</span>
        </div>
        <div class="image-with-text">
          <img
            src="../assets/photos/fabrice-nijntje.jpeg"
            alt="tekst fabrice"
          />
          <span>Fabrice voor zijn nijntje kunstwerk in Amsterdam</span>
        </div>
      </div>

      <div class="">
        <section>
          Enige jaren geleden begon Fabrice de mozaiektechniek te gebruiken.
          Voor hem is het maken van een mozaiek ’schilderen met scherfjes’. In
          Amsterdam realiseerde hij twee ’Mega-mozaieken’: ’Het Kompas’ op het
          Marie Heinekenplein en ’Scherven van beschaving’ bij het
          Muiderpoortstation.
        </section>

        <section>
          In het algemeen kan men concluderen, dat zijn werk wortelt in
          expressionisme, maar in zijn 30-jarige loopbaan als kunstenaar heeft
          Fabrice een eigenzinnige beeldentaal ontwikkeld, die haar oorsprong
          vindt in het ritme van de oervormen en de liefde voor het leven in al
          haar verschijningsvormen, waardoor hij beslist een totaal eigen plek
          inneemt in de wereld van de hedendaagse schilderkunst.
        </section>
      </div>

      <div class="image-section">
        <img src="../assets//photos/tekst-fabrice.png" alt="tekst fabrice" />
        <span
          >'Ik orden heldere kleuren en dansende lijnen en oervormen met mijn
          penseel en componeer daarmee bezielde en levende beelden, waarmee ik
          hoop de toeschouwer te kunnen laten delen in mijn gevoel van blijheid
          en liefde voor het leven, waar ik ook ben.' Fabrice</span
        >
      </div>
    </div>
  </main>
</template>
<script lang="js">
export default {
    name: "AboutPage", 
}
</script>
<style lang="scss">
.about-content {
  display: flex;
  max-width: 1200px;
  flex-direction: column;
  align-items: center;
  align-content: center;
  gap: 2rem;

  margin: 2rem;
}

.image-section {
  display: flex;
  align-content: center;
  max-width: 300px;
  flex-direction: column;
}

.image-with-text {
  display: flex;
  flex-direction: column;
  align-self: center;
  flex: 1;

  img {
    max-width: 400px;
  }

  span {
    font-style: italic;
  }
}
.two-section {
  display: flex;
  gap: 4rem;
  max-width: 1000px;

  img {
    border-radius: 6px;
  }
}
section {
  max-width: 600px;
  text-align: justify;
  font-size: 1rem;
  flex: 1;
}
</style>