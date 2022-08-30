import { FC } from 'react'
import { Div } from './styles'

interface IProps {
	title?: string
	image?: string
}
const Banner: FC<IProps> = ({ title, image }) => {
	return (
		<Div>
			<img src={image} />
			<div className="title">{title}</div>
		</Div>
	)
}

export default Banner
