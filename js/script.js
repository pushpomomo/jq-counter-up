$(document).ready(function(){
	// counter up
	 $('.counter').counterUp({
    delay: 10,
    time: 1000
});

    // Animated Count Up Plugin
    // $(selector).countMe(delay,speed)
   $("#counter").countMe(40,65);

    
    window.onload = ()=>{
        // $(selector).countMe(delay,speed)
        $("#num1").countMe(40,65);
        $("#num2").countMe(30, 30);
        $("#num3").countMe(40, 50);
        $("#num4").countMe(100,200);
     }


  

})

