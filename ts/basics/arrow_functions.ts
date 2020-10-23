let numbers: number[] = [ 1, 2, 3, 4, 5 ];

let log: ( num: number ) => void; // Consumer<Number>
log = num => console.log( num );
nums.forEach( log );

let square: ( num: number ) => number; // Function<Number,Number>
square = num => num * num;

let squared_nums: number[] = nums.map( square );
console.log( squared_nums );

let isEven: ( num: number ) => boolean; // Predicate<Number>
isEven = num => num % 2 == 0;
let evenNumbers: number[] = nums.filter( isEven );
console.log( evenNumbers );

let summation: ( accumulator: number, current: number, index: number ) => number;
summation = ( previous, current, index ) => previous + current;
let sum: number = nums.reduce( summation, 0 );
console.log( sum );