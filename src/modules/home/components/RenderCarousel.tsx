import { Breadcrumbs, Button, Stack, Typography } from '@mui/material'
import { IArticle } from 'modules/article/control/types'
import { FC } from 'react'
import Carousel from 'react-material-ui-carousel'

interface IProps {
	articles: IArticle[]
}
const LandingSlider: FC<IProps> = ({ articles }) => {
	return (
		<Carousel navButtonsAlwaysInvisible animation="slide" indicators>
			{articles.map((article, i) => (
				<Stack
					direction={'column'}
					spacing={4}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						height: '75vh',
						maxWidth: '950px',
						margin: '0 auto',
						position: 'relative',
						zIndex: 10,
						minHeight: '445px',
					}}
				>
					<Typography
						variant="h1"
						color="white"
						sx={{
							lineHeight: 1.2,
							textShadow: ` 1px 1px 1px #000`,
						}}
						textAlign="center"
					>
						{article.title}
					</Typography>
					<Breadcrumbs>
						<Typography color={'white'} variant="h5">
							By {article.author?.profile.name}
						</Typography>
						<Typography color={'white'} variant="h5">
							{article.likes.length} likes
						</Typography>
						<Typography color={'white'} variant="h5">
							{article.comments?.length || 0} comments
						</Typography>
					</Breadcrumbs>
					<Button variant="contained" size="large" sx={{ color: 'white', px: 4 }} color="secondary">
						Read on
					</Button>
					<Typography
						variant="h1"
						color={'primary.main'}
						sx={{
							fontSize: '40rem',
							position: 'absolute',
							zIndex: -1,
							pt: '110px',
							lineHeight: 1.2,
							top: '50%',
							left: '50%',
							transform: 'translate(-50%,-50%)',
						}}
					>
						{article?.title[0]}
					</Typography>
				</Stack>
			))}
		</Carousel>
	)
}

export default LandingSlider
