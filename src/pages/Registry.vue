<script setup>
import { ref, watchEffect } from 'vue';
import { getFormValidationResult } from '../utilities/utility';
import { addUser } from '../utilities/crudUtility';
import User from '../data/user';
import router from '../router/index';

let validationData = null;

const name = ref("");
const passwordRepeat = ref("");
const password = ref("");

watchEffect(() => {
    validationData = getFormValidationResult({name: name.value, password: password.value, passwordRepeat: passwordRepeat.value});
});

function postUserDataOrShowNegativeFeedback() {
    if (validationData.isNameCorrect && validationData.passwordData.isPasswordCorrect && validationData.isRepeatPasswordCorrect) {
        addUser(new User(name.value, password.value)).then(() => {
            router.push("/home")
        }).catch(() => {
            // Error Toast or modal
            alert("Hiba az adatbázis elérésekor!");
        });
    }
    else {
        // Feedback Toast or Modal
        alert("Nézd meg az űrlap mezőit!");
    }
}

</script>

<template>
    <section class="p-3">
        <h1 class="text-center">Regisztráció</h1>
        <form class="mx-auto p-3">
            <div class="mb-3">
                <label for="name" class="form-label">Név</label>
                <input type="text" v-model="name" class="form-control" id="name">
                <p v-if="name.length && !validationData.isNameCorrect" class="text-danger mt-2">A név nem elé hosszú!</p>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Jelszó</label>
                <input class="form-control" v-model="password" type="password" id="password">
                <p v-if="password.length" class="mt-2" :class=validationData.passwordData.bsColorClass>{{ validationData.passwordData.message }}</p>
            </div>
            <div class="mb-3">
                <label for="passwordRepeat" class="form-label">Jelszó Ismét</label>
                <input class="form-control" v-model="passwordRepeat" type="password" id="passwordRepeat">
                <p v-if="passwordRepeat.length && !validationData.isRepeatPasswordCorrect" class="text-danger mt-2">A két jelszó nem egyezik!</p>
            </div>
            <button type="button" class="btn" @click="postUserDataOrShowNegativeFeedback()">Regisztráció</button>
        </form>
    </section>
    <router-view />
</template>

<style scope>
form:not(footer form) {
    width: 600px;
}

@media only screen and (max-width: 600px) {
    form:not(footer form) {
    width: 100% !important;
}
}

</style>