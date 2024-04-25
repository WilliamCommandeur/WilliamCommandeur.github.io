const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 100,
    
    breakpoints: {
        850: {
            slidesPerView:2,
            spaceBetween: 80,
        },
        1200: {
            slidesPerView:3,
            spaceBetween: 80
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    }
});
