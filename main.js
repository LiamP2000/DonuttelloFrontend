let toppings = [];

/**get data from URL */
function getToppings() {
    let url = new URL(window.location.href);
    let searchParams = new URLSearchParams(url.search);
    /*add all 'glazuur' to toppings array */
    for (let param of searchParams) {
        if (param[0] === 'glazuur') {
            toppings.push(param[1]);
        }
    }
}
if(getToppings() === undefined){
    console.log(toppings);
}
else{
    console.log('no toppings');
}


