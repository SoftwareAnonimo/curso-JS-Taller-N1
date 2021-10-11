// Codigo del Cuadrado

console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

//console.log("El Permitro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado
}
// console.log("El Area del Cuadrado es: " + areaCuadrado + "cm'2");
console.groupEnd();

// Codigo del Triangualo
console.group("Trinagulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del Triangulo miden: "
//     + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2
//     + "cm, "
//     + baseTriangulo
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("El Altura del Trinagulo es: " + alturaTriangulo + "cm");


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del Triangulo es: " + perimetroTriangulo + "cm");
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El Area del Triangulo es: " + areaTriangulo + "cm'2");

console.groupEnd();

// Codigo del Circulo
console.group("Circulos");

//Radio
// const radioCirculo = 4;
// console.log("El Radio del Circulo es: " + radioCirculo + "cm");

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