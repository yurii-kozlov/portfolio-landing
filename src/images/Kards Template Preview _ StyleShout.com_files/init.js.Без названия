/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
------------------------------------------------------------------------------------- */

(function() {

	const headerHeight = document.querySelector('#switcher').offsetHeight;
	const winHeight = window.innerHeight; 
	const adContainer = document.querySelector('#ad-block');
	const closeAd = document.querySelector('.ad-block__close');
	const pageFrame = document.querySelector('#iframe');

	// set samesite
	document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure'

	// replace 'no js' with 'js'
	// document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';  // option 01
	document.documentElement.className = 'js'; // option 02

	/*----------------------------------------------------*/
	/*	adjust iframe height
	/*----------------------------------------------------*/
	function fixHeight() {
		pageFrame.setAttribute('height', (winHeight - headerHeight) + 'px');
	}

	fixHeight();	
	window.addEventListener('load', fixHeight, false);
	window.addEventListener('resize', fixHeight, false);


	/*----------------------------------------------------*/
	/*	hide ads
	/*----------------------------------------------------*/
  	closeAd.addEventListener('click', function(e) {
  		e.preventDefault();
  		adContainer.style.display = "none";
  	});

})();











