$(document).ready(function() {
    function isInViewport(element) {
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop+200 < viewportBottom;
    }

    $(window).on('scroll', function() {
        $('.hobby').each(function() {
            if (isInViewport(this)) {
                $(this).addClass('hobby_appear');
            }
        });

        $('.hobby img').each(function() {
            if (isInViewport(this)) {
                $(this).addClass('hobby_img_appear');
            }
        });
    });

    $(window).trigger('scroll');
});
