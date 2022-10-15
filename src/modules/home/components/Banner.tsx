import { useGetTopArticlesQuery } from 'modules/article/api/read'
import { FC } from 'react'
import LandingSlider from './RenderCarousel'
import { Container } from './styles'

interface IProps {
	title?: string
	image?: string
}
const Banner: FC<IProps> = ({ title, image }) => {
	const { data: response } = useGetTopArticlesQuery()

	// console.log('firstName', data?.data)

	return (
		<Container>
			<img src={image} />
			<div className="title">{response?.data && <LandingSlider articles={response?.data} />}</div>
		</Container>
	)
}

export default Banner
