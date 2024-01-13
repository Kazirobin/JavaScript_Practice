// console.log("hello");
// const mark = 200;
/*
let result;
switch (true) {
  case mark >= 100:
    result = "Incorrect";
    break;
  case mark >= 80:
    result = "A+";
    break;
  case mark >= 70:
    result = "A";
    break;
  case mark >= 60:
    result = "A-";
    break;
  case mark >= 50:
    result = "B";
    break;
  case mark >= 40:
    result = "C";
    break;
  case mark >= 33:
    result = "D";
    break;
  default:
    result='fail'
}
console.log(result);
*/
/*
const price = 20;
let discount;
console.log(price > 100 ? discount = '10%' : discount = 'no discount');

const number = 9;
let check;
if(number%2){
    check='this is ODD'
}
else{check = 'this is Even'}
console.log(check);

const arr = [1, 2, 6, 8, 5, 12]
function what(item){
if(item%2){
    return 'odd'
}
else{
    return 'even'
}
}
console.log(what(arr[0]) + ' ' + what(arr[1]) + ' ' +what(arr[2]) + ' ' +what(arr[3]) + ' ' +what(arr[4]) + ' ' +what(arr[5]));
*/

/*
const numbers = [1, 2, 6, 8, 5, 12];

numbers.forEach((number) => {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
});
*/
const number =[1, 2, 6, 8, 5, 12]
let result;
/*
function check(item){
    if (item % 2 === 0){
        console.log(item + ' The number is even');
    }
    else{
        console.log(item + ' The number is odd');
    }
}
*/
number.map((item) => item % 2 === 0 ? 
console.log(result = `${item} even` ) : console.log(result = `${item} odd`))
