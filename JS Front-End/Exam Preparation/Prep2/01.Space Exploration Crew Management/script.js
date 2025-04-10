function solve(input) {
    let astronautsNumber = Number(input.shift());

    let astronaut = {};

    let list = [];

    for (let i = 0; i < astronautsNumber; i++) {
        let line = input.shift();

        let tokens = line.split(' ');

        let name = tokens.shift();
        let spacecraft = tokens.shift();

        tokens = tokens.shift().split(',');

        let tasks = tokens;

        astronaut = {
            name, 
            spacecraft,
            tasks
        };
        list.push(astronaut);
    }

    let command = input.shift().split(' / ');

    while(command[0] != "End") {
        let findPerson = list.find(p => p.name == command[1]);

        if(command[0] == 'Perform') { 
          if(findPerson.spacecraft == command[2] && findPerson.tasks.includes(command[3])) {
            console.log(`${findPerson.name} has successfully performed the skill: ${command[3]}!`);
          } else {
            console.log(`${findPerson.name} cannot perform the skill: ${command[3]}.`);
          }
        } else if(command[0] == 'Transfer') {
            let newSpacecraft = command[2];
            findPerson.spacecraft = newSpacecraft;
            console.log(`${findPerson.name} has been transferred to: ${findPerson.spacecraft}`);

        } else if(command[0] == 'Learn Skill') {
            let skill = command[2]
            if(findPerson.tasks.includes(skill)) {
                console.log(`${findPerson.name} already knows the skill: ${skill}.`)
            } else {
                console.log(`${findPerson.name} has learned a new skill: ${skill}.`)
                findPerson.tasks.push(skill);
            }
        }

        command = input.shift().split(' / ');
    }

    for(let astro of list) {
        console.log(`Astronaut: ${astro.name}, Section: ${astro.spacecraft}, Skills: ${astro.tasks.sort().join(', ')}`);
    }

}

solve([
    "2",
    
    "Alice command_module piloting,communications",
    
    "Bob engineering_bay repair,maintenance",
    
    "Perform / Alice / command_module / piloting",
    
    "Perform / Bob / command_module / repair",
    
    "Learn Skill / Alice / navigation",
    
    "Perform / Alice / command_module / navigation",
    
    "Transfer / Bob / command_module",
    
    "Perform / Bob / command_module / maintenance",
    
    "End"
    
    ])