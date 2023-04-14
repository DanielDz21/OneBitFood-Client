import { toCurrency } from '@/services/toCurrency'
import { truncateString } from '@/services/truncateString'
import Image from 'next/image'
import { Card, Col, Row } from 'react-bootstrap'

export function CategoryProducts({ title, products }: ProductCategory) {
  return (
    <>
      <h5 className='fw-bold'>{title}</h5>
      <Row>
        {products.map((product, i) => (
          <Col md={4} sm={12} key={i}>
            <Card className='mb-4 clickable_effect'>
              <Row className='my-3 mx-1'>
                <Col md={6} xs={{ span: 12, order: 2 }}>
                  <p className='fw-bold mb-0'>{product.name}</p>
                  <p>
                    <small>{truncateString(product.description, 80)}</small>
                  </p>
                  <small className='border px-3 border-custom-gray fw-bold'>
                    {toCurrency(product.price)}
                  </small>
                </Col>

                <Col md={6} xs={{ span: 12, order: 1 }}>
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    width={300}
                    height={200}
                    className='px-1 clickable_effect responsive-image'
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
