// Handling Input box
function clickButtonfunc(val) {
    document.getElementById("inputbox").value += val;
}

// Handling Calculations
function calc() {
    let result = document.getElementById("inputbox").value;
    let result1 = eval(result);
    document.getElementById("inputbox").value = result1;
}

// Handling Clearing the input box
function clearInput() {
    document.getElementById("inputbox").value = "";
}