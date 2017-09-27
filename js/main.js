// Preload
$(window).on('load', function() {
    $('.preloader').fadeOut('slow');
    setTimeout(function() {
        $('.cssload-loader').fadeOut('slow');
        $('body').css({'overflow':'visible'});
    }, 350);
});
// Preload

// Mailchimp
$('.mailchimp').ajaxChimp({
    callback: mailchimpCallback,
    //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
    url: "http://twopointstudios.us16.list-manage.com/subscribe/post?u=1c075c936c4fc278983d2c8c8&amp;id=b596cba2d9"
});

function mailchimpCallback(resp) {
    if (resp.result === 'success') {
        alert(resp.msg);

    } else if(resp.result === 'error') {
        alert(resp.msg);
    }
}
// Mailchimp

$(function() {
    var cYear = $('.countddata').attr('data-year');
    var cMonth = $('.countddata').attr('data-month');
    var cDay = $('.countddata').attr('data-day');
    var cTime = $('.countddata').attr('data-time');

    $('.stimeLayer').countdown(''+cYear+'/'+cMonth+'/'+cDay+' '+cTime+'').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
            + '<div class="stimedisp">%S</div>'));
    });

    $('.fulldateLayer').countdown(''+cYear+'/'+cMonth+'/'+cDay+' '+cTime+'').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
            + '<span>%D</span> days '
            + '<span>%H</span> hr '
            + '<span>%M</span> min '
            + '<span>%S</span> sec'));
    });

    $('.subtitle').textgrad({
        maxGroup: 10,
        type: '_',
        begin: 'b8edff',
        end: '00c0ff'
    });

    $('.mobileCloseSide').on('click', function() {
        $('.sidedisplaytoggle').removeClass('active');
        $('.sidedisplaytoggle i').toggleClass('fa-bars fa-times');
        $('#sidePanel').animate({
            right: '-100%'
        }, 1000);
        $('#page-wrap').animate({
            width: '100%'
        }, 1300);
    });

    $('.sidedisplaytoggle').on('click',function() {
       if($(this).hasClass('active')){
           $(this).removeClass('active');

           if ($(window).width() > 767) {
               $('#sidePanel').animate({
                   right: '-50%'
               }, 1000);

               $('#page-wrap').animate({
                   width: '100%'
               }, 1300);
           }
           else {
               $('#sidePanel').animate({
                   right: '-100%'
               }, 1000);
           }

           $('.sidedisplaytoggle i').toggleClass('fa-bars fa-times');
       }
       else {
           $(this).addClass('active');

           if ($(window).width() > 767) {
               $('#sidePanel').animate({
                   right: '0'
               }, 1000);

               $('#page-wrap').animate({
                   width: '50%'
               }, 1300);
           }
           else {
               $('#sidePanel').animate({
                   right: '0'
               }, 1000);
           }

           $('.sidedisplaytoggle i').toggleClass('fa-bars fa-times');
       }
    });

    $('.notify').on('click', function() {

        if($('.sidedisplaytoggle').hasClass('active')){
            $('.sidedisplaytoggle').removeClass('active');

            if ($(window).width() > 767) {
                $('#sidePanel').animate({
                    right: '-50%'
                }, 500);

                $('#page-wrap').animate({
                    width: '100%'
                }, 500);
            }
            else {
                $('#sidePanel').animate({
                    right: '-100%'
                }, 500);
            }

            $('.sidedisplaytoggle i').toggleClass('fa-bars fa-times');
        }

        $('.background, .overLayer1, .stimeLayer, #page-wrap, #sidePanel').addClass('blurfilter');
        $('#notifyme').fadeIn();
    });

    $('.closenotify').on('click', function() {
        $('.background, .overLayer1, .stimeLayer, #page-wrap, #sidePanel').removeClass('blurfilter');
        $('#notifyme').fadeOut('slow');
    });

    $('.sidePanel-container').perfectScrollbar();

    // get in touch form ajax
    $('#write2us').on('submit', function(){

        var processor = 'sendform.php',
            str = $(this).serialize();

        $.ajax({

            type: "POST",
            url: processor,
            data: str,
            success: function(data) {
                if(data === 'OK') {
                    $("#write2us").each(function(){
                        this.reset();
                    });

                    alert('Your message sent! Thanks!');
                } else if (data === 'ERROR') {
                    alert('Your message not sent! Please try again later!');
                } else {
                    alert(data);
                }
            }

        });
        return false;
    });
});
