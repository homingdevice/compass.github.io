//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = e.alpha;
        }
        

        if (compassHeading > 315 || compassHeading < 45) {
         text_area.textContent = "some photographs are";
         if(canPlay) audio.play();
        }

        if (compassHeading >= 45 && compassHeading < 135) {
         text_area.textContent = " transparent. the viewer is";
        }

        if (compassHeading >= 135 && compassHeading < 225) {
         text_area.textContent = "drawn into the";
        }

        if (compassHeading >= 225 && compassHeading < 315) {
         text_area.textContent = "illusion of the image";
        }
        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}


	var audio = new Audio('https://homingdevice.github.io/audio/some_photographs_are.mp3');

	audio.onplaying = function() {
    	console.log("playing")
    	isPlaying = true;
};

	audio.onended = function() {
    	alert("The audio has ended");
    	isPlaying = false;
	};

	audio.oncanplay = function() {
    canPlay = true;
    console.log("can play")
    audio.play()
};

	var isPlaying = false;
	var canPlay = false;


