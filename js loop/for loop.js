console.log("hello");
/*
for (let i=1; i<=30;i++){
     if(i>10 && i<20){i+=2}
    if(i<10 || i>20){i+=2}
    console.log(i);
}
*/
/*
const value = 30;
var a = [5,8,10,12,15,18,20,22,24];


a.forEach(e => {
    console.log(e);
});
*/
/*
*/
const years = [1991, 2007, "1995", 2000 ]
let type = typeof years
const age = []
for (let i = 0; i < years.length;i++){
    age.push(2024 - years[i])
    if(typeof years[i] !== 'string') continue
    console.log(years[i]);
}
// console.log(age);
