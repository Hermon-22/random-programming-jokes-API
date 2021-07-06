let searchBtn = document.getElementById('search')
//let inpt = document.getElementById('input')
let randomj = document.getElementById('upd')

let http = new XMLHttpRequest()


searchBtn.addEventListener("click",function(){
   // e.preventDefault();
    randomj.innerHTML='';
    //var inptVal = inpt.value;
    // http.open('GET', 'https://official-joke-api.appspot.com/jokes/random');
    http.open('GET',' https:v2.jokeapi.dev/joke/Programming?format=txt&type=twopart');
      //no  http.responseType='json'
        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) {
                let myButton = http.response

              // you can  console.log(myButton)
            var randomJoke = document.createElement('h3')
            randomJoke.innerHTML = myButton
                randomj.append(randomJoke)
                
            }
        };
        http.send()

})