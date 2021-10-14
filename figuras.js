// Codigo del Cuadrado hola

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado
}

console.groupEnd();

// Codigo del Triangualo
console.group("Trinagulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Codigo del Circulo
console.group("Circulos");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}

//Pi
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aqui interactuamos con el HTML
// Calcula el Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

// Calcula el Triangulo

function calcularPerimetroTriangulo() {
    const input = document.getElementById("inputTriangulo");
    const value = input.value;
    
    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("inputTriangulo");
    const value = input.value;
    
    const area = areaTriangulo(value);
    alert(area);
}

function altura(lado1,lado2,base) {
    if (lado1 === lado2 && lado1 !== base){
        alert("Isosceles")
        const altura = Math.sqrt(lado1**2 - base**2 / 4)
    }else{
        alert("No lo Se")
    }
};

var x = 2;

console.log(x);