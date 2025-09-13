import { Star, Shield, Award, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-ink mb-6">О RAREVAULT</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы специализируемся на редких коллекционных товарах высочайшего качества. 
            Каждый предмет в нашем каталоге проходит тщательную проверку экспертов.
          </p>
        </div>

        {/* Story */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ink mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  RAREVAULT был основан в 2024 году группой энтузиастов, 
                  которые объединили свою страсть к коллекционированию с желанием 
                  делиться редкими находками с единомышленниками.
                </p>
                <p>
                  Мы понимаем, что настоящие коллекционеры ценят не только 
                  редкость предмета, но и его историю, состояние и подлинность. 
                  Поэтому каждый товар в нашем каталоге сопровождается подробным 
                  описанием и сертификатом подлинности.
                </p>
                <p>
                  Наша миссия — помочь вам найти именно те уникальные предметы, 
                  которые пополнят вашу коллекцию и принесут радость на долгие годы.
                </p>
              </div>
            </div>
            <div className="bg-paper rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-ink mb-4">Наши принципы</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                  <span>Только подлинные предметы с сертификатами</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                  <span>Тщательная проверка состояния каждого предмета</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                  <span>Экспертная оценка редкости и ценности</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                  <span>Персональный подход к каждому клиенту</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Evaluate */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ink mb-8 text-center">
            Как мы оцениваем состояние
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">Mint (Идеальное)</h3>
              <p className="text-gray-600">
                Предмет в идеальном состоянии без каких-либо дефектов. 
                Оригинальная упаковка, все элементы на месте.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">Near Mint (Почти идеальное)</h3>
              <p className="text-gray-600">
                Минимальные следы времени, не влияющие на общее впечатление. 
                Возможны незначительные потертости.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">Very Good (Очень хорошее)</h3>
              <p className="text-gray-600">
                Заметные следы использования, но предмет сохраняет свою 
                привлекательность и функциональность.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">Good (Хорошее)</h3>
              <p className="text-gray-600">
                Значительные следы времени, но предмет имеет историческую 
                или коллекционную ценность.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-paper rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-ink mb-6 text-center">Свяжитесь с нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-ink mb-2">Email</h3>
              <p className="text-gray-600">info@rare-vault.ru</p>
            </div>
            <div>
              <h3 className="font-semibold text-ink mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </div>
            <div>
              <h3 className="font-semibold text-ink mb-2">Адрес</h3>
              <p className="text-gray-600">Москва, ул. Коллекционная, 1</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 mb-2">Важное уведомление</h3>
          <p className="text-yellow-700 text-sm">
            Данный сайт является тестовым прототипом и не предназначен для реальной торговли. 
            Все товары, цены и условия являются демонстрационными. 
            Мы не принимаем реальные заказы и не обрабатываем платежи.
          </p>
        </div>
      </div>
    </div>
  )
}
