export default function Footer() {
  return (
    <footer className="bg-brand-slate-900 text-brand-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div>
            <div className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              🚛 <span>TIR-LOGISTIKA</span>
            </div>
            <p className="text-sm leading-relaxed">
              TIR-перевозки Россия ↔ Китай. Доставка по цене ниже рынка за счёт обратных рейсов.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#transport" className="hover:text-white transition-colors">
                  Транспорт
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  Схема работы
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>TIR-перевозки</li>
              <li>Обратные рейсы</li>
              <li>Догруз</li>
              <li>Таможенное оформление</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <div className="space-y-2">
              <div>
                <a href="tel:+79273131102" className="hover:text-white transition-colors">
                  +7 927 313 11 02
                </a>
              </div>
              <div>
                <a href="mailto:altan.moscow@ya.ru" className="hover:text-white transition-colors">
                  altan.moscow@ya.ru
                </a>
              </div>
              <div>Пн-Пт: 9:00 - 18:00</div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-slate-600 pt-8 text-sm">
          <p>© 2026 JINGXIANG COMMERCE SERVICE (SHANDONG) CO., LTD. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
