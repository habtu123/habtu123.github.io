function calcTip(){//var subtotalElem = 
	var tipElem = parseFloat(document.getElementById("tip").value); 
	var subtotal = parseFloat(document.getElementById("subtotal").value);
	var tip = subtotal * tipElem/100
    var total = subtotal+ tip;
    totalElem = document.getElementById("total");
    totalElem.innerHTML = '$' + total;
}