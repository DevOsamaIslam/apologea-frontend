export const formatUSD = (amount) => {
	if (!amount) return amount
	if (typeof amount === 'string') parseFloat(amount)
	if (isNaN(amount)) return undefined
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 2,
	}).format(amount as number)
}
