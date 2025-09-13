interface ConditionMeterProps {
  condition: 'Mint' | 'Near Mint' | 'Very Good' | 'Good'
  className?: string
}

export default function ConditionMeter({ condition, className = '' }: ConditionMeterProps) {
  const conditionLevels = {
    'Mint': { level: 4, color: 'bg-green-500', label: 'Идеальное' },
    'Near Mint': { level: 3, color: 'bg-yellow-500', label: 'Почти идеальное' },
    'Very Good': { level: 2, color: 'bg-orange-500', label: 'Очень хорошее' },
    'Good': { level: 1, color: 'bg-red-500', label: 'Хорошее' }
  }

  const { level, color, label } = conditionLevels[condition]

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="flex space-x-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i <= level ? color : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  )
}
