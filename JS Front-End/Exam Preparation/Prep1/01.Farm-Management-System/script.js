function solve(input) {
    
    let farmerArea = {};
    let farmerTasks = {};

    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let line = input.shift();

        let [name, area, tasksAsString] = line.split(' ');
        let tasks = tasksAsString.split(',')

        farmerArea[name] = area;
        farmerTasks[name] = new Set(tasks);
    }

    while(input[0] != 'End') {
        let line = input.shift();

        let tokens = line.split(' / ');
        let command = tokens[0];

       if(command == 'Execute') {
        let name = tokens[1];
        let area = tokens[2];
        let task = tokens[3];

        if(farmerArea[name] != area || !farmerTasks[name].has(task)) {
            console.log(`${name} cannot execute the task: ${task}.`)
            continue;
        }
        console.log(`${name} has executed the task: ${task}!`)
       } else if(command == 'Change Area') {
        let name = tokens[1];
        let area = tokens[2];

        farmerArea[name] = area;

        console.log(`${name} has changed their work area to: ${area}`)
       } else if(command == 'Learn Task') {
        let name = tokens[1];
        let task = tokens[2];

        if(farmerTasks[name].has(task)) {
            console.log(`${name} already knows how to perform ${task}.`)

            continue;
        }
        farmerTasks[name].add(task);

        console.log(`${name} has learned a new task: ${task}.`)
       }
    }

    for(let name in farmerArea) {
        let sortedTask = [...farmerTasks[name].values()].sort((a, b) => a.localeCompare(b));

        console.log(`Farmer: ${name}, Area: ${farmerArea[name]}, Tasks: ${sortedTask.join(', ')}`)
    }
}

solve([

    "2",
    
    "John garden watering,weeding",
    
    "Mary barn feeding,cleaning",
    
    "Execute / John / garden / watering",
    
    "Execute / Mary / garden / feeding",
    
    "Learn Task / John / planting",
    
    "Execute / John / garden / planting",
    
    "Change Area / Mary / garden",
    
    "Execute / Mary / garden / cleaning",
    
    "End"
    
    ])