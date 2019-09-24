var inputTime = document.getElementById('inputTime');
var btn_play = document.getElementById('btn_play');
var btn_pause = document.getElementById('btn_pause');

var time=0;
var interval;

// Function to add 10 sec in timmer
inputTime.addEventListener("click",function() { 
 time=time+10;
 inputTime.setAttribute("value",time);
});

// Function to start timmer
btn_play.addEventListener("click",function() {
	time--;
	interval = setInterval(function() {
		inputTime.setAttribute("value",time);
		time--;
		if(time==-1){
			alert("Time UP!");
			time=0;
			inputTime.setAttribute("value","0");
			clearInterval(interval);
		
		}
	},1000);
});

// Function to perform pause or reset Timmer
btn_pause.addEventListener("click",function(){
  inputTime.setAttribute("value","0");
  time=0;
  console.log(time);
  clearInterval(interval);
});
