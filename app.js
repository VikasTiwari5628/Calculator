const display=document.querySelector(".display");

function appendTodisplay(input){
    display.value += input;
}

function deletebyOne(){
    display.value=display.value.slice(0,-1);
}

function clearDisplay(){
    display.value='';
}
function calculate(input){
    display.value=eval(display.value);
}
