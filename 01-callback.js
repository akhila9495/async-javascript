function one(call_two){
    console.log(" step 1 complete  , call two ");

setTimeout(()=>{
    call_two()
},1000);
}
function two(){
    console.log(" step 2  ");

}
one(one);


