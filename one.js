var a=document.querySelectorAll(".elem")
// var b=document.querySelector()
a.forEach(function(e) {
	var image=e.childNodes[2]
	e.addEventListener("mousemove",function(dets){
		gsap.to(image,{
			left:dets.x
		})
	})
	e.addEventListener("mouseenter",function(dets){
		gsap.to(image,{
			transform: `translateX(-50%)scale(0)`,
			opacity:1

			
		})
	})
	e.addEventListener("mouseleave",function(dets){
		gsap.to(image,{
			transform: `translateX(-50%)scale(1)`,
			opacity:0

			
		})
	})
	
});
