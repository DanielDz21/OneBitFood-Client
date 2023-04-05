import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { slickSettings } from './slick_settings'

import { Card, Spinner, Alert } from 'react-bootstrap'
import { Category } from './Category'
import { useGetCategories } from '@/pages/api/useGetCategories'


export function Categories() {
    const { categories, isError, isLoading } = useGetCategories()

  return (
    <>
      <h3 className='fw=bold'>Categorias</h3>

      {isLoading && <Spinner animation='border' />}
      {isError && (
        <Alert variant='custom-red'>
          Erro inesperado ao carregar, tente novamente.
        </Alert>
      )}

      <Card className='mt-2'>
        <Slider {...slickSettings} className='px-4 pt-4 text-center'>
          {categories?.map((category, i) => (
            <Category {...category} key={i} />
          ))}
        </Slider>
      </Card>
    </>
  )
}
