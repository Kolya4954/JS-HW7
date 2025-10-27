// task 1
const array = [1, 2, 3];

array[1] = 10;

console.log(array);

// task 2
const array2 = ["1", "2", "3"];

array2[3] = "4";

console.log(array2);





// task 3
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let num of numbers) {
  sum += num;
}

console.log(sum);




// task 4

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(const arr of array3){
console.log(arr);

};


// task 5

const array4 = ["123456q2", "1262", "q2", "123456q2a2", "2"];

if(array4[0].length > 5){
    console.log(array4[0]);
    
}
if(array4[1].length > 5){
    console.log(array4[1]);
    
}
if(array4[2].length > 5){
    console.log(array4[2]);
    
}
if(array4[3].length > 5){
    console.log(array4[3]);
    
}

if(array4[4].length > 5){
    console.log(array4[4]);
    
}


// task 6

const numbers3 = [5, 12, 52, 62, 64, 76543, 432, 36, 987, 134];

let suma = numbers3[0];

for(let i = 0; i < numbers3.length; i += 1){
      if (suma < numbers3[i]) {
         suma = numbers3[i]
      }
}
console.log(suma);


// task 7
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers2.length; i += 1){
    if(numbers2[i] %2 !== 0){
        continue;
    }
    console.log(numbers2[i]);
    
};



