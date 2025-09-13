import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink text-paper py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src="/logo.svg" alt="RAREVAULT" className="h-8 w-auto" />
            <p className="text-sm text-gray-300">
              Лимитированные издания, 1 из 300
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/catalog" className="text-gray-300 hover:text-gold transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-gray-300 hover:text-gold transition-colors">
                  Коллекции
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold transition-colors">
                  О нас
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Правовая информация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal" className="text-gray-300 hover:text-gold transition-colors">
                  Пользовательское соглашение
                </Link>
              </li>
              <li>
                <Link href="/legal#privacy" className="text-gray-300 hover:text-gold transition-colors">
                  Политика возврата
                </Link>
              </li>
              <li>
                <Link href="/legal#shipping" className="text-gray-300 hover:text-gold transition-colors">
                  Доставка и оплата
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>info@rare-vault.ru</p>
              <p>+7 (495) 123-45-67</p>
              <p>Москва, ул. Коллекционная, 1</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-sm text-gray-400 text-center">
            Внимание: это тестовый прототип. Сайт не является офертой, товары не продаются, оплата отключена.
          </p>
          <p className="text-sm text-gray-500 text-center mt-2">
            © 2024 RAREVAULT. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
