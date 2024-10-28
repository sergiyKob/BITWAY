function letterCounter() {
    const input = document.querySelector('.input');
    const output = document.querySelector('.output');
    const MAXLENGTH = input.maxLength;

    input.addEventListener('input', () => {
        output.textContent = MAXLENGTH - input.value.length;

        if (input.value.length == MAXLENGTH) {
            output.style.color = 'red';
        } else {
            output.style.color = 'green';
        }
    })
}

export default letterCounter;