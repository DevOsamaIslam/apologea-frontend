import LinearProgress from '@mui/material/LinearProgress'
import { FC, PropsWithChildren, ReactNode, Suspense } from 'react'

interface IProps extends PropsWithChildren {
	className?: string
	fallback?: ReactNode
}
const Lazy: FC<IProps> = ({ children, className, fallback }) => {
	children = className ? <div className={className}>{children}</div> : children
	return (
		<Suspense fallback={fallback || <LinearProgress sx={{ width: '100%' }} />}>
			{children}
		</Suspense>
	)
}

export default Lazy
