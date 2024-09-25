/*
//Task 1 

const input11 = document.querySelector('#input_1');
const input1 = document.querySelector('.input-1');
const length = document.querySelector('.length');
const input2 = document.querySelector('.input-2');
const input3 = document.querySelector('.input-3');
const input4 = document.querySelector('#input-4');
const input5 = document.querySelector('.input-5');


let arr1 = []
input_1.addEventListener("input",() => {
    //Make a array by my input 
    arr1 = input_1.value.split(',').map(Number); //Convert string to number
    let arr2 = JSON.stringify(arr1)
    input1.innerHTML =arr2
    
    //Find array length
    let arr3 = arr1.length
    length.innerHTML = arr3
<<<<<<< HEAD
    
=======
>>>>>>> 6b40e840d104264ed146b30668ac518964e41c72
    //Sort the Array
    let sortArr = [...arr1]
    arrSort(sortArr)
    let arr4 = JSON.stringify(sortArr)
    input2.innerHTML = arr4
<<<<<<< HEAD
=======
    
    //Sort the Array Reverse
    let arr5 = JSON.stringify(arr1.reverse())
    input3.innerHTML = arr5

>>>>>>> 6b40e840d104264ed146b30668ac518964e41c72
    
    //Sort the Array Reverse
    let arr5 = JSON.stringify(arr1.reverse())
    input3.innerHTML = arr5 
})




console.log(arr1)

//Make a function for sort an array
const arrSort = (arr) => {
    arr.sort((a,b)=>a-b)
}


<<<<<<< HEAD

console.log(arrSort(arr1))
=======
console.log(arrSort(arr1))
const input4 = document.querySelector('#input-4');
>>>>>>> 6b40e840d104264ed146b30668ac518964e41c72
input4.addEventListener("input",() => { 
    let var6 = Number(input4.value)
    let found = arr1.indexOf(var6)
    input5.innerHTML = found
<<<<<<< HEAD
    console.log(found)
    console.log(arr1)
})
*/

console.clear()
const arr = [2,5,8,17,20]
const num = 13
console.log(arr)

function twoSum (nums,target){
    const complementMap = new Map()
    for(let i = 0; i < nums.length ; i++){
        let num =nums[i]
        if(complementMap.has(num)){
            return [complementMap.get(num),i]
        }
    }
}
console.log(twoSum(arr,num))


/**

 * এই অংশটি JavaScript-এর `twoSum` ফাংশনে ব্যবহৃত হচ্ছে, যেখানে একটি নির্দিষ্ট লক্ষ্য মান (target) এবং একটি সংখ্যা তালিকা (array) দেওয়া থাকে। ফাংশনের কাজ হলো সেই দুটি সংখ্যার ইন্ডেক্স খুঁজে বের করা, যাদের যোগফল সেই টার্গেট মানের সমান হয়।

এখন, আসুন আমরা নিচের অংশটি ব্যাখ্যা করি:

```javascript
if (complementMap.has(num)) {
    return [complementMap.get(num), i];
}
```

### ব্যাখ্যা (বাংলায়):
1. **`if (complementMap.has(num))`:**
   - এখানে `complementMap` হলো একটি ম্যাপ (map), যেখানে পূর্বের প্রতিটি সংখ্যার কমপ্লিমেন্ট (যে সংখ্যাটি টার্গেট থেকে বর্তমান সংখ্যাকে বাদ দিলে পাওয়া যায়) এবং সেই সংখ্যার ইন্ডেক্স সংরক্ষণ করা হচ্ছে।
   - `complementMap.has(num)` চেক করছে, বর্তমান সংখ্যাটি ম্যাপের মধ্যে আছে কিনা। অর্থাৎ, আমরা দেখতে চাইছি যে, পূর্বে এমন কোনো সংখ্যা আছে কিনা, যেটির সাথে বর্তমান সংখ্যাটি যোগ করলে টার্গেট মানটি পাওয়া যাবে।

2. **`return [complementMap.get(num), i];`:**
   - যদি পূর্বে এমন সংখ্যা থাকে, তাহলে তার ইন্ডেক্স এবং বর্তমান সংখ্যার ইন্ডেক্সের একটি অ্যারে তৈরি করে রিটার্ন করা হচ্ছে।
   - `complementMap.get(num)` সেই পূর্বের সংখ্যার ইন্ডেক্স বের করছে, আর `i` হলো বর্তমান সংখ্যার ইন্ডেক্স। এই দুটি ইন্ডেক্সই রিটার্ন করা হয়, কারণ এই দুই সংখ্যা মিলে টার্গেট মান দেয়।

### উদাহরণ:
যদি `nums = [2, 7, 11, 15]` এবং `target = 9` হয়:
- প্রথমবারে, `2` এর জন্য `9 - 2 = 7` হিসাবে কমপ্লিমেন্ট ম্যাপে সেট হবে। 
- যখন `7` পাওয়া যাবে, তখন `complementMap.has(7)` সত্য হবে, কারণ এটি আগে থেকে কমপ্লিমেন্ট হিসাবে ম্যাপে সংরক্ষিত ছিল।
- এরপর `complementMap.get(7)` দিয়ে `2` এর ইন্ডেক্স (যেটি 0) পাওয়া যাবে, আর বর্তমান ইন্ডেক্স হলো `1`। তাই এটি `[0, 1]` রিটার্ন করবে।

```javascript
complementMap.set(target - num, i);
```

### এই লাইনটি ব্যাখ্যা:
- `complementMap.set(target - num, i)` ম্যাপে একটি এন্ট্রি তৈরি করছে। এখানে `target - num` হলো সেই কমপ্লিমেন্ট যা আমরা খুঁজছি এবং `i` হলো বর্তমান সংখ্যার ইন্ডেক্স।
  
উদাহরণ:
- যদি `target = 9` এবং `num = 2` হয়, তাহলে `complementMap.set(9 - 2, 0)` হয়, যেখানে `7` কে কমপ্লিমেন্ট হিসাবে ইন্ডেক্স `0` এর সাথে সংরক্ষণ করা হয়। 

এভাবেই, পরবর্তীতে যদি `7` পাওয়া যায়, তাহলে এটি আমাদের বলে দেবে যে, `2` (ইন্ডেক্স `0`) এবং `7` (ইন্ডেক্স `1`) মিলে `9` তৈরি করে।
 * 
 */
=======
console.log(found)

 })
const input5 = document.querySelector('.input-5');
>>>>>>> 6b40e840d104264ed146b30668ac518964e41c72
