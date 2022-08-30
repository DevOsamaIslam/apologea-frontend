import { IFilter } from '../filters'

export interface IGetQueryParams {
	page: number
	limit: number
	filters: IFilter[]
}

export interface IBaseApiResponse<T = {}> {
	count: number
	page: number
	pageCount: number
	total: number
	data: T[]
}

export type $ResponseRow<T = {}> = T & {
	id: string
	updatedAt: string
	updatedBy: string
	createdAt: string
	createdBy: string
	deletedAt: string | null
	deletedBy: string
}
