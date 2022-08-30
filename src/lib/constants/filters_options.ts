import { $SingleDateOptions } from 'lib/@types/filters'

export const STRING_OPTIONS = [
	{
		label: 'Includes',
		value: '$contL',
	},
	{
		label: 'Equals',
		value: '$eq',
	},
	{
		label: 'Not Equal to',
		value: '$ne',
	},
	{
		label: 'Starts With',
		value: '$starts',
	},
	{
		label: 'Ends With',
		value: '$ends',
	},
]

export const NUMBER_OPTIONS = [
	{
		label: 'not equal to',
		value: '$ne',
	},
	{
		label: 'Greater than',
		value: '$gt',
	},
	{
		label: 'Equals',
		value: '$eq',
	},
	{
		label: 'Greater than or Equal to',
		value: '$gte',
	},
	{
		label: 'Less than',
		value: '$lt',
	},
	{
		label: 'Less than or Equal to',
		value: '$lte',
	},
]

export const SINGLE_DATE_OPTIONS: $SingleDateOptions = [
	{
		label: 'Single Day',
		value: '$between',
	},
	{
		label: 'After',
		value: '$gte',
	},
	{
		label: 'Before',
		value: '$lte',
	},
]

export const RANGE_DATE_OPTIONS = [
	{
		label: 'Between',
		value: '$between',
	},
	{
		label: 'Not between',
		value: '$notin',
	},
]

export const IS_NULL_OPTIONS = [
	{
		label: 'Exists',
		value: '$notnull',
	},
	{
		label: 'Not Exist',
		value: '$isnull',
	},
]
