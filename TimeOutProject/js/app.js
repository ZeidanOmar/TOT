// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {
    $('.carouselSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false
    });

    $('.StepsContent').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        touchMove: true,
        arrows: false,
        infinite: false
    });
    $(".next").click(function(){
    	$('.StepsContent').slickNext();
    });


 $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});
                           

});