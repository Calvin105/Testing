const textButton = document.getElementById("btn");
const textCount = document.getElementById("count");

let counter = 0;

textButton.addEventListener("click", () => {
    counter++;
    textCount.textContent = `Count: ${counter}`;
});