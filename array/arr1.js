
//Task 1 
const input_1 = document.querySelector('#input_1');
const input1 = document.querySelector('.input-1');
const length = document.querySelector('.length');
let arr1 = []
input_1.addEventListener("input",() => {
    //Make a array by my input 
    arr1 = input_1.value.split(',').map(Number); //Convert string to number
    let arr2 = JSON.stringify(arr1)
    input1.innerHTML =arr2

    let arr3 = arr1.length
    length.innerHTML = arr3
    //Sort the Array
    let sortArr = [...arr1]
    arrSort(sortArr)
    let arr4 = JSON.stringify(sortArr)
    input2.innerHTML = arr4
    
    //Sort the Array Reverse
    let arr5 = JSON.stringify(arr1.reverse())
    input3.innerHTML = arr5

    
})




console.log(arr1)

//Make a function for sort an array
const arrSort = (arr) => {
    arr.sort((a,b)=>a-b)
}

const input2 = document.querySelector('.input-2');
const input3 = document.querySelector('.input-3');

console.log(arrSort(arr1))
const input4 = document.querySelector('#input-4');
input4.addEventListener("input",() => { 
    let var6 = Number(input4.value)
    let found = arr1.indexOf(var6)
    input5.innerHTML = found
console.log(found)

 })
const input5 = document.querySelector('.input-5');
