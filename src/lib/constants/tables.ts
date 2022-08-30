import { IFilter } from 'lib/@types/filters'

export enum ORDER {
	descend = 'DESC',
	ascend = 'ASC',
}

export enum DENSITY_SIZE {
	large = 'large',
	middle = 'middle',
	small = 'small',
}

export enum ROW_LIMIT {
	hundred = 100,
	twoHundred = 200,
	threeHundred = 300,
	fourHundred = 400,
	fiveHundred = 500,
}

export enum TableNames {
	studentsTable = 'studentsTable',
}

export const baseTableState = {
	page: 0,
	limit: ROW_LIMIT.hundred,
	density: DENSITY_SIZE.middle,
	selectedRow: [] as string[],
	filters: [] as IFilter[],
	quickLookVisibility: false,
	createVisibility: false,
	sortField: '',
	sortOrder: ORDER.descend,
	updateVisibility: false,
}
