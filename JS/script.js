//BUTTON
const sendBtn = document.getElementById ("send"); //object
console.log(sendBtn, typeof sendBtn);

sendBtn.addEventListener ("click", function (){
    // console.log("SONO CLICCATO");
    //KM ,AGE, NAME INPUT VALUE COLLECTED + TRANSFORMED FROM STRING TO NUMBER
    const userKm = parseInt(document.getElementById("kilometers").value);
    console.log(userKm, typeof userKm);
    const userAge = parseInt(document.getElementById("age").value);
    console.log(userAge, typeof userAge);
    const userName = document.getElementById("name").value;
    console.log(userName);
    let ticketNumber = Math.floor((Math.random() * 200) + 1);
    let wagon = Math.floor((Math.random() * 9) + 1);

    

    //NUMBER INPUT CHECK
    if (!isNaN(userKm) && !isNaN(userAge) && userKm > 0 && userAge > 0){
        //BASEPRICE VAR + DISCOUNT VAR
        const basePrice = (userKm * 0.21); 
        console.log(basePrice);
        let discount = 0;

        //OPTIONS
        if (userAge < 18){
            discount = 20;
        } else if (userAge > 65) {
            discount = 40;
        } else {
            discount = 0;
        }
        
        //FINAL VALUE
        const totalDiscount = ((basePrice * discount) / 100);
        console.log(totalDiscount);
        const finalPrice = (basePrice - totalDiscount).toFixed(2);
        console.log(finalPrice);
    
        //OUTPUT
        document.getElementById("user-name").innerHTML = userName;
        document.getElementById("ticket-number").innerHTML = ticketNumber;
        document.getElementById("seat").innerHTML = wagon;
        document.getElementById("finalPrice").innerHTML = (finalPrice + " €");
        document.querySelector(".output-container").style.display = "block";
        
    } else {
        alert ("Dati non validi!")
    }
})