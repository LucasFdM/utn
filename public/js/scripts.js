console.log('[[[ Sistema Iniciado Correctamente ]]]');

//Variables 
let num1, num2, r=0, mayor, menor;
let usuario="administrador", password="1234";
let flag=false;
let nombre, telefono;

//Funciones Calculadora
function iniciar(){
	console.log('[ Iniciando Calculadora ]');
	num1=parseFloat(prompt("introduzca el 1° numero: "));
	console.log(num1);
	num2=parseFloat(prompt("introduzca el 2° numero: "));
	console.log(num2);
}

function sum(){
	r=num1+num2;
	console.log(r);
	document.getElementById("resultado").innerHTML="El resultado es: " + r;
}

function res(){
	r=num1-num2;
	console.log(r);
	document.getElementById("resultado").innerHTML="El resultado es: " + r;
}

function mul(){
	r=num1*num2;
	console.log(r);
	document.getElementById("resultado").innerHTML="El resultado es: " + r;
}

function div(){
	r=num1/num2;
	console.log(r);
	document.getElementById("resultado").innerHTML="El resultado es: " + r;
	
}

//Funcion Mayor y Menor
function Calculo(){
	console.log('[ Iniciando Calculo de Mayor/Menor ]');
	while(flag==false){
		let n1=parseFloat(prompt("Ingrese un número: "));
		let n2=parseFloat(prompt("Ingrese otro número: "));
		let n3=parseFloat(prompt("Ingrese un último número: "));
		if(n1==n2 || n2==n3 || n1==n3){		
			alert("Hay numeros iguales, por favor ingrese numeros distintos");
		}
		else{
			mayor= Math.max(n1,n2,n3);
			menor= Math.min(n1,n2,n3);
			alert("El Menor es: "+menor+" y el Mayor es: "+mayor);
			flag=true;
		}
	}
}

function Contacto(){
	alert("Muchas gracias por contactarte. Responderé a la brevedad.");
	console.log('Mensaje recibido');
}

//Funcion Login Administrador
function Login(){
	console.log('Iniciando Login');
	while(flag==false){
		let user=prompt("Introduzca su Usuario: ");
		let pass=prompt("Introduzca su Contraseña: ");
		if(user==usuario && pass==password){
			console.log('Usuario y Contraseña correctos');
			alert("¡Login Correcto! Bienvenido.");
			flag=true;
			window.open('maths');
		} 
		else{
			alert("¡Usuario o Contraseña incorrectos! Intente nuevamente...");
			console.log('Error en Usuario o Contraseña');
		}
	}
	flag=false;	
}

function Contratar(){
	console.log('Contrato Solicitado');
	nombre=(prompt("Ingrese su Nombre: "));
	telefono=parseInt(prompt("Introduzca un Telefono de contacto: "));
	console.log('Solicitud de: ' +nombre+ '. Contactar al Tel: ' +telefono);
}