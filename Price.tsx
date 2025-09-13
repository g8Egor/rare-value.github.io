interface PriceProps {
  price: number
  currency: string
  className?: string
}

export default function Price({ price, currency, className = '' }: PriceProps) {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <span className={`font-semibold text-ink ${className}`}>
      {formatPrice(price, currency)}
    </span>
  )
}
