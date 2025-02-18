function findTotalPrice (peopleNumber, typeOfGroup, dayOfTheWeek) {
    let totalPrice = 0;
    if(typeOfGroup == 'Students') {
        if(dayOfTheWeek == 'Friday') {
            totalPrice += peopleNumber * 8.45;
        } else if(dayOfTheWeek == 'Saturday') {
            totalPrice += peopleNumber * 9.80;
        } else {
            totalPrice += peopleNumber * 10.46;
        }
        if(peopleNumber >= 30) {
            totalPrice *= 0.85;
        }
    } else if(typeOfGroup == 'Business') {
        if(peopleNumber >= 100) {
           peopleNumber -= 10;
        }
        if(dayOfTheWeek == 'Friday') {
            totalPrice += peopleNumber * 10.90;
        } else if(dayOfTheWeek == 'Saturday') {
            totalPrice += peopleNumber * 15.60;
        } else {
            totalPrice += peopleNumber * 16;
        }
    } else {
        if(dayOfTheWeek == 'Friday') {
            totalPrice += peopleNumber * 15;
        } else if(dayOfTheWeek == 'Saturday') {
            totalPrice += peopleNumber * 20;
        } else {
            totalPrice += peopleNumber * 22.50;
        }
        if(peopleNumber >= 10 && peopleNumber <= 20) {
            totalPrice *= 0.95;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
findTotalPrice(40, 'Regular', 'Saturday');