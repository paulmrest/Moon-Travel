function daysSincePeopleOnMoon() {
    var dateLastOnMoon = new Date('12/14/1972');
    var timeDiffMicroSeconds = Math.abs(new Date() - dateLastOnMoon);
    //TEST
    console.log('timeDiffMicroSeconds ' + timeDiffMicroSeconds);
    //TEST

    /*
    return Math.ceil(timeDiffMicroSeconds / (1000 * 24 * 60 * 60))
    */

    document.getElementById('dayssincemoon').innerHTML = Math.ceil(timeDiffMicroSeconds / (1000 * 24 * 60 * 60));
}


function calculateCost() {
    //get value from text box
    var weightFromTextBox = document.getElementById('enterweight').value;

    //TEST
    console.log('weightFromTextBox ' + weightFromTextBox);
    //TEST

    //determine if weight is in pounds or kilograms
    //if it is in pounds, convert to kilograms
    var weightKilograms = weightInKilograms(weightFromTextBox);

    //TEST
    console.log('weightKilograms ' + weightKilograms);
    //TEST

    const lunarCostUSDPerKilogram = 2000000; //2 million USD per kilogram
    var totalCost = lunarCostUSDPerKilogram * weightKilograms

    //TEST
    console.log('It would cost USD $' + totalCost.toFixed(2) + ' to send you and your luggage to the Moon.')
    //TEST
    document.getElementById('calculatedcost').innerHTML = 'It would cost USD $' + totalCost.toFixed(2) + ' to send you and your luggage to the Moon.';
}

function weightInKilograms(weight) {
    const poundsToKilogramsConv = 0.453592;
    var calcCostUsingPounds = true;
    var weightButtons = document.getElementsByName('weightbutton');
    for (i = 0; i < weightButtons.length; i++)
    {
        if (weightButtons[i].checked)
        {
            var weightUnit = weightButtons[i].value;
            //TEST
            console.log('weightUnit ' + weightUnit);
            //TEST
            if (weightUnit == 'kilograms')
            {
                return weight;
            }
            else
            {
                return weight * poundsToKilogramsConv;
            }
        }
    }
}

function cheeseGuesser() {
    var cheeses = 
    [
        'English Cheddar',
        'Parmigiano Reggiano (Parmesan)',
        'Roquefort',
        'Brie',
        'Gruyere',
        'Feta',
        'Mozzarella',
        'Manchego',
        'Gorgonzola',
        'Epoisses'
    ]
    var psuedoRandomChoice = Math.floor(Math.random() * Math.floor(cheeses.length));
    //TEST
    console.log('psuedoRandomChoice ' + psuedoRandomChoice);
    //TEST
    document.getElementById('cheesetype').innerHTML = cheeses[psuedoRandomChoice];
}