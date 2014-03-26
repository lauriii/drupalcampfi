(function ($) {
    Drupal.behaviors.responsivemenu = {
        attach: function(context) {
            $('body', context).once('responsive-menu', function () {
                $('body').bind('responsivelayout', function (e, d) {

                    //Define your drupal menu id (only works with core menu block)
                    var menuid = "body.responsive-layout-mobile nav.navigation";

                    //This condition will act under the 'mobile' size, and will not be executed on ie6 and ie7
                    if (d.to == 'mobile' && !$('html').hasClass('ie6') && !$('html').hasClass('ie7')) {

                        //Add a span tag that has the text "Show Menu", then hide the menu entirely
                        $(menuid+' ul.main-menu:not(ul.main-menu li ul.main-menu)').before( $('<span class="showmenu closed">&nbsp;</span>') );
                        $(menuid+' span.showmenu').siblings('ul').slideUp('fast');

                        //Create an open/close action on the accordion after clicking on the expand element
                        $(menuid+' span.showmenu').click(function (event) {
                            event.preventDefault();
                            if ($(this).siblings('ul').is( ":visible" )){
                                $(this).siblings('ul').slideUp('fast');
                                $(this).addClass('closed');
                                if($(this).hasClass('opened')) {
                                    $(this).removeClass('opened');
                                }
                            } else {
                                $(this).siblings('ul').slideDown('fast');
                                $(this).addClass('opened');
                                if($(this).hasClass('closed')) {
                                    $(this).removeClass('closed');
                                }
                            }
                        });
                    }
                    //this condition will work for all sizes except mobile, but will act on ie6 and ie7 browsers
                    if (d.to != 'mobile' | $('html').hasClass('ie7') ) {
                        // Check if menu should be
                        if($('body').not('.responsive-layout-mobile') && $('nav.navigation span.showmenu').length != 0) {
                            $('nav.navigation span.showmenu').siblings('ul').slideDown('fast');
                            $('span.showmenu').remove();
                        }
                    }
                });
            });
        }
    }
}(jQuery));