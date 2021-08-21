
// calculate total
function calculateTotal(basePrice, memoryCost, storageCost, deliveryCost ){
    const total = basePrice + memoryCost + storageCost + deliveryCost;
    return total;
}
function getValueById(id){
    const inputId = document.getElementById(id);
    const value= parseInt(inputId.innerText);
    return value;   
}


// calculate price for different types of items
function calculateItem(item, price){
    document.getElementById(item).innerText = price
    const basePrice = getValueById("base-price");
    const memoryCost = getValueById("memory-cost");
    const storageCost = getValueById("storage-cost");
    const deliveryCost = getValueById("delivery-cost");
    const total = calculateTotal(basePrice, memoryCost, storageCost, deliveryCost);
    document.getElementById("total").innerText = total;
    const grandTotal = document.getElementById("grand-total");
    grandTotal.innerText = total;  
}

// memory cost
document.getElementById("8gb").addEventListener('click', function(){
    calculateItem("memory-cost",0)   
})
document.getElementById("16gb").addEventListener("click", function(){
    calculateItem("memory-cost",180)  
})

// storage cost
document.getElementById("256gb").addEventListener("click", function(){
    calculateItem("storage-cost",0)
})
document.getElementById("512gb").addEventListener("click", function(){
    calculateItem("storage-cost",100)
})
document.getElementById("1tb").addEventListener("click", function(){
    calculateItem("storage-cost",180)
})

// delivery cost
document.getElementById("frre-delivery").addEventListener("click", function(){
    calculateItem("delivery-cost",0)
})
document.getElementById("delivery-with-cost").addEventListener("click", function(){
    calculateItem("delivery-cost",20)
})

// promo code
document.getElementById("promo-apply").addEventListener('click', function(){
    const promoCode = document.getElementById("promo-code");
    const total =getValueById("total");
    if(promoCode.value.toLowerCase() == "stevekaku"){
        const totalAfterPromo = total - ((total * 20)/100);
        const grandTotal = document.getElementById("grand-total");
        grandTotal.innerText = Math.round(totalAfterPromo);
        promoCode.value=''
    }
})

