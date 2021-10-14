// Cuadrado
console.group("Cuadrado")

// Lados del cuadrado
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

// Perimetro del Cuadrado
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es : " + perimetroCuadrado + "cm");

// Area del Cuadrado
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El Area del cuadrado es : " + areaCuadrado + "cm'2");

console.groupEnd();

// Triangulo
console.group("Triangulo")

// Lados del Triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del Triangulo miden: "
+ ladoTriangulo1 + "cm, " 
+ ladoTriangulo2 + "cm, " 
+ baseTriangulo + "cm");

// Altura del Triangulo
const alturaTriangulo = 5.5;
console.log("La altura del Triangulo mide: " + alturaTriangulo );

// Perimetro del Triangulo
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El Permitro del Triangulo mide: " + perimetroTriangulo );

// Area del Triangulo
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El Area del triangulo es : " + areaTriangulo + "cm'2");

console.groupEnd();

// Circulo
console.group("Circulo")

// Radio del circulo
const radioCirculo = 4;
console.log("El Radio del circulo es : " + radioCirculo + "cm");

//Diametro del circulo
const diametroCirculo = radioCirculo * 2
console.log("El Diametro del circulo es : " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("El PI del circulo es : " + PI);

//Cicunferencia del circulo
const perimetroCirculo = diametroCirculo * PI;
console.log("El Perimetro del circulo es : " + perimetroCirculo + "cm");

//Area del circulo
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El Area del circulo es : " + areaCirculo + "cm'2");

console.groupEnd();