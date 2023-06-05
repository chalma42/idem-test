document.addEventListener('DOMContentLoaded', function(){
    const swiper = new Swiper(".features__slider", {
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const tabs = document.querySelectorAll('.map__tabs-item');
    let pins = document.querySelectorAll('.map__pin');
    tabs.forEach(element => {
        element.addEventListener("click", function(){
            tabs.forEach(el => {
                el.classList.remove('current')
            });
            this.classList.add('current');
            pins.forEach(elem => {
                if(elem.classList.contains(this.dataset.value)) {
                    elem.classList.add('active');
                } else {
                    elem.classList.remove('active');
                }
            });
        });
    });
})