// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {
    $('.carouselSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false
    });
})