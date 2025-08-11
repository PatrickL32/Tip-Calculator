
function calculate() {

    const billAmount = parseFloat(document.getElementById('bill').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercent').value);

    const resultsEl = document.getElementById('results');


    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        resultsEl.innerText = "Please enter valid numbers.";
        return; 
    }


    const tip = billAmount * (tipPercentage / 100);
    const total = billAmount + tip;


    resultsEl.innerHTML = `
        <p><strong>Tip:</strong> $${tip.toFixed(2)}</p>
        <p><strong>Total:</strong> $${total.toFixed(2)}</p>
    `;
}