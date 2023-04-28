import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { truncateString } from '@/services/truncateString'
import { toCurrency } from '@/services/toCurrency'
import { getAverageRating } from '@/services/getAverageRating'

export function Restaurant({ slug, image_url, name, description, category_title, delivery_tax, ratings }: Restaurant) {
  return (
    <Col lg={6} sm={6} xs={12} className='mb-4'>
      <Link href={`restaurants/${slug}`} className='no-link-style'>
        <Card body className='clickable_effect'>
          <Row>
            <Col md={5} xs={12}>
              <Image
                src={image_url}
                alt={name}
                width={300}
                height={200}
                className='responsive-image'
              />
            </Col>
            <Col md={5} xs={10}>
              <h5>{truncateString(name, 25)}</h5>
              <p className='mb-1'>
                <small> {truncateString(description, 60)} </small>
              </p>
              <p>
                <small className='fw-bold'>{category_title}</small>
              </p>
              <small className='border px-3 border-custom-gray fw-bold'>
                entrega {toCurrency(delivery_tax)}
              </small>
            </Col>
            <Col md={2} xs={2} className='text-center'>
              <span className='text-custom-orange'>
                <FaStar /> {getAverageRating(ratings)}
              </span>
            </Col>
          </Row>
        </Card>
      </Link>
    </Col>
  )
}
