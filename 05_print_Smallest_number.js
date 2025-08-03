

// function smallestAmongThree(a,b,c){
//      if(a < b && a< c){
//          console.log(`${a} is smallest among all...`);
//      } else if( b<a && b< c){
//          console.log(`${b} is smallest among all...`);
//      } else{
//          console.log(`${c} is smallest among all...`);
//      }
// }


// function smallestAmongAll(numbers){
//      let sort = numbers.sort((a, b) => a - b);
//      console.log(sort[0]);
// }

function smallestAmongAll(numbers) {
    let min = Math.min(...numbers);
    console.log(min);
}


let numbers = [11, 2, 3, 4, 5];
smallestAmongAll(numbers);