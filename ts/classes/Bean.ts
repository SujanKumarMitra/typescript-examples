export class Bean {

	/**
	 * _foo and _bar are fields of the class, values are set during invocation of this constructor
	 * @param _foo the foo
	 * @param _bar the bar
	 */
	constructor( private _foo: string, private _bar: string ) { }

	/**
	 * setter for field "foo"
	 * ex.: object.foo="something"; this method is internally invoked
	 */
	public set foo ( foo: string ) {
		this._foo = foo;
	}

	/**
	 * getter for field "foo"
	 * ex. var x = object.foo; internally this method is called
	 */
	public get foo () {
		return this._foo;
	}
	/**
	 * setter for field "bar"
	 * 
	 */
	public set bar ( bar: string ) {
		this._bar = bar;
	}


	/**
	 * getter for field "bar"
	 */
	public get bar () {
		return this._bar;
	}

	public toString (): string {
		return `Bean[foo=${this._foo}, bar=${this._bar}]`;
	}
}