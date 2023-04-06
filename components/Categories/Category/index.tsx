import Image from 'next/image'
import Link from 'next/link'

export function Category({ title, image_url }: Category) {
  return (
    <div className=''>
      <Link href={`/restaurants?category=${title}`} className='no-link-style'>
        <Image
          src={image_url}
          alt={title}
          width={300}
          height={200}
          className='px-1 clickable_effect responsive-image'
        />
      </Link>

      <p className='fw-bold'>{title}</p>
    </div>
  )
}
