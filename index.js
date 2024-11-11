// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendtodisplay(input){
    display.value += input;
}

function clearDisplay(){ 
    console.log("I am called ")
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);    
    }
    catch(error){
        display.value = "Oops!";
    }
}