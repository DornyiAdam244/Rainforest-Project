<script setup>
import Footer from './components/Footer.vue';

</script>

<template>
<header>

</header>
<main>
    <section class="container-fluid d-flex flex-column align-items-center">
        <h1 class="text-center">Esőerdő projekt</h1>
        <div id="carouselExample" class="carousel slide container-fluid">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="./assets/placeholder.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="./assets/placeholder.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="./assets/placeholder.png" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="container row text-center mt-3">
            <h2>Célunk bemutatása</h2>
            <div class="col-lg-4 col-12">
                <h3>🌳 Esőerdők fajtái</h3>
                <p>Az esőerdők nem egyformák: vannak trópusi, szubtrópusi és mérsékelt övi erdők is. Minden típus más éghajlathoz, növényzethez és állatvilághoz alkalmazkodott. Fedezd fel, hol találhatók, és mi teszi őket különlegessé!</p>
            </div>
            <div class="col-lg-4 col-12">
                <h3>🐒 Állatvilág</h3>
                <p>Az esőerdők az élővilág kincseskamrái: több millió állatfaj otthonai. A majmoktól a színpompás madarakig, a jaguártól a méhecskékig minden életforma fontos szerepet játszik az egyensúly megőrzésében.</p>
            </div>
            <div class="col-lg-4 col-12">
                <h3>🧭 Felfedezés</h3>
                <p>Merülj el az esőerdők világában! Barangold be térképen, ismerd meg titkaikat, és fedezd fel, hogyan kapcsolódik minden apró részlet a természet egészéhez. Tanulj játékosan, miközben igazi felfedezővé válsz!</p>
            </div>
        </div>
        <button type="button" class="btn">Többet</button>
        <div class="container-fluid mt-3 py-4">
            <h2 class="text-center">Miért fontos?</h2>
            <div class="container">
                <article class="row mt-3">
                    <div class="col-lg-8 col-12 order-lg-1 order-2">
                        <ul class="list-group list-group-flush mt-lg-0 mt-4">
                            <li class="list-group-item">🌍 Az esőerdők hatalmas mennyiségű oxigént termelnek, miközben elnyelik a szén-dioxidot.
                                Nélkülük a levegőnk sokkal kevésbé lenne élhető.</li>
                            <br>
                                <li class="list-group-item">💧 A trópusi erdők szabályozzák az éghajlatot és a víz körforgását.
                                Segítenek abban, hogy legyen elegendő eső, ivóvíz és termékeny talaj.</li>
                            <br>
                                <li class="list-group-item">🐾 Az esőerdők több millió állat- és növényfaj otthonai.
                                Sok közülük sehol máshol a világon nem található meg.</li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-12 order-lg-2 order-1">
                        <img src="./assets/placeholder.png" alt="">
                    </div>
                </article>
            </div>
        </div>
        <div class="container mt-3">
            <h2 class="text-center">Hogyan segíthetsz az esőerdőknek?</h2>
            <div class="mt-4">
                <h3>🌱 1. Vásárolj tudatosan</h3>
                <p>A mindennapi döntéseiddel is hatással vagy a bolygóra. Válaszd azokat a termékeket, amelyek fenntartható forrásból származnak, és nem járnak erdőirtással. Kerüld a pálmaolajat, az egzotikus fából készült tárgyakat és az egyszer használatos műanyagokat. Ha felelősen vásárolsz, máris teszel valamit az esőerdők védelméért.</p>
            </div>
            <div class="mt-4">
                <h3>🔄 2. Csökkentsd az ökolábnyomod</h3>
                <p>Minden apró szokás számít: használd kevesebbet az autót, spórolj az energiával, és figyelj oda a hulladék szelektálására. Ha kevesebb erőforrást fogyasztunk, kevesebb nyomást gyakorlunk a Föld erdeire és élővilágára. Gondolj arra, hogy amit ma megspórolsz, az a jövő generációinak marad meg. A változás mindig a hétköznapi döntéseknél kezdődik.</p>
            </div>
            <div class="mt-4">
                <h3>📢 3. Terjeszd az üzenetet</h3>
                <p>Sokan nem is tudják, milyen fontos szerepet játszanak az esőerdők a Föld életében. Mesélj róluk a barátaidnak, az iskolában vagy a közösségi médiában – minden beszélgetés közelebb visz a tudatosabb világ felé. Készíthetsz plakátot, posztot, vagy akár egy rövid videót is a témáról. Egy kis figyelemfelhívás sokakat inspirálhat a cselekvésre.</p>
            </div>
        </div>
        <div class="container-fluid bg-div">
        </div>
        <div class="container-fluid text-center py-4">
            <h2>Térkép</h2>
            <img class="map" src="./assets/vue.svg" alt="">
        </div>
        <div class="container row text-center mt-3">
            <div class="col-lg-6 col-12">
                <h3>📘 E-learning</h3>
                <p>Játékos és figyelemfelkeltő tudástárunk bárkinek segít megismerni az esőerdők különleges állatvilágát.
                    Tanulj interaktív módon, képekkel, hangokkal és érdekességekkel!</p>
                <button type="button" class="btn">Menjünk</button>
            </div>
            <div class="col-lg-6 col-12 mt-lg-0 mt-3">
                <h3>🧩 Teszteld tudásod!</h3>
                <p>A népszerű „Would you rather” kvízjáték mintájára készült tudáspróbánkon kipróbálhatod, mennyire ismered az állatok tulajdonságait – miközben szórakozva tanulsz.</p>
                <button type="button" class="btn">Menjünk</button>
            </div>
        </div>
    </section>
</main>
<Footer/>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
.carousel img {
    max-height: 400px;
    object-fit: cover;
}
img, .carousel img {
    width: 100%
}
div.container-fluid {
    background-color: #adcc9d;
}
.carousel, section.container-fluid {
    padding: 0 !important
}
.map {
    width: 25%;
}
.bg-div {
    background-image: url("./assets/section-bg.jpg");
    background-size: cover;
    height: 300px;
}

@font-face {
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  src: url("Verdana.ttf");
}

p, li {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #696969
}

h1, h2, h3 {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  color: #4b7637;
  text-transform: uppercase;
}

.btn {
    background-color: #4b7637;
    color: #fff;
    text-transform: uppercase;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 0 20px 0 20px;
}

.btn:hover {
    background-color: #105950
}

</style>
