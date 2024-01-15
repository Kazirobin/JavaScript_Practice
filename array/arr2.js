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
// console.log(arr2.length);

let arr4 = arr2.slice(-3)
// console.log(arr4);
function func(item,index){
 return   index + ' '+ item.email8
}
console.log(arr2.map(func));