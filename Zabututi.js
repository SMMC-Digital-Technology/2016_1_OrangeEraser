var inputincome = document.getElementById("inputincome");
var ouputtax = document.getElementById("display");
var tax = 0;


var Incomevalue1 = 184500;
var Incomevalue2 = 113000;
var Incomevalue3 = 52500;
var Incomevalue4 = 16000;
var Incomevalue5 = 0;

function incomeTax(income) {
    if (income > Incomevalue1) {
        var dif = income - Incomevalue1;
        tax = dif * 0.36 + 39400;
    } else if (income > Incomevalue2) {
        var diff = income - Incomevalue2;
        tax = diff * 0.24 + 13330;
    } else if (income > Incomevalue3) {
        var difff = income - Incomevalue3;
        tax = difff * 0.16 + 3650;
    } else if (income > Incomevalue4) {
        var dix = income - Incomevalue4;
        tax = dix * 0.10;
    } else {
        tax = 0;
    }
    return tax;
}

function incomeEntered() {
    ouputtax.value = incomeTax(inputincome.value);
}

var trace1 = {
    x: [0, 16000, 52500, 113000, 184500, 250000, 500000],
    y: [incomeTax(0), incomeTax(16000), incomeTax(52500), incomeTax(113000), incomeTax(250000), incomeTax(500000)],
    mode: 'lines'
};

var data = [trace1];

var layout = {
    title: 'Tax from personal Income',
    xaxis: {
        title: 'Income'
    },
    yaxis: {
        title: 'Tax'
    }
};

Plotly.newPlot('myDiv', data, layout);
