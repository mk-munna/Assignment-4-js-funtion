
function calculateMoney(ticketSale) {
    // if the input is invalid or negative number, it will show error message
    if (typeof ticketSale !== 'number' || ticketSale < 0) {
        return 'Please input a valid positive number!'
    }
    // if the input is positive and valid number it will return a value
    else {  
        const totalSale = ticketSale * 120;
        const exCost = 500 + (8 * 50);
        const income = totalSale - exCost;
        return income;
    }
}// done


