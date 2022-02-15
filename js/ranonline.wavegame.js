$('.carousel').carousel({
    interval: 5000
});

$("#text-announcer").carousel("pause");

$(document).ready(function(){    
    $('[data-toggle="tooltip"]').tooltip();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

    jQuery.fn.extend({
        rwd: function(){
            $(this).wrap('<div style="width: 100%; overflow: hidden;"></div>');
            
            var fb = this;
            var tm = $(fb).parent();
            
            $(window).resize(function(){
                //default width height 500px
                var fb_w = parseInt($(fb).attr('data-width')) || 500;
                var fb_h = parseInt($(fb).attr('data-height'))|| 500;
                var win_w = tm.width();
                var r_w = (win_w/fb_w);
                
                $(fb).css('transform', 'scale('+r_w+')').css('transform-origin', '0 0');                
            }).resize();
        }
    });
});

$(window).resize(function(){
    var widthfb = window.innerWidth;
    if(widthfb > 760){
        $("html").niceScroll({
            cursorcolor:"#000000",
            cursorborder:"1px solid #670000",
            zindex: 99999
        });
    }
    if(widthfb < 600){
        $('.fb-page').attr('data-width', '300');
    }
}).resize();