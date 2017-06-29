!function(doc, win) {
    var t = doc.documentElement,
        i = "orientationchange" in window ? "orientationchange" : "resize",
        d = function() {
            var n = t.clientWidth;
            if(n == 800)  { //针对特定pc渠道特殊处理
                n = 320;
                var nod = document.createElement('style'),
                str = 'html{width:40%;margin:0 auto;}.roping-ft,.goback-btn,.topnavbar-fixed{width:40%;margin:0 auto;}';
                nod.type='text/css';
                nod.innerHTML = str;
                document.getElementsByTagName('head')[0].appendChild(nod);
            }
            n && (t.style.fontSize = 100 * (n / 375) + "px")
        };
    if (doc.addEventListener) {
        win.addEventListener(i, d, !1);
        doc.addEventListener("DOMContentLoaded", d, !1);
        d()
    }
}(document, window);