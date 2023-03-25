import { Typewriter } from '@/components/Typewriter';
import Link from 'next/link';
import { Button, Col, Row } from 'react-bootstrap';
import { FaCrosshairs } from 'react-icons/fa';

export default function Home() {
  return (
    <Row className="mt-8 justify-content-center">
      <Col md={7} xs={12} className="text-center">
        <h1 className="fw-bolder text-custom-gray-darker mb-5 lh-base display-5">
          <Typewriter
            displayText="Comida saudável e gostosa direto na sua casa"
            timeoutValue={75}
          />
        </h1>

        <Link href="/restaurants">
          <Button variant="custom-red" size="lg" className="text-white">
            <FaCrosshairs className="pb-1" />
            <span className="px-2 fw-bolder">ENCONTRAR RESTAURANTES</span>
          </Button>
        </Link>
      </Col>
    </Row>
  );
}
