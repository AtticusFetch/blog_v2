var currentTitle = '';
var currentWidth;
var currentFontSize;
var indent;

$(document).ready(function(){
    init();
    clickMenuItem();
    fontResize();
});

function init(){
    $('body').css('opacity','1');
    setTitle('main');
    $('#mainContent').addClass('contentVisible')
        .css('font-size', parseFloat($('#mainContent').css('font-size'))*($(window).width()/1920))
        .css('left', ($(window).width() - $('#' + $(this).attr('class') + 'Content').outerWidth())/2 +'px')
        .css('right',($(window).width() - $('#' + $(this).attr('class') + 'Content').outerWidth())/2 + 'px');
    indent = ($(window).width() - $('#' + $(this).attr('class') + 'Content').outerWidth())/2;
    currentFontSize = 6*parseFloat($('#' + currentTitle + 'Content').css('font-size'));
    $('.header').css('height',$('.wrapper .header #' + currentTitle).outerHeight(true) + 'px');
}

function setTitle(titleID){
    currentTitle = titleID;
    $('.wrapper .header #' + titleID).addClass('visibleTitle')
        .css({left: ($('.header').outerWidth(true) - $(this).outerWidth(true))/2})
            .css({right: ($('.header').outerWidth(true) - $(this).outerWidth(true))/2});
}

function fontResize(){
    currentWidth = parseFloat($(window).width());
    $(window).resize(function() {
        $('#' + currentTitle + 'Content').css('font-size', currentFontSize*(($(window).width()/currentWidth)))
            .css('left', indent*($(window).width()/currentWidth)  + 'px')
                .css('right', indent*($(window).width()/currentWidth) + 'px');
    });
}

function clickMenuItem(){

    $('.wrapper .header').click(function(){
        removeTitle(currentTitle);
        $('#' + currentTitle + 'Content').removeClass('contentVisible');
        init();
    });


    $('.wrapper .menu ul li').click(function(){
        $(this).removeClass('rotate');
        $('#' + currentTitle + 'Content').removeClass('contentVisible');
        $('#' + $(this).attr('class') + 'Content').addClass('contentVisible')
            .css('font-size', 2.5*parseFloat($(this).css('font-size'))*($(window).width()/1920))
            .css('left', ($(window).width() - $('#' + $(this).attr('class') + 'Content').outerWidth())/2 +'px')
            .css('right',($(window).width() - $('#' + $(this).attr('class') + 'Content').outerWidth())/2 + 'px');
        indent = ($(window).width() - $('#' + $(this).attr('class') + 'Content').outerWidth())/2;
        removeTitle(currentTitle);
        setTitle($(this).attr('class'));
        $(this).addClass('rotate')
            .mouseout(function(){
                currentFontSize = parseFloat($('#' + currentTitle + 'Content').css('font-size'));
            });
    });
}

function removeTitle(titleID){
    $('.wrapper .header #' + titleID).removeClass('visibleTitle');
}

/**
 * Created by Ivan_Iankovskyi on 3/18/2015.
 */
