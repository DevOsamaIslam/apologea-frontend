export const logger: Console = {
	assert: (condition?: boolean | undefined, ...data: any[]): NodeJS.Timeout => setTimeout(() => console.assert(condition, ...data), 0)
	,
	clear: (): NodeJS.Timeout => setTimeout(() => console.clear(), 0)
	,
	count: (label?: string | undefined): NodeJS.Timeout => setTimeout(() => console.count(label), 0)
	,
	countReset: (label?: string | undefined): NodeJS.Timeout => setTimeout(() => console.countReset(label), 0)
	,
	debug: (...data: any[]): NodeJS.Timeout => setTimeout(() => console.debug(...data), 0),

	dir: (item?: any, options?: any): NodeJS.Timeout => setTimeout(() => console.dir(item, options), 0)
	,
	dirxml: (...data: any[]): NodeJS.Timeout => setTimeout(() => console.dirxml(...data), 0)
	,
	error: (...data: any[]): NodeJS.Timeout => setTimeout(() => console.error(...data), 0)
	,
	group: (...data: any[]): NodeJS.Timeout => setTimeout(() => console.group(...data), 0)
	,
	groupCollapsed: (...data: any[]): NodeJS.Timeout => setTimeout(() => console.groupCollapsed(...data), 0)
	,
	groupEnd: (): NodeJS.Timeout => setTimeout(() => console.groupEnd(), 0)
	,
	info: (...data: any[]): NodeJS.Timeout => setTimeout(() => console.info(...data), 0)
	,
	log: (...data: any[]): NodeJS.Timeout => setTimeout(() => console.log(...data), 0)
	,
	table: (tabularData?: any, properties?: string[] | undefined): NodeJS.Timeout => setTimeout(() => console.table(tabularData, properties), 0)
	,
	time: (label?: string | undefined): NodeJS.Timeout => setTimeout(() => console.time(label), 0)
	,
	timeEnd: (label?: string | undefined): NodeJS.Timeout => setTimeout(() => console.timeEnd(label), 0)
	,
	timeLog: (label?: string | undefined, ...data: any[]): NodeJS.Timeout => setTimeout(() => console.timeLog(label, ...data), 0)
	,
	timeStamp: (label?: string | undefined): NodeJS.Timeout => setTimeout(() => console.timeStamp(label), 0)
	,
	trace: (...data: any[]): NodeJS.Timeout => setTimeout(() => console.trace(...data), 0)
	,
	warn: (...data: any[]): NodeJS.Timeout => setTimeout(() => console.warn(...data), 0)
	,
	profile: (label?: string | undefined): NodeJS.Timeout => setTimeout(() => console.profile(label), 0)
	,
	profileEnd: (label?: string | undefined): NodeJS.Timeout => setTimeout(() => console.profileEnd(label), 0)
	,
	Console: console.Console,
}