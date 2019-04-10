function suma(){

var a = parseFloat(document.getElementById('a').value);
var b = parseFloat(document.getElementById('b').value);
var r = a+b;
document.getElementById('c').value=r;

}

function resta(){

	var a = parseFloat(document.getElementById('a').value);
	var b = parseFloat(document.getElementById('b').value);
	var r = a-b;
	document.getElementById('c').value=r;

}

function multiplicacion(){

	var a = parseFloat(document.getElementById('a').value);
	var b = parseFloat(document.getElementById('b').value);
	var r = a*b;
	document.getElementById('c').value=r;

}

function division(){

	var a = parseFloat(document.getElementById('a').value);
	var b = parseFloat(document.getElementById('b').value);
	var r = a/b;
	document.getElementById('c').value=r;

}

function porcentaje(){

	var a = parseFloat(document.getElementById('a').value);
	var b = parseFloat(document.getElementById('b').value);
	var r = a*b/100;
	document.getElementById('c').value=r;

}

// Calculadora Ventas

function pagar(){

	var a = parseFloat(document.getElementById('vp').value);

	var i = a*19/100;
	document.getElementById('vi').value=i;

	var p = a+i;
	document.getElementById('vap').value=p;

	var	u = a*20/100;
	document.getElementById('ut').value=u;
}

// Calculadora Resistencias

function resistencias(){

	var a = document.getElementById('b1').value;
	var b = document.getElementById('b2').value;
	var c = document.getElementById('b3').value;
	var d = document.getElementById('b4').value;
	var e = a.toString()+b.toString()+c.toString();
	var f = parseFloat(e)*parseFloat(d);

	document.getElementById('res').value=f;
}

