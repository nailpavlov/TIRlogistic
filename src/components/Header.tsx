import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Услуги' },
    { href: '#transport', label: 'Транспорт' },
    { href: '#how-it-works', label: 'Схема работы' },
    { href: '#contacts', label: 'Контакты' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-brand-border z-50 h-20">
      <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-brand-slate-900 flex items-center gap-2">
          🚛 <span>TIR-LOGISTIKA</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-brand-slate-600">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-brand-blue-500 transition-colors duration-150">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#quote"
          className="hidden md:inline-block bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
        >
          Получить расчёт
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-slate-900"
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
            className="md:hidden bg-white border-b border-brand-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-brand-slate-600 hover:text-brand-blue-500 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#quote"
                className="block bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold px-6 py-3 rounded-lg text-center transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Получить расчёт
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
