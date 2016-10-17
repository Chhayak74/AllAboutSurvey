//Creating animation for enter , move and leave process in ng-repeat 

myApp.animation('.slide', [function() {
  return {
   
    enter: function(element, doneFn) {
      jQuery(element).fadeIn(1000, doneFn);
      console.log("enter")
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