"use strict";

var display_div = null;
var slider_div = null;
var info = null;
var leftButtonDown = false;

var slider_div_name = 'slider';
var slider_css = "#slider{width:0%;height:100%;background-color:red;top:0px;left:0px;position:absolute;cursor:pointer;};"

function init(slider_div_name) {
    // get slider <div> handle
    slider_div = document.getElementById(slider_div_name);

    // create CSS for the slider display and attach to slider_div
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = slider_css;
    slider_div.appendChild(style);

    // create slider display <div>
    var display_div = document.createElement('div');
    display_div.id = "slider";
    slider_div.appendChild(display_div);

    info = document.getElementById('info');
    slider_div.addEventListener('mousedown', mouseDown, false);
    slider_div.addEventListener('mousemove', mouseMove, false);
    slider_div.addEventListener('mouseup', mouseUp, false);
}

function mouseDown(event) {
    leftButtonDown = (event.button == 0);
    if (leftButtonDown) {
        var set_frac = ((((event.clientX - slider_div.offsetLeft) / slider_div.offsetWidth)).toFixed(2));
        info.innerHTML = 'set: ' + Math.round(set_frac*100) + '%';
        slider.style.width = (set_frac * 100) + '%';
    }
}

function mouseMove(event) {
    if (leftButtonDown) {
        var set_frac = ((((event.clientX - slider_div.offsetLeft) / slider_div.offsetWidth)).toFixed(2));
        info.innerHTML = 'dragging: ' + Math.round(set_frac*100) + '%';
        slider.style.width = (set_frac * 100) + '%';
    }
}

function mouseUp(event) {
    leftButtonDown = (event.button == 2);
}
