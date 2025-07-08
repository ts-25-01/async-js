function wuerfeln() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.ceil(Math.random() * 6);

            if (number === 6) {
                resolve("Gewonnen")
            } else if (number === 1) {
                reject("verloren")
            }
            else {
                resolve(`Du hast eine ${number} greworfen`);
            }
        }, 1000);
    })
}

wuerfeln()
    .then((nachricht) => 
        console.log(nachricht))
            .catch((fehler) => 
                console.log(fehler));
// const resultPromise = wuerfeln()
// console.log(resultPromise);



async function starteWürfel() {
    try {
        const nachricht = await wuerfeln()
        console.log(nachricht);
    } catch (error) {
        console.log(error);
    }
}

starteWürfel();





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

orderPizza().then(() => {
    console.log("Holen wir Pzza ab");
}).catch(error => {
    console.error("Oh nein! Pizza verbrannt");
})