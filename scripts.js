pointFrequency=1

function displayNumber(event){

    const operators=["+","-","*","/","."]

    let textBox=document.querySelector("#result")

    //extract current expression

    let currentExp=textBox.value

    //extract display Number

    let displayNumber=event.target.value

    if(displayNumber=="." && pointFrequency==1){

        pointFrequency=0

    }

    else if(displayNumber=="." && pointFrequency==0){

        return

    }
     
    if(operators.includes(displayNumber)&& displayNumber!="."){

        pointFrequency=1

    }
    

    //extract last characters

    let currentExpLastChar=currentExp.slice(-1)

    //checking operators are in cureent expression and display Number

    if(operators.includes(currentExpLastChar) && operators.includes(displayNumber)){

        currentExp=currentExp.slice(0,-1)

    }

    textBox.value=currentExp+displayNumber

    // let num=event.target.value

    // document.querySelector("#result").value+=num

}

function clearBox(){


    document.querySelector("#result").value=""

}

function evalevent(){

   let currentExp=document.querySelector("#result").value

   let result=eval(currentExp)

   document.querySelector("#result").value=result

   pointFrequency=1

   if(result.split('').includes(".")){

    pointFrequency=0

   }

   else{
    
    pointFrequency=1

   }
   
}

function backSpace(){

    let currentExp=document.querySelector("#result").value

    let result=currentExp.slice(0,-1)

    document.querySelector("#result").value=result

}
