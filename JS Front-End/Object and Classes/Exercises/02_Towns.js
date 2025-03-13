function solveTable(data) {
    for (let content of data) {
        [town, latitude, longitude] = content.split('|').map(k => k.trim());
        let object = {town, latitude, longitude};
        console.log(`{ town: '${object.town}', latitude: '${Number(object.latitude).toFixed(2)}', longitude: '${Number(object.longitude).toFixed(2)}' }`);
    }
}


solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);