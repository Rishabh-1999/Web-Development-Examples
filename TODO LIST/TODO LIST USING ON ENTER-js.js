var parent = document.getElementById("list");
	var input = document.getElementById("data");
	input.onkeyup=function add(event) {
		var code=event.keyCode;
		console.log(code);
		if(code==13)
		{
			if(input.value=="")
				alert("Enter value");
			else
			{
			  	var ele = document.createElement("LI");
			  	var btn=document.createElement("button");
			  	btn.setAttribute("style","float:right;");
			  	var value=input.value;
			  	ele.innerHTML=value;
			  	btn.innerHTML="-";
			  	parent.appendChild(ele);

			  	ele.appendChild(btn);
			  	btn.onclick=function()
			  	{
			  		parent.removeChild(ele);
			  	}
			  	input.value="";
			}
		}
}