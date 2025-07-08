// Eine ganz normale Funktion in Javascript
function sayHello(name){
    return "Hallo " + name + "!";
}

// Kürzere Schreibweise als Arrow-Function
const sayHello2 = (name) => {
    return "Hallo " + name + "!";
};

const sayHello1 = (name) => "Hallo " + name + "!";

function add(x,y){
    return x + y;
}

const add1 = (x,y) => x + y;

const sayBye = () => "Bye Bye";

function sayBye1(){
    return "Bye Bye";
};


console.log(sayHello("Olga"));
console.log(sayHello("Tim"));



