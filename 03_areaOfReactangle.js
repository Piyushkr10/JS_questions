let length = 5;
let width = 6;

if(length <=0 || width <=0){
    throw new Error("Length or breadth should be a positive number");
    
} else{
let area = length * width;
console.log("Area of rectangle is " + area)
}



