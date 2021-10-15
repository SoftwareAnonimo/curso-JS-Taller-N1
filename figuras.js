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