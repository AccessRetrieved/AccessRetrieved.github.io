/*
 * Audiovisualization using the html canvas element.
 * ©2017, Dominik Hofacker
 * https://www.behance.net/dominikhofacker
 * Please consider supporting this project on behance:
 * https://www.behance.net/gallery/49260123/Web-Audio-Visualization
 */

var rafID = null;
var analyser = null;
var c = null;
var cDraw = null;
var ctx = null;
var microphone = null;
var ctxDraw = null;

var loader;
var filename;
var fileChosen = false;
var hasSetupUserMedia = false;

//handle different prefix of the audio context
var AudioContext = AudioContext || webkitAudioContext;
//create the context.
var context = new AudioContext();

//using requestAnimationFrame instead of timeout...
if (!window.requestAnimationFrame)
	window.requestAnimationFrame = window.webkitRequestAnimationFrame;

$(function () {
		"use strict";
	    loader = new BufferLoader();
	    initBinCanvas();	
});

function playSample() {
	
	fileChosen = true;
    setupAudioNodes();
	
	var request = new XMLHttpRequest();
	
	request.addEventListener("progress", updateProgress);
	request.addEventListener("load", transferComplete);
	request.addEventListener("error", transferFailed);
	request.addEventListener("abort", transferCanceled);
	
	request.open('GET', 'server/music/Suit-And-Tie.mp3', true);
	request.responseType = 'arraybuffer';

 	// When loaded decode the data
	request.onload = function() {
		
		$("#title").html("");
		$("#album").html("Suit and Tie");
		$("#artist").html("Justin Timberlake");
		onWindowResize();
		$("#title, #artist, #album").css("visibility", "visible");
		
		// decode the data
		context.decodeAudioData(request.response, function(buffer) {
		// when the audio is decoded play the sound
		sourceNode.buffer = buffer;
		sourceNode.start(0);
		$("#freq, body").addClass("animateHue");
		//on error
		}, function(e) {
			console.log(e);
		});
	};
	request.send();
	
	$("button, input").prop("disabled",true);
}

function useMic() 	
{
	"use strict";
	if (!navigator.mediaDevices.getUserMedia) {
		alert("Your browser does not support microphone input!");
		console.log('Your browser does not support microphone input!');
		return;
 	}
	
	navigator.mediaDevices.getUserMedia({audio: true, video: false})
	.then(function(stream) {
		hasSetupUserMedia = true;
	  	//convert audio stream to mediaStreamSource (node)
		microphone = context.createMediaStreamSource(stream);
		//create analyser
		if (analyser === null) analyser = context.createAnalyser();
		//connect microphone to analyser
		microphone.connect(analyser);
		//start updating
		rafID = window.requestAnimationFrame( updateVisualization );
		
		$("#title").html("Mic");
		$("#album").html("Input");
		$("#artist").html("Using");
		onWindowResize();
		$("#title, #artist, #album").css("visibility", "visible");
		$("#freq, body").addClass("animateHue");
	})
	.catch(function(err) {
	  /* handle the error */
		alert("Capturing microphone data failed! (currently only supported in Chrome & Firefox)");
		console.log('capturing microphone data failed!');
		console.log(err);
	});
}

// progress on transfers from the server to the client (downloads)
function updateProgress (oEvent) {
  if (oEvent.lengthComputable) {
	$("button, input").prop("disabled",true);
    var percentComplete = oEvent.loaded / oEvent.total;
	console.log("Loading music file... " + Math.floor(percentComplete * 100) + "%");
	$("#loading").html("Loading... " + Math.floor(percentComplete * 100) + "%");
  } else {
    // Unable to compute progress information since the total size is unknown
	  console.log("Unable to compute progress info.");
  }
}

function transferComplete(evt) {
  	console.log("The transfer is complete.");
	$("#loading").html("");
	//$("button, input").prop("disabled",false);
}

function transferFailed(evt) {
  	console.log("An error occurred while transferring the file.");
	$("#loading").html("Loading failed.");
	$("button, input").prop("disabled", false);
}

function transferCanceled(evt) {
  	console.log("The transfer has been canceled by the user.");
	$("#loading").html("Loading canceled.");
}

function initBinCanvas () {

	//add new canvas
	"use strict";
	c = document.getElementById("freq");
	c.width = window.innerWidth;
        c.height = window.innerHeight;
	//get context from canvas for drawing
	ctx = c.getContext("2d");
	
	ctx.canvas.width  = window.innerWidth;
  	ctx.canvas.height = window.innerHeight;
	
	window.addEventListener( 'resize', onWindowResize, false );
	
	//create gradient for the bins
	var gradient = ctx.createLinearGradient(0, c.height - 300,0,window.innerHeight - 25);
	gradient.addColorStop(1,'#00f'); //black
	gradient.addColorStop(0.75,'#f00'); //red
	gradient.addColorStop(0.25,'#f00'); //yellow
	gradient.addColorStop(0,'#ffff00'); //white

	
	ctx.fillStyle = "#9c0001";
}

function onWindowResize()
{
	ctx.canvas.width  = window.innerWidth;
  	ctx.canvas.height = window.innerHeight;
	
	var containerHeight = $("#song_info_wrapper").height();
	var topVal = $(window).height() / 2 - containerHeight / 2; 
	$("#song_info_wrapper").css("top", topVal);
	console.log(topVal);
	
	if($(window).width() <= 500) {
		//TODO: not yet working
		$("#title").css("font-size", "40px");
	}
}

var audioBuffer;
var sourceNode;
function setupAudioNodes() {
	// setup a analyser
	analyser = context.createAnalyser();
	// create a buffer source node
	sourceNode = context.createBufferSource();	
	//connect source to analyser as link
	sourceNode.connect(analyser);
	// and connect source to destination
	sourceNode.connect(context.destination);
	//start updating
	rafID = window.requestAnimationFrame(updateVisualization);
}


function reset () {
	if (typeof sourceNode !== "undefined") {
		sourceNode.stop(0);		
	}
	if (typeof microphone !== "undefined") {
		microphone = null;
	}
}


function updateVisualization () {
        
	// get the average, bincount is fftsize / 2
	if (fileChosen || hasSetupUserMedia) {
		var array = new Uint8Array(analyser.frequencyBinCount);
		analyser.getByteFrequencyData(array);

		drawBars(array);
	}
       // setTextAnimation(array);
    

	rafID = window.requestAnimationFrame(updateVisualization);
}

function drawBars (array) {

	//just show bins with a value over the treshold
	var threshold = 0;
	// clear the current state
	ctx.clearRect(0, 0, c.width, c.height);
	//the max count of bins for the visualization
	var maxBinCount = array.length;
	//space between bins
	var space = 3;
        
	ctx.save();


	ctx.globalCompositeOperation='source-over';

	//console.log(maxBinCount); //--> 1024
	ctx.scale(0.5, 0.5);
	ctx.translate(window.innerWidth, window.innerHeight);
	ctx.fillStyle = "#fff";

	var bass = Math.floor(array[1]); //1Hz Frequenz 
	var radius = 0.45 * $(window).width() <= 450 ? -(bass * 0.25 + 0.45 * $(window).width()) : -(bass * 0.25 + 450);

	var bar_length_factor = 1;
	if ($(window).width() >= 785) {
		bar_length_factor = 1.0;
	}
	else if ($(window).width() < 785) {
		bar_length_factor = 1.5;
	}
	else if ($(window).width() < 500) {
		bar_length_factor = 20.0;
	}
	console.log($(window).width());
	//go over each bin
	for ( var i = 0; i < maxBinCount; i++ ){
		
		var value = array[i];
		if (value >= threshold) {			
			//draw bin
			//ctx.fillRect(0 + i * space, c.height - value, 2 , c.height);
                        //ctx.fillRect(i * space, c.height, 2, -value);
                        ctx.fillRect(0, radius, $(window).width() <= 450 ? 2 : 3, -value / bar_length_factor);
                        ctx.rotate((180 / 128) * Math.PI/180);   
		}
	}  
        
	for ( var i = 0; i < maxBinCount; i++ ){

		var value = array[i];
		if (value >= threshold) {				

			//draw bin
			//ctx.fillRect(0 + i * space, c.height - value, 2 , c.height);
						//ctx.fillRect(i * space, c.height, 2, -value);
						ctx.rotate(-(180 / 128) * Math.PI/180);
						ctx.fillRect(0, radius, $(window).width() <= 450 ? 2 : 3, -value / bar_length_factor);
		}
	} 
        
	for ( var i = 0; i < maxBinCount; i++ ){

		var value = array[i];
		if (value >= threshold) {				

			//draw bin
			//ctx.fillRect(0 + i * space, c.height - value, 2 , c.height);
						//ctx.fillRect(i * space, c.height, 2, -value);
						ctx.rotate((180 / 128) * Math.PI/180);
						ctx.fillRect(0, radius, $(window).width() <= 450 ? 2 : 3, -value / bar_length_factor);
		}
	} 
    
	ctx.restore();
}

// use https://accessretrieved.github.io/hash.html
var codes = ['1540252'];
var emails = ['2140473296'];


var code = document.getElementById('codeInput');
var email = document.getElementById('emailInput');
var hashed_code = '';
var hashed_email = '';

function updateEmail(string) {
    hashed_email = stringToHash(string);
}
function updateCode(string) {
    hashed_code = stringToHash(string);
}

function tryConnect() {
    if (codes.includes(stringToHash(code.value)) && emails.includes(stringToHash(email.value))) {
        window.open("https://accessretrieved.github.io/beta_projects/loggedin.html?email=" + stringToHash(email.value) + "&code=" + stringToHash(code.value) + "&loggedin=true");
    } else {
        alert('Incorrect credencials');
    }
}

function stringToHash(string) {           
    var hash = 0;
    
    if (string.length == 0) return hash;
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}