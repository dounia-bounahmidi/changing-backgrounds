// animated list section 

$(document).ready(function() {
		$(".list, ul").fadeIn("slow");  
		$(".list ul").css("margin-top", "100px"); 
}); 

// animated nav buttons 

$(document).ready(function() {

	var anim = function(element, sub) {
	element.mouseenter(function() {
		sub.animate({"width": "35px"}, 500); 
	}); 
	element.mouseleave(function() {
		sub.animate({"width": "15px"}, 500); 
	}); 
  }; 

   anim($(".back"), $("#anim"));  
   anim($(".next"), $("#next")); 
}); 

$(document).ready(function() {
	$(".back").click(function() {
		$(".list").hide(0); 
		$(".details-wrapper").hide(0); 
		$(".home").fadeIn(500); 
    }); 
}); 

// Changing backgrounds on list section 

$(document).ready(function() {
var preview = function(element, gif) {
	element.mouseenter(function() {
		$(".list").addClass(gif);  
		$(".list a, li").css("color", "#E0EEC6"); 
		$(".back p").css("color", "#E0EEC6"); 
		$("#anim").css("background", "#E0EEC6"); 
		$("#scroll-down").css("color", "#E0EEC6"); 
	}); 
	element.mouseleave(function() {
		$(".list").removeClass(gif);
		$(".list a, li").css("color", "black"); 
		$(".back p").css("color", "black");
		$("#anim").css("background", "black");   
	  }); 
  };

  preview($("#royal"), "royal");  
  preview($("#moon"), "moon");
  preview($("#garden"), "garden");
  preview($("#sunshine"), "sunshine");
  preview($("#juno"), "juno");
  preview($("#amelie"), "amelie");
  preview($("#mind"), "mind");
  preview($("#lost"), "lost");
  preview($("#antoinette"), "antoinette");
  preview($("#nobody"), "nobody");
  preview($("#drive"), "drive");
  preview($("#mommy"), "mommy");
  preview($("#rushmore"), "rushmore");
  preview($("#whiplash"), "whiplash");
});


