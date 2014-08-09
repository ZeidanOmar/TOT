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
        infinite: false
    });
})