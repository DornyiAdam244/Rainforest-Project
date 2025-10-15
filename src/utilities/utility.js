function getPasswordFeedback(password) {
    const feedback = { isPasswordCorrect: false, message: "", bsColorClass: "text-danger"};
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
        feedback.isPasswordCorrect = true;
        switch(getPasswordStrengthText(password)) {
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


function getFormValidationResult(formFields) {
    return {
        isNameCorrect: formFields.name.length > 3,
        isRepeatPasswordCorrect: formFields.password == formFields.passwordRepeat,
        passwordData: getPasswordFeedback(formFields.password)
    };
    
}

const getPasswordStrengthText = password => {
    if (password.length > 15) return 3;
    if (password.length > 10) return 2;
    if (password.length > 6) return 1;
    return 0;
}

export { getFormValidationResult };