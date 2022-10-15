export interface IArticle {
	id: string
	title: string
	body: string
	excerpt?: string
	author?: {
		_id: string
		profile: {
			name: string
		}
	}
	responseTo?: string
	responses: string[]
	likes: string[]
	affirms?: string[]
	comments: IComment[]
	visible?: boolean
}

export interface IComment {
	id: string
	contents: string
	author: string
}
