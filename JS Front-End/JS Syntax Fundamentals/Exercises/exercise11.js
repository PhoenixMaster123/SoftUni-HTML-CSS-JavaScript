function calculateSpeedLimit (speed, area) {
    const motorway = 130;
    const interstate = 90;
    const city = 50;
    const residential = 20;

    let overThelimit = 0;

    if(area == 'motorway') {
        overThelimit = Math.abs(speed - motorway);
        if(overThelimit <= 20 && speed > motorway) {
            console.log(`The speed is ${overThelimit} km/h faster than the allowed speed of ${motorway} - speeding`);
        } else if(overThelimit > 20 && overThelimit <= 40 && speed > motorway) {
            console.log(`The speed is ${overThelimit} km/h faster than the allowed speed of ${motorway} - excessive speeding`);
        } else if(overThelimit > 40 && speed > motorway) {
            console.log(`The speed is ${overThelimit} km/h faster than the allowed speed of ${motorway} - reckless driving`);
        } else {
            console.log(`Driving ${speed} km/h in a ${motorway} zone`)
        }
    } else if(area == 'interstate') {
        overThelimit = Math.abs(speed - interstate);
        if(overThelimit <= 20 && speed > interstate) {
            console.log(`The speed is ${overThelimit} km/h faster than the allowed speed of ${interstate} - speeding`);
        } else if(overThelimit > 20 && overThelimit <= 40 && speed > interstate) {
            console.log(`The speed is ${overThelimit} km/h faster than the allowed speed of ${interstate} - excessive speeding`);
        } else if(overThelimit > 40 && speed > interstate) {
            console.log(`The speed is ${overThelimit} km/h faster than the allowed speed of ${interstate} - reckless driving`);
        } else {
            console.log(`Driving ${speed} km/h in a ${interstate} zone`)
        }
    }
    else if(area == 'city') {
        overThelimit = Math.abs(speed - city);
        if(overThelimit <= 20 && speed > city) {
            console.log(`The speed is ${city} km/h faster than the allowed speed of ${city} - speeding`);
        } else if(overThelimit > 20 && overThelimit <= 40 && speed > city) {
            console.log(`The speed is ${overThelimit} km/h faster than the allowed speed of ${city} - excessive speeding`);
        } else if(overThelimit > 40 && speed > city) {
            console.log(`The speed is ${overThelimit} km/h faster than the allowed speed of ${city} - reckless driving`);
        } else {
            console.log(`Driving ${speed} km/h in a ${city} zone`)
        }
    } else {
        overThelimit = Math.abs(speed - residential);
        if(overThelimit <= 20 && speed > residential) {
            console.log(`The speed is ${overThelimit} km/h faster than the allowed speed of ${residential} - speeding`);
        } else if(overThelimit > 20 && overThelimit <= 40 && speed > residential) {
            console.log(`The speed is ${overThelimit} km/h faster than the allowed speed of ${residential} - excessive speeding`);
        } else if(overThelimit > 40 && speed > residential) {
            console.log(`The speed is ${overThelimit} km/h faster than the allowed speed of ${residential} - reckless driving`);
        } else {
            console.log(`Driving ${speed} km/h in a ${residential} zone`)
        }
    }
}
calculateSpeedLimit(21, 'residential');