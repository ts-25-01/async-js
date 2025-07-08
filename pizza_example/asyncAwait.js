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
                resolve("Pizza Salami"); // console.log("Holen wir Pzza ab");
            }
    }, 3000);
    })
}

async function orderPizzaWithAsync(){
    try {
        const pizza = await orderPizzaWithPromise(); // Warte bis die Funktion abgeschlossen ist, d.h. Pizza fertig ist
        console.log("Holen wir ab:", pizza);
    } catch (error) {
        console.error("Oh nein", error)
    }
}

orderPizzaWithAsync();
orderPizzaWithAsync();