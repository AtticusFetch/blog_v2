var currentTitle = '';
var clicked = false;

$(document).ready(function () {
    init();
    clickMenuItem();
    loadImages();

    $('.photoGrid img').click(function () {
        if (!clicked) {
            $(this).addClass('imageInc');
            $('body').css('overflow', 'visible');
            clicked = true;
        } else {
            $(this).removeClass('imageInc');
            $('body').css('overflow', 'hidden');
            clicked = false;
        }
    });
});

function init() {
    $('body').css('opacity', '1');
    setTitle('main');
    $('#mainContent').addClass('contentVisible');
    $('.header').css('height', $('.wrapper .header #' + currentTitle).outerHeight(true) + 'px');
}

function loadImages() {
    for (var i = 1; i <= 10; i++) {
        $('.photoElement').prepend('<img src="resources\\photos\\' + i + '.jpg">')
    }
}

function setTitle(titleID) {
    currentTitle = titleID;
    $('.wrapper .header #' + titleID).addClass('visibleTitle');
}

function clickMenuItem() {

    $('.wrapper .header').click(function () {
        $('body').animate({scrollTop: 0}, 'slow');
        removeTitle(currentTitle);
        $('#' + currentTitle + 'Content').removeClass('contentVisible');
        init();
    });

    $('.wrapper .menu ul li').click(function () {
        $('body').animate({scrollTop: 0}, 'slow');
        $(this).removeClass('rotate');
        $('#' + currentTitle + 'Content').removeClass('contentVisible');
        $('#' + $(this).attr('class') + 'Content').addClass('contentVisible');
        removeTitle(currentTitle);
        setTitle($(this).attr('class'));
        if ($('#' + $(this).attr('class') + 'Content').outerHeight() > $(window).height()) {
            $('body').css('overflow', 'visible');
        } else {
            $('body').css('overflow', 'hidden')
        }
        $(this).addClass('rotate');


    });
}

function removeTitle(titleID) {
    $('.wrapper .header #' + titleID).removeClass('visibleTitle');
}
