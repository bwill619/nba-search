const firstName = document.getElementById('firstName');
const url = "https://balldontlie.io/api/v1/players?search=doncic" 

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let players = data;

        players.map(function(player){
            let firstName = document.getElementById("firstName").innerHTML = '{players.first_name}'
            firstName.appendChild(firstName);

        }); 
        
    });