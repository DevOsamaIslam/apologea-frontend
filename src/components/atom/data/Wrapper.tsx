import React, { FC } from 'react'

interface IProps {
	mustBeTruthy: any
	displayEmpty?: boolean | string | React.ReactNode
	children: React.ReactNode
}

const Wrapper: FC<IProps> = ({
	mustBeTruthy,
	children,
	displayEmpty = false,
}) => {
	if (displayEmpty && typeof displayEmpty === 'boolean')
		displayEmpty = 'No Data'
	if (
		!mustBeTruthy ||
		(typeof mustBeTruthy === 'object' && !Object.keys(mustBeTruthy).length)
	) {
		return displayEmpty ? <>Nothing was found</> : null
	}
	if (Array.isArray(mustBeTruthy) && mustBeTruthy.length === 0)
		return displayEmpty ? <>No data</> : <></>
	return <>{children}</>
}

export default Wrapper
