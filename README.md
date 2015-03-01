# parallax
Background images that move at a different speed and in different directions to the content.

##How it works

The page is made up of 3 `divs`, each represents a layer: the top one contains the content and the bottom 2 contain the images that create 
the effect when you scroll. 
a Javascript function is triggered whenever you scroll; it offsets the 2 images' `position:top` in CSS, thus creating the moving effect.


##How to implement

###1. HTML 
In your HTML you need 3 `divs` lets call them `content-layer`, `para1` and `para2`. Content layer is where the content goes and the 
two para layers are for the background effect, they should remain empty:
```
<div id="para1"></div>
<div id="para2"></div>
<div id="content_layer">
	<!--All content goes here-->
</div>
```



###2. CSS
 In the CSS set the `#content-layer` to `position:absolute;`, `#para1` and `#para2` should be set to `position:fixed` 
this way the will not scroll with the content 
automatically. 
```
#content_layer{position:absolute; width:100%;}
#para1,#para2 {position:fixed;}
```

`#para1` and `#para2` should have a width of 100% or the width of the area you want to animate. The height in this case is `800px` but you 
can set it to the size of the area you want to animate.  

 
Give `#para1` and `#para2` a background image, in this case it's the `parallax-ball.png`. For position, you should experiment and figure out where 
exactly you want them to start, in this case the 2 divs intersect in the middle of the screen.  
 
 ```
 background: url(parallax-ball.png) no-repeat 43% 50%;
 background: url(parallax-ball.png) no-repeat 57% 50%;
 ```

 

###3 .Javascript 
Add an event listener which executes the `parallax()` function each time a user scrolls:
 ```
 window.addEventListener("scroll", parallax, false);
 ```
 
 In the parallax function, 2 variables are declared and assigned to the HTML divs we want to animate; `para1` and `para2`.
 ```
 function parallax(){
	var paraLayer = document.getElementById('para1');
	var paraLayer2 = document.getElementById('para2');
 ```
To get the animation effect; Javascript measures how far you have scrolled then moves the CSS top position of the 2 divs by the same amount.
To make the animation slower, divide the amount by any number, in this case 10. And to make it move in the opposite direction add a `-` 
at the beginning of the equation to make it a negative value. 
 
```
		paraLayer.style.top = -(window.pageYOffset / 10)+'px';
		paraLayer2.style.top = (window.pageYOffset / 10)+'px';	
		}
```

###Tips
To make the images move sideways, replace `.top` with `.left` or `.right`.

You can add more background layers by adding more `#para ` divs to your HTML and giving them settings in CSS and JavaScript.

##See [demo page](http://simonxlk.github.io/parallax.html)