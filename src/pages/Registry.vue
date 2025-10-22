<script setup>
import { ref, watchEffect, defineProps } from 'vue';
import { defaultAlertToast, getFormValidationResult } from '../utilities/utility';
import { addUser, fetchUserByName, registeredUser } from '../utilities/crudUtility';
import User from '../data/user';
import router from '../router/index';
const props = defineProps({
    register: Boolean
});

const overrideLengthCondition = ref(false);

let validationData = null;

const name = ref("");
const passwordRepeat = ref("");
const password = ref("");


watchEffect(() => {
    validationData = getFormValidationResult({ name: name.value, password: password.value, passwordRepeat: passwordRepeat.value }, props.register);
});

function clearFields() {
    name.value = password.value = passwordRepeat.value = "";
}

function preventServerPropagationIfInvalidFields() {
    for (let k in validationData) {
        if (!validationData[k].isCorrect) {
            return true;
        }
    }
    return false;
}

async function warnInvalidCredentialsOrProceedSignIn() {
    overrideLengthCondition.value = true;
    if (preventServerPropagationIfInvalidFields()) return;

    const user = User.userInstanceFromJSON(await fetchUserByName(name.value));
    overrideLengthCondition.value = false;

    if (user && user.getPassword() === password.value) {
        registeredUser.value = user;
        overrideLengthCondition.value = false;
        defaultAlertToast.showSuccessToast("Sikeres Bejelentkezés!", "Átirányítás a főoldalra...");
        defaultAlertToast.toastOnHide(() => router.push("/home"));
        clearFields();
    }
    else {
        defaultAlertToast.showErrorToast("Sikertelen Bejelentkezés!", "Helytelen Felhasználónév és/vagy Jelszó! ");
    }

}

function postUserDataOrShowNegativeFeedback() {
    overrideLengthCondition.value = true;
    if (preventServerPropagationIfInvalidFields()) defaultAlertToast.showErrorToast("Helytelen űrlap adatok!", "Nézd meg az űrlap mezőit!");
    else {
        fetchUserByName(name.value).then(user => {
            if (user) {
                validationData.name.message = "Ezzel a névvel már létezik felhasználó! Kérlek, válassz másik nevet!";
                validationData.name.isCorrect = false;
            }
            else {
                overrideLengthCondition.value = false;
                addUser(new User(name.value, password.value)).then(() => {
                    defaultAlertToast.showSuccessToast("Sikeres Regisztráció!", "Most átirányítunk a bejelentkezés oldalra, ahol jelentkezz be az imént megadott adatokkal!")
                    defaultAlertToast.toastOnHide(() => router.push("/log-in"));
                    clearFields();
                }).catch(() => defaultAlertToast.showErrorToast("Sikertelen Művelet", "Hiba az adatbázissal történő kommunikáció során!"));
            }
        })
    }

}

</script>

<template>
    <section class="p-3">
        <h1 class="text-center">{{ register ? "Regisztráció" : "Bejelentkezés" }}</h1>
        <form class="mx-auto p-3">
            <div class="mb-3">
                <label for="name" class="form-label">Név</label>
                <input type="text" v-model="name" class="form-control" id="name">
                <p v-if="(name.length || overrideLengthCondition) && validationData.name.message"
                    class="text-danger mt-2">{{ validationData.name.message }}
                </p>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Jelszó</label>
                <input class="form-control" v-model="password" type="password" id="password">
                <p v-if="(password.length || overrideLengthCondition) && validationData.password.message"
                    class="mt-2" :class=validationData.password.bsColorClass>{{
                        validationData.password.message }}</p>
            </div>
            <div class="mb-3" v-if="register">
                <label for="passwordRepeat" class="form-label">Jelszó Ismét</label>
                <input class="form-control" v-model="passwordRepeat" type="password" id="passwordRepeat">
                <p v-if="(passwordRepeat.length || overrideLengthCondition) && validationData.passwordRepeat.message"
                    class="text-danger mt-2">{{ validationData.passwordRepeat.message }}</p>
            </div>
            <button type="button" class="btn"
                @click="register ? postUserDataOrShowNegativeFeedback() : warnInvalidCredentialsOrProceedSignIn()">{{
                    register ? "Regisztráció" : "Bejelentkezés" }}</button>
        </form>
    </section>
    <router-view />
</template>

<style scoped>
form:not(footer form) {
    width: 600px;
}

@media only screen and (max-width: 600px) {
    form:not(footer form) {
        width: 100% !important;
    }
}
</style>