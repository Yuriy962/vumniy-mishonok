window.addEventListener('DOMContentLoaded', () => {
    menu = document.querySelector('.menu-mobile'),
    hamburger = document.querySelector('.burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger--active');
        menu.classList.toggle('menu-mobile--active');
    });
});

$(window).on('load', () => {
    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
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
    });

    $('.teachers__slider').slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        infinite: true,
        prevArrow: 
        '<button type="button" class="slick-arrow slick-arrow--bottom slick-arrow--big slick-arrow--dark teachers-prev slick-prev">' +
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' + 
                '<path class="slick-arrow-img slick-arrow-img--white" d="M10 16L3 9L10 2" stroke-linecap="round"/>' + 
            '</svg>' + 
        '</button>',
        nextArrow: 
        '<button type="button" class="slick-arrow slick-arrow--bottom slick-arrow--dark slick-arrow--long slick-next">'+
            '<svg class="slick-arrow-svg" width="65" height="24" viewBox="0 0 65 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="slick-arrow--white" d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM64.0607 13.0607C64.6464 12.4749 64.6464 11.5251 64.0607 10.9393L54.5147 1.3934C53.9289 0.807611 52.9792 0.807611 52.3934 1.3934C51.8076 1.97919 51.8076 2.92893 52.3934 3.51472L60.8787 12L52.3934 20.4853C51.8076 21.0711 51.8076 22.0208 52.3934 22.6066C52.9792 23.1924 53.9289 23.1924 54.5147 22.6066L64.0607 13.0607ZM2 13.5H63V10.5H2V13.5Z" fill="white"/>' +
            '</svg>'
         +
        '</button>'
        ,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.logoped__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: 
        '<button type="button" class="slick-arrow slick-prev slick-arrow--big">' +
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' + 
                '<path class="slick-arrow-img" d="M10 16L3 9L10 2" stroke-linecap="round"/>' + 
            '</svg>' + 
        '</button>',
        nextArrow: 
        '<button type="button" class="slick-arrow slick-next slick-arrow--big">'+
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="slick-arrow-img" d="M2 2L9 9L2 16" stroke-linecap="round"/>' +
            '</svg>' +
        '</button>'
    });
    $('.rooms__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: 
        '<button type="button" class="slick-arrow slick-prev slick-arrow--big">' +
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' + 
                '<path class="slick-arrow-img" d="M10 16L3 9L10 2" stroke-linecap="round"/>' + 
            '</svg>' + 
        '</button>',
        nextArrow: 
        '<button type="button" class="slick-arrow slick-next slick-arrow--big">'+
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="slick-arrow-img" d="M2 2L9 9L2 16" stroke-linecap="round"/>' +
            '</svg>' +
        '</button>'
    });
})