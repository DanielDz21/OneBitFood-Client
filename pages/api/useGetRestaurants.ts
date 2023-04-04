import useSWR from 'swr'

export function useGetRestaurants() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json())

  const { data, error } = useSWR<Restaurant[], string>(
    `${process.env.API_URL}/api/restaurants`,
    fetcher,
    { revalidateOnFocus: false }
    )

    return {
      restaurants: data,
      isError: !!error,
      isLoading: !error && !data
    }
}
