


/**
 * 
 * kilometerToMeter -> convert kilometer to meter function
 * 
 */
function kilometerToMeter(inputKilometer) {

    var oneMeter = 1000;

    var totalMeter = inputKilometer / oneMeter;

    return totalMeter;

}

/**
 * 
 * budgetCalculator -> take total three param input, first param watch, watch value -$50, second param phone -$100, third param -laptop - $500 
 * will be return total budget value/price best on the input qunatity. 
 * 
 */

function budgetCalculator(numOfwatch, numOfphone, numOflaptop) {

    var watchValue = 50;
    var phoneValue = 100;
    var laptopValue = 500;

    var totalWatchPrice = numOfwatch * watchValue;
    var totalPhonePrice = numOfphone * phoneValue;
    var totalLaptopPrice = numOflaptop * laptopValue;
    var totalDollarNeeded = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
    return totalDollarNeeded;
}

/**
 * 
 * hotelCost -> day 1 - day 10 room rate - $100, day 11 - day 20 room rate - $80, any day over 21 room rate - $50
 * funtion param only takes the total days count 
 * and return only the hotel cost.  
 * 
 */
function hotelCost(requestReserveDays) {
    var dailyRoomRate = 100;

    if (requestReserveDays <= 10) {

        var totalRoomCost = dailyRoomRate * requestReserveDays;
        return totalRoomCost;
    } else if (requestReserveDays >= 10 && requestReserveDays <= 20) {
        dailyRoomRate = 80;
        var totalRoomCost = dailyRoomRate * requestReserveDays;
        return totalRoomCost;
    } else {

        dailyRoomRate = 50;
        var totalRoomCost = dailyRoomRate * requestReserveDays;
        return totalRoomCost;
    }

}
console.log(hotelCost(23));

/**
 * 
 * megaFriend -> List of friends array
 * function return the longest name from the array.  
 * 
 */

function megaFriend(array) {

    var name = 0;
    var longestName = "";

    for (var i = 0; i < array.length; i++) {
        if (array[i].length > name) {
            var name = array[i].length;
            longestName = array[i];
        }
    }
    return longestName;

}
