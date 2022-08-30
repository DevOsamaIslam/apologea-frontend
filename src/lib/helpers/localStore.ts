import { IUser } from 'lib/@types/user'

export const getUser = (): IUser | undefined =>
	localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user')!)
		: undefined

export const setUser = (user: Partial<IUser>) =>
	localStorage.setItem('user', JSON.stringify(user))

export const logout = () => localStorage.removeItem('user')

export const setItem = <T = {}>(key: string, value: T) =>
	localStorage.setItem(key, JSON.stringify(value))

export const getItem = <T = {}>(key: string) =>
	localStorage.getItem(key)
		? (JSON.parse(localStorage.getItem(key)!) as T)
		: undefined
