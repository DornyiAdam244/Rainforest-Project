<script setup>
import { signOutUser } from '../utilities/utility';
import { registeredUser } from '../utilities/crudUtility';
</script>

<template>
    <header class="d-flex p-3 sticky-top">
        <div class="logo">
            <div class="d-flex align-items-center">
                <router-link to="/home"><img src="../assets/vue.svg" alt=""></router-link>
                <small class="text-muted">A természet megőrzéséért</small>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg w-100 py-0 pe-0 ps-3 navbar-light d-flex align-items-center">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Esőerdők világa</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse w-100" id="navbarNav">
                    <ul class="navbar-nav w-100">
                        <li class="nav-item">
                            <router-link to="/map"><a class="nav-link" href="#" active-class="active">Térképoldal</a></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/elearning"><a class="nav-link" href="#" active-class="active">E-learning</a></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/quiz"><a class="nav-link" href="#" active-class="active">Kvíz játék</a></router-link>
                        </li>
                        <li class="nav-item">
                            <a href="#contact" class="nav-link">Kontakt</a>
                        </li>
                        <div id="profile-options" class="dropdown ms-lg-auto" v-if="registeredUser">
                            <a href="#" class="profile-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-person-circle"></i> {{ registeredUser?.getName() }}</a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/progress" class="dropdown-item">Előrehaladás</router-link></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item text-danger" @click="signOutUser()">Kijelentkezés</a></li>
                            </ul>
                        </div>
                        <div v-else class="ms-lg-auto registry d-lg-flex">
                            <li class="nav-item me-lg-2 mb-2 mb-lg-0 mb-xl-0">
                                <router-link to="/registry"><button class="btn" type="button">Sign Up</button></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/log-in"><button class="btn outline" type="button">Sign In</button></router-link>
                            </li>
                        </div>
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

.profile-icon {
    font-size: 30px;
}

.nav-item {
    display: flex;
    align-items: center;
}

.logo img {
    height: 40px;
    margin-right: 10px;
}

.logo {
    font-weight: bold;
    font-size: 20px;
}

.nav-item a, .nav-item .btn {
    white-space: nowrap;
}

.logo small {
    font-size: 10px;
}


.profile-icon {
    color: #2b2b2b;
    font-size: 20px;
    display: flex;
    align-items: center;
}


.profile-icon i {
    font-size: 30px !important;
    margin-right: 10px;
}

.nav-link:hover {
    color: #007b5e;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
}

.router-link-exact-active {
  font-weight: 700;
}


@media only screen and (min-width: 991px) {
    #profile-options {
        right: 35px;
    }
}

</style>