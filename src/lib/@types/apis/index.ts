export interface IPaging {
	page?: number
	limit?: number
}

export interface IGetQueryParams {
	paging?: IPaging
	filters: Object
	sort: { [x: string]: number }
}

export type feedbackType = 'success' | 'error' | 'warning'
export interface IFeedback {
	type: feedbackType
	message: string
}

export interface IBaseApiResponse<T = null> {
	status: number
	data: T | undefined
	feedback: IFeedback
}
