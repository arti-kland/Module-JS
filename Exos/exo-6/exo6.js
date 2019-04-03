console.log("exo-6");

var team = {
    _player: [{
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
    }],

    _games: [{
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
    }],
};

function addPlayer(first, last, age) {
    var player = {};
    player.firstName = first;
    player.lastName = last;
    player.age = age;
    team._player.push(player);

}

function addMatch(opponent, teamPoints, opponentPoints) {
    var match = {};
    match.opponent = opponent;
    match.teamPoints = teamPoints;
    match.opponentPoints = opponentPoints;
    team._games.push(match);
}

addPlayer('jp', 'paolo', 21);
addPlayer('polo', 'ruby', 24);
addPlayer('vincent', 'croix', 27);
addPlayer('cedric', 'dupont', 26);
addPlayer('luca', 'mornaz', 29);

addMatch('theKings', 29, 24);
addMatch('theQueens', 37, 22);
addMatch('theSun', 54, 18);
addMatch('theDog', 64, 12);
addMatch('theFish', 87, 1);

console.log(team._player);
console.log(team._games);

function sumTeamPoints() {
    let total = 0;
    team._games.forEach(function (match) {
        total += match.teamPoints;
    })
    console.log(total);
}
sumTeamPoints();


function statMatch() {
    let totalOpponent = 0;
    team._games.forEach(function (match) {
        totalOpponent += match.opponentPoints;
    })
    numberOfMatch = 0;
    for (var match in team._games) {
        if (team._games.hasOwnProperty(match))
            numberOfMatch++;
    }
    totalStat = totalOpponent / numberOfMatch;
    console.log(totalOpponent);
    console.log(numberOfMatch);
    console.log(Math.floor(totalStat));
}
statMatch();

function getoldPlayer() {
    var agePlayer = 0;
    var oldPlayer = {};
    for (i = 0; i < team._player.length; i++) {
       if(agePlayer < team._player[i].age)
       agePlayer = team._player[i].age;
       oldPlayer = team._player[i];
    }
        console.log(oldPlayer);
}

getoldPlayer();

function triAlpha(){
    alphaPlayer = team._player.sort(function(a, b){
        return (a.firstName).localeCompare(b.firstName);
    });
    console.log(alphaPlayer);

}
triAlpha();