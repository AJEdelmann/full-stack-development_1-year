// Team Stats
// We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

// Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.

// Step 1: We want a data structure to store the information about our team. Create an empty team object.

// Step 2: Our team has players, and the team plays games. We want to represent both of these. Add two properties to your team object. A _players property and a _games property that are both initialized to empty arrays.

// Step 3: Populate the empty array that corresponds to the _players key in your team object with three actual players.

// Step 4: Populate the empty array that corresponds to the _games key in your object with three actual games.

// Step 5: Create getter methods for your _players and _games keys. You do not need to create setter methods, because we don’t want anyone to change the values saved to these keys.

// Step 6: We want to add a new player to your team. Add a method addPlayer to your team object. This method should take in three parameters: firstName, lastName, and age. It should create a player object, and add them to the team‘s players array.

// Step 7: Below your team object, invoke your addPlayer method on the following players: Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76. Print out the team‘s players to check they were all properly added.

// Step 8: The scorekeeper has some new information for us! Add a similar method for recording game results called addGame that:
// -> takes in an opponent’s name,
// -> your team’s points,
// -> the opponent’s points,
// -> creates a game object,
// -> adds the game object to your team‘s games array.

// Step 9: Invoke your addGame method on three games and print the team‘s updated games array.

const team = {
    _players: [{
            firstName: 'Gusta',
            lastName: 'Gol',
            age: 27
        },
        {
            firstName: 'Vagner',
            lastName: 'Love',
            age: 34
        },
        {
            firstName: 'Socrates',
            lastName: 'Birita',
            age: 37
        }
    ],
    _games: [{
            opponent: 'Palmeiras',
            teamPoints: 3,
            opponentPoints: 0
        },
        {
            opponent: 'Sao Paulo',
            teamPoints: 4,
            opponentPoints: 1
        },
        {
            opponent: 'Santos',
            teamPoints: 6,
            opponentPoints: 1
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGame(oppName, points, oppPoints) {
        let game = {
            opponent: oppName,
            teamPoints: points,
            opponentPoints: oppPoints
        }
        this.games.push(game)
    }
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Mengo', 3, 2);
team.addGame('Inter', 1, 1);
team.addGame('Chelsea', 1, 0);
console.log(team.games);