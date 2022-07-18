let stocks = {
    fruits: ["strawberry", "apple", "banana", "grapes"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],

};
let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {

        if (is_shop_open) {
            setTimeout(() => {

                resolve(work());

            }, time)

        }
        else {
            reject(console.log('service cannot be provided'));
        }
    })

};
order(2000, () => { console.log(`${stocks.fruits[0]} was selected`) })
    .then(() => {
        return order(0000, () => { console.log('production started')})
    }).then(() => {
        return order(2000, () => { console.log('the fruit was chopped')})
    }).then(() => {
        return order(1000, () => { console.log(`${stocks.liquid[0]}and ${stocks.liquid[1]} was selected`) })
    }).then(() => {
        return order(1000, () => { console.log('start the machine') })

    }).then(() => {
        return order(3000,()=>{console.log(`${stocks.toppings[0]}was selected`)})
    }).then(()=>{
        return order(1000,()=>{console.log('ice cream is served')})
    })
    .catch(()=>{
        console.log("customer left")
    })
   .finally(()=>{

    console.log("day ended , shop is closed")

});
