import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { allServices } from '../data/services';

const serviceSlugMap: Record<string, string> = {
  pilomaterialy: 'Пиломатериалы',
  oborudovanie: 'Оборудование и запчасти',
  refrizherator: 'Рефрижераторные перевозки',
  negabarit: 'Негабарит',
  tnp: 'ТНП',
  himiya: 'Химия и опасные грузы',
  vykup: 'Выкуп в Китае',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/transport/', label: 'Транспорт' },
    { to: '/napravleniya/', label: 'Направления' },
    { to: '/kak-rabotaem/', label: 'Как работаем' },
    { to: '/faq/', label: 'FAQ' },
    { to: '/dokumenty/', label: 'Документы' },
    { to: '/kontakty/', label: 'Контакты' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-brand-border z-50">
        {/* Top bar */}
        <div className="bg-brand-slate-900 text-white py-2 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+79273131102" className="flex items-center gap-2 hover:text-brand-orange-500 transition-colors">
                <Phone className="w-4 h-4" />
                +7 927 313 11 02
              </a>
              <a href="https://wa.me/79273131102" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
            <div className="text-brand-slate-400">
              TIR-перевозки Россия ↔ Китай | Пн-Пт: 9:00 - 18:00
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-brand-slate-900 flex items-center gap-2">
            🚛 <span>TIR-LOGISTIKA</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-brand-slate-600">
            {/* Services dropdown */}
            <li className="relative">
              <button
                className="flex items-center gap-1 hover:text-brand-blue-500 transition-colors py-2"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Услуги <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white border border-brand-border rounded-xl shadow-lg py-2 z-50"
                  >
                    {allServices.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/${service.slug}/`}
                        className="block px-4 py-2.5 text-sm text-brand-slate-600 hover:bg-brand-slate-50 hover:text-brand-blue-500 transition-colors"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        {serviceSlugMap[service.slug]}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-brand-blue-500 transition-colors py-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/kontakty/"
            className="hidden lg:inline-block bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm"
          >
            Получить расчёт
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-brand-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Открыть меню"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-brand-border overflow-hidden"
            >
              <div className="px-6 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
                <div className="mb-4">
                  <div className="text-sm font-semibold text-brand-slate-400 uppercase mb-2">Услуги</div>
                  {allServices.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/${service.slug}/`}
                      className="block py-2 text-brand-slate-600 hover:text-brand-blue-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {serviceSlugMap[service.slug]}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-brand-border pt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block py-2 text-brand-slate-600 hover:text-brand-blue-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-brand-border pt-4">
                  <Link
                    to="/kontakty/"
                    className="block bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold px-6 py-3 rounded-lg text-center transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Получить расчёт
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className={location.pathname === '/' ? '' : 'pt-28 md:pt-36'}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-slate-900 text-brand-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo */}
            <div>
              <Link to="/" className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                🚛 <span>TIR-LOGISTIKA</span>
              </Link>
              <p className="text-sm leading-relaxed mt-4">
                TIR-перевозки Россия ↔ Китай. Доставка по цене ниже рынка за счёт обратных рейсов.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                {allServices.map((service) => (
                  <li key={service.slug}>
                    <Link to={`/${service.slug}/`} className="hover:text-white transition-colors">
                      {serviceSlugMap[service.slug]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/transport/" className="hover:text-white transition-colors">Типы автомобилей</Link></li>
                <li><Link to="/napravleniya/" className="hover:text-white transition-colors">Направления</Link></li>
                <li><Link to="/kak-rabotaem/" className="hover:text-white transition-colors">Как работаем</Link></li>
                <li><Link to="/faq/" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/dokumenty/" className="hover:text-white transition-colors">Документы</Link></li>
                <li><Link to="/kontakty/" className="hover:text-white transition-colors">Контакты</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
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
                <div>
                  <a href="https://t.me/PavlovNail" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Telegram: @PavlovNail
                  </a>
                </div>
                <div className="pt-2">Пн-Пт: 9:00 - 18:00</div>
              </div>
            </div>
          </div>

          <div className="border-t border-brand-slate-600 pt-8 text-sm">
            <p>© 2026 JINGXIANG COMMERCE SERVICE (SHANDONG) CO., LTD. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/79273131102"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
        aria-label="Написать в WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
