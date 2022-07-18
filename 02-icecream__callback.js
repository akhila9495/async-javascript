const prompt = require('prompt-sync')();
let choiceFruits = 0
let stocks = {
    fruits: ["strawberry", "apple", "banana", "grapes"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],

};
let printList = (componentName) => {
    let count = 1;
    componentName.forEach((fruit) => {
        console.log(`${count}   ${fruit}`);
        count++;
    });

    let orderChoice = prompt("what is your number of choice?");
    return (orderChoice - 1);


};

let orderSelection = (fruits) => {
    choiceFruits = printList(fruits)
    setTimeout(() => {
        order(choiceFruits, production);
    }, 2000);
    "Machine started"
};

let order = (fruitNumber, call_production) => {
    setTimeout(() => {
        console.log('selected ' + `${stocks.fruits[fruitNumber]}`);
        call_production(fruitNumber);
    }, 1000);



};

let production = (fruitNumber) => {
    console.log('starting production');
    setTimeout(() => {
        console.log(`${stocks.fruits[fruitNumber]}` + '  is chopped');
        setTimeout(() => {
            var choiceLiq = printList(stocks.liquid);
            console.log(`${stocks.liquid[choiceLiq]} is added `);
            setTimeout(() => {
                console.log("Machine started " + "\n");


                setTimeout(() => {
                    var choiceHoL = printList(stocks.holder);

                    console.log(`${stocks.holder[choiceHoL]} is added `);
                    setTimeout(() => {
                        var choiceTop = printList(stocks.toppings);
                        setTimeout(() => {
                            console.log(`${stocks.toppings[choiceTop]} is added ` + '\n' + `your order ${(stocks.fruits[choiceFruits])} of  with  ${stocks.liquid[choiceLiq]} in  ${stocks.holder[choiceHoL]} topped with ${stocks.toppings[choiceTop]} ready`);
                        }, 1000);

                    }, 1000);

                }, 2000);
            }, 1000);
        }, 1000);

    }, 2000);
};

orderSelection(stocks.fruits);