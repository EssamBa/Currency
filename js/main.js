fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=716e08872fa3496483cb86191e3c458a")
.then((result)=>{
    let myData = result.json();
    // console.log(myData);
    return myData;
}).then((currency)=>{
    let amount=document.querySelector(".amount");
    let syrPrice=document.querySelector(".syr span");
    let rubPrice=document.querySelector(".rub span");
    // console.log(currency.rates);
syrPrice.innerHTML =Math.round(amount.innerHTML * currency.rates["SYP"])
rubPrice.innerHTML =Math.round(amount.innerHTML * currency.rates["RUB"])
});