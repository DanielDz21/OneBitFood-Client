type ProductCategory = {
  id: number
  title: string
  products: Product[]
}

type Restaurant = {
  id: number
  image_url: string
  name: string
  description: string
  category_title: string
  delivery_tax: string
  ratings: number[]
  product_categories: ProductCategory[]
}
