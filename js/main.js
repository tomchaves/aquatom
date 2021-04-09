$(function(){
	var previousPosition = 0;
	var currentElement = 0;
	var divCount = $(".meio > div").length;
	var animating = false;
	var divHeight = $(".meio > div").outerHeight();

	$('.meio').bind('mousewheel', function(e){
		if(animating){
			return false;
		}
		if(e.originalEvent.wheelDelta < 0) {
			if(currentElement + 1 == divCount){
				return false;
			}
			else{
				currentElement++;
				animating = true;

				$(".meio").animate({ scrollTop:  currentElement * divHeight}, 1000,function() {
					animating= false;
				});
			}
		}else {
			if(currentElement - 1 < 0){
				return false;
			}
			else{
				currentElement--;
				animating = true;
				
				$(".meio").animate({ scrollTop:  currentElement * divHeight}, 1000,function() {
					animating= false;
				});
			}	         	
		}
	});
});