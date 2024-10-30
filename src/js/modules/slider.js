import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function slider() {
    const swiper = new Swiper('.slider-one', {
        slidesPerView: 1.15,
        spaceBetween: 20,
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },

        breakpoints: {
            600: {
                slidesPerView: 2.15,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                grid: {
                    rows: 2,
                },
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
                grid: {
                    rows: 2,
                },
            },
        },
    });

}

export default slider;