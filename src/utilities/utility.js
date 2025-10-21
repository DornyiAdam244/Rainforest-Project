import { registeredUser } from './crudUtility';
import Toast from '../data/toast';
import router from '../router';
const defaultAlertToast = new Toast("liveToast");


function getPasswordFeedback(password) {
    const feedback = { isCorrect: false, message: "", bsColorClass: "text-danger" };
    if (password.length < 4) {
        feedback.message = "A jelszó túl rövid! Legalább 4 karaktert addj meg!";
    }
    else if (!password.match(/[A-Z]/g)) {
        feedback.message = "A jelszó nem tartalmaz legalább 1 nagybetűt!";
    }
    else if (!password.match(/[0-9]/g)) {
        feedback.message = "A jelszó nem tartalmaz legalább 1 számot!";
    }
    else {
        feedback.isCorrect = true;
        switch (getPasswordStrengthText(password)) {
            case 0:
                feedback.message = "Gyenge, esetleg valami hosszabb jelszó?";
                feedback.bsColorClass = "text-danger-emphasis";
                break;
            case 1:
                feedback.message = "Közepes";
                feedback.bsColorClass = "text-warning";
                break;
            case 2:
                feedback.message = "Erős";
                feedback.bsColorClass = "text-success-emphasis";
                break;
            case 3:
                feedback.message = "Kiváló!";
                feedback.bsColorClass = "text-success";
                break;

        }
    }

    return feedback;
}

function signOutUser() {
    if (confirm("Biztosan ki szeretnél jelentkezni?")) {
        registeredUser.value = null;
        router.push("home");    
    }
}

function getFormValidationResult(formFields, isRegistering) {
    if (isRegistering) {
        const message =  {
            name: {
                isCorrect: true,
                message: ""
            },
            passwordRepeat: {
                isCorrect: formFields.password == formFields.passwordRepeat,
                message: formFields.password == formFields.passwordRepeat ? null : "A két jelszó nem egyezik!"
            },
            password: getPasswordFeedback(formFields.password)
        }

        if (formFields.name.length < 3) {
            message.name.message = "A név nem elég hosszú!"
            message.name.isCorrect = false;
        }
        else if (formFields.name.length > 30) {
            message.name.message = "A név maximum 30 karaktert tartalmazhat!"
            message.name.isCorrect = false;
        }

        return message;
    }
    return {
        name: {
            isCorrect: formFields.name.length != 0,
            message: formFields.name.length ? null : "Kérlek ne hagyd üresen ezt a mezőt!"
        },

        password: {
            isCorrect: formFields.password.length != 0,
            message: formFields.password.length ? null : "Kérlek ne hagyd üresen ezt a mezőt!",
            bsColorClass: "text-danger"
        }
    }

}

const getPasswordStrengthText = password => {
    if (password.length > 15) return 3;
    if (password.length > 10) return 2;
    if (password.length > 6) return 1;
    return 0;
}

export { getFormValidationResult, registeredUser, signOutUser, defaultAlertToast };