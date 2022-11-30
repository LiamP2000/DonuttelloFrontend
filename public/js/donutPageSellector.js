let currentPage = 1;
var toppings = []
/**on click button with id nextTopping display non glazuur and show id topping*/
document.getElementById("nextTopping").addEventListener("click", nextTopping);
function nextTopping() {
    currentPage++;
    if(currentPage == 2) {
        document.getElementById("topping").style.display = "block";
        document.getElementById("glazuur").style.display = "none";
        document.getElementById('action').innerHTML = "Kies je topping";
        /** check which radio input is sellected and push it to toppings*/
        document.getElementById("topping").addEventListener("click", function() {
            var radios = document.getElementsByName("topping");
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    toppings.push(radios[i].value);
                    console.log(toppings);
                }
            }
            console.log(radios);
        });
    }
    if(currentPage == 3) {
        document.getElementById("topping").style.display = "none";
        document.getElementById("lastStep").style.display = "block";
        document.getElementById('action').innerHTML = "Upload je logo";
        /**set text og h2 to 'hi'*/
    }
    if(currentPage == 4) {
        console.log("upload");
    }
}
