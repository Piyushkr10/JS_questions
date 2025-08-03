//Find th maximum number in an array
// function maxArray(arr){
//     return Math.max(...arr);
// }
// console.log(maxArray([1,2,3,4,56,6,7,3,5,2]));


// Create a shallow copy of an array
// function copy(arr){
//     return [...arr];
// }
// console.log(copy([1,2,3,4,5]));


// Combines two or more array int one.  :- Merge Arrays
// function mergeArray(arr1,arr2){
//     return [...arr1, ...arr2];
// }
// arr1 = [ 1,2,3,4,5];
// arr2 = [6,7,8,9,10];
// console.log(mergeArray(arr1, arr2));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Destructing the rest parameter
// const [first, ...rest] = [1,2,3,4,5];
// console.log(first);
// console.log(rest); // Output: [2, 3, 4, 5]

// Copy and merging work with objects literals as of ES2018;

// const obj1 = {
//     name: "John",
//     age: 30
// };
// const obj2 = {
//     city:"New York",
//     country: "USA"
// };
// Merging objects
// const MergedObject = {...obj1, ...obj2};
// console.log(MergedObject); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }

// // Copying objects
// const copiedObject = {...obj1};
// console.log(copiedObject); // Output: { name: 'John', age: 30 }

// //Update a property of object
// const updatedObject = {...obj1, age:31};
// console.log(updatedObject); // Output: { name: 'John', age: 31 }

// // Delete a property of object
// const { age, ...objectWithoutAge } = obj1;
// console.log(objectWithoutAge); // Output: { name: 'John' }


// Find the minimum of tna array;
function minnArray(arr){
    return Math.min(...arr);
}
console.log(minnArray([1,2,3,4,56,6,7,3,5,2])); // Output: 1