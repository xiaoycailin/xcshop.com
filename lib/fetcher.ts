export const fetcher = async <T = any>(input: string, init: RequestInit): Promise<T> => (await fetch(input, init)).json()
