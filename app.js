var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-btn");


function luckyBirthdateChecker(){
  
    var dob  =  dateOfBirth.value; 
    var sum  =  sumCalculator(dob);
    var yourNumber = luckyNumber.value;
    compareValues(sum, yourNumber);
    
    
}

function sumCalculator(dob){
    dob=   dob.replaceAll("-", "");
    var sum = 0;
    for(var i = 0; i < dob.length; i++){

         
         sum = sum + Number(dob.charAt(i)); 
         

    }
    return sum;
    
}

function compareValues(sum, yourNumber){
    if(sum % yourNumber === 0){
        message.innerText = "Oh! your birthday is lucky🥳";
    }else{
        message.innerText = "Bummer, your birthday is not lucky🙃";
    }
}


checkButton.addEventListener("click",  luckyBirthdateChecker)