
define(["jquery", "howler"], function($, Howler){

	return {

		init: function(){

			var webProjects = new Howl({ urls: ['audio/switch12.wav'], volume: .6 });
			$('#web-projects a')
				.on('mouseenter', function(){
					webProjects.play();
				});



			// var menuHover = new Howl({ urls: ['audio/switch14.wav'], volume: .6 });
			// $('#moron-navigation a')
			// 	.on('mouseenter', function(){
			// 		menuHover.play();
			// 	})

			// var menuPress = new Howl({ urls: ['audio/echo_alert.wav'], volume: .3 });
			// $('#moron-navigation a')
			// 	.on('mousedown', function(){
			// 		menuPress.play();
			// 	})

			// $('#start-btn')
			// 	.on('mouseenter', function(){
			// 		socialHover.play();
			// 	})
			// 	.on('mousedown', function(){
			// 		menuPress.play();
			// 	})
		}
	}
});