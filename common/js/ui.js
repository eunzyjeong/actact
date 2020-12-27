$(function () {

    setTimeout(function () {
        $(".entry").fadeOut(300);
    }, 500);

    $('#artwork').addClass('on');

    $('.nav__artwork').on('click', function (e) {
        e.preventDefault();

        $('#artwork').addClass('on');
        $('#schedule').removeClass('on');
        $('#member').removeClass('on');
        $('#planning-team').removeClass('on');
        $('#about-actively').removeClass('on');
        $('.nav__artwork>a>span').css('opacity', '1');
        $('.nav__schedule>a>span').css('opacity', '0.5');
        $('.nav__member>a>span').css('opacity', '0.5');
        $('.nav__planning-team>a>span').css('opacity', '0.5');
        $('.nav__about-actively>a>span').css('opacity', '0.5');
    });

    $('.nav__schedule').on('click', function (e) {
        e.preventDefault();

        $('#artwork').removeClass('on');
        $('#schedule').addClass('on');
        $('#member').removeClass('on');
        $('#planning-team').removeClass('on');
        $('#about-actively').removeClass('on');
        $('.nav__artwork>a>span').css('opacity', '0.5');
        $('.nav__schedule>a>span').css('opacity', '1');
        $('.nav__member>a>span').css('opacity', '0.5');
        $('.nav__planning-team>a>span').css('opacity', '0.5');
        $('.nav__about-actively>a>span').css('opacity', '0.5');
    });

    $('.nav__member').on('click', function (e) {
        e.preventDefault();

        $('#artwork').removeClass('on');
        $('#schedule').removeClass('on');
        $('#member').addClass('on');
        $('#planning-team').removeClass('on');
        $('#about-actively').removeClass('on');
        $('.nav__artwork>a>span').css('opacity', '0.5');
        $('.nav__schedule>a>span').css('opacity', '0.5');
        $('.nav__member>a>span').css('opacity', '1');
        $('.nav__planning-team>a>span').css('opacity', '0.5');
        $('.nav__about-actively>a>span').css('opacity', '0.5');
    });

    $('.nav__planning-team').on('click', function (e) {
        e.preventDefault();

        $('#artwork').removeClass('on');
        $('#schedule').removeClass('on');
        $('#member').removeClass('on');
        $('#planning-team').addClass('on');
        $('#about-actively').removeClass('on');
        $('.nav__artwork>a>span').css('opacity', '0.5');
        $('.nav__schedule>a>span').css('opacity', '0.5');
        $('.nav__member>a>span').css('opacity', '0.5');
        $('.nav__planning-team>a>span').css('opacity', '1');
        $('.nav__about-actively>a>span').css('opacity', '0.5');
    });

    $('.nav__about-actively').on('click', function (e) {
        e.preventDefault();

        $('#artwork').removeClass('on');
        $('#schedule').removeClass('on');
        $('#member').removeClass('on');
        $('#planning-team').removeClass('on');
        $('#about-actively').addClass('on');
        $('.nav__artwork>a>span').css('opacity', '0.5');
        $('.nav__schedule>a>span').css('opacity', '0.5');
        $('.nav__member>a>span').css('opacity', '0.5');
        $('.nav__planning-team>a>span').css('opacity', '0.5');
        $('.nav__about-actively>a>span').css('opacity', '1');
    });

    // 모바일 패널 창 열고 닫기
    $('#mobile-panel--open').on('click', function (e) {
        e.preventDefault();

        var isOpen = $('#mobile-Panel__artwork-wrap').hasClass('on');

        if (isOpen) {
            $('#mobile-Panel__artwork-wrap').removeClass('on');
        } else {
            $('#mobile-Panel__artwork-wrap').addClass('on');
        }
    });

    $('#mobile-panel__close').on('click', function (e) {
        e.preventDefault();

        var isOpen = $('#mobile-Panel__artwork-wrap').hasClass('on');

        if (isOpen) {
            $('#mobile-Panel__artwork-wrap').removeClass('on');
        } else {
            $('#mobile-Panel__artwork-wrap').addClass('on');
        }
    });

    // 전시현장사진
    // 이공갤러리 버튼 클릭 - 모달창 열림
    $('.about-actively__hover').on('click', function () {
        $('#exhibition__photo').addClass('on');
    });

    //  닫힘버튼 클릭 - 모달창 닫힘
    $('#exhibition__photo__close').on('click', function (e) {
        e.preventDefault();
        $('#exhibition__photo').removeClass('on');
    });

});


// 전시현장사진 - 슬라이드
$(document).ready(function () {

    $('.exhibition__photo__next').on('click', function (e) {
        e.preventDefault();

        $('.slider').stop().animate({
            'margin-left': '-100%'
        }, 500, function () {
            $('.slider>li').first().appendTo('.slider');
            $('.slider').css({
                'margin-left': '0%'
            });
        });
    });

    $('.exhibition__photo__prev').on('click', function (e) {
        e.preventDefault();

        $('.slider>li').last().prependTo('.slider');
        $('.slider').css({
            'margin-left': '-100%'
        });
        $('.slider').stop().animate({
            'margin-left': '0%'
        }, 500);
    });

});


// artwork detail 페이지 -- 1개일 때
$(function () {
    // artwork 포스터 상세 모달 -- 켜짐
    $('.artwork__poster').on('click', function () {
        $('#artwork-detail__view').addClass('on');
    });

    // artwork 포스터 상세 모달 -- 꺼짐 (배경 클릭시)
    var modal = document.getElementById('artwork-detail__view');

    window.addEventListener('click', (e) => {
        e.target === modal ? modal.classList.remove('on') : false
    });

});


// artwork detail 페이지 -- 2개 이상일 때 1번째
$(function () {
    
    $('.artwork__poster--1').on('click', function () {
        $('#artwork-detail__view--1').addClass('on');
    });

    var modal = document.getElementById('artwork-detail__view--1');

    window.addEventListener('click', (e) => {
        e.target === modal ? modal.classList.remove('on') : false
    });

});


// artwork detail 페이지 -- 2개 이상일 때 2번째
$(function () {
    
    $('.artwork__poster--2').on('click', function () {
        $('#artwork-detail__view--2').addClass('on');
    });

    var modal = document.getElementById('artwork-detail__view--2');

    window.addEventListener('click', (e) => {
        e.target === modal ? modal.classList.remove('on') : false
    });

});

// artwork detail 페이지 -- 2개 이상일 때 3번째
$(function () {
    
    $('.artwork__poster--3').on('click', function () {
        $('#artwork-detail__view--3').addClass('on');
    });
 
    var modal = document.getElementById('artwork-detail__view--3');

    window.addEventListener('click', (e) => {
        e.target === modal ? modal.classList.remove('on') : false
    });


});
