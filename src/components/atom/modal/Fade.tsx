// web.cjs is required for IE11 support
import { forwardRef } from 'react'
import { useSpring, animated } from 'react-spring'

interface FadeProps {
	children?: React.ReactElement
	in: boolean
	onEnter?: () => {}
	onExited?: () => {}
}
const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
	const { in: open, children, onEnter, onExited, ...other } = props
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter()
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited()
			}
		},
	})

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	)
})

export default Fade
