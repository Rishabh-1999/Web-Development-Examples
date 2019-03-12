var body=document.getElementById('bb');
var box=document.getElementById('input1');

box.addEventListener("mousemove",function(event)
{
  box.setAttribute("style","background-color: green");
  console.log(1);
});

body.addEventListener("mousemove",function(event)
{
	var x=event.pageY+'px';
	var y=event.pageX+'px';
  box.setAttribute("style",`top: ${x}; left: ${y}`);

  console.log(box);
});

box.addEventListener("mouseout",function(event){
  box.setAttribute("style","background-color: red;color:black");
  console.log(2);
});