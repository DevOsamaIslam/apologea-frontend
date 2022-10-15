import { FC } from 'react'
import { Container } from './styles'

interface IProps {
	title?: string
	image?: string
}
const Banner: FC<IProps> = ({ title, image }) => {
	return (
		<Container>
			<img src={image} />
			<div className="title">{title}</div>
		</Container>
	)
}

export default Banner
