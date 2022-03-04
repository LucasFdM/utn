console.log('[[[ Sistema Iniciado Correctamente ]]]');

//Variables 
let num1, num2, r=0;
let usuario="administrador", password="1234";
let flag=false;

//Funciones Calculadora
function iniciar(){
	num1=parseFloat(prompt("introduzca el 1° numero: "));
	console.log(num1);
	num2=parseFloat(prompt("introduzca el 2° numero: "));
	console.log(num2);

}

function sum(r){
	r=num1+num2;
	console.log(r);
}

function res(r){
	r=num1-num2;
	console.log(r);
}

function mul(r){
	r=num1*num2;
	console.log(r);
}

function div(r){
	r=num1/num2;
	console.log(r);
}

let resultado = document.getElementById("resultado");
resultado.innerHTML="El resultado es: " + r;

//Fucion Login
function Login(){
	console.log('Iniciando Login');
	while(flag==false){
		let user=prompt("Introduzca su Usuario: ");
		let pass=prompt("Introduzca su Contraseña: ");
		if(user==usuario && pass==password){
			alert("¡Login Correcto! Bienvenido.");
			flag=true;
			window.open('/ejercicio2.html');
		} 
		else{
			alert("¡Usuario o Contraseña incorrectos! Intente nuevamente...");
		}
	}
	flag=false;	
}

//Funcion Mayor y Menor
function Calculo(){
	console.log('Iniciando Calculo de Mayor/Menor');
	while(flag==false){
		let n1=parseFloat(prompt("Ingrese un número: "));
		let n2=parseFloat(prompt("Ingrese otro número: "));
		let n3=parseFloat(prompt("Ingrese un último número: "));
		if(n1==n2 || n2==n3 || n1==n3){		
			alert("Hay numeros iguales, por favor ingrese numeros distintos");
		}
		else{
			if(n1>n2){
				if(n3>n1){
					alert("El Menor numero es: "+n2+ " y el Mayor numero es: "+n3);
				}
				else{
					alert("El Menor numero es: "+n3+ " y el Mayor numero es: "+n1);
				}
			}
			else{
				if(n3>n2){
					alert("El Menor numero es: "+n1+ " y el Mayor numero es: "+n3);
				}
				else{
					alert("El Menor numero es: "+n1+ " y el Mayor numero es: "+n2);
				}
			}
		flag=true;
		}
	}
}

