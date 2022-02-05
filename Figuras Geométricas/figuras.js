"use strict";

// Obtener los botones ubicados en la zona de calculo de las figuras
const btnResultsSquare = document.getElementById("dataSquare"); // Botón en area de cuadrado
const btnResultsTriangle = document.getElementById("dataTriangle"); // Botón en area de triangulo
const btnResultsCircle = document.getElementById("dataCircle"); // Botón en area de ciculo

// Añadimos eventos con la escucha de eventos
btnResultsSquare.addEventListener("click", ()=> calcResultsSquare());
btnResultsTriangle.addEventListener("click", ()=> calcResultsTriangle());
btnResultsCircle.addEventListener("click", ()=> calcResultsCircle());

// Función para calcular el area y perimetro de un cuadrado
const calcResultsSquare = ()=>{
    // Valor del input en el cuadrado
    let l = document.getElementById("square-value").value;
    
    // Operaciones para obtener el area y perimtro
    let perimeter = l * 4;
    let area = l ** 2;
    
    // Output en el html
    document.getElementById("perimeter-square").value = perimeter;
    document.getElementById("area-square").value = area;
}

// Función para calcular el area y perimetro de un triangulo
const calcResultsTriangle = ()=>{
    // Fución para calcular la alatura de un triangulo isoceles
    const heightTriangleIsosceles = (l,b)=>{
        let height = Math.sqrt((l ** 2)-(b**2/4));
        return height;
    }
    // Función para calcular la altura de un triangulo equilatero
    const heightTriangleEquilateral = (l,b)=>{
        let height = Math.sqrt(l**2-((b/2)**2));
        return height;
    }
    // Obtención de los elementos input en el area de resultados para hacer un output
    const perimeterResult = document.getElementById("perimeter-triangle");
    const areaResult = document.getElementById("area-triangle");

    // Obtención de los valores en los inputs del area del triangulo
    let side1 = document.getElementById("side1").value;
    let side2 = document.getElementById("side2").value;
    let side3 = document.getElementById("side3").value;

    // Operación para obtener el perimetro y asignar su valur en el input de salida
    let perimeter = side1 + side2 + side3;
    perimeterResult.value = perimeter;
    
    // Condición para evaluar si el triangulo es isoceles
    if (side1 == side2 && side1 != side3) {
        let height = heightTriangleIsosceles(side1, side3);
        let area = side3 * height / 2;

        areaResult.value = area;
    }
    // Condición para evaluar si en el triangulo es equilatero
    else if (side1 == side2 && side1 == side3) {
        let height = heightTriangleEquilateral(side1, side3);
        let area = side3 * height / 2;

        areaResult.value = area;
    }
    // Condición ya que el triangulo es escaleno
    else areaResult.value = "el triangulo es escaleno";
}

// Función para calcular el perimetro y el area de un circulo
const calcResultsCircle = ()=>{
    // Obtención del valor del input del area del circulo
    let radio = document.getElementById("circle-value").value;

    // Operaciones para obtener el perimetro y el area
    let perimeter = radio * 2 * Math.PI;
    let area = radio**2 * Math.PI;

    // Output en el html
    document.getElementById("perimeter-circle").value = perimeter;
    document.getElementById("area-circle").value = area;
}



