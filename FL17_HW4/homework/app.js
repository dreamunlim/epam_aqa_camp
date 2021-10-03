function reverseNumber(num) {
    let negative = num < 0 ? 1 : 0;
    num = negative ? -num : num;

    let splitNumber = [];
    let numZeros = 0;

    for (let i = 0; num > 0; ++i) {
        splitNumber[i] = num % 10;
        num = num / 10 | 0;
        numZeros = i;
    }

    // return zeros
    let reversedNumber = 0;
    
    for (let i = 0; i < splitNumber.length; ++i) {
        for (let j = 0; j < numZeros; ++j) {
            splitNumber[i] = splitNumber[i] * 10;
        }
        --numZeros;

        reversedNumber += splitNumber[i];
    }

    // add missing zeros to front
    if (splitNumber[0] === 0) {
        for (let i = 0; splitNumber[i] === 0; ++i) {
            reversedNumber = '0' + reversedNumber;
        }
        // return as a string if reversed number has leading zeros
        return negative ? '-' + reversedNumber : reversedNumber;
    }
        
    // return as an integer number
    return negative ? -reversedNumber : reversedNumber;
}

function forEach(arr, func) {
    for (let i = 0; i < arr.length; ++i) {
        let element = arr[i];
        func(element);
    }
}

function map(arr, func) {
    let newArray = [];
    let i = 0;

    forEach(arr, (elem) => {
        newArray[i] = func(elem);
        ++i;
    })

    return newArray;
}

function filter(arr, func) {
    let newArray = [];
    let i = 0;

    forEach(arr, (elem) => {
        if (func(elem)) {
            newArray[i] = elem;
            ++i;
        }
    })

    return newArray;
}

function getAdultAppleLovers(data) {
    let appleLovers = [];
    let appleLoversNames = [];

    let filterFunction = function(elem) {
        return elem.age > 18 && elem.favoriteFruit === 'apple';
    };

    let mapFunction = function(elem) {
        return elem.name;
    };

    appleLovers = filter(data, filterFunction);
    appleLoversNames = map(appleLovers, mapFunction);

    return appleLoversNames;
}

function getKeys(obj) {
    let objKeys = [];
    let arrIndex = 0;

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            objKeys[arrIndex] = key;
            ++arrIndex;
        }
    }
    return objKeys;
}

function getValues(obj) {
    let objValues = [];
    let arrIndex = 0;

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            objValues[arrIndex] = obj[key];
            ++arrIndex;
        }
    }
    return objValues;
}

function showFormattedDate(dateObj) {
    let locale = 'en-US';
    let year = dateObj.toLocaleString(locale, {year: 'numeric'});
    let month = dateObj.toLocaleString(locale, {month: 'short'});
    let day = dateObj.toLocaleString(locale, {day: 'numeric'});

    return `It is ${day} of ${month}, ${year}`;
}
