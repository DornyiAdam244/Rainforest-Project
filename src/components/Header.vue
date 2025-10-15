<script setup></script>
<template>
    <header class="d-flex p-3 sticky-top">
        <div class="logo">
            <div class="d-flex align-items-center">
                <router-link to="/home"><img src="../assets/vue.svg" alt=""></router-link>
                <small class="text-muted">A természet megőrzéséért</small>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg w-100 py-0 pe-0 ps-3 navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Esőerdő Projekt</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse w-100" id="navbarNav">
                    <ul class="navbar-nav w-100">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Térképoldal</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/elearning"><a class="nav-link" href="#">E-learning</a></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/quiz"><a class="nav-link" href="#">Kvíz játék</a></router-link>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Kontakt</a>
                        </li>
                        <li class="nav-item ms-lg-auto me-lg-2 mb-2 mb-lg-0 mb-xl-0">
                            <router-link to="/registry"><button class="btn" type="button">Sign Up</button></router-link>
                        </li>
                        <li class="nav-item">
                            <button class="btn outline" type="button">Sign in</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style scoped>
header {
    background: linear-gradient(to right, #ddf3d9, #ffffff);
    box-shadow: 0 4px 6px #0000004d;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}
.logo {
  font-weight: bold;
  font-size: 20px;
}

.logo small {
    font-size: 10px;
}

.nav-link:hover {
  color: #007b5e;
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
}

</style>