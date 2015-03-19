var currentTitle = '';

$(document).ready(function(){
    init();
    clickMenuItem();
});

function init(){
    $('body').css('opacity','1');
    setTitle('main');
    $('.header').css('height',$('.wrapper .header #' + currentTitle).outerHeight(true) + 'px');
            /*.css({left: $('.wrapper .menu ul').outerWidth(true)})
                .css({right: 'auto'})*/
    //alert($('.wrapper .menu ul li').outerWidth(true));
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
        $('#' + currentTitle + 'Content').removeClass(currentTitle + 'Visible');
        init();
    });
    $('.wrapper .menu ul li').click(function(){
        //alert($(this).attr('class'));
        $('#' + currentTitle + 'Content').removeClass(currentTitle + 'Visible');
        $('#' + $(this).attr('class') + 'Content').addClass($(this).attr('class') + 'Visible');
        $('#' + $(this).attr('class') + 'Content').css('left', ($(document).width() - $('#' + $(this).attr('class') + 'Content').outerWidth())/2 +'px')
            .css('right',($(document).width() - $('#' + $(this).attr('class') + 'Content').outerWidth())/2 + 'px');
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
