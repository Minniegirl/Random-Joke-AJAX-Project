const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', function(){
    getRandomJoke();
})

function getRandomJoke(){
	
	
var url = "https://api.chucknorris.io/jokes/random";

// fetch function makes the request
fetch(url)
  .then(function( returnedResponseObject ) {
 
        // view the resonse object returned by server
console.log( returnedResponseObject );

// call the json() method of the response object to extract the json data we want, then return it to the myJSdata param
        return returnedResponseObject.json();

    })
  .then(function(myJSdata) {
 
       // we can now log the json data that was passed as an argument from the previous call to then()  
       console.log(myJSdata);
	   jokeDIV.innerHTML = myJSdata.value;	
    }
);	
	
	

}

function onerror(){
     jokeDIV.textContent = 'There was an error!';  
}

