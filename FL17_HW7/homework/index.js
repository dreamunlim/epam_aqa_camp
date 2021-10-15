function getAge(date) {
    let today = new Date();
    let todaysMonth = today.getMonth();
    let todaysDay = today.getDate();

    let datesMonth = date.getMonth();
    let datesDay = date.getDate();

    let yearDifference = today.getFullYear() - date.getFullYear();
    if (yearDifference >= 1) {
        if (todaysMonth === datesMonth) {
            if (todaysDay >= datesDay) {
                return yearDifference;
            } else {
                return yearDifference - 1;
            }
        } else if (todaysMonth > datesMonth) {
            return yearDifference;
        } else {
            return yearDifference - 1;
        }
    }
}

function getWeekDay(date) {
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today = weekdays[date.getDay()];
    return today;
}

function getAmountDaysToNewYear() {
    let currentYear = new Date().getFullYear()
    let newYearDate = new Date(currentYear + 1, +'0', +'1');
    let msToNewYear = newYearDate.getTime() - new Date().getTime();
    return Math.floor(msToNewYear / +'1000' / +'60' / +'60' / +'24'); // ms/sec/min/hrs
}

function getProgrammersDay(year) {
    const jan = 0;
    const sept = 8;
    let msAtTargetYearStart = new Date(year, jan, 1).getTime();
    let msAtTargetYearSeptStart = new Date(year, sept, 1).getTime();
    let elapsedMsFromJanToSept = msAtTargetYearSeptStart - msAtTargetYearStart;
    let msIn256Days = +'256' * +'24' * +'60' * +'60' * +'1000'; // days*hrs*min*sec*ms
    let remaindingMsInSept = msIn256Days - elapsedMsFromJanToSept;
    let dayOfSeptInTargetYear = Math.floor(remaindingMsInSept / +'1000' / +'60' / +'60' / +'24'); // ms/sec/min/hrs
    let septWeekday = getWeekDay(new Date(year, sept, dayOfSeptInTargetYear));
    
    return `${dayOfSeptInTargetYear} Sep, ${year} (${septWeekday})`;
}

function howFarIs(weekday) {
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let specifiedWeekday = weekday.charAt(0).toUpperCase() + weekday.toLowerCase().slice(1);
    let specifiedWeekdayIndex = weekdays.indexOf(specifiedWeekday);
    let todayWeekdayIndex = new Date().getDay();

    if (specifiedWeekdayIndex === todayWeekdayIndex) {
        return `Hey, today is ${specifiedWeekday} =)`;
    } else {
        let difference = 0;
        if (specifiedWeekdayIndex > todayWeekdayIndex) {
            difference = specifiedWeekdayIndex - todayWeekdayIndex;
        } else {
            difference = weekdays.length - todayWeekdayIndex + specifiedWeekdayIndex;
        }

        return `It's ${difference} day(s) left till ${specifiedWeekday}`;
    }
}

function isValidIdentifier(str) {
    let regex = /^\D+[\w$]+$/ig;
    return !!str.match(regex);
}

function capitalize(str) {
    let regex = /\b\w{1}/ig;
    return str.replace(regex, (val) => {
        return val.toUpperCase();
    });
}

function isValidAudioFile(str) {
    let regex = /^[a-z]+[.](?:mp3|flac|alac|aac)$/ig;
    return !!str.match(regex);
}

function getHexadecimalColors(str) {
    let regex = /[#]{1}(?:[0-9A-F]{3}){1,2}\b/ig;
    return str.match(regex) || [];
}

function isValidPassword(str) {
    let oneLowercase = /[a-z]+/g;
    let oneUppercase = /[A-Z]+/g;
    let oneNumber = /[0-9]+/g;
    let eightChars = /^.{8,}$/g;

    return oneLowercase.test(str) && oneUppercase.test(str) &&
    oneNumber.test(str) && eightChars.test(str);
}

function addThousandsSeparators(str) {
    let regex = /(\d)(?=(\d{3})+(?!\d))/g;
    str = str + '';

    return str.replace(regex, '$1,');
}

function getAllUrlsFromText(str) {
    if (! str) {
        return [];
    }

    let regex = /(?:https?)(?::\/\/)(?:[a-z]+\.)+[a-z]{2,}\/?/ig;
    let result = str.match(regex);
    return result ? result : [];
}