myApp.animation('.slide', [function() {
  return {
    // make note that other events (like addClass/removeClass)
    // have different function input parameters
    enter: function(element, doneFn) {
      jQuery(element).fadeIn(1000, doneFn);
      console.log("enter")
      // remember to call doneFn so that angular
      // knows that the animation has concluded
    },

    move: function(element, doneFn) {
      jQuery(element).fadeIn(1000, doneFn);
      console.log(move)
    },

    leave: function(element, doneFn) {
      jQuery(element).fadeOut(1000, doneFn);
      console.log(leave)
    }
  }
}]);