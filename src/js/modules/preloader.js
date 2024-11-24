function preloader() {

    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');

        if (preloader) {
            setTimeout(() => {
                preloader.parentElement.removeChild(preloader)
            }, 300);
        }
    })
}

export default preloader;