angular.module('horlogeApp')
  .service('horlogeService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var horlogeSrc = '../../img/clock1.png';

    return {
        getHorlogeSrc: function () {
            //You could also return specific attribute of the form data instead
            //of the entire data
            return horlogeSrc;
        },
        setHorlogeSrc: function (newHorlogeSrc) {
            //You could also set specific attribute of the form data instead
            horlogeSrc = newHorlogeSrc;
        }
    };
  });