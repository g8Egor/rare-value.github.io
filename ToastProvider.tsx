'use client'

import { useEffect } from 'react'
import { useToast } from '@/hooks/useToast'
import { ToastContainer } from './Toast'

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  const { toasts, removeToast, showSuccess } = useToast()

  useEffect(() => {
    const handleCartItemAdded = (event: CustomEvent) => {
      const { item } = event.detail
      showSuccess(
        'Товар добавлен в корзину!',
        `${item.title} успешно добавлен в корзину`
      )
    }

    const handleWishlistItemAdded = (event: CustomEvent) => {
      const { item } = event.detail
      showSuccess(
        'Товар добавлен в избранное!',
        `${item.title} добавлен в избранное`
      )
    }

    window.addEventListener('cart-item-added', handleCartItemAdded as EventListener)
    window.addEventListener('wishlist-item-added', handleWishlistItemAdded as EventListener)
    
    return () => {
      window.removeEventListener('cart-item-added', handleCartItemAdded as EventListener)
      window.removeEventListener('wishlist-item-added', handleWishlistItemAdded as EventListener)
    }
  }, [showSuccess])

  return (
    <>
      {children}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </>
  )
}
