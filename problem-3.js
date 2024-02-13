// -----------------Virus in my Array---------------------


// funtion will take an array of any data type
function deleteInvalids(array) {
    // if the input is not an array it will return error message!
    if (!Array.isArray(array)) {
        return 'Please input an array!'
    } 

    let newArray = [];
    for (let number of array) {
        // it will only filter the number
        if (typeof number === 'number' && !isNaN(number)) {
            // it will push the number to new array
            newArray.push(number)
        }
    }
    // will return the new array containing only number 
    return newArray;
}
// done