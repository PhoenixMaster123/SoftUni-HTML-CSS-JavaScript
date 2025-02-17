// Variant 1:

function checkMonth(day) {
   if(day == 1) {
        console.log('January');
   } else if(day == 2) {
        console.log('February');
   } else if(day == 3) {
        console.log('March');
   } else if(day == 4) {
        console.log('April');
   } else if(day == 5) {
        console.log('May');
   } else if(day == 6) {
        console.log('June');
   } else if(day == 7) {
        console.log('July');
   }else if(day == 8) {
        console.log('August');
   }else if(day == 9) {
        console.log('September');
   }else if(day == 10) {
        console.log('October');
   } else if(day == 11) {
        console.log('November');
   }else if(day == 12) {
        console.log('December');
   } else {
        console.log('Error!');
   }
}

// Variant 2

// NOTE: if we type the function with the same name the function will be overitten
function checkMonth2(day) {
    switch(day) {
        case 1: console.log('January');
        break;
        case 2: console.log('February');
        break;
        case 3: console.log('March');
        break;
        case 4: console.log('April');
        break;
        case 5: console.log('May');
        break;
        case 6: console.log("June");
        break;
        case 7: console.log('July');
        break
        case 8: console.log('August');
        break;
        case 9: console.log('September');
        break;
        case 10: console.log('October');
        break;
        case 11: console.log('November');
        break;
        case 12: console.log('December');
        break;
        default: console.log('Error!'); break;
    }
}
// Example:
checkMonth(2) // -> February