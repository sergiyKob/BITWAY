import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperThumbsGallery() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 5,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper2 = new Swiper(".mySwiper2", {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

export default swiperThumbsGallery;