import { Operators } from '@lib/constants/api'
import { z } from 'zod'

export type TBaseRow<T> = T & {
  createdAt: string
  updatedAt: string
}

export interface IBaseResponse<T = unknown> {
  payload: T
  statusCode: number
  feedback: {
    type: 'success' | 'warning' | 'error'
    message: string
  }
}

export interface IPaginatedResponse<T = unknown> {
  docs: TBaseRow<T>[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: null
  nextPage: null
}

export interface IFilter {
  labe?: string
  field: string
  operator: z.infer<typeof Operators>
  value: any
}

export interface IPopulate {
  path: string
  select?: string[]
}

export type TGetQueryParams = Partial<{
  fields: string[]
  sort: string
  limit: number
  filters: IFilter[]
  page: number
  populate: IPopulate[]
}>
