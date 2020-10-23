class FinalClass {
	/**
	 * functions like final modifier in Java.
	 * once assigned, can't be reassigned
	 */
	public readonly element: number;

	constructor( element: number ) {
		this.element = element;
	}

}

let obj:FinalClass = new FinalClass(10);
log(obj.element);
// obj.element=20; compile error
