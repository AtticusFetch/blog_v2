var currentTitle = '';
var clicked = false;

$(document).ready(function(){
    init();
    clickMenuItem();

    $('.photoGrid img').click(function(){
        if(!clicked) {
            $(this).addClass('imageInc');
            clicked = true;
        } else {
            $(this).removeClass('imageInc');
            clicked = false;
        }
    });

});

function init(){
    $('body').css('opacity','1');
    setTitle('main');
    $('#mainContent').addClass('contentVisible');
    $('.header').css('height',$('.wrapper .header #' + currentTitle).outerHeight(true) + 'px');
}

function setTitle(titleID){
    currentTitle = titleID;
    $('.wrapper .header #' + titleID).addClass('visibleTitle');
}

function clickMenuItem(){

    $('.wrapper .header').click(function(){
        removeTitle(currentTitle);
        $('#' + currentTitle + 'Content').removeClass('contentVisible');
        init();
    });

    $('.wrapper .menu ul li').click(function(){
        /***********************************************************
        Fix icons rotation
        ***********************************************************/
        $(this).removeClass('rotate');
        $('#' + currentTitle + 'Content').removeClass('contentVisible');
        $('#' + $(this).attr('class') + 'Content').addClass('contentVisible');
        removeTitle(currentTitle);
        setTitle($(this).attr('class'));
        if ($('#' + $(this).attr('class') + 'Content').outerHeight() > $(window).height()) {
            $('body').css('overflow', 'visible')
        } else {
            $('body').css('overflow', 'hidden')
        }
        $(this).addClass('rotate');


    });
}

function removeTitle(titleID){
    $('.wrapper .header #' + titleID).removeClass('visibleTitle');
}

/**
 * Created by Ivan_Iankovskyi on 3/18/2015.
 */
