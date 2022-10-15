export const pathJoiner = (...paths: string[]) => {
	const newPath: string[] = []
	paths.filter(Boolean).forEach((path) => {
		if (path[0] === '/') path = path.slice(1, path.length)
		if (path.at(-1) === '/') path = path.slice(0, path.length - 1)
		newPath.push(path)
	})
	// if the path starts with 'http' or a forward slash then don't put a forward slash before it
	if (newPath[0].startsWith('http') || newPath[0].startsWith('/')) {
		return newPath.join('/')
	} else return '/' + newPath.join('/')
}
