document.ready = function( callback ) {
	if( document.readyState != 'loading' ) {
		callback();
	
	}
	else {
		document.addEventListener( 'DOMContentLoaded', callback );
		
	}
};

console.log("pog");

(function() {
	document.ready( function() {
		let progressbar = document.getElementById( "progressbar" );

		if( !!progressbar ) {

			let body = document.getElementsByTagName( "body" )[0];
			let window_height = body.offsetHeight;
			let client_height = document.documentElement.clientHeight;

			let last_known_scroll_position = 0;
			let ticking = false;

				var vid = document.getElementById("video");
				var notion;
				var notiplayon = false;
				var notiplayoff = true;
				var notiup = 0;
				var percentageold = 0;

			setInterval(myFunction, 500);

			function myFunction() {
				rdm = Math.random() * 10;
			  $.get(
			    "prozent.txt?"+rdm,
			    function(data) {
			      var data2 = data.toString();
			      console.log(data2);
						pog(data2)
			    },
			    "text"
			  );
			};


			function pog(data2){
				last_known_scroll_position = data2;
				if( !ticking ) {

					window.requestAnimationFrame( function() {

						nowScrolling( last_known_scroll_position );
						ticking = false;

					});
					ticking = true;

				}

			};

			window.addEventListener( "resize", refactorScreenHeight );
			var mutationObserver = new MutationObserver( refactorScreenHeight );
			mutationObserver.observe(document.documentElement, {
				attributes: true,
				characterData: true,
				childList: true,
				subtree: true,
				attributeOldValue: true,
				characterDataOldValue: true
			});

			function refactorScreenHeight() {

				client_height = document.documentElement.clientHeight;
				window_height = body.offsetHeight;

			}

			function nowScrolling( last_known_scroll_position ) {

				percentage = last_known_scroll_position;
				progressbar.style.right = "calc( 100% - " + Math.round( percentage ) + "% )";


				if(percentage > 99){
					function randomInRange(min, max) {
						return Math.random() * (max - min) + min;
					  };
					  
					  
					  confetti({
						angle: randomInRange(-200, -90),
						spread: randomInRange(50, 70),
						particleCount: randomInRange(50, 100),
						origin: { y: 0, x: 1 }
					  })
				};

				notiup = percentage - percentageold;
				percentageold = percentage;

				console.log("===============");
				console.log("Notion = " + notion);
				console.log("Notiplayon = " + notiplayon);
				console.log("Notiplayoff = " + notiplayoff);
				console.log("Notiup = " + notiup);

				if((((percentage >= 5 && percentage <= 15) || (percentage >= 85 && percentage <= 100)) && notiup > 0) || percentage >= 98){
					notion = true
				}
				else if (notiup < 0){
					notion = false
				};


				if(notion === true && notiplayon === false){
					notiplayon = true;

					vid.loop = false;
					vid.play();

					setTimeout(() => {
						vid.pause();
					}, 1000);

					setTimeout(() => {
						notiplayoff = false
					}, 5000);

					}
					else if (notion === false && notiplayoff === false){
						notiplayoff = true;

						vid.loop = false;
						vid.play();

						setTimeout(() => {
							notiplayon = false
						}, 2000);
					}
				}

			}
	
		});
	
	})();
	
