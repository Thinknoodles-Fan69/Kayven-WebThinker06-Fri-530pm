let my_home_address = "Ohio St 50 Blk 48 #58-567 470045";
const My_NRIC = "69696969";

console.log(my_home_address);
console.log(My_NRIC);


//old way
function calculateMyIncome() {
    console.log("$9,453,547,000");
}


//new way
let calculateMyTax = () => {
    console.log("$9354");
}

//call the function
calculateMyIncome();
calculateMyTax();