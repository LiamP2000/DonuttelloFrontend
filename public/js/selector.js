let currentPage = 1;
let picks = [];
var currentPick;
var info = [];
let data = new Map();
let orderJSON;

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
            data.set("topping", currentPick);
            console.log(data);

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
            data.set("topping", currentPick);
            console.log(data);

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
            data.set("topping", currentPick);
            console.log(data);

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
            data.set("sprinkles", currentPick);
            console.log(data);

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
            data.set("sprinkles", currentPick);
            console.log(data);

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
            data.set("sprinkles", currentPick);
            console.log(data);

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
        document.getElementById("status--list").firstElementChild.classList.remove("status--current");
        /** add it to second element */
        document.getElementById("status--list").children[1].classList.add("status--current");

        pickTopping();
        document.getElementById("topping").style.display = "block";
        document.getElementById("glazuur").style.display = "none";
        document.getElementById('action').innerHTML = "Kies je topping";
    }
    if(currentPage == 3) {
        document.getElementById("status--list").children[1].classList.remove("status--current");
        /** add it to third element */
        document.getElementById("status--list").children[2].classList.add("status--current");

        document.getElementById("topping__next").style.display = "none";
        document.getElementById("topping__submit").style.display = "block";
        document.getElementById("topping").style.display = "none";
        document.getElementById("lastStep").style.display = "block";
        document.getElementById('action').innerHTML = "Upload je logo";
        /**set text og h2 to 'hi'*/
    }
    
});
    document.getElementById("topping__submit").addEventListener("click", function() {
        
            /** get all data from submit topping__submit */
            info.push(picks);
            info.push(document.getElementById("bedrijfsnaam").value);
            info.push(document.getElementById("email").value);
            info.push(document.getElementById("donuts").value);
            info.push(document.getElementById("date").value);

    
            console.log(document.getElementById("bedrijfsnaam").value);
            console.log(info);

            data.set("clientName", document.getElementById("bedrijfsnaam").value);
            data.set("clientEmail", document.getElementById("email").value);
            data.set("amount", document.getElementById("donuts").value);
            data.set("dueDate", document.getElementById("date").value);
            data.set("description", document.getElementById("description").value);
            console.log(data);
            
    
            var fileInput = document.getElementById('logo');
            var filename = fileInput.files[0].name;
            console.log(filename);
            data.set("logo", filename);
    
    
            /** download image from input on button press*/
            /*if(document.getElementById("logo").files.length == 0) {
                console.log("no file selected");
            } else {
                var file = document.getElementById("logo").files[0];
                var reader = new FileReader();
                reader.onload = function(e) {
                    info.push(e.target.result);
                    console.log(e.target.result);
                }
                
                data.set("logo", reader.result);
                console.log(data);
            }*/
    
            /** show image on page */
            if(info.length > 0) {
                document.getElementById("logo").backgroundImage = info[0];
            }
    
            /** upload image to server */
            
    
            /** redirect to /order */
    
            console.log("upload");

            console.log(JSON.stringify(Object.fromEntries(data)));
            orderJSON = JSON.stringify(Object.fromEntries(data));

            /* fetch data from API */
            fetch('https://donuttello-api.onrender.com/donuts')
                .then((response) => response.json())
                .then((data) => console.log(data));

            /* post data to API */
            fetch('https://donuttello-api.onrender.com/donuts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: orderJSON,
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                document.getElementById("success-msg").style.display = "block";
            })
            .catch((error) => {
                console.error('Error:', error);
                document.getElementById("error-msg").style.display = "block";
            }
            )


            
        }
    )
};

/** on click on document.getElementById("status--list").firstElementChild */
document.getElementById("status--list").firstElementChild.addEventListener("click", function() {
    document.getElementById("status--list").children[1].classList.remove("status--current");
    document.getElementById("status--list").children[2].classList.remove("status--current");
    document.getElementById("status--list").firstElementChild.classList.add("status--current");

    document.getElementById("topping__next").style.display = "block";
    document.getElementById("topping__submit").style.display = "none";
    document.getElementById("topping").style.display = "none";
    document.getElementById("lastStep").style.display = "none";
    document.getElementById("glazuur").style.display = "block";
    document.getElementById('action').innerHTML = "Kies je glazuur";
    currentPage = 1;
    /**remove boxshadow */
    sprinkles.style.boxShadow = "none";
    marshmellows.style.boxShadow = "none";
    oreo.style.boxShadow = "none";
    /**remove border */
    sprinkles.style.borderColor = "#000";
    marshmellows.style.borderColor = "#000";
    oreo.style.borderColor = "#000";
    picks = [];
});

/** on click on document.getElementById("status--list").children[1] */
document.getElementById("status--list").children[1].addEventListener("click", function() {
    /**only if currentpage is 3 */
    if(currentPage == 3) {
    document.getElementById("status--list").firstElementChild.classList.remove("status--current");
    document.getElementById("status--list").children[2].classList.remove("status--current");
    document.getElementById("status--list").children[1].classList.add("status--current");

    document.getElementById("topping__next").style.display = "block";
    document.getElementById("topping__submit").style.display = "none";
    document.getElementById("topping").style.display = "block";
    document.getElementById("lastStep").style.display = "none";
    document.getElementById("glazuur").style.display = "none";
    document.getElementById('action').innerHTML = "Kies je topping";
    currentPage = 2;

    /** only keep first data of picks[] */
    picks = picks.slice(0, 1);
    console.log(picks);
}
});



nextTopping();