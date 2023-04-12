import { useRouter } from 'next/router'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

export function SearchBox() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  function search(event: React.FormEvent) {
    event.preventDefault();
    router.push(`/restaurants?q=${query}`)
  }

  return (
    <Form className='d-flex mx-5 my-2' onSubmit={(e) => search(e)}>
      <Form.Control
        type='text'
        placeholder='Buscar restaurantes...'
        className='me-2'
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
      <Button variant='btn btn-outline custom-red' type='submit'>
        <FaSearch />
      </Button>
    </Form>
  )
}
