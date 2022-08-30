export async function asyncHandler<T, E = Error>(fn): Promise<[T, E]> {
	try {
		const result = await fn
		if (result?.error) throw new Error(result.error)
		return [result, null as unknown as E]
	} catch (error) {
		return [null as unknown as T, error as unknown as E]
	}
}
