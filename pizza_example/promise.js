// In einer Promise Struktur:

function orderPizzaWithPromise(){
    console.log("Pizza wird gebacken..");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizzaVerbrannt = false;
            if (pizzaVerbrannt){
                reject("Pizza ist verbrannt")
            }
            else {
                console.log("Pizza ist fertig");
                resolve(); // console.log("Holen wir Pzza ab");
            }
    }, 3000);
    })
}

orderPizzaWithPromise().then(() => {
    console.log("Holen wir Pzza ab");
}).catch(error => {
    console.error("Oh nein! Pizza verbrannt");
})