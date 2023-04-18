export function average(values: number[]) {
  const total = values?.reduce((acc, value) => acc + value, 0)
  return total / values?.length
}
