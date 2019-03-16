var cart=[];
var cartID=1;
function load()
{
	var text = localStorage.getItem("Carts");
	if(text!=null)
	{
		cart = JSON.parse(text);
		for(var i=0;i<cart.length;i++)
		{
			addtoListDOM(cart[i]);
		}
	}
	console.log(cart);
}

var divTableProducts = document.getElementById("tableShowProduct");

function addtoListDOM(objProduct)
{
	console.log(objProduct);
	var tr1=document.createElement('tr');

	var td1=document.createElement('td');
	td1.innerHTML=cartID;
	tr1.appendChild(td1);

	var td2=document.createElement('td');
	td2.innerHTML=objProduct.Name;
	td2.setAttribute("id","productName"+cartID);
	tr1.appendChild(td2);

	var td3=document.createElement('td');
	td3.innerHTML=objProduct.Price;
	td3.setAttribute("id","productPrice"+cartID);
	tr1.appendChild(td3);

	var td4=document.createElement('td');
	td4.innerHTML=objProduct.Quantity;
	td4.setAttribute("id","productQuantity"+cartID);
	tr1.appendChild(td4);
	divTableProducts.appendChild(tr1);
	cartID++;
}