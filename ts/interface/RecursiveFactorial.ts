import { Factorial } from "./Factorial";

export class RecursiveFactorial implements Factorial {
	getFactorial ( num: number ): number {
		if ( num <= 1 )
			return 1;
		return num * this.getFactorial( num - 1 );
	}

}