import { APP_NAME } from 'app/settings'
import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

const MHelmet: FC<{ pageName: string }> = ({ pageName }) => {
	return (
		<Helmet>
			<title>
				{pageName} | {APP_NAME}
			</title>
		</Helmet>
	)
}

export default MHelmet
