'use strict';

angular.module('horlogeApp')
  .controller('GameCtrl', function ($scope, horlogeService) {
		
		var scene = new Kinetic.Stage({
			container: 'horloge',
			width: 440,
			height: 456
		});
		
		var imageHorloge = new Image();
		imageHorloge.onload = function() {
			var horloge = new Kinetic.Image({
				x: 0,
				y: 0,
				image: imageHorloge,
				width: 440,
			});
			
			var horlogeImageLayer = new Kinetic.Layer();
			horlogeImageLayer.add(horloge);
			scene.add(horlogeImageLayer);
		};
		imageHorloge.src = horlogeService.getHorlogeSrc();
	});