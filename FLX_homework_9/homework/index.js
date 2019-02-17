function findTypes() {
    let tipes = [];
    for (let i = 0; i < arguments.length; i++) {
        tipes.push(typeof (arguments[i]));
    }
    console.log(tipes);
}

findTypes(null, 5, 'hello');


function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arguments[i]);
    }
}

executeforEach([1, 2, 3], function (el) {
    console.log(el);
});


function mapArray(...rest) {
    for (let i = 0; i < rest.length; i++) {
        console.log(arguments[i] + 3);
    }
}

mapArray(2, 5, 8);


function filterArray(...rest) {
    for (let i = 0; i < rest.length; i++) {
        if (arguments[i] > 3) {
            console.log(arguments[i]);
        }
    }
}

filterArray(2, 5, 8);


let data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];


function getAmountOfAdultPeople() {
    let amountofpeople = 0;
    for (let prop in data) {
        if (data[prop].age > 18) {
            amountofpeople++;
        }
    }
    console.log(amountofpeople);
}

getAmountOfAdultPeople();


function getGreenAdultBananaLovers() {
    let namesofpeople = [];
    for (let prop in data) {
        if (data[prop].age > 18 && data[prop].favoriteFruit === 'banana' && data[prop].eyeColor === 'green') {
            namesofpeople.push(data[prop].name);
        }
    }
    console.log(namesofpeople);
}

getGreenAdultBananaLovers();


function getKeys(keys) {
    let keyMass = [];
    for (let key in keys) {
        keyMass.push(key);
    }
    console.log(keyMass);
}

getKeys({keyOne: 1, keyTwo: 2, keyThree: 3});


function getValues(values) {
    let valueMass = [];
    for (let key in values) {
        valueMass.push(values[key]);
    }
    console.log(valueMass);
}

getValues({keyOne: 1, keyTwo: 2, keyThree: 3});


function showFormattedDate(yourdate) {
    let date, year;
    let options = {month: 'short'};
    date = yourdate.getDate();
    let _month = new Intl.DateTimeFormat('en-US', options).format(yourdate);
    year = yourdate.getFullYear();
    console.log(`Date: ${date} of ${_month}, ${year}`);
}

showFormattedDate(new Date('2019-01-27T01:10:00'));


function isEvenYear(yourdate) {
    let year = yourdate.getFullYear();
    console.log(year % 2 === 0);
}

isEvenYear(new Date('2019-01-27T01:10:00'));


function isEvenMonth(yourdate) {
    let month = yourdate.getMonth() + 1;
    console.log(month % 2 === 0);
}

isEvenMonth(new Date('2019-02-27T01:10:00'));
