(function($){ 
   $.fn.rotate = function(options){
   var defaults = {
    duration: 1,
    delay: 0,
    iteration_count: 1,
    direction: "toggle",
    timing_function: "linear"
   };
   if (options === undefined){options = defaults;}
   if (options.duration === undefined) {options.duration = defaults.duration;}
   if (options.delay === undefined) {options.delay = defaults.delay;}
   if (options.iteration_count === undefined) {options.iteration_count = defaults.iteration_count;}
   if (options.direction === undefined) {options.direction = defaults.direction;}
   if (options.timing_function === undefined) {options.timing_function = defaults.timing_function;}
   
   
   animation = "animation"+Math.floor((Math.random() * 1000000000000000) + 1);
   
   this.find(".style-rotate").remove();

   //webkit: Chrome, Safari, Opera 
   this.append("<style class='style-rotate'>@-webkit-keyframes " + animation + " {from {-webkit-transform: rotate(0deg);} to {-webkit-transform: rotate(90deg);}}</style>");
   this.css("-webkit-animation-name", ""+animation+"");
   this.css("-webkit-animation-duration", ""+options.duration+"s");
   this.css("-webkit-animation-delay", ""+options.delay+"s");
   this.css("-webkit-animation-iteration-count", ""+options.iteration_count+"");
   this.css("-webkit-animation-direction", ""+options.direction+"");
   this.css("-webkit-animation-timing-function", ""+options.timing_function+"");
   };
  })(jQuery);