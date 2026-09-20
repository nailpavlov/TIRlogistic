import { motion } from 'framer-motion';
import { Truck, CheckCircle } from 'lucide-react';

export default function Hero() {
  const benefits = [
    'Экономия до 30% на стоимости перевозки',
    'Прямая работа с перевозчиком — без посредников',
    '10+ направлений в КНР | 40+ городов отправки в РФ',
    'Подбираем машину под груз, а не груз под машину',
  ];

  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-slate-900 mb-4 leading-tight tracking-tight">
            TIR-перевозки<br />Россия → Китай
          </h1>

          <p className="text-xl sm:text-2xl text-brand-slate-600 mb-6">
            Международная автодоставка по цене ниже рынка
          </p>

          <p className="text-brand-slate-600 mb-8 text-lg leading-relaxed">
            Организуем доставку вашего груза в КНР по технологии TIR.{' '}
            <strong className="text-brand-slate-900">
              Груз едет в фуре, которая возвращается в Китай.
            </strong>{' '}
            Вы платите только за доставку в одну сторону — обратный маршрут уже оплачен.
          </p>

          {/* Benefits */}
          <ul className="space-y-3 mb-8">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-brand-success w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-brand-slate-900">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#quote"
              className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center"
            >
              Получить расчёт за 24 часа
            </a>
            <a
              href="https://wa.me/79273131102"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-semibold py-4 px-8 rounded-lg text-center transition-colors duration-200"
            >
              WhatsApp: +7 927 313 11 02
            </a>
          </div>

          {/* Trust Signal */}
          <p className="text-sm text-brand-slate-500">
            10+ направлений | 40+ городов | Прямой перевозчик
          </p>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-brand-blue-500 to-brand-slate-900 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <Truck className="w-16 h-16 mb-6 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Маршрут: РФ → КНР</h3>
              <div className="space-y-3 text-white/90">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-brand-orange-500 rounded-full"></div>
                  <span>Москва, СПб, Казань, Новосибирск...</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-12 bg-white/30 ml-1"></div>
                  <span className="text-sm">4 000 — 8 000 км</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-brand-success rounded-full"></div>
                  <span>Шанхай, Гуанчжоу, Иу, Пекин...</span>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">14</div>
                  <div className="text-sm text-white/70">дней доставка</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">-30%</div>
                  <div className="text-sm text-white/70">экономия</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
