let stocks = {
    fruits: ["strawberry", "apple", "banana", "grapes"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],

};
let is_shop_open = true;

async function order(){
    try{
        await abc;
    }
    catch(error){
         console.log('abc doesnt exist ,error')
    }
    finally{
        console.log("runs anyways")
    }

}
order()
.then(()=>{ console.log('then order')});