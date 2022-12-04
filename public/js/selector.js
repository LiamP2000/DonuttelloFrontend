let currentPage = 1;
var toppings = [];
let picks = [];
var currentPick;

console.log(currentPage);



function pickTopping() {
    if(currentPage == 1) {
        /** create variables */
        var chocolade = document.getElementById("chocolade");
        var kers = document.getElementById("kers");
        var witteChocolade = document.getElementById("witteChocolade");

        /** check for clicks */

        chocolade.addEventListener("click", function() {

            /**handel data */
            currentPick = "chocolade";
            console.log(currentPick);

            /** edit css */
            chocolade.style.borderColor = "var(--chocolate)";
            chocolade.style.boxShadow = "0 0 10px var(--chocolate)";
            
            kers.style.borderColor = "#000";
            kers.style.boxShadow = "none";

            witteChocolade.style.borderColor = "#000";
            witteChocolade.style.boxShadow = "none";
        });
        kers.addEventListener("click", function() {
            /** handel data */
            currentPick = "kers";
            console.log(currentPick);

            /** edit css */
            kers.style.borderColor = "var(--kers)";
            kers.style.boxShadow = "0 0 10px var(--kers)";

            chocolade.style.borderColor = "#000";
            chocolade.style.boxShadow = "none";

            witteChocolade.style.borderColor = "#000";
            witteChocolade.style.boxShadow = "none";
        });
        witteChocolade.addEventListener("click", function() {
            /** handel data */
            currentPick = "witteChocolade";
            console.log(currentPick);

            /** edit css */
            witteChocolade.style.borderColor = "var(--witteChocolade)";
            witteChocolade.style.boxShadow = "0 0 10px var(--witteChocolade)";

            chocolade.style.borderColor = "#000";
            chocolade.style.boxShadow = "none";

            kers.style.borderColor = "#000";
            kers.style.boxShadow = "none";
        }
        );
    }
    console.log(currentPage);
    if(currentPage == 2) {
        var sprinkles = document.getElementById("sprinkles");
        var oreo = document.getElementById("oreo");
        var marshmellows = document.getElementById("marshmellows");

        sprinkles.addEventListener("click", function() {

            /**handel data */
            currentPick = "sprinkles";
            console.log(currentPick);

            /** edit css */
            sprinkles.style.boxShadow = "0 0 10px #fff";

            oreo.style.borderColor = "#000";
            oreo.style.boxShadow = "none";

            marshmellows.style.borderColor = "#000";
            marshmellows.style.boxShadow = "none";
        });
        oreo.addEventListener("click", function() {

            /**handel data */
            currentPick = "oreo";
            console.log(currentPick);

            /** edit css */
            oreo.style.boxShadow = "0 0 10px #fff";

            sprinkles.style.borderColor = "#000";
            sprinkles.style.boxShadow = "none";

            marshmellows.style.borderColor = "#000";
            marshmellows.style.boxShadow = "none";
        });
        marshmellows.addEventListener("click", function() {

            /**handel data */
            currentPick = "marshmellows";
            console.log(currentPick);

            /** edit css */
            marshmellows.style.boxShadow = "0 0 10px #fff";

            sprinkles.style.borderColor = "#000";
            sprinkles.style.boxShadow = "none";
            
            oreo.style.borderColor = "#000";
            oreo.style.boxShadow = "none";
        });
    }
}

/* on click nextTopping put currentPick in picks*/

function nextTopping() {
    pickTopping();
document.getElementById("nextTopping").addEventListener("click", function() {
    picks.push(currentPick);
    console.log(picks);
    currentPage++;

    if(currentPage == 2) {
    pickTopping();
        document.getElementById("topping").style.display = "block";
        document.getElementById("glazuur").style.display = "none";
        document.getElementById('action').innerHTML = "Kies je topping";
        /** check which radio input is sellected and push it to toppings*/
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
})};

nextTopping();