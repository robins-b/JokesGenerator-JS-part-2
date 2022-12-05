let display = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");

btn.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => (display.innerText = data.value));
});
