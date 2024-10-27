function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

// task-2-results
const task2Results = document.getElementById("task-2-results");
task2Results.innerHTML += `<p>${getShippingMessage("Australia", 120, 50)}</p>`;
task2Results.innerHTML += `<p>${getShippingMessage("Germany", 80, 20)}</p>`;
task2Results.innerHTML += `<p>${getShippingMessage("Sweden", 100, 20)}</p>`;
