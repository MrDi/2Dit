/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var support = { animations : Modernizr.cssanimations },
		container = document.getElementById( 'ip-container' ),
		header = container.querySelector( 'header.ip-header' ),
		loader = new PathLoader( document.getElementById( 'ip-loader-circle' ) ),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
        var btTl = new TimelineLite({ paused: true, onUpdate: function() {
    turb.setAttribute('baseFrequency', '0.00001 ' + turbVal.val); // Firefox bug is value is 0
  } });
	function init() {
		var onEndInitialAnimation = function() {
			if( support.animations ) {
				this.removeEventListener( animEndEventName, onEndInitialAnimation );
			}

			startLoading();
		};

		// disable scrolling
		window.addEventListener( 'scroll', noscroll );

		// initial animation
		classie.add( container, 'loading' );

		if( support.animations ) {
			container.addEventListener( animEndEventName, onEndInitialAnimation );
		}
		else {
			onEndInitialAnimation();
		}
	}

	function startLoading() {
		// simulate loading something..
		var simulationFn = function(instance) {
			var progress = 0,
				interval = setInterval( function() {
					progress = Math.min( progress + Math.random() * 0.1, 1 );

					instance.setProgress( progress );

					// reached the end
					if( progress === 1 ) {
						classie.remove( container, 'loading' );
						classie.add( container, 'loaded' );
						clearInterval( interval );

						var onEndHeaderAnimation = function(ev) {
							if( support.animations ) {
								if( ev.target !== header ) return;
								this.removeEventListener( animEndEventName, onEndHeaderAnimation );
							}

							classie.add( document.body, 'layout-switch' );
							window.removeEventListener( 'scroll', noscroll );
						};

						if( support.animations ) {
							header.addEventListener( animEndEventName, onEndHeaderAnimation );
						}
						else {
							onEndHeaderAnimation();
						}
					}
				}, 80 );
		};

		loader.setProgressFn( simulationFn );
        
         btTl.restart();
	}
	
	function noscroll() {
		window.scrollTo( 0, 0 );
	}

	init();
    
    
    
  
function getRandom(min, max){
  return Math.random() * (max - min) + min;
}

var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);

if (isSafari) {
  document.getElementsByTagName('html')[0].classList.add('safari');
}

// Remove click on button for demo purpose
Array.prototype.slice.call(document.querySelectorAll('.button'), 0).forEach(function(bt) {
  bt.addEventListener('click', function(e) {
    e.preventDefault();
  });
});


initBt7();


// Button 7
function initBt7() {
  var bt = document.querySelectorAll('#component-7')[0];
  var turbVal = { val: 0.000001 };
  var turb = document.querySelectorAll('#filter-glitch-3 feTurbulence')[0];
 btTl = new TimelineLite({ paused: true, onUpdate: function() {
    turb.setAttribute('baseFrequency', '0.00001 ' + turbVal.val); // Firefox bug is value is 0
  } });

  btTl.to(turbVal, 0.4, { val: 0.4 });
  btTl.to(turbVal, 0.1, { val: 0.000001 });

  bt.addEventListener('click', function() {
    btTl.restart();
  });
}   
    
    
    
    

})();




