$(document).ready(function(){

var h = 0;
var tm = false

function smoothScrollTo(h){
  h = Math.max(0, h)
  var maxX = Math.max( document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth) - window.innerWidth;
  h = Math.min(h, maxX)
	clearTimeout(tm)
	var d = Math.abs(window.pageXOffset - h)
	if (window.pageXOffset < h) {
		window.scrollTo(window.pageXOffset + Math.min(30, d), 0);
		tm = setTimeout(function () {smoothScrollTo(h);}, 30);
	} else if (window.pageXOffset > h) {
		window.scrollTo(window.pageXOffset - Math.min(30, d), 0);
		tm = setTimeout(function () {smoothScrollTo(h);}, 30);
	}
}

function whell(){
	width = document.body.clientWidth;
	if (width > 1030) {
		$('html').on('mousewheel', function(event) {
    		if (event.deltaX == -1 || event.deltaY == -1) {
    			smoothScrollTo($(document).scrollLeft() + event.deltaFactor);
    		}
    		if (event.deltaX == 1 || event.deltaY == 1) {
    			smoothScrollTo($(document).scrollLeft() - event.deltaFactor);
    		}
		});
	};

};

if (navigator.userAgent.indexOf("Mac") == -1){
	whell();
	$(window).resize(whell);
	};
});