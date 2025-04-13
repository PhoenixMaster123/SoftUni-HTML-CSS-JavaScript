function solve(input) {
    let numberOfGuildMembers = Number(input.shift());

    let member = {};
    let guildList = [];

    for (let i = 0; i < numberOfGuildMembers; i++) {
        let line = input.shift();

        let tokens = line.split(' ');

        let name = tokens.shift();
        let role = tokens.shift();

        tokens = tokens.shift().split(',');

        let skills = tokens;

        member = {
            name, 
            role,
            skills
        };
        guildList.push(member);
    }

    let commandLine = input.shift();

    while(commandLine != 'End') {
        let command = commandLine.split(' / ');

        if(command[0] == 'Perform') {
            let memberName = command[1];
            let memberRole = command[2];
            let skill = command[3];

            let findPerson = guildList.find(m => m.name == memberName);

            if(findPerson.role == memberRole && findPerson.skills.includes(skill)) {
                console.log(`${findPerson.name} has successfully performed the skill: ${skill}!`);
            } else {
                console.log(`${findPerson.name} cannot perform the skill: ${skill}.`)
            }
        } else if(command[0] == 'Reassign') {
            let memberName = command[1];
            let newRole = command[2];

            let findPerson = guildList.find(m => m.name == memberName);

            findPerson.role = newRole;
            console.log(`${findPerson.name} has been reassigned to: ${findPerson.role}`);
        } else if(command[0] == 'Learn Skill') {
            let memberName = command[1];
            let newSkill = command[2];

            let findPerson = guildList.find(m => m.name == memberName);

            if(findPerson.skills.includes(newSkill)) {
                console.log(`${findPerson.name} already knows the skill: ${newSkill}.`);
            } else {
                console.log(`${findPerson.name} has learned a new skill: ${newSkill}.`);
                findPerson.skills.push(newSkill);
            }
        }

        commandLine = input.shift();
    }
    
    for (let mem of guildList) {
        console.log(`Guild Member: ${mem.name}, Role: ${mem.role}, Skills: ${mem.skills.sort().join(', ')}`);
    }
}

solve(
    [
        "3",
        "Arthur warrior swordsmanship,shield",
        "Merlin mage fireball,teleport",
        "Gwen healer healing,alchemy",
        "Perform / Arthur / warrior / swordsmanship",
        "Perform / Merlin / warrior / fireball",
        "Learn Skill / Gwen / purification",
        "Perform / Gwen / healer / purification",
        "Reassign / Merlin / healer",
        "Perform / Merlin / healer / teleport",
        "End"
      ]      
)