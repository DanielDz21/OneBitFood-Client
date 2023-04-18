import { useRouter } from 'next/router'
import { CategoryProducts } from './CateogoryProducts'
import { Details } from './Details'
import { useGetRestaurant } from '@/pages/api/useGetRestaurant'
import { Alert, Spinner } from 'react-bootstrap'

export function DetailsRestaurant() {
  const router = useRouter()
  const { id } = router.query
  const { restaurant, isLoading, isError } = useGetRestaurant(id as string)

  return (
    <>
      {isLoading && <Spinner animation='border' />}
      {isError && <Alert variant='custom-red'> Erro inesperado ao carregar, tente novamente. </Alert>}

      <Details {...restaurant as Restaurant} />

      {restaurant?.product_categories.map((product_category, i) =>
        <CategoryProducts {...product_category} key={i} />
      )}
    </>
  )
}
