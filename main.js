var currentTitle = 'main';

$(document).ready(function(){
    init();
    clickRotate();
})

function init(){
    $('body').css('opacity','1');
    setTitle('main');
    $('.header').css('height',$('.wrapper .header #' + currentTitle).outerHeight(true) + 'px');
}

function setTitle(titleID){
    currentTitle = titleID;
    $('.wrapper .header #' + titleID).addClass('visibleTitle')
        .css({left: ($('header').outerWidth(true) - $(this).outerWidth(true))/2})
            .css({right: ($('header').outerWidth(true) - $(this).outerWidth(true))/2})
}

function clickRotate(){
    $('.wrapper .menu ul li').click(function(){
        $(this).addClass('rotate');
        $(this).mouseout(function(){
            $(this).removeClass('rotate');
        });
    });
}

/**
 * Created by Ivan_Iankovskyi on 3/18/2015.
 */
