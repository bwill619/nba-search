const apiCall = "https://balldontlie.io/api/v1/players?search=doncic";
const apiAverages = "https://balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=237";

function searchPlayer(input) {
    const url = `https://balldontlie.io/api/v1/players?search=${input}`;
    fetch(url)
    .then(response => response.json())
    .then((jsonData) => {
        const array = [jsonData];
        const playerID = array.map(player => `${player.data[0].id}`);
        const fName = array.map(player => `${player.data[0].first_name}`);
        const lName = array.map(player => `${player.data[0].last_name}`);
        const height = array.map(player => `${player.data[0].height_feet}` + "'" + `${player.data[0].height_inches}`);
        const weight = array.map(player => `${player.data[0].weight_pounds}`);
        const team = array.map(player => `${player.data[0].team.full_name}`);
        const position = array.map(player => `${player.data[0].position}`);
        document.getElementById("firstName").innerHTML = fName;
        document.getElementById("lastName").innerHTML = lName;
        document.getElementById("height").innerHTML = height;
        document.getElementById("weight").innerHTML = weight;
        document.getElementById("team").innerHTML = team;
        document.getElementById("position").innerHTML = position;

    });
}

window.onload = () => {
    const searchElement = document.getElementById("searchField");
    searchElement.onkeyup = (event) => {
        searchPlayer(searchElement.value);
    }
}

function getPlayerId(input) {
    const url = `https://balldontlie.io/api/v1/players?search=${input}`;
    fetch(url)
    .then(response => response.json())
    .then((jsonData) => {
        const array = [jsonData];
        const playerID = array.map(player => `${player.data[0].id}`);
    });
    input = playerID;
}

function getSeasonAverages(input) {
    const url2 =  `https://balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${getPlayerId(input)}`
    fetch(url2)
    .then(response2 => response2.json())
    .then((jsonData2) => {
        const array2 = [jsonData2];
        const gamesPlayed = array2.map(season => `${season.data[0].games_played}`);

        document.getElementById("GP").innerHTML = gamesPlayed;
    });
}







