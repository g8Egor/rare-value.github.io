import productsData from '@/data/products.json'

export interface Product {
  id: string
  slug: string
  title: string
  category: 'vinyl' | 'comics' | 'figurine' | 'poster' | 'cards'
  series: string
  year: number
  publisherOrLabel: string
  condition: 'Mint' | 'Near Mint' | 'Very Good' | 'Good'
  description: string
  price: number
  currency: string
  stock: number
  isUnique: boolean
  editionSize: number
  serialNumber: string
  hasCoA: boolean
  status: 'AVAILABLE' | 'PREORDER' | 'SOLD'
  images: string[]
  badges: string[]
}

export function getProducts(): Product[] {
  return productsData as Product[]
}

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find(product => product.slug === slug) as Product | undefined
}

export function getProductsByCategory(category: string): Product[] {
  return productsData.filter(product => product.category === category) as Product[]
}

export function getFeaturedProducts(limit: number = 6): Product[] {
  return productsData.slice(0, limit) as Product[]
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return productsData.filter(product => 
    product.title.toLowerCase().includes(lowercaseQuery) ||
    product.series.toLowerCase().includes(lowercaseQuery) ||
    product.publisherOrLabel.toLowerCase().includes(lowercaseQuery)
  ) as Product[]
}

export function filterProducts(filters: {
  category?: string
  condition?: string
  status?: string
  minPrice?: number
  maxPrice?: number
  year?: number
}): Product[] {
  return productsData.filter(product => {
    if (filters.category && product.category !== filters.category) return false
    if (filters.condition && product.condition !== filters.condition) return false
    if (filters.status && product.status !== filters.status) return false
    if (filters.minPrice && product.price < filters.minPrice) return false
    if (filters.maxPrice && product.price > filters.maxPrice) return false
    if (filters.year && product.year !== filters.year) return false
    return true
  }) as Product[]
}
