
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
    
    arrSort(arr1)
    let arr4 = JSON.stringify(arr1)
    input2.innerHTML = arr4

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