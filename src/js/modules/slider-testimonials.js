import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function sliderTestimonials() {
    const swiper = new Swiper('.slider-two', {
        slidesPerView: 1.15,
        spaceBetween: 20,
        navigation: {
            nextEl: '.btn-next-two',
            prevEl: '.btn-prev-two',
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

export default sliderTestimonials;