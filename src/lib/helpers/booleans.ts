export const bool2string = (
	bool: boolean | null | undefined,
	trueLabel: string,
	falseLabel: string
): string => {
	return bool ? trueLabel : falseLabel
}

export const string2bool = (str: string, trueLabel: string): boolean => {
	return str.toLowerCase() === trueLabel.toLowerCase()
}
