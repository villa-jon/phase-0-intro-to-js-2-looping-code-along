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
// Hello J again, so for the sake of my own sanity of not totally redo-ing work (It's not that I'm lazy, but...)
// I'm going to explain the lab. So at the top we have our array. 
// so for the first test, what I am doing is creating a new array and then putting in two 
// parameters (names,event). We are using a for loop to loop the array for 
// each name that is in the array. Then we are pushing the new array 
// through a looped sentence. So that each person is able to get a thank you.
// Oringinally I wanted to Wanda's family, but that is beside the point.
// 
// For the last two tests, what I'm doing here is declaring a new array
// that is counting down to 0. So first IU am init the array at the variable "10",
// while using a "while" loop. 