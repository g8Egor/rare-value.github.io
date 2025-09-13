interface BadgeProps {
  children: React.ReactNode
  variant?: 'exclusive' | 'signed' | 'sold' | 'preorder'
  className?: string
}

export default function Badge({ children, variant = 'exclusive', className = '' }: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium'
  
  const variantClasses = {
    exclusive: 'bg-gold text-ink',
    signed: 'bg-accent text-paper',
    sold: 'bg-gray-500 text-paper',
    preorder: 'bg-blue-500 text-paper'
  }

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}
