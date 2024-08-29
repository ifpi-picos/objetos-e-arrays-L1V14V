
const convert = require('convert');


function daysToMinutes(days) {
    return convert(days).from('days').to('minutes');
}


function gigabytesToBytes(gigabytes) {
    return convert(gigabytes).from('gigabytes').to('bytes');
}


const days = 5; 
const gigabytes = 3;

console.log(`${days} dias são iguais a ${daysToMinutes(days)} minutos.`);
console.log(`${gigabytes} gigabytes são iguais a ${gigabytesToBytes(gigabytes)} bytes.`);
