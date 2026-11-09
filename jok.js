const searchBtn = document.getElementById("search");
const randomJokeContainer = document.getElementById("upd");

if (searchBtn && randomJokeContainer) {
  searchBtn.addEventListener("click", function () {
    randomJokeContainer.innerHTML = "";

    const http = new XMLHttpRequest();

    http.open(
      "GET",
      "https://v2.jokeapi.dev/joke/Programming?format=txt&type=twopart",
    );

    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        if (http.status === 200) {
          const jokeText = http.response;
          const jokeElement = document.createElement("h3");
          jokeElement.textContent = jokeText;
          randomJokeContainer.appendChild(jokeElement);
        } else {
          randomJokeContainer.textContent = "Unable to fetch a joke right now.";
        }
      }
    };

    http.send();
  });
}
