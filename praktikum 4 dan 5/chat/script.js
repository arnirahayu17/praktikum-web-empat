const rangkapUl = document.querySelector("ul");
const rangkapInput = document.querySelector("input");
const rangkapButton = document.querySelector("button");
const liBaru = document.createElement("li");

rangkapButton.addEventListener('click', function(){
    const liBaru = document.createElement("li");
    const isiInput = document.createTextNode(rangkapInput.value);
    liBaru.appendChild(isiInput);
    rangkapUl.appendChild(liBaru);
    rangkapInput.value = '';
});