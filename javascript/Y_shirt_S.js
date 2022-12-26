(function () {
    var w = window;
    if (w.ChannelIO) {
        return (window.console.error || window.console.log || function () { })('ChannelIO script included twice.');
    }
    var ch = function () {
        ch.c(arguments);
    };
    ch.q = [];
    ch.c = function (args) {
        ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
        if (w.ChannelIOInitialized) {
            return;
        }
        w.ChannelIOInitialized = true;
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
        s.charset = 'UTF-8';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
        l();
    } else if (window.attachEvent) {
        window.attachEvent('onload', l);
    } else {
        window.addEventListener('DOMContentLoaded', l, false);
        window.addEventListener('load', l, false);
    }
})();
ChannelIO('boot', {
    "pluginKey": "3bea6599-cfec-4023-9044-9ebfa692eec3"
});
// <!-- End Channel Plugin -->
$(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 3, //  화면에 보여질 item 개수
        loop: true,    // 반복 여부 
        margin: 20,    // 사진간의 간격
        autoplay: true,    // 자동 재생
        autoplayTimeout: 3000, // 자동 재생 시간 (2000ms = 2s, 2000밀리초 = 2초)
        autoplayHoverPause: true, // 재생화면 위로 마우스를 올리면 멈춤
        nav: true, // nav버튼 활성화
        navText: ['이전', '다음'], // navText 표현 지정
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [3000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })
    $('.market_list').bxSlider({
        auto: true,// 자동재생
        speed: 500,  // 사진 전환 속도 설정(500 = 500ms = 0.5s = 0.5초)
        stopAutoOnClick: true,  // 애니메이션 유지 시간(1000 = 1000ms = 1s = 1초) 
        pager: true, // 이전(<), 다음(>) 버튼을 누르면 슬라이드가 정지됨
        slideWidth: 1200, // 페이지의 width(폭) 1200px
    });
    // .bg-holder 요소에서 parallaxScroll을 실행합니다.
    $('.palx').parallaxScroll({
        // parallax-Scroll플러그인의 옵션은 friction 옵션 하나뿐입니다. 이 옵션값은 0에서 1사이의 소수로 표시하는데, 0이면 배경이미지가 콘텐츠를 따라 스크롤 되고, 1이면 배경이 완전히 고정되어 콘텐츠만 스크롤 됩니다. 0과 1사이의 값을 적절히 사용하면 콘텐츠와 배경의 스크롤 속도를 다르게해서 패럴렉스 효과를 낼 수 있습니다.
        friction: 0.5
    });

});
$(document).ready(function () {
    // $(".palxtext").delay(1000).animate()
    // 의미는 .palxtext에 적용된 animate() 메서드가 1000ms(1s = 1초)후에 작동함을 의미합니다.
    $(".palxtext").delay(1000).animate({ opacity: 0.8, top: 300 }, 600, "swing")
    if ($.cookie('popup') == 'none') {
        $("#notice_wrap").hide();
    }
    // class 값이'closeBtn'인 요소를 클릭하면
    // 체크박스의 체크 유무에 따라
    // 쿠키를 생성하여 3일간 저장합니다.
    var $expiresChk = $("#expiresChk");
    $(".closeBtn").on("click", closePop);
    function closePop() {
        if ($expiresChk.is(":checked")) {
            $.cookie("popup", "none", { expires: 3, path: "/" });
        }
        $("#notice_wrap").fadeOut("fast");
    }
})