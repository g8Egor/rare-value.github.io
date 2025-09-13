'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Filters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    category: true,
    condition: true,
    status: true,
    price: true,
  })

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`/catalog?${params.toString()}`)
  }

  const clearFilters = () => {
    router.push('/catalog')
  }

  const FilterSection = ({ title, section, children }: {
    title: string
    section: string
    children: React.ReactNode
  }) => (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <button
        onClick={() => toggleSection(section)}
        className="flex items-center justify-between w-full text-left font-medium text-ink mb-3"
      >
        {title}
        {openSections[section] ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      {openSections[section] && children}
    </div>
  )

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-ink">Фильтры</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-gold hover:text-accent"
        >
          Очистить все
        </button>
      </div>

      <FilterSection title="Категория" section="category">
        <div className="space-y-2">
          {[
            { value: 'vinyl', label: 'Винил' },
            { value: 'comics', label: 'Комиксы' },
            { value: 'figurine', label: 'Фигурки' },
            { value: 'poster', label: 'Постеры' },
            { value: 'cards', label: 'Карты' },
          ].map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={option.value}
                checked={searchParams.get('category') === option.value}
                onChange={(e) => updateFilter('category', e.target.checked ? option.value : '')}
                className="mr-2"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Состояние" section="condition">
        <div className="space-y-2">
          {[
            { value: 'Mint', label: 'Идеальное' },
            { value: 'Near Mint', label: 'Почти идеальное' },
            { value: 'Very Good', label: 'Очень хорошее' },
            { value: 'Good', label: 'Хорошее' },
          ].map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="radio"
                name="condition"
                value={option.value}
                checked={searchParams.get('condition') === option.value}
                onChange={(e) => updateFilter('condition', e.target.checked ? option.value : '')}
                className="mr-2"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Наличие" section="status">
        <div className="space-y-2">
          {[
            { value: 'AVAILABLE', label: 'В наличии' },
            { value: 'PREORDER', label: 'Предзаказ' },
            { value: 'SOLD', label: 'Продано' },
          ].map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="radio"
                name="status"
                value={option.value}
                checked={searchParams.get('status') === option.value}
                onChange={(e) => updateFilter('status', e.target.checked ? option.value : '')}
                className="mr-2"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Цена" section="price">
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-gray-600 mb-1">От</label>
            <input
              type="number"
              placeholder="0"
              value={searchParams.get('minPrice') || ''}
              onChange={(e) => updateFilter('minPrice', e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">До</label>
            <input
              type="number"
              placeholder="1000000"
              value={searchParams.get('maxPrice') || ''}
              onChange={(e) => updateFilter('maxPrice', e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Год" section="year">
        <div>
          <input
            type="number"
            placeholder="Например: 1970"
            value={searchParams.get('year') || ''}
            onChange={(e) => updateFilter('year', e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </div>
      </FilterSection>
    </div>
  )
}
