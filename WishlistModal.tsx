'use client'

import { X, Heart, ShoppingCart, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useWishlist } from '@/contexts/WishlistContext'
import { useCart } from '@/contexts/CartContext'
import Price from './Price'
import Badge from './Badge'

export default function WishlistModal() {
  const { state, removeItem, toggleWishlist } = useWishlist()
  const { addItem } = useCart()

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      title: item.title,
      price: item.price,
      currency: item.currency,
      image: item.image,
      slug: item.slug
    })
  }

  if (!state.isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={toggleWishlist}
      />
      
      {/* Modal */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-paper shadow-xl transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-ink flex items-center">
              <Heart className="h-5 w-5 mr-2 text-red-500" />
              Избранное ({state.items.length})
            </h2>
            <button
              onClick={toggleWishlist}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Избранное пусто</h3>
                <p className="text-gray-500 mb-6">Добавьте товары в избранное, чтобы они сохранились здесь</p>
                <Link 
                  href="/catalog"
                  onClick={toggleWishlist}
                  className="btn btn-primary"
                >
                  Перейти в каталог
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    {/* Image */}
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <Link 
                        href={`/catalog/${item.slug}`}
                        onClick={toggleWishlist}
                        className="block"
                      >
                        <h3 className="font-medium text-ink text-sm line-clamp-2 hover:text-gold transition-colors">
                          {item.title}
                        </h3>
                      </Link>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant={item.condition === 'Mint' ? 'exclusive' : 'signed'}>
                          {item.condition}
                        </Badge>
                        <Price price={item.price} currency={item.currency} />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col space-y-2">
                      <button
                        onClick={() => handleAddToCart(item)}
                        disabled={item.status === 'SOLD'}
                        className={`p-2 rounded-full transition-colors ${
                          item.status === 'SOLD'
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gold text-ink hover:bg-gold/90'
                        }`}
                        title="Добавить в корзину"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                        title="Удалить из избранного"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t border-gray-200 p-6">
              <Link
                href="/catalog"
                onClick={toggleWishlist}
                className="btn btn-primary w-full"
              >
                Продолжить покупки
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
