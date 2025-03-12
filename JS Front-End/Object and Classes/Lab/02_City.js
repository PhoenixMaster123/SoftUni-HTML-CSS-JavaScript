function printCity(object) {
    let data = Object.entries(object);

    for (let [key, value] of data) {
        console.log(key + ' -> ' + value);
    }
}

printCity({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
});