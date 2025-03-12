function convertToJSON(name, lastName, hairColor) {
    let createObject = {name, lastName, hairColor};
    let json = JSON.stringify(createObject);
    console.log(json);
}

convertToJSON('George', 'Jones','Brown');