import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-ink mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-ink mb-4">Страница не найдена</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          К сожалению, запрашиваемая страница не существует или была перемещена.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn btn-primary">
            <Home className="h-4 w-4 mr-2" />
            На главную
          </Link>
          <Link href="/catalog" className="btn btn-secondary">
            <Search className="h-4 w-4 mr-2" />
            В каталог
          </Link>
        </div>
      </div>
    </div>
  )
}
