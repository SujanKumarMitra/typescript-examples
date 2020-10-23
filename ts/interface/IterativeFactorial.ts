import { Factorial } from "./Factorial";

export class IterativeFactorial implements Factorial {
	getFactorial ( num: number ): number {
		let result: number = 1;
		for ( let i: number = 2; i <= num; i++ )
			result *= i;
		return result;
	}

}