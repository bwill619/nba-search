const baseURL = "https://balldontlie.io/api/v1/";
var FGA = document.getElementById("FGA").innerHTML = "123";
var url1 = "https://balldontlie.io/api/v1/players?search=doncic";

function searchPlayer(query) {
    const url = ``;
    fetch(url1)
    .then((response) => {
        console.log("we got a resposne");
        console.log(response);
        return response.json;
    })
    .then((jsonData) => {
        console.log('we got the data');
        console.log(jsonData);
    });
}







