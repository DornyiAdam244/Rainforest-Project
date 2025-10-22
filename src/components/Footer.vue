<script setup></script>
<template>
    <section class="footer-top">
        <h2 class="text-center mb-3">Partnereink</h2>
        <div class="d-flex justify-content-around partners">
            <img src="../assets/vue.svg" alt="">
            <img src="../assets/partner1.png" alt="">
            <img src="../assets/partner2.png" alt="">
            <img src="../assets/partner3.png" alt="">
            <img src="../assets/partner4.png" alt="">
        </div>
    </section>
    <footer id="contact">
        <div class="backdrop"></div>
        <div class="content p-lg-5">
            <section class="row">
                <div class="contact-form col-lg-6">
                    <form>
                        <h4>Mondd el a véleményed!</h4>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email cím</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">Az email címedet soha nem osszuk meg harmadik féllel!</div>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Üzenet</label>
                            <textarea name="" id="message" class="form-control"></textarea>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Elfogadom a <a href="#">Felhasználói Feltételeket</a></label>
                        </div>
                        <button type="submit" class="btn btn-primary">Küldés</button>
                    </form>
                </div>
                <div class="footer-menu row col-lg-6">
                    <div class="col-lg-6">
                        <h4>Kontakt</h4>
                        <ul>
                            <li>
                                <i class="bi bi-telephone-fill me-2"></i> +36 90 123 4567
                            </li>
                            <li><i class="bi bi-envelope-fill me-2"></i> rainforestTean@forestmail.com</li>
                            <li><i class="bi bi-github me-2"></i> <a href="https://github.com/DornyiAdam244/Rainforest-Project" target="_blank">github.com/DornyiAdam244/Rainforest-Project</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4">
                        <h4>Locations</h4>
                        <ul class="p-0 loc">
                            <li>Tatabánya</li>
                            <li>Canberra</li>
                            <li>Yorkshire</li>
                        </ul>
                    </div>
                    <div class="col-lg-2">
                        <h4>Social</h4>
                        <ul class="">
                            <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                            <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                            <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <div class="copyright mt-auto">
                <p class="text-center"> &copy; {{ new Date().getFullYear() }} - RainForest Project - All rights
                    reserved.
                </p>
                <p class="m-0 text-center">Készitette: Hovanyecz István Dániel, Dornyi Ádám Róbert, De Caro Lorenzo</p>
            </div>
        </div>
    </footer>
</template>
<style scoped>
.footer-top {
    background-color: #cccccc49;
    color: #fff;
    padding: 30px;
}

.footer-top h3 {
    color: #fff;
    font-size: 40px;
    margin-bottom: 40px;
}

.footer-top button {
    border-radius: 0;
    margin: 0 10px;
    font-weight: 600;
    font-size: 20px;
}

.btn-outline-light {
    border-width: 2px !important;
}


.contact-form {
    position: relative;
    padding-top: 0 !important;
}

.loc li {
    font-size: 16px !important;
    margin-bottom: 5px;
}

.contact-form h3 {
    font-size: 40px;
}

form {
    background-color: #fff;
    color: #2b2b2b !important;
    padding: 30px;
    border-radius: 10px;
    box-shadow: #00000034 4px 4px 4px 5px;
    position: absolute;
    top: -75px;
}

.footer-top h4 {
    color: #4b7637;
    text-transform: uppercase;
    font-size: 40px;
}

label a,
label a:hover {
    color: #0000ff;
}

footer {
    background-image: url(../assets/footer-bg-v2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
    min-height: 50vh;
}

ul h4 {
    text-transform: uppercase;
}

.backdrop {
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    backdrop-filter: blur(2px);
    background-color: #00000028;
}

.partners img {
    width: 7%;
    object-fit: contain;
    object-position: center;

}

ul.d-flex li {
    margin: 0 10px;
}

a,
a:hover {
    color: #fff;
}

.copyright {
    text-align: center;
    padding-top: 20px;
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
    padding: 0 !important;
}


h4 {
    margin-bottom: 40px;
}

i {
    font-size: 20px;
}

h4 {
    font-size: 20px;
}

li {
    font-size: 14px !important;
}

.content {
    color: #fff;
    z-index: 2;
    width: 100%;
    padding-bottom: 40px;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    padding-bottom: 0 !important;
    position: relative;
}


@media only screen and (max-width: 1200px) {
    form {
        position: static !important;
        box-shadow: none !important;
    }

    .contact-form {
        position: static !important;
        padding: 0
    }

    .row div:not(.contact-form, .contact-form div) {
        padding: 30px !important;
    }
}
</style>