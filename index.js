// Code your solutions in this file

const names = ['Lisa', 'Kaitlin', 'Jan'];
const event = 'birthday';

const newArr = [];
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++)
    {
    newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger; 
} return newArr; 
}


const numbers = ['1','2','3','4','5','6','7','8','9','10'];
function countDown(init = 10){
    while (init>=0) {
        console.log(init--);
    }
}