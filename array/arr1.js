
//Task 1 
const input_1 = document.querySelector('#input_1');
const input1 = document.querySelector('.input-1');
let arr1 = []
input_1.addEventListener("input",() => {
    //Make a array by my input 
    arr1 = input_1.value.split(',').map(Number); //Convert string to number

    input1.innerHTML = JSON.stringify(arr1)
})
console.log(arr1)