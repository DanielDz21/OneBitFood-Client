export function truncateString(value: string, length: number) {
  return value.length > length ? value.slice(0, length) + '...' : value
}
