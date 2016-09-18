var bar, slider;

function init(){
	
	bar = document.getElementById('bar');
	slider = document.getElementById('slider');
	info = document.getElementById('info');
	bar.addEventListener('mousedown', startSlide, false);	
	bar.addEventListener('mouseup', stopSlide, false);
}

function startSlide(event){
	var set_perc = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
	info.innerHTML = 'start: ' + Math.round(set_perc*100) + '%';	
	bar.addEventListener('mousemove', moveSlide, false);	
	slider.style.width = (set_perc * 100) + '%';	
}

function moveSlide(event){
	var set_perc = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
	info.innerHTML = 'moving: ' + Math.round(set_perc*100) + '%';
	slider.style.width = (set_perc * 100) + '%';
}

function stopSlide(event){
	var set_perc = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
	info.innerHTML = 'done: ' + Math.round(set_perc*100) + '%';
	bar.removeEventListener('mousemove', moveSlide, false);
	slider.style.width = (set_perc * 100) + '%';
}
