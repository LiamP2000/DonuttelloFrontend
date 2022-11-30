var form = document.getElementById("nextTopping");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

/*check if button with ID nextTopping got clicked*/
console.log("main.js loaded");
document.getElementById("nextTopping").onclick = function() {
    /*if yes, then get the value of the input field with ID topping*/
    var topping = document.getElementById("topping").value;
    /*and add it to the list with ID toppings*/
    document.getElementById("toppings").innerHTML += "<li>" + topping + "</li>";
    /*and clear the input field*/
    document.getElementById("topping").value = "";
    console.log(topping);
}