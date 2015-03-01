function parallax(){
		var paraLayer = document.getElementById('para1');
		var paraLayer2 = document.getElementById('para2');
		paraLayer.style.top = -(window.pageYOffset / 10)+'px';
		paraLayer2.style.top = (window.pageYOffset / 10)+'px';
		//paraLayer2.style.left = (window.pageYOffset /12)+'px';	
		}
	
	window.addEventListener("scroll", parallax, false);