export interface IArticle {
	id: string
	title: string
	body: string
	excerpt?: string
	author: string
	responseTo?: string
	responses: string[]
	likes?: string[]
	affirms?: string[]
	comments: IComment[]
	visible?: boolean
	error?: Error
}

export interface IComment {
	id: string
	contents: string
	author: string
}
