// ---------------------Monthly Savings of a Freelancer---------------------


// funtion will take 2 parameter(array and number)
function monthlySavings(arr, livingCost) {
    // if first parameter is not array or second parameter is not a number
    // error message will return!
    if (!Array.isArray(arr) || typeof livingCost !== "number") {
        return 'invalid input'
    }
    // finding saving after TAX paid
    let savingsAfterTax = 0;
    for (let money of arr) {
        if (money >= 3000) {
            money = money * 0.80; // 20% tax
        }
        
        savingsAfterTax += money;
    }
    // total savings
    let finalSavings = savingsAfterTax - livingCost;
    //  If totsl savings is less than 0 , it will return “earn more”
    if (finalSavings < 0) {
        return 'earn more'
    }
    // mr sahed final savings 
    return finalSavings;
} 
// done