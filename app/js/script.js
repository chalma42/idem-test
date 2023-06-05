document.addEventListener('DOMContentLoaded', function(){
    const swiper = new Swiper(".features__slider", {
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})