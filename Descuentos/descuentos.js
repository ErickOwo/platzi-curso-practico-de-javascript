"use strict";

let firstTime = true;

// arrary con los valores de descuento de los cupones existentes
const coupons = [{
    name: "tirarexDD",
    discount: 15
},{
    name: "ballena341",
    discount: 17
},{
    name: "faicws12",
    discount: 20
}];

// Mostrar los cupones del ejercicio
alert("Los cupones están en la consola")
console.log("Cupones:");
console.log();
coupons.forEach(element => {
    console.log(element.name)
});

// Botón
const btnVerify = document.getElementById("verify");


// Escucha de eventos
btnVerify.addEventListener("click",()=>{
    
    // valores
    const product = document.getElementById("price-product");
    const couponCode = document.getElementById("coupon-code");

    const isCouponValid = coupon=>{
        return coupon.name === couponCode.value;
    }
    
    const userCoupon = coupons.find(isCouponValid);
    
    if(!userCoupon){
        alert(`El cupón ${couponCode.value} no es valido`);
    } else {
        const descuento = userCoupon.discount;

        const finalPrice = priceDiscounted(product.value, descuento)

        divResults(descuento, finalPrice);
    }
})

// Función para hacer el descuento
const priceDiscounted = (price, discount)=> {
    return (price * (100-discount))/100;
}

// Función para agregar ceros
const addZeros = ()=> {

}

// Función que crea HTML
const divResults = (percentage, finalPrice)=>{
    const divContainer = document.createElement("DIV");
    const divContent = document.createElement("DIV");
    const percentageParraf = document.createElement("P");
    const finalPriceParraf = document.createElement("P");

    divContainer.classList.add("results");
    divContent.classList.add("content-results")

    percentageParraf.innerHTML = `Tu Descuento es del <span>${percentage}%</span>`
    finalPriceParraf.innerHTML = `El precio final de tu producto es de <span>$ ${finalPrice}</span>`

    divContent.appendChild(percentageParraf);
    divContent.appendChild(finalPriceParraf);
    divContainer.appendChild(divContent);
    
    const container = document.querySelector(".container");
    if (firstTime) {
        firstTime = false;
    }
    else {
        container.removeChild(container.lastElementChild);
    }
    container.appendChild(divContainer);
}
