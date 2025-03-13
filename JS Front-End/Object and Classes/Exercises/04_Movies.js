function solve(data) {
    let movieList = [];

    function addMovie(name) {
        movie = {name};
        movieList.push({name});
    }
    function directedBy(name, director) {
        let movie = movieList.find(m => m.name == name);
        if(movie) {
            movie.director = director;
        }
    }
    function onDate(name, date) {
        let movie = movieList.find(m => m.name == name);
        if(movie) {
            movie.date = date;
        }
    }
    for (let command of data) {
       
        if(command.includes('addMovie')) {
            let tokens = command.split('addMovie').map(k => k.trim());
            let movieName = tokens[1];
            addMovie(movieName);
        } else if (command.includes('directedBy')) {
            let [movieName, director] = command.split(' directedBy ');
            directedBy(movieName, director);
        } else if (command.includes('onDate')) {
            let [movieName, date] = command.split(' onDate ');
            onDate(movieName, date);
        }
    }

    for (let movie of movieList) {
        if(Object.entries(movie).length == 3) {
            console.log(JSON.stringify(movie));
        }
    }
}

/*solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])
*/

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )