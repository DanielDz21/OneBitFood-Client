import Image from 'next/image'
import { Navbar } from 'react-bootstrap'
import { SearchBox } from '../SearchBox'

export function Header() {
  return (
    <Navbar bg='white' expand='lg' className='border-bottom border-custom-gray'>
      <Navbar.Brand href='/restaurants' className='mx-3'>
        <Image src='/logo.png'
          alt='OneBitFood'
          width={200}
          height={44}
          className='clickable_effect'
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
        <SearchBox />
      </Navbar.Collapse>
    </Navbar>
  )
}
