<script setup></script>
<template>
    <section class="footer-top">
        <h3 class="text-center">Don't Leave Just Yet!</h3>
        <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-success">Explore</button>
            <button type="button" class="btn btn-outline-light">How can I help</button>
        </div>
    </section>
    <footer>
        <div class="backdrop"></div>
        <div class="content p-5">
            <section class="row">
                <div class="contact-form col-lg-6">
                    <form>
                        <h4>Tell Us What You Think</h4>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea name="" id="message" class="form-control"></textarea>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">I Agree to <a href="#">Terms and
                                    Conditions</a></label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="footer-menu row col-lg-6">
                    <div class="col-lg-6">
                        <h4>Contact</h4>
                        <ul>
                            <li>
                                <i class="bi bi-telephone-fill me-2"></i> +36 90 123 4567
                            </li>
                            <li><i class="bi bi-envelope-fill me-2"></i> rainforestTean@forestmail.com</li>
                            <li>Random Address</li>
                        </ul>
                    </div>
                    <div class="col-lg-4">
                        <h4>Locations</h4>
                        <ul class="p-0">
                            <li>Lorem ipsum 1</li>
                            <li>Lorem ipsum 2</li>
                            <li>Lorem ipsum 3</li>
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
            <div class="copyright">
                <p class="m-0 text-center"> &copy; {{ new Date().getFullYear() }} - RainForest Project - All rights
                    reserved.
                </p>
            </div>
        </div>
    </footer>
</template>
<style scoped>
.footer-top {
    background-color: #2b2b2b;
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
    top: -100px;
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

/* footer section div:not(.contact-form div) {
    width: calc(100%/4);
} */

ul.d-flex li {
    margin: 0 10px;
}

a,
a:hover {
    color: #fff;
}

.copyright {
    margin-top: 40px;
    text-align: center;
    bottom: 30px;
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
    height: 100%;
    padding-bottom: 80px;
    position: relative;
}


@media only screen and (max-width: 1200px) {
    form {
        position: static !important;
    }

    .contact-form {
        position: static !important;
        padding: 30px;
    }
}
</style>