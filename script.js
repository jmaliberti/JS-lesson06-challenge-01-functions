var startMyDay = function () {
    return "Time walk the dog and eat breakfast!"
};
console.log(startMyDay());
//
var favoriteCookie = function (cookie) {
    return `My favorite cookie is ${cookie}.`;
};
console.log(favoriteCookie("snickerdoodle"));
//
var introduce = function (name, occupation) {
    return `My name is ${name}, and I am a ${occupation}.`
};
console.log(introduce("Jessica", "Leasing Admin"));
console.log(introduce("David", "Bartender"));
//
var hyrdationFeedback = function () {
    var numGlasses = Number(
        prompt("How many glasses of water did you have today?")
        );
    if (numGlasses => 8) {
        console.log("Great job staying hydrated!");
    }
    else if (numGlasses <8) {console.log("Not bad, not bad. Let’s try for a bit more tomorrow!");
    }
};

hyrdationFeedback();