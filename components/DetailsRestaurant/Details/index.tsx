import { getAverageRating } from '@/services/getAverageRating'
import { toCurrency } from '@/services/toCurrency'
import Image from 'next/image'
import { Card, Col, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'

export function Details({ image_url, name, description, category_title, delivery_tax, ratings }: Restaurant) {
  return (
    <>
      <h3 className='fw-bold'>{name}</h3>
      <Card className='mt-2 mb-4'>
        <Row className='my-3 mx-1'>
          <Col md={3}>
            <Image
              src={image_url}
              alt={name}
              width={300}
              height={200}
              className='px-1 clickable_effect responsive-image'
            />
          </Col>
          <Col md={9}>
            <p>
              <small>{description}</small>
            </p>
            <Row className='row-cols-auto'>
              <Col className='pr-0'>
                <small className='border px-3 border-custom-gray fw-bold'>
                  entrega {toCurrency(delivery_tax)}
                </small>
              </Col>
              <Col>
                <small className='fw-bold'>{category_title}</small>
              </Col>
              <Col>
                <span className='text-custom-orange'>
                  <FaStar /> {getAverageRating(ratings)}
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  )
}
