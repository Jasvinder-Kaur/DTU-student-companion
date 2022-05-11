module.exports.i = i

function i(day) {
    switch (day) {
        case "Monday":
            return "0"
        case "Tuesday":
            return "1"
        case "Wednesday":
            return "2"
        case "Thursday":
            return "3"
        case "Friday":
            return "4"
    }
}

module.exports.j = j

function j(time) {
    switch (time) {
        case "8-9":
            return "0"
        case "9-10":
            return "1"
        case "10-11":
            return "2"
        case "11-12":
            return "3"
        case "12-1":
            return "4"
        case "1-2":
            return "5"
        case "2-3":
            return "6"
        case "3-4":
            return "7"
        case "4-5":
            return "8"
        case "5-6":
            return "9"
    }
}