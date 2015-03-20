var currentTitle = '';

$(document).ready(function(){
    init();
    clickMenuItem();
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
        console.log('1' + $(this).attr('class'));
        $(this).removeClass('rotate');
        console.log('2' + $(this).attr('class'));
        $('#' + currentTitle + 'Content').removeClass('contentVisible');
        $('#' + $(this).attr('class') + 'Content').addClass('contentVisible');
        removeTitle(currentTitle);
        setTitle($(this).attr('class'));
        console.log('3' + $(this).attr('class'));
        $(this).addClass('rotate')
        console.log('4' + $(this).attr('class'));
    });
}

function removeTitle(titleID){
    $('.wrapper .header #' + titleID).removeClass('visibleTitle');
}

/**
 * Created by Ivan_Iankovskyi on 3/18/2015.
 */
