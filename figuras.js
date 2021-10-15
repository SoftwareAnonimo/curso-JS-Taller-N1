// Cuadrado
console.group("Cuadrado")

// Perimetro del Cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

// Area del Cuadrado
function areaCuadrado(lado) {
    return lado * lado
}

console.groupEnd();

// Triangulo
console.group("Triangulo")

// Perimetro del Triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
};

// Area del Triangulo
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
};

console.groupEnd();

// Circulo
console.group("Circulo")

//Diametro del circulo
function diametroCirculo(radio) {
    return radio * 2;
};

//PI
const PI = Math.PI;

//Cicunferencia del circulo
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area del circulo
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

//Aqui interactuamos con HTML
// Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const permietro = perimetroCuadrado(value);
    alert("El Permietro del Cuadrado es de: " + permietro);
};

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El Area del Cuadrado es de: " + area);
};

// Triangulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number (input1.value);

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number (input2.value);

    const base = document.getElementById("inputBaseTriangulo");
    const value3 = Number(base.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El Permietro del Triangulo es de " + perimetro);
};

function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number (input1.value);

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number (input2.value);

    const base = document.getElementById("inputBaseTriangulo");
    const value3 = Number(base.value);

    const area = areaTriangulo(value1,value2,value3);
    alert("El Area del Triangulo es de " + area);
};

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const permietro = perimetroCirculo(value);
    alert("El Permietro del Circulo es de: " + permietro);
};

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert("El Area del Circulo es de: " + area);
};