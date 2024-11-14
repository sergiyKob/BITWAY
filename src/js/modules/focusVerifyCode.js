function focusVerifyCode() {

    const inputs = document.querySelectorAll('[data-code]');
    const btn = document.querySelector('[data-btn]');

    inputs.forEach(function (el) {
        el.addEventListener('input', function (e) {
            const currentElement = e.currentTarget
            const previousElement = currentElement.closest('.form-label').previousElementSibling;
            const nextElement = currentElement.closest('.form-label').nextElementSibling;

            if (el.value.length === 1) {
                btn.focus();
            }

            if (currentElement.value.length === 1) {
                nextElement.focus();
            }

            if (currentElement.value.length === 0) {
                previousElement.focus();
            }

        });
    });
}

export default focusVerifyCode;