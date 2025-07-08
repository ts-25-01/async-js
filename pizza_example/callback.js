function orderPizza(callback){
    console.log("Pizza wird gebacken..");

    setTimeout(() => {
        console.log("Pizza ist fertig");
        callback(); // console.log("Holen wir Pzza ab");
    }, 3000);
}



orderPizza(() => {
    console.log("Holen wir Pzza ab");
})


