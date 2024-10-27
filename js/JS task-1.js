function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// task-1-results
const task1Results = document.getElementById("task-1-results");
task1Results.innerHTML += `<p>${makeTransaction(5, 3000)}</p>`;
task1Results.innerHTML += `<p>${makeTransaction(3, 1000)}</p>`;
task1Results.innerHTML += `<p>${makeTransaction(10, 500)}</p>`;
