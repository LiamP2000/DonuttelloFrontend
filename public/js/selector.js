
let currentPage = 1;
let picks = [];
var currentPick;
var info = [];

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
    if(currentPage == 2) {
        var sprinkles = document.getElementById("sprinkles");
        var oreo = document.getElementById("oreo");
        var marshmellows = document.getElementById("marshmellows");

        sprinkles.addEventListener("click", function() {

            /**handel data */
            currentPick = "sprinkles";

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

            /** edit css */
            marshmellows.style.boxShadow = "0 0 10px #fff";

            sprinkles.style.borderColor = "#000";
            sprinkles.style.boxShadow = "none";
            
            oreo.style.borderColor = "#000";
            oreo.style.boxShadow = "none";
        });
    }
}

/* on click topping__next put currentPick in picks*/

function nextTopping() {
    pickTopping();
    document.getElementById("topping__next").addEventListener("click", function() {
    picks.push(currentPick);
    console.log(picks);
    currentPage++;

    if(currentPage == 2) {
    pickTopping();
        document.getElementById("topping").style.display = "block";
        document.getElementById("glazuur").style.display = "none";
        document.getElementById('action').innerHTML = "Kies je topping";
    }
    if(currentPage == 3) {
        document.getElementById("topping__next").style.display = "none";
        document.getElementById("topping__submit").style.display = "block";
        document.getElementById("topping").style.display = "none";
        document.getElementById("lastStep").style.display = "block";
        document.getElementById('action').innerHTML = "Upload je logo";
        /**set text og h2 to 'hi'*/
    }
    if(currentPage == 4) {
        /** get all data from submit topping__submit */
        info.push(picks);
        info.push(document.getElementById("bedrijfsnaam").value);
        info.push(document.getElementById("email").value);
        info.push(document.getElementById("donuts").value);
        info.push(document.getElementById("datum").value);
        info.push(document.getElementById("logo").value);

        console.log(info);



        /** download image from input on button press*/
        if(document.getElementById("logo").files.length == 0) {
            console.log("no file selected");
        } else {
            var file = document.getElementById("logo").files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                info.push(e.target.result);
                console.log(info);
            }
            reader.readAsDataURL(file);
        }

        /** show image on page */
        if(info.length > 0) {
            document.getElementById("logo").backgroundImage = info[0];
        }

        /** upload image to server */
        

        /** redirect to /order */

        console.log("upload");
    }
})};

nextTopping();