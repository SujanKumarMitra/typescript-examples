export enum DaysOfWeek {
	MONDAY = "MONDAY",
	TUESDAY = "TUESDAY",
	WEDNESDAY = "WEDNESDAY",
	THURSDAY = "THURSDAY",
	FRIDAY = "FRIDAY",
	SATURDAY = "SATURDAY",
	SUNDAY = "SUNDAY"
}

let today: DaysOfWeek = getTodaysDay();
console.log( today );

function getTodaysDay (): DaysOfWeek {
	let dayOrdinal = new Date().getDay();
	switch ( dayOrdinal ) {
		case 0:
			return DaysOfWeek.SUNDAY;
		case 1:
			return DaysOfWeek.MONDAY;
		case 2:
			return DaysOfWeek.TUESDAY;
		case 3:
			return DaysOfWeek.WEDNESDAY;
		case 4:
			return DaysOfWeek.THURSDAY;
		case 5:
			return DaysOfWeek.FRIDAY;
		case 6:
			return DaysOfWeek.SATURDAY;
		default:
			throw new Error( "error!!" );
	}
}