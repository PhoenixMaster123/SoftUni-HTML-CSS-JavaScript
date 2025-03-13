function register(heroesArray) {
    let heroList = [];
    for (let hero of heroesArray) {
        let tokens = hero.split(' / ');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(', ');

        heroList.push({name, level, items});
    }
    heroList.sort((a, b) => a.level - b.level);


    for (let h of heroList) {
        console.log(`Hero: ${h.name}`);
        console.log(`level => ${h.level}`);
        console.log(`items => ${h.items.join(', ')}`);
    }
}

register([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])