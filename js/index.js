// Exercitiul 1
console.log("Aici incepe ex 1");
const car = {
    brand: "Dacia",
    model: "Golan",
    year: "2022",
    price: "18000",
    kmBoard: "1000"
};

car.model = "Sandero";

delete car.brand;

car.description = "Masina romanului";

console.log(car);

function createOrDeleteProp(key, value) {
    if (value !== undefined) {
        car[key] = value;
    } else {
        delete car[key];
    }
}

createOrDeleteProp("description", "Mare", "Ieftin");
console.log("Descriere: ", car.description);
createOrDeleteProp("description", undefined);
console.log("Descriere: ", delete car.description);
console.log("Descriere:", car.description);

console.log("Aici incepe ex 2");
// Exercitiul 2
function tuneCar(car) {
    const copyCar = { ...car };
    copyCar.price = car.price * 1.5;
    copyCar.kmBoard = car.kmBoard / 2;

    return copyCar;
}

console.log(tuneCar(car));


console.log("Aici incepe ex 3");
// Exercitiul 3
const date = new Date();
const seconds = date.getSeconds();

function minutesWithZero(date) {
    const minutes = date.getMinutes();
    if (minutes < 10) {
        return "0" + minutes;
    }

    return minutes;
}

function secondsWithZero(date) {
    const seconds = date.getSeconds();
    if (seconds < 10) {
        return "0" + seconds;
    }

    return seconds;
}


const formatedDate = date.getHours() + ":" + minutesWithZero(date) + ":" + secondsWithZero(date);
console.log(formatedDate);

const year = date.getFullYear();
const month = date.toLocaleString('default', { month: 'long' });
const fullDate = month + " " + year + " " + formatedDate;

console.log(fullDate);

// Nici o treaba de aici in jos

const eveniment = new Date(2023, 0, 1);
function timeSince(event) {
    const today = new Date();
    const SECONDS_TO_MS = 1000;
    const seconds = Math.floor((today - event) / SECONDS_TO_MS);
    if (seconds < 60) {
        const unitate = seconds === 1 ? "secunda" : "secunde";
        return "acum" + " " + seconds + " " + unitate;
    }
    const minute = Math.floor((seconds / 60));
    if (minute < 60) {
        const unitate = minute === 1 ? "minut" : "minute";
        return "acum" + " " + minute + " " + unitate;
    }

    const ore = Math.floor((minute / 60));
    if (ore < 24) {
        const unitate = ore === 1 ? "ora" : "ore";
        return "acum" + " " + ore + " " + unitate;
    }

    const zile = Math.floor((ore / 24));
    if (zile < 30) {
        const unitate = zile === 1 ? "zi" : "zile";
        return "acum" + " " + zile + " " + unitate;
    }

    const luni = Math.floor((zile / 30));
    const MONTHS_IN_YEAR = 365 / 30;
    if (luni < MONTHS_IN_YEAR) {
        const unitate = luni === 1 ? "luna" : "luni";
        return "acum" + " " + luni + " " + unitate;
    }

    const ani = Math.floor(luni / MONTHS_IN_YEAR);
    const unitate = ani === 1 ? "an" : "ani";
    return "acum" + " " + ani + " " + unitate;
}
// acum 2 ani
console.log(timeSince(new Date(Date.now() - 2 * 13 * 30 * 24 * 60 * 60 * 1000)));
// acum 1 an
console.log(timeSince(new Date(Date.now() - 1 * 13 * 30 * 24 * 60 * 60 * 1000)));
// acum 5 luni
console.log(timeSince(new Date(Date.now() - 5 * 30 * 24 * 60 * 60 * 1000)));
// acum 1 luna
console.log(timeSince(new Date(Date.now() - 1 * 30 * 24 * 60 * 60 * 1000)));
// acum 17 zile
console.log(timeSince(new Date(Date.now() - 17 * 24 * 60 * 60 * 1000)));
// acum 1 zi
console.log(timeSince(new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)));
// acum 5 ore
console.log(timeSince(new Date(Date.now() - 5 * 60 * 60 * 1000)));
// acum 1 ora
console.log(timeSince(new Date(Date.now() - 1 * 60 * 60 * 1000)));
// acum 45 minute
console.log(timeSince(new Date(Date.now() - 45 * 60 * 1000)));
// acum 1 minut
console.log(timeSince(new Date(Date.now() - 1 * 60 * 1000)));
// acum 30 secunde
console.log(timeSince(new Date(Date.now() - 30 * 1000)));
// acum 1 secunda
console.log(timeSince(new Date(Date.now() - 1 * 1000)));

console.log("Anul nou: ", timeSince(eveniment));

