//to view content inside result whenevr we click on the button

function displayNum(num){
    console.log(result);
    result.value += num
}

function allclear(){
    result.value = ""
}

function evalExp(){
    result.value  = eval(result.value)
}

function lastdigit(){
    result.value = result.value.slice(0,-1)
}