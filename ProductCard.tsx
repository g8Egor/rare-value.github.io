'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Eye, Heart } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { useWishlist } from '@/contexts/WishlistContext'
import Badge from './Badge'
import Price from './Price'
import ConditionMeter from './ConditionMeter'

interface Product {
  id: string
  slug: string
  title: string
  price: number
  currency: string
  condition: 'Mint' | 'Near Mint' | 'Very Good' | 'Good'
  status: 'AVAILABLE' | 'PREORDER' | 'SOLD'
  images: string[]
  badges: string[]
  serialNumber: string
  year: number
  category: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const { addItem: addToWishlist, isInWishlist } = useWishlist()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (product.status === 'SOLD') return

    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      currency: product.currency,
      image: product.images[0],
      slug: product.slug
    })
  }

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    addToWishlist({
      id: product.id,
      title: product.title,
      price: product.price,
      currency: product.currency,
      image: product.images[0],
      slug: product.slug,
      condition: product.condition,
      status: product.status
    })
  }

  const getStatusBadge = () => {
    switch (product.status) {
      case 'SOLD':
        return <Badge variant="sold">Продано</Badge>
      case 'PREORDER':
        return <Badge variant="preorder">Предзаказ</Badge>
      default:
        return null
    }
  }

  return (
    <Link href={`/catalog/${product.slug}`} className="group">
      <div className="card p-4 h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-1">
        {/* Status overlay */}
        {product.status === 'SOLD' && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <span className="text-paper text-xl font-bold">ПРОДАНО</span>
          </div>
        )}

        {/* Image */}
        <div className="relative aspect-square mb-4 overflow-hidden rounded-lg group-hover:rounded-xl transition-all duration-300">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Title */}
          <h3 className="font-semibold text-ink text-sm mb-2 line-clamp-2 group-hover:text-gold transition-colors">
            {product.title}
          </h3>

          {/* Year and Serial */}
          <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
            <span>{product.year}</span>
            <span>{product.serialNumber}</span>
          </div>

          {/* Condition */}
          <ConditionMeter condition={product.condition} className="mb-3" />

          {/* Badges */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.badges.map((badge) => (
              <Badge key={badge} variant={badge === 'EXCLUSIVE' ? 'exclusive' : 'signed'}>
                {badge === 'EXCLUSIVE' ? 'ЭКСКЛЮЗИВ' : 'ПОДПИСАНО'}
              </Badge>
            ))}
            {getStatusBadge()}
          </div>

          {/* Price and Actions */}
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-3">
              <Price price={product.price} currency={product.currency} />
            </div>

            <div className="flex space-x-2">
              <button
                onClick={handleAddToCart}
                disabled={product.status === 'SOLD'}
                className={`flex-1 btn btn-primary text-sm py-2 transition-all duration-200 ${
                  product.status === 'SOLD' 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-opacity-90 hover:scale-105 active:scale-95'
                }`}
              >
                <ShoppingCart className="h-4 w-4 mr-1 transition-transform duration-200 group-hover:rotate-12" />
                {product.status === 'SOLD' ? 'Продано' : 'В корзину'}
              </button>
              
              <button 
                onClick={handleAddToWishlist}
                className={`btn p-2 transition-all duration-200 hover:scale-110 active:scale-95 ${
                  isInWishlist(product.id)
                    ? 'bg-red-50 text-red-500 hover:bg-red-100'
                    : 'btn-secondary group-hover:bg-gold group-hover:text-ink'
                }`}
                title={isInWishlist(product.id) ? 'В избранном' : 'Добавить в избранное'}
              >
                <Heart className={`h-4 w-4 transition-all duration-200 ${
                  isInWishlist(product.id) ? 'fill-current' : 'group-hover:scale-110'
                }`} />
              </button>
              
              <button className="btn btn-secondary p-2 transition-all duration-200 hover:scale-110 active:scale-95 group-hover:bg-gold group-hover:text-ink">
                <Eye className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
