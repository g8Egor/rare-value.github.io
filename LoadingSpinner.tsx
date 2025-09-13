'use client'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className="w-full h-full border-4 border-gray-200 border-t-gold rounded-full"></div>
      </div>
    </div>
  )
}

// Skeleton для карточек товаров
export function ProductCardSkeleton() {
  return (
    <div className="card p-4 h-full flex flex-col animate-pulse">
      {/* Image skeleton */}
      <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
      
      {/* Content skeleton */}
      <div className="flex-1 flex flex-col">
        {/* Title skeleton */}
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
        
        {/* Year and Serial skeleton */}
        <div className="flex justify-between mb-2">
          <div className="h-3 bg-gray-200 rounded w-12"></div>
          <div className="h-3 bg-gray-200 rounded w-16"></div>
        </div>
        
        {/* Condition skeleton */}
        <div className="h-3 bg-gray-200 rounded mb-3"></div>
        
        {/* Badges skeleton */}
        <div className="flex gap-1 mb-3">
          <div className="h-5 bg-gray-200 rounded w-16"></div>
          <div className="h-5 bg-gray-200 rounded w-20"></div>
        </div>
        
        {/* Price and buttons skeleton */}
        <div className="mt-auto">
          <div className="h-6 bg-gray-200 rounded mb-3 w-24"></div>
          <div className="flex space-x-2">
            <div className="flex-1 h-8 bg-gray-200 rounded"></div>
            <div className="w-8 h-8 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Skeleton для списка товаров
export function ProductListSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  )
}
