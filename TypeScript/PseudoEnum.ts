/**
 * A class that should be treated as an enum that has extra functionality. Similar to how Java's enums can work.
 * @author https://github.com/Stephen-Hamilton-C
 */
export class PseudoEnum {

	// Your "enum values" would go here
	//#region Values
	public static readonly TWO: PseudoEnum = new PseudoEnum('TWO', 2);
	public static readonly EIGHT: PseudoEnum = new PseudoEnum('EIGHT', 8);
	//#endregion Values

	// Any variables the enums would require go here. Note that the constructor is private.
	private constructor(
		public name: string,
		private _multiplier: number
	) { }

	// Your methods used by the enums would go here.
	public getMultipliedNumber(num: number): number {
		return num * this._multiplier;
	}

}

//#region Usage

// Create a variable similar to how you might assign an enum:
let pseudoEnum: PseudoEnum = PseudoEnum.EIGHT;
console.log(`10 * 8 = ${pseudoEnum.getMultipliedNumber(10)}`);
// This is obviously a terrible example, but this allows you to do some super powerful stuff, similar to Java enums.

//#endregion Usage