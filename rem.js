
 1     (function (doc, win) {
 2         var docEl = doc.documentElement,
 3             resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
 4             recalc = function () {
 5                 var clientWidth = docEl.clientWidth;
 6                 if (!clientWidth) return;
 7                 if(clientWidth>=640){
 8                     docEl.style.fontSize = '100px';
 9                 }else{
10                     docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
11                 }
12             };
13 
14         if (!doc.addEventListener) return;
15         win.addEventListener(resizeEvt, recalc, false);
16         doc.addEventListener('DOMContentLoaded', recalc, false);
17     })(document, window);