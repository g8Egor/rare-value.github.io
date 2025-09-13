'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Menu, X, Heart } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { useWishlist } from '@/contexts/WishlistContext'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { state } = useCart()
  const { state: wishlistState, toggleWishlist } = useWishlist()
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)
  const wishlistCount = wishlistState.items.length

  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="RAREVAULT" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/catalog" className="text-ink hover:text-gold transition-colors">
              Каталог
            </Link>
            <Link href="/collections" className="text-ink hover:text-gold transition-colors">
              Коллекции
            </Link>
            <Link href="/about" className="text-ink hover:text-gold transition-colors">
              О нас
            </Link>
          </nav>

          {/* Wishlist and Cart */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <button
              onClick={toggleWishlist}
              className="relative flex items-center space-x-2 text-ink hover:text-gold transition-colors"
            >
              <Heart className="h-6 w-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-paper text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <Link href="/cart" className="relative flex items-center space-x-2 text-ink hover:text-gold transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-paper text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-ink hover:text-gold transition-colors"
            aria-label="Открыть меню"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/catalog" 
                className="text-ink hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Каталог
              </Link>
              <Link 
                href="/collections" 
                className="text-ink hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Коллекции
              </Link>
              <Link 
                href="/about" 
                className="text-ink hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                О нас
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
