export default class Toast {
    #toastReference;
    #toastBody;

    constructor(HTMLId) {
        this.#toastBody = document.getElementById(HTMLId);
        this.#toastReference = new bootstrap.Toast(this.#toastBody);
    }

    show() {
        this.#toastReference.show();
    }
    hide() {
        this.#toastReference.hide();
    }

    setTitle(title) {
        this.#toastBody.querySelector("strong").innerHTML = title;
    }
    setMessage(message) {
        this.#toastBody.querySelector(".toast-body").innerHTML = message;
    }

    toastOnHide(func) {
        this.#toastBody.addEventListener("hidden.bs.toast", func);
    }

    setIcon(bsIconClass, bsColorClass) {
        const toastIcon = this.#toastBody.querySelector("i");
        toastIcon.classList = [];
        toastIcon.classList.add(bsIconClass, "bi", bsColorClass);
    }

    showErrorToast(title, message) {
        this.setTitle(title);
        this.setMessage(message);
        this.setIcon("bi-exclamation", "text-danger");
        this.show();
    }
    
    showSuccessToast(title, message) {
        this.setTitle(title);
        this.setMessage(message);
        this.setIcon("bi-check2-all", "text-success");
        this.show();
    }

}