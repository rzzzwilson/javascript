"use strict";

var bar, slider, info;
var leftButtonDown = false;

function init() {
	bar = document.getElementById('bar');
	slider = document.getElementById('slider');
	info = document.getElementById('info');
	bar.addEventListener('mousedown', mouseDown, false);
	bar.addEventListener('mousemove', mouseMove, false);
	bar.addEventListener('mouseup', mouseUp, false);
}

function mouseDown(event) {
    leftButtonDown = (event.button == 0);

    if (leftButtonDown) {
    	var set_frac = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
    	info.innerHTML = 'set: ' + Math.round(set_frac*100) + '%';
    	slider.style.width = (set_frac * 100) + '%';
    }
}

function mouseMove(event) {
	if (leftButtonDown) {
		var set_frac = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
		info.innerHTML = 'dragging: ' + Math.round(set_frac*100) + '%';
		slider.style.width = (set_frac * 100) + '%';
	}
}

function mouseUp(event) {
	leftButtonDown = (event.button == 2);
}
