const {BrowserWindow} = require('electron')

let calculator;

function calculatorWindow(){
    calculator = new BrowserWindow({
        width:800,
        height:600,
        modal: true,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation: false,
        }
    });

    calculator.loadFile('calculateDesgin/calculateFolder/calculate.html')
}

module.exports = {
    calculatorWindow
}
