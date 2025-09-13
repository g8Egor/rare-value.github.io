'use client'

import { createContext, useContext, useReducer, useEffect } from 'react'

export interface WishlistItem {
  id: string
  title: string
  price: number
  currency: string
  image: string
  slug: string
  condition: 'Mint' | 'Near Mint' | 'Very Good' | 'Good'
  status: 'AVAILABLE' | 'PREORDER' | 'SOLD'
}

interface WishlistState {
  items: WishlistItem[]
  isOpen: boolean
}

type WishlistAction =
  | { type: 'ADD_ITEM'; payload: WishlistItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'TOGGLE_WISHLIST' }
  | { type: 'LOAD_WISHLIST'; payload: WishlistItem[] }

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        return state // Item already in wishlist
      }
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    case 'TOGGLE_WISHLIST':
      return {
        ...state,
        isOpen: !state.isOpen
      }
    case 'LOAD_WISHLIST':
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}

const WishlistContext = createContext<{
  state: WishlistState
  addItem: (item: WishlistItem) => void
  removeItem: (id: string) => void
  toggleWishlist: () => void
  isInWishlist: (id: string) => boolean
} | null>(null)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, {
    items: [],
    isOpen: false
  })

  // Load wishlist from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedWishlist = localStorage.getItem('rare-vault-wishlist')
      if (savedWishlist) {
        try {
          const wishlistItems = JSON.parse(savedWishlist)
          dispatch({ type: 'LOAD_WISHLIST', payload: wishlistItems })
        } catch (error) {
          console.error('Error loading wishlist from localStorage:', error)
        }
      }
    }
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('rare-vault-wishlist', JSON.stringify(state.items))
    }
  }, [state.items])

  const addItem = (item: WishlistItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
    // Trigger custom event for toast notifications
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('wishlist-item-added', { 
        detail: { item } 
      }))
    }
  }

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const toggleWishlist = () => {
    dispatch({ type: 'TOGGLE_WISHLIST' })
  }

  const isInWishlist = (id: string) => {
    return state.items.some(item => item.id === id)
  }

  return (
    <WishlistContext.Provider value={{
      state,
      addItem,
      removeItem,
      toggleWishlist,
      isInWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}
