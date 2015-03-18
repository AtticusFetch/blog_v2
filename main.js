var currentTitle = '';

$(document).ready(function(){
    init();
    clickMenuItem();
});

function init(){
    $('body').css('opacity','1');
    setTitle('main');
    $('.header').css('height',$('.wrapper .header #' + currentTitle).outerHeight(true) + 'px');
    $('.wrapper .container .aboutContent').addClass('aboutVisible')
            /*.css({left: $('.wrapper .menu ul').outerWidth(true)})
                .css({right: 'auto'})*/;
    alert($('.wrapper .menu ul li').outerWidth(true));
    $('.wrapper .container').css({left: ($('.header').outerWidth(true) - $('.wrapper .container').outerWidth(true))/2 + $('.wrapper .menu ul li').outerWidth(true)})
        .css({right: ($('.header').outerWidth(true) - $(this).outerWidth(true))/2});

}

function setTitle(titleID){
    currentTitle = titleID;
    $('.wrapper .header #' + titleID).addClass('visibleTitle')
        .css({left: ($('.header').outerWidth(true) - $(this).outerWidth(true))/2})
            .css({right: ($('.header').outerWidth(true) - $(this).outerWidth(true))/2});
}

function clickMenuItem(){
    $('.wrapper .header').click(function(){
        removeTitle(currentTitle);
        init();
    });
    $('.wrapper .menu ul li').click(function(){
        removeTitle(currentTitle);
        setTitle($(this).attr('class'));
        $(this).addClass('rotate')
            .mouseout(function(){
                $(this).removeClass('rotate');
        });
    });
}

function removeTitle(titleID){
    $('.wrapper .header #' + titleID).removeClass('visibleTitle');
}

/**
 * Created by Ivan_Iankovskyi on 3/18/2015.
 */
