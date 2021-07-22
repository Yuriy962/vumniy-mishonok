window.addEventListener('DOMContentLoaded', () => {
    menu = document.querySelector('.menu-mobile'),
    hamburger = document.querySelector('.burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger--active');
        menu.classList.toggle('menu-mobile--active');
    });
});

// let tabs = document.querySelectorAll('.tab');
// for(let i = 0; i < tabs.length; i++){
//     tabs[i].addEventListener('click', () => {
//         clearTabs();
//         this.classList.add('.tab--active');
//     });
// }

// function getActiveClassForTab(activeTav = 0) {
    
// }

// function clearTabs() {
//     tabs.forEach((tab) => {
//         tab.classList.remove('.tab--active');
//     })
// }

$(window).on('load', () => {
    $('.slider').slick({
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: 
        '<button type="button" class="slick-arrow slick-prev">' +
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' + 
                '<path class="slick-arrow-img" d="M10 16L3 9L10 2" stroke-linecap="round"/>' + 
            '</svg>' + 
        '</button>',
        nextArrow: 
        '<button type="button" class="slick-arrow slick-next">'+
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="slick-arrow-img" d="M2 2L9 9L2 16" stroke-linecap="round"/>' +
            '</svg>' +
        '</button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
})