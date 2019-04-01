var data=[];
var table=document.getElementById('table');
			
	var xhr=new XMLHttpRequest();
	xhr.open("GET","https://api.github.com/users?since=1",true);
	xhr.onload=function()
	{
		var dataString=xhr.responseText;
		data=JSON.parse(dataString);
		console.log(data);
		for(i in data)
		{
			addToDom(data[i]);
		}
		xhr.send();
	}
				
	function addToDom(obj)
	{
		var tr1=document.createElement('tr');

		var td0=document.createElement('img');
		td0.setAttribute("src",obj.avatar_url);
		td0.setAttribute("style","width:200px; height:200px;");
		tr1.appendChild(td0);

		var td1=document.createElement('td');
		td1.innerHTML=obj.login;
		tr1.appendChild(td1);

		var td2=document.createElement('td');
		td2.innerHTML=obj.id;
		tr1.appendChild(td2);

		var td3=document.createElement('td');
		var a1=document.createElement('a');
		a1.setAttribute("href",obj.html_url);
		a1.innerHTML=obj.html_url;
		td3.append(a1);
		tr1.appendChild(td3);

		var td4=document.createElement('td');;
		var a2=document.createElement('a');
		a2.setAttribute("href",obj.html_url);
		a2.innerHTML=obj.html_url;
		td4.append(a2);
		tr1.appendChild(td4);
		table.appendChild(tr1);
	}