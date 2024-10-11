function permainanKecil(array) {
    for (let i = 0; i < array.length; i++) {
     if (array[i] % 3 === 0) {
        console.log("Hihi");
     } else {
        console.log(array[i]);
     }
    }
}

let array1 = [1, 4, 7, 2, 8, 9, 3, 0];
let array2 = [34, 6, 87, 2, 9, 0, 3];
let array3 = [-9, 8, 0, 12, 5, 9, 3];

console.log("Array 1:");
permainanKecil(array1);

console.log("Array 2:");
permainanKecil(array2);

console.log("Array 3:");
permainanKecil(array3);