const arr = [
    "robin",
    "mirpur",
    true,
    true,
    1995,
    8801787881334
]
console.log(arr.length);
for (let i = 0; i < arr.length ; i++){
    
    if (typeof arr[i] !== 'string') continue

        console.log(arr[i]);
    
}