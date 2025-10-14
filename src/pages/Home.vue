<script setup>
// ide most nem kell semmi import
</script>

<template>
  <section class="container-fluid d-flex flex-column align-items-center">
    <!-- CAROUSEL -->
    <div id="carouselExampleIndicators" class="carousel slide carousel-fade container-fluid">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/carousel1.webp" class="d-block w-100" alt="...">
          <div class="carousel-caption d-block text-center text-md-start">
                <h5>Lorem ipsum</h5>
                <p>Lorem ispum dolor sit amet</p>
                <button type="button" class="btn btnYellow mt-3 mb-md-0 mb-3">Megnézem</button>
            </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/carousel2.webp" class="d-block w-100" alt="...">
          <div class="carousel-caption d-block text-center text-md-start">
                <h5>Ipsum lorem</h5>
                <p>Sequi deleniti officiis debitis odit quidem?</p>
                <button type="button" class="btn btnYellow mt-3 mb-md-0 mb-3">Megnézem</button>
            </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- 3 KÁRTYÁS BLOKK -->
    <div class="container row text-center mt-5 three-cards">
      <h2 class="mb-5">Célunk bemutatása</h2>
      <div class="col-lg-4 col-12">
        <img src="../assets/leaf.png" alt="">
        <h3>Esőerdők fajtái</h3>
        <p>Az esőerdők nem egyformák: vannak trópusi, szubtrópusi és mérsékelt övi erdők is. Minden típus más éghajlathoz, növényzethez és állatvilághoz alkalmazkodott. Fedezd fel, hol találhatók, és mi teszi őket különlegessé!</p>
      </div>
      <div class="col-lg-4 col-12">
        <img src="../assets/binoculars.png" alt="">
        <h3>Állatvilág</h3>
        <p>Az esőerdők az élővilág kincseskamrái: több millió állatfaj otthonai. A majmoktól a színpompás madarakig, a jaguártól a méhecskékig minden életforma fontos szerepet játszik az egyensúly megőrzésében.</p>
      </div>    
      <div class="col-lg-4 col-12">
        <img src="../assets/location.png" alt="">
        <h3>Felfedezés</h3>
        <p>Merülj el az esőerdők világában! Barangold be térképen, ismerd meg titkaikat, és fedezd fel, hogyan kapcsolódik minden apró részlet a természet egészéhez. Tanulj játékosan, miközben igazi felfedezővé válsz!</p>
      </div>
    </div>

    <button type="button" class="btn">Többet</button>

    <!-- MIÉRT FONTOS -->
    <div class="container-fluid mt-5 py-5 reason">
      <h2 class="text-center">Miért fontos?</h2>
      <div class="container">
        <article class="row mt-3">
          <div class="col-lg-8 col-12 order-lg-1 order-2 mt-md-0 mt-3">
            <div class="accordion" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        A Föld tüdeje
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse show">
                        <div class="accordion-body">Az esőerdők hatalmas mennyiségű oxigént termelnek, miközben elnyelik a szén-dioxidot.
                            Nélkülük a levegőnk sokkal kevésbé lenne élhető.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Az élet forrása
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse">
                    <div class="accordion-body">A trópusi erdők szabályozzák az éghajlatot és a víz körforgását.
                        Segítenek abban, hogy legyen elegendő eső, ivóvíz és termékeny talaj.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Otthon millió fajnak
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body">Az esőerdők több millió állat- és növényfaj otthonai.
                        Sok közülük sehol máshol a világon nem található meg.</div>
                    </div>
                </div>
                </div>
          </div>
          <div class="col-lg-4 col-12 order-lg-2 order-1">
            <img src="../assets/card.webp" alt="">
          </div>
        </article>
      </div>
    </div>

    <!-- CTA BLOKKOK -->
    <div class="container mt-5">
      <h2 class="text-center">Hogyan segíthetsz az esőerdőknek?</h2>
      <div class="my-5">
        <h3>🌱 1. Vásárolj tudatosan!</h3>
        <p>A mindennapi döntéseiddel is hatással vagy a bolygóra. Válaszd azokat a termékeket, amelyek fenntartható forrásból származnak, és nem járnak erdőirtással. Kerüld a pálmaolajat, az egzotikus fából készült tárgyakat és az egyszer használatos műanyagokat. Ha felelősen vásárolsz, máris teszel valamit az esőerdők védelméért.</p>
      </div>
      <div class="text-center"><img class="cta-divider" src="../assets/leaf.png" alt=""></div>
      <div class="my-5">
        <h3>🔄 2. Csökkentsd az ökolábnyomod!</h3>
        <p>Minden apró szokás számít: használd kevesebbet az autót, spórolj az energiával, és figyelj oda a hulladék szelektálására. Ha kevesebb erőforrást fogyasztunk, kevesebb nyomást gyakorlunk a Föld erdeire és élővilágára. Gondolj arra, hogy amit ma megspórolsz, az a jövő generációinak marad meg. A változás mindig a hétköznapi döntéseknél kezdődik.</p>
      </div>
      <div class="text-center"><img class="cta-divider" src="../assets/leaf.png" alt=""></div>
      <div class="my-5">
        <h3>📢 3. Terjeszd az üzenetet!</h3>
        <p>Sokan nem is tudják, milyen fontos szerepet játszanak az esőerdők a Föld életében. Mesélj róluk a barátaidnak, az iskolában vagy a közösségi médiában – minden beszélgetés közelebb visz a tudatosabb világ felé. Készíthetsz plakátot, posztot, vagy akár egy rövid videót is a témáról. Egy kis figyelemfelhívás sokakat inspirálhat a cselekvésre.</p>
      </div>
    </div>

    <div class="container-fluid bg-div"></div>

    <div class="container-fluid text-center py-4">
      <h2>Térkép</h2>
      <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-4.196917,%20-65.272158+(Amazon)&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">popolazione per regione Italia mappa</a></iframe></div>
    </div>

    <div class="container row text-center my-5 p-3">
    <h2 class="mb-5">Tanulj meg többet!</h2>
      <div class="col-lg-6 col-12">
        <h3>📘 E-learning</h3>
        <p>Játékos és figyelemfelkeltő tudástárunk bárkinek segít megismerni az esőerdők különleges állatvilágát. Tanulj interaktív módon, képekkel, hangokkal és érdekességekkel!</p>
        <router-link to="/elearning" class="btn">Menjünk</router-link>
      </div>
      <div class="col-lg-6 col-12 mt-lg-0 mt-3">
        <h3>🧩 Teszteld tudásod</h3>
        <p>A népszerű „Would you rather” kvízjáték mintájára készült tudáspróbánkon kipróbálhatod, mennyire ismered az állatok tulajdonságait – miközben szórakozva tanulsz.</p>
        <router-link to="/quiz" class="btn">Menjünk</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel img {
  max-height: 600px;
  object-fit: cover;
  filter: brightness(60%);
}

.carousel h5 {
    font-size: 48px;
}

img,
.carousel img {
  width: 100%
}

div.container-fluid {
  background-color: #adcc9d;
}

.carousel,
section.container-fluid {
  padding: 0 !important
}

.map {
  width: 25%;
}

h2 {
    font-size: 36px !important;
}

.three-cards img {
    max-width: 150px;
}

.accordion-button {
    background-color: #4b7637;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
}
.accordion-button:hover {
    background-color: #105950 !important;
}
.accordion-item {
    border: 0 !important
}
.reason img {
    border-radius: 12px;
}

.cta-divider {
  max-width: 50px;
}
</style>
