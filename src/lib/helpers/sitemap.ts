import { useAppSelector } from 'app/store/redux/hooks'
import { $MenuItem } from 'lib/@types/layout'

export const getSitemap = (): $MenuItem[] =>
	useAppSelector((state) => state['sitemap'])
