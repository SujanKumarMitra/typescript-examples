import { Shape } from "./Shape";

export class Circle extends Shape {

	private radius: number;

	constructor( radius: number, color: string ) {
		super( color );
		this.radius = radius;
	}

	public getArea (): number {
		return Math.PI * Math.pow( this.radius, 2 );
	}

}