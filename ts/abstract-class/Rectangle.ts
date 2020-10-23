import { Shape } from "./Shape";

export class Rectangle extends Shape {

	private length: number;
	private breadth: number;

	constructor( length: number, breadth: number, color: string ) {
		super( color );
		this.length = length;
		this.breadth = breadth;
	}

	public getArea (): number {
		return this.length * this.breadth;
	}

}