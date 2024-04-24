const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 80,
    breakpoints: {
        800: {
            slidesPerView:2
        },
        1200: {
            slidesPerView:3
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
