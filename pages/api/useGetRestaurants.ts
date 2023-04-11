import { useRouter } from 'next/router'
import useSWR from 'swr'

export function useGetRestaurants() {
  const router = useRouter()
  const { category } = router.query

  let params = ''
  if (category) {
    params = `${params == '' ? '?' : '&'}category=${category}`
  }

  const fetcher = (url: string) => fetch(url).then((r) => r.json())

  const { data, error } = useSWR<Restaurant[], string>(
    `${process.env.API_URL}/api/restaurants${params}`,
    fetcher,
    { revalidateOnFocus: false }
    )

    return {
      restaurants: data,
      isError: !!error,
      isLoading: !error && !data
    }
}
