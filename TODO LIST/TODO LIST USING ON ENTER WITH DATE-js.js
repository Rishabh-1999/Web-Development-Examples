var parent = document.getElementById("table");
var btn = document.getElementById("submitbutton");
var input = document.getElementById("input");
var arr=[];
var date=[];
var count=0;
	//input.onkeyup=function add(event) {
/*	submitbutton.addEventListener("click",function(abc)
	{
		var code=event.keyCode;
		console.log(code);
			if(input.value=="")
				alert("Enter value");
			else
			{
				arr.push(input.value);
			  	var ele = document.createElement("TR");
			  	ele.setAttribute("id",count);
			  	var t1=document.createElement("TD");
				t1.innerHTML=count+1;
				count++;
				ele.appendChild(t1);
				var t2=document.createElement("TD");
				var po=input.value;
				t2.innerHTML=po;
				ele.appendChild(t2);
			  	var t3=document.createElement("TD");
				var btn = document.createElement("BUTTON");
				btn.innerHTML="X";
				t3.appendChild(btn);
				ele.appendChild(t3);
			  	parent.appendChild(ele);
			  	btn.onclick=function()
			  	{
			  		arr.splice(event.target.parentNode.parentNode.id,1);
			  		parent.innerHTML="";
			  		for(var i=0;i<arr.length;i++)
			  		{
			  			var ele = document.createElement("TR");
					  	ele.setAttribute("id",i);
					  	var t1=document.createElement("TD");
						t1.innerHTML=i+1;
						count++;
						ele.appendChild(t1);
						var t2=document.createElement("TD");
						var po=arr[i];
						t2.innerHTML=po;
						ele.appendChild(t2);
					  	var t3=document.createElement("TD");
						var btn = document.createElement("BUTTON");
						btn.innerHTML="X";
						t3.appendChild(btn);
						ele.appendChild(t3);
					  	parent.appendChild(ele);
			  		}
			  		//parent.removeChild(ele);
			  	}
			  	input.value="";

			}
		});
*/
btn.addEventListener("click",function (event)
{
	if(!input.value)
	{
		alert("not value");
		return ;
	}
	arr.push(input.value);
	date.push(new Date().toString());
	generateRows();
}
);

	function generateRows()
	{
		parent.innerHTML="";
		parent.appendChild(sta());
		for(var i=0;i<arr.length;i++)
		{
			var row=document.createElement('tr');
			row.setAttribute("id",i);
			var sr_no=document.createElement('td');
			sr_no.innerHTML=i+1;
			row.appendChild(sr_no);

			var task_no=document.createElement('td');
			task_no.innerHTML=arr[i];
			row.appendChild(task_no);

			var date_no=document.createElement('td');
			date_no.innerHTML=date[i];
			row.appendChild(date_no);

			var del_co=document.createElement('td');
			var button=document.createElement('button');
			button.innerHTML="X";

			button.addEventListener("click",function(e)
			{
				arr.splice(e.target.parentNode.parentNode.id,1);
				date.splice(e.target.parentNode.parentNode.id,1);
				generateRows();
			});
			del_co.appendChild(button);
			row.appendChild(del_co);
			parent.appendChild(row);
		}
		input.value="";
	}
	function sta()
	{
			var row=document.createElement('tr')
			var sr_no=document.createElement('td');
			sr_no.innerHTML="Serial No";
			row.appendChild(sr_no);

			var task_no=document.createElement('td');
			task_no.innerHTML="Data";
			row.appendChild(task_no);

			var date_no=document.createElement('td');
			date_no.innerHTML="Date";
			row.appendChild(date_no);

			var del_co=document.createElement('td');
			del_co.innerHTML="Delete";
			row.appendChild(del_co);
			return (row);
	}
