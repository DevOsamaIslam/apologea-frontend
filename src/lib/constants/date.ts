import moment from 'moment'
export const ShortDateFormat = 'dd-mm-yyyy'
export const ShortDateWithTimeFormat = 'dd-mm-yyyy H:mm:ss'
export const ShortDateWithHoursAndMinutesFormat = 'dd-mm-yyyy H:mm'
export const FullDateFormat = 'Do mm yyyy'
export const FullDateWithTimeFormat = 'Do mmmm yyyy H:mm:ss'
export const shortDateWithoutTimeFormat = 'mmmm d, yyyy'

export const getRangeBetweenTwoDates = (d1: string, d2: string): { lower: string; upper: string } => {
	let lower = new Date(d1)
	lower.setUTCHours(0, 0, 0, 0)

	let upper = new Date(d2)
	upper.setUTCHours(23, 59, 59, 999)

	return {
		lower: lower.toISOString(),
		upper: upper.toISOString(),
	}
}

export const getDaysDifferenceBetweenTwoDates = (d1: string | Date, d2: string | Date) => {
	const day1 = moment(d1)
	const day2 = moment(d2)

	const res = Math.abs(moment.duration(day1.diff(day2)).asDays())

	if (res < 1) {
		return 'Less than a day'
	}
	return `${Math.ceil(res)} days`
}

export const getRangeBetweenSingleDate = (d: string): { lower: string; upper: string } => {
	let lower = new Date(d)
	lower.setUTCHours(0, 0, 0, 0)

	let upper = new Date(d)
	upper.setUTCHours(23, 59, 59, 999)

	return {
		lower: lower.toISOString(),
		upper: upper.toISOString(),
	}
}
