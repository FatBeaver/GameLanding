$(document).ready(function() {
    // =========== Height Maps ================
    var height = $('.contact-form').innerHeight();
    $('.maps').height(height);

    //========== Scroll Header Menu ===========
    $('nav.header_nav > ul > li > a').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top,
        }, 800);
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() < 800) {
            $('.to-top').slideUp(300);
        } else {
            $('.to-top').slideDown(300);
        }
    });

    $('.to-top').on('click', function() {
        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });

    // ============ Project Filter =============
    $('li[project-type]').on('click', function(e) {
        e.preventDefault();
        if ($(this).attr('project-type') == 'all') {
            if ($(this).attr('status') == 'off') {
                $('li[project-type]').attr('status', 'off');
                $(this).attr('status', 'on');

                $('.projects > div[project-type]').hide(500);
                $('.projects > div[project-type]').show(500);
            }
        } else {
            if ($(this).attr('status') == 'off') {
                $('li[project-type]').attr('status', 'off');
                $(this).attr('status', 'on');

                $('.projects > div[project-type]').hide(500);
                var projectType = $(this).attr('project-type');
                $('.projects > div[project-type='+projectType+']').show(500);
            }
        }
    });

    // =============== Blog Filter ==================
    $('li[blog-category]').on('click', function(e) {
        e.preventDefault();

        if ($(this).attr('blog-category') == 'latest') {
            if ($(this).attr('status') == 'off') {
                $('li[blog-category]').attr('status', 'off');
                $(this).attr('status', 'on');

                $('div[blog-category]').hide(500);
                $('div[blog-category]:nth-child(-n+3)').show(500);
            }
        } else {
            if ($(this).attr('status') == 'off') {
                $('li[blog-category]').attr('status', 'off');
                $(this).attr('status', 'on');

                $('div[blog-category]').hide(500);
                var blogCategory = $(this).attr('blog-category');
                $('div[blog-category='+blogCategory+']').show(500);
            }
        }
    }); 
});