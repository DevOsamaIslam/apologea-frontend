import { DATE_FORMAT } from '@lib/constants/date'
import {
  format,
  parseISO,
  differenceInDays,
  addDays,
  subDays,
  isBefore,
  isAfter,
} from 'date-fns'

/**
 * Formats a date into a readable string.
 * @param date - The date to format (string | Date).
 * @param dateFormat - The desired format (default: 'yyyy-MM-dd').
 * @returns Formatted date string.
 */
export const formatDate = (
  date: string | Date,
  dateFormat = DATE_FORMAT,
): string => {
  return format(typeof date === 'string' ? parseISO(date) : date, dateFormat)
}

/**
 * Calculates the difference in days between two dates.
 * @param startDate - The start date.
 * @param endDate - The end date.
 * @returns Number of days between the two dates.
 */
export const daysBetween = (
  startDate: string | Date,
  endDate: string | Date,
): number => {
  return differenceInDays(new Date(endDate), new Date(startDate))
}

/**
 * Adds days to a given date.
 * @param date - The base date.
 * @param days - Number of days to add.
 * @returns The new date.
 */
export const addDaysToDate = (date: string | Date, days: number): Date => {
  return addDays(new Date(date), days)
}

/**
 * Subtracts days from a given date.
 * @param date - The base date.
 * @param days - Number of days to subtract.
 * @returns The new date.
 */
export const subtractDaysFromDate = (
  date: string | Date,
  days: number,
): Date => {
  return subDays(new Date(date), days)
}

/**
 * Checks if the first date is before the second date.
 * @param date1 - First date.
 * @param date2 - Second date.
 * @returns True if date1 is before date2, otherwise false.
 */
export const isDateBefore = (
  date1: string | Date,
  date2: string | Date,
): boolean => {
  return isBefore(new Date(date1), new Date(date2))
}

/**
 * Checks if the first date is after the second date.
 * @param date1 - First date.
 * @param date2 - Second date.
 * @returns True if date1 is after date2, otherwise false.
 */
export const isDateAfter = (
  date1: string | Date,
  date2: string | Date,
): boolean => {
  return isAfter(new Date(date1), new Date(date2))
}
