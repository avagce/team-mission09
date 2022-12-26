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
// class 값이'closeBtn'인 요소를 클릭하면
// 체크박스의 체크 유무에 따라
// 쿠키를 생성하여 3일간 저장합니다.

