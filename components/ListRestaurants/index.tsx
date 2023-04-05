import { useGetRestaurants } from '@/pages/api/useGetRestaurants'
import { Alert, Row, Spinner } from 'react-bootstrap'
import { Restaurant } from './components/Restaurant'

export function ListRestaurants() {
  const { restaurants, isError, isLoading } = useGetRestaurants()

  return (
    <>
      <div className='mt-5'>
        <h3 className='fw-bold'>Restaurantes</h3>

        <Row>
          {isLoading && <Spinner animation='border' />}
          {isError && <Alert variant='custom-red'>Erro inesperado ao carregar, tente novamente.</Alert>}


          {restaurants?.map((restaurant, i) => <Restaurant key={i} {...restaurant} /> )}
        </Row>
      </div>
    </>
  )
}
