function clearDisplay() {
    document.calc.display.value = '';
}

function deleteLastChar() {
    document.calc.display.value = document.calc.display.value.slice(0, -1);
}

function appendToDisplay(value) {
    document.calc.display.value += value;
}

function calculateResult() {
    try {
        document.calc.display.value = eval(document.calc.display.value);
    } catch (error) {
        document.calc.display.value = 'Error';
    }
}
