$(function(){
    $('.test-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<img class="test-arrow test-prev" src="images/arrow-left.svg" alt="prevArrow">',
        nextArrow: '<img class="test-arrow test-next" src="images/arrow-right.svg" alt="nextArrow">',
        dots: true,
        dotsClass: 'test-dots',
        responsive: [ 
            {
                breakpoint: 1041,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    Infinity: true,
                    dots: true,
                    centerMode: true,
                    arrows: false
                }
            },
        ]

    });
    // menu
    $('.menu-btn').click(function(e){
        e.preventDefault();
        $(this).toggleClass('menu-btn_active')
        $(this).text('Close');
        $('.menu').toggleClass('menu_active');
        $('.menu-title').toggleClass('menu-title_active');
        $('.menu-btns_item').toggleClass('menu-btns_item_actives');
        $('.menu-btn-sign').css('display', 'block')
        
        if($('.menu').hasClass('menu_active')){
            $('.menu-btn').text('Close');
            $('.body').css('background', 'rgba(black, 0.5)');
        }else{
            $('.menu-btn').text('Menu');
            $('.body').css('filter', 'none');
        }
    });

    // service
    let win = $(window);

    if(win.outerWidth() < 800){
        $('.service-inner').slick({
            arrows: false,
            centerMode: true,
            centerPadding: '100px',
        });
    }else{
        $('.service-inner').slick('unslick');
    }

});

// AOS
AOS.init();