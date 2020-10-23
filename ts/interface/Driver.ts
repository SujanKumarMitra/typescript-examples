import { Factorial } from "./Factorial";
import { IterativeFactorial } from "./IterativeFactorial";
import { RecursiveFactorial } from "./RecursiveFactorial";

let calc: Factorial, num: number = 5;

calc = new IterativeFactorial();
console.log( calc.getFactorial( num ) );

calc = new RecursiveFactorial();
console.log( calc.getFactorial( num ) );