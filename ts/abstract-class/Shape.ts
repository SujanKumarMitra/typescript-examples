export abstract class Shape {

	private color: string;

	constructor( color: string ) {
		this.color = color;
	}

	public getColor (): string {
		return this.color;
	}

	public abstract getArea (): number;
}