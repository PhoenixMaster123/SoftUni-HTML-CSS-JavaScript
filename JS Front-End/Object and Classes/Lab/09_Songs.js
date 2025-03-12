function solve(array) {
    class Song {
        constructor(typeList, name, duration) {
            this.typeList = typeList;
            this.name = name;
            this.duration = duration;
        }
    }
    let numberOfSongs = array[0];
    let filterCondition = array[array.length - 1];
    let map = new Map();
    for (let i = 1; i <= numberOfSongs; i++) {
        let tokens = array[i].split('_');
        let type = tokens[0];
        let name = tokens[1];
        let duration = tokens[2];

        let song = new Song(type, name, duration);

        map.set(name, song);
    }
    if(filterCondition == 'all') {
        map.forEach(k => console.log(k.name));
    } else {
       
        for (entry of map.entries()) {
            let value = entry[1];
            if(value.typeList == filterCondition) {
                console.log(value.name);
            }
        }
    }
}

solve([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
solve([4,'favourite_DownTown_3:14','listenLater_Andalouse_3:24','favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);
solve([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);
