import useSWR from 'swr'

export function useGetRestaurant(id: string) {
  const fetcher = (url: string) => fetch(url).then((r) => r.json())

  const { data, error } = useSWR<Restaurant, string>( id ? `${process.env.API_URL}/api/restaurants/${id}` : null,
    fetcher,
    { revalidateOnFocus: false }
    )

    return {
      restaurant: data,
      isError: !!error,
      isLoading: !error && !data
    }
}
