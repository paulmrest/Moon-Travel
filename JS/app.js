function daysSincePeopleOnMoon() {
    const dateLastOnMoon = new Date('12/14/1972');
    var timeDiffMicroSeconds = Math.abs(new Date() - dateLastOnMoon);
    document.getElementById('dayssincemoon').innerHTML = Math.ceil(timeDiffMicroSeconds / (1000 * 24 * 60 * 60));
}

function getWeightValue() {
    //get value from text box
    var weightFromTextBox = document.getElementById('enterweight').value;
    if (!isNaN(parseFloat(weightFromTextBox)) && isFinite(weightFromTextBox)) {
        calculateCost(parseInt(weightFromTextBox));
    }
    else
    {
        document.getElementById('enterweight').value = '';
        document.getElementById('calculatedcost').innerHTML = 'Please enter a number value for the weight.';
    }
}

function calculateCost(validNumericalWeight) {
    var weightKilograms = weightInKilograms(validNumericalWeight);

    const lunarCostUSDPerKilogram = 2000000; //2 million USD per kilogram
    var totalCost = lunarCostUSDPerKilogram * weightKilograms

    document.getElementById('calculatedcost').innerHTML = 'It would cost USD ' + 
    totalCost.toLocaleString('en-US',
        {
            style: 'currency',
            currency: 'USD'
        }) 
    + ' to send you and your luggage to the Moon.';
}

//determine if weight is in pounds or kilograms
//if it is in pounds, convert to kilograms
function weightInKilograms(weight) {
    const poundsToKilogramsConv = 0.453592;
    var weightInKilograms = weight;
    var weightButtons = document.getElementsByName('weightbutton');
    for (i = 0; i < weightButtons.length; i++)
    {
        if (weightButtons[i].checked)
        {
            var weightUnit = weightButtons[i].value;
            if (weightUnit == 'pounds')
            {
                weightInKilograms = weight * poundsToKilogramsConv;
            }
        }
    }
    return weightInKilograms;
}

function checkWeightValueIsNumerical(weight) {
    
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
    var psuedoRandomChoice = Math.floor(Math.random() * cheeses.length);
    document.getElementById('cheesetype').innerHTML = cheeses[psuedoRandomChoice];
}

function moonGame() {
    //TODO realisitcally, this should be choosing randomly from a selection of questions, rather than just using one.
    const saturnVLbsLiftoffThrust = 7500000; //7.5 million lbs of force at liftoff
    var correctAnswer = false;
    while (!correctAnswer)
    {
        var userAnswer = window.prompt('How many pounds of thrust did the Saturn V have at liftoff (please enter a numerical value)? Enter "x" to exit.');

        if (userAnswer.toLowerCase() === 'x') //strongly typed comparison
        {
            window.alert('Thanks for playing!');
            break;
        }

        if (isNaN(parseFloat(userAnswer)) || !isFinite(userAnswer)) 
        {
            window.alert('Please enter a numerical value.');
        }
        else if (userAnswer == saturnVLbsLiftoffThrust) //loosely typed comparison
        {
            window.alert('Correct! You know your moon stuff!');
            correctAnswer = true;
        }
        else if (Math.abs(parseInt(userAnswer) - saturnVLbsLiftoffThrust) <= 1000000)
        {
            window.alert('You\'re within million pounds of the answer!.');
        }
        else if (parseInt(userAnswer) < saturnVLbsLiftoffThrust)
        {
            window.alert('Too low. Please try again.');
        }
        else
        {
            window.alert('Too high. Please try again.');
        }
    }
}