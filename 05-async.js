let stocks = {
    fruits: ["strawberry", "apple", "banana", "grapes"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],

};
let is_shop_open = true;
let toppings_choice =()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            console.log('which topping would you love?')
        },3000)
    })
}