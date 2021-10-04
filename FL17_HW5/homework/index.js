function isEquals(a, b) {
    return !(a - b);
}

function isBigger(a, b) {
    return a - b > 0;
}

function storeNames(...args) {
    return args;    
}

function getDifference(a, b) {
    return a - b >= 0 ? a - b : -(a - b);
}

function negativeCount(arr) {
    let negativeNums = 0;

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] < 0) {
            ++negativeNums;
        }
    }
    return negativeNums;
}

function letterCount(str, letter) {
    let letterOccurrences = 0;

    for (let i = 0; i < str.length; ++i) {
        if (str[i] === letter) {
            ++letterOccurrences;
        }
    }
    return letterOccurrences;
}

function countPoints(arr) {
    let totalPoints = 0;
    let victoryPoints = 3;
    let lossPoints = 0;
    let drawPoints = 1;
    
    let parseString = function(str) {
        let delimiterFound = false;
        let xTeamPoints = '';
        let yTeamPoints = '';

        for (let i = 0; i < str.length; ++i) {
            if (str[i] === ':') {
                delimiterFound = true;
            } else if (delimiterFound) {
                yTeamPoints += str[i];
            } else {
                xTeamPoints += str[i];
            }
        }

        return [Number(xTeamPoints), Number(yTeamPoints)];
    }

    for (let i = 0; i < arr.length; ++i) {
        let scorePairString = arr[i];
        let scorePairAsNumArr = parseString(scorePairString);

        if (scorePairAsNumArr[0] > scorePairAsNumArr[1]) {
            totalPoints += victoryPoints;
        } else if (scorePairAsNumArr[0] < scorePairAsNumArr[1]) {
            totalPoints += lossPoints;
        } else if (scorePairAsNumArr[0] === scorePairAsNumArr[1]) {
            totalPoints += drawPoints;
        }
    }

    return totalPoints;
}