// console.log("hello");
//only name
let arr1 = [
    "George Castillo", //0
    "Jose McDaniel", //1
    "Ella Hayes", //2
    "Myrtle Keller", //3
    "Billy Cobb", //4
    "Cecelia Cummings", //5
    "Caroline Boone", //6
    "Zachary Abbott", //7
    "Derrick Cruz", //8
    "Hannah Hunt", //9
    "Jesse Richards", //10
    "Bernice Parks", //11
    "Thomas Tran", //12
    "Martha Bell", //13
    "Mitchell Gomez", //14
];
//multiple object
let arr2 = [
    {
        name: "Bess Briggs",
        birth: 2075,
        email: "vin@wi.lr",
        adult: true,
    },
    {
        name: "Loretta Coleman",
        birth: 2110,
        email: "tezetaco@row.mq",
        adult: true,
    },
    {
        name: "Georgia Simpson",
        birth: 2092,
        email: "ocija@azeegu.tz",
        adult: true,
    },
    {
        name: "Martha Ramos",
        birth: 2118,
        email: "hirir@caoreli.iq",
        adult: true,
    },
    {
        name: "Fred Bryant",
        birth: 2113,
        email: "gulodegu@loz.gs",
        adult: true,
    },
    {
        name: "Lottie Stevens",
        birth: 2082,
        email: "paf@huladci.ht",
        adult: true,
    },
    {
        name: "Elijah Cortes",
        birth: 2072,
        email: "vuim@carupro.pw",
        adult: true,
    },
    {
        name: "Mabel McDaniel",
        birth: 2024,
        email: "roviuh@luses.fr",
        adult: true,
    },
    {
        name: "Terry Daniel",
        birth: 2088,
        email: "ihfuvoci@amrul.gb",
        adult: true,
    },
    {
        name: "Violet Nunez",
        birth: 2084,
        email: "pe@bicciuj.tp",
        adult: false,
    },
    {
        name: "Hilda Crawford",
        birth: 2082,
        email: "faztab@lic.cm",
        adult: true,
    },
    {
        name: "Jesse Stanley",
        birth: 2043,
        email: "kufof@buver.sc",
        adult: true,
    },
];
/* 
>>get the length
console.log(arr1.length);
console.log(arr2.length);
*/
/* 
>>get the index
console.log(arr1.at(6)) ;
console.log(arr1[6]) ;
*/
/*
>>joins all array
console.log(arr1.join(" "));
>>removes the last element from an array
arr1.pop()
>>add a last element from an array
arr1.push("robin")
>>removes the first element from an array
arr2.shift()
>>add a first element from an array
arr2.unshift(  {
    name: 'Hilda Crawford',
    birth: 2082,
    email: 'faztab@lic.cm',
    adult: true
  })
  >>Using delete() leaves undefined holes in the array.
  delete arr2[0]
  >>attach two array It always returns a new array
  let arr5 = arr3.concat(arr4) 
  >>show first 3 item
  let arr6 = arr1.slice(0,3)
  >>remove first 3 item
  let arr4 = arr1.slice(3);
  >>show last 3 item other removed
  let arr4 = arr1.slice(-3);
  >>remove last 3 item show removed
  let arr4 = arr1.slice(0,-3);
  >>set start index and fixed how many i need show other removed
  let arr4 = arr1.splice(3, 3);
  >>set start index and fixed how many i need to delete other showing
 arr1.splice(3,3);
  */
// console.log(arr1);
arr1.splice(3, 3);
console.log(arr1);
