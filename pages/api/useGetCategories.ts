import useSWR from 'swr'

export function useGetCategories() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json())

  const { data, error } = useSWR<Category[], string>(
    `${process.env.API_URL}/api/categories`,
    fetcher,
    { revalidateOnFocus: false }
    )

    return {
      categories: data,
      isError: !!error,
      isLoading: !error && !data
    }
}
