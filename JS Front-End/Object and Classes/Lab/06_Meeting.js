function solve(data) {

    let calendar = {};

    for (let item of data) {
        let [day, name] = item.split(' ');

        if(calendar.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            calendar[day] = name;
            console.log(`Scheduled for ${day}`)
        }
    }

    for (let day in calendar) {
        console.log(`${day} -> ${calendar[day]}`)
    }
}