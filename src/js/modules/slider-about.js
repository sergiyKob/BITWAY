import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function aboutSlider() {
    const swiper = new Swiper('.slider-about', {
        slidesPerView: 1.1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.about-slider-next',
            prevEl: '.about-slider-prev',
        },

        breakpoints: {
            480: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3.2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3.2,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });

}

export default aboutSlider;