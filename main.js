var currentTitle = 'main';

$(document).ready(function(){
    init();
})

function init(){
    $('body').css('opacity','1');
    setTitle('main');
    $('.header').css('height',$('.wrapper .header #' + currentTitle).outerHeight(true) + 'px');
}

function setTitle(titleID){
    currentTitle = titleID;
    $('.wrapper .header #' + titleID).addClass('visibleTitle')
        .css({left: ($('header').outerWidth(true) - $('.wrapper .header #' + titleID).outerWidth(true))/2})
            .css({right: ($('header').outerWidth(true) - $('.wrapper .header #' + titleID).outerWidth(true))/2})
}

/**
 * Created by Ivan_Iankovskyi on 3/18/2015.
 */
