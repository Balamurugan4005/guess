//Selecting Elements
var inoutBox = document.getElementById("inputbox")
var result = document.getElementById("result")
var guesscount = document.getElementById("guesscount")
var noofgues = 3

//Generate Random Number Form 1 to 5
var Randomnumber = Math.floor(Math.random()*10)+1 //1 to 10
if(randomnumber>5)
{
    randomnumber=randomnumber-5
}

//Event Headler Function
function checkthenumber()
{
    if(inputBox.value == randomnumber)
    {
        alert("You Got it Ridht,Congratulation")
        result.textContent = "You are Right"
    }
    else{
         noofguess=noofguess-1
         if(noofguess==0)
         {
            alert("You Lost, Generated Random Number is:"+randomnumber)
         }

         guesscount.textContent = "Available Guesses : " +noofguess
         result.textContent = "You are Wrong !"
    }
}
