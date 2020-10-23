function echo<T> ( arg: T ): T {
	console.log( arg );
	return arg;
}

let x: number = echo( 10 );
let bool: boolean = echo( true );

class Container<T> {
	private element: T;

	constructor( element: T ) {
		this.element = element;
	}

	static of<T> ( element: T ): Container<T> {
		return new Container( element );
	}

	public get (): T {
		return this.element;
	}

	public toString (): string {
		return `Container<${typeof ( this.element )}>[${this.element}]`;
	}
}

let container: Container<number> = new Container( 5 );
console.log( `${container}` );

container = Container.of( 10 );
console.log( `${container}` );
