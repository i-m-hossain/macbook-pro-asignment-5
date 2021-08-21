function calculateTotal(basePrice, memoryCost, storageCost, deliveryCost ){
    const total = basePrice + memoryCost + storageCost + deliveryCost;
    return total;
}
function getValueById(id){
    const inputId = document.getElementById(id);
    const value= parseInt(inputId.innerText);
    return value;   
}

// getting the value from pricefields

function calculateItem(item, price){
    document.getElementById(item).innerText = price
    const basePrice = getValueById("base-price");
    const memoryCost = getValueById("memory-cost");
    const storageCost = getValueById("storage-cost");
    const deliveryCost = getValueById("delivery-cost");

    const total = calculateTotal(basePrice, memoryCost, storageCost, deliveryCost);
    document.getElementById("total").innerText = total;
}

document.getElementById("8gb").addEventListener('click', function(){
    calculateItem("memory-cost",0)
})
document.getElementById("16gb").addEventListener("click", function(){
    calculateItem("memory-cost",180)
})
document.getElementById("256gb").addEventListener("click", function(){
    calculateItem("storage-cost",0)
})
document.getElementById("512gb").addEventListener("click", function(){
    calculateItem("storage-cost",100)
})
document.getElementById("1tb").addEventListener("click", function(){
    calculateItem("storage-cost",180)
})