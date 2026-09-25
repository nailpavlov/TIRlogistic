import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { useNoIndex } from '../hooks/useNoIndex';

export default function DirectionsPage() {
  useNoIndex();
  const directions = [
    { city: 'Шанхай', region: 'Восточный Китай', features: 'Крупнейший порт, промышленный центр' },
    { city: 'Гуанчжоу', region: 'Южный Китай', features: 'Торговый хаб, электроника, текстиль' },
    { city: 'Иу', region: 'Восточный Китай', features: 'Крупнейший рынок мелкого опта' },
    { city: 'Пекин', region: 'Северный Китай', features: 'Столица, оборудование, технологии' },
    { city: 'Шэньчжэнь', region: 'Южный Китай', features: 'Электроника, hi-tech продукция' },
    { city: 'Тяньцзинь', region: 'Северный Китай', features: 'Порт, химическая промышленность' },
    { city: 'Циндао', region: 'Восточный Китай', features: 'Порт, машиностроение' },
    { city: 'Далянь', region: 'Северо-Восточный Китай', features: 'Порт, судостроение' },
    { city: 'Харбин', region: 'Северо-Восточный Китай', features: 'Ближайший к РФ, торговля' },
    { city: 'Суйфэньхэ', region: 'Северо-Восточный Китай', features: 'Пограничный переход с РФ' },
  ];

  const citiesRF = [
    'Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск', 'Екатеринбург',
    'Нижний Новгород', 'Челябинск', 'Самара', 'Омск', 'Ростов-на-Дону',
    'Уфа', 'Красноярск', 'Пермь', 'Воронеж', 'Волгоград',
    'Краснодар', 'Саратов', 'Тюмень', 'Тольятти', 'Ижевск',
    'Барнаул', 'Ульяновск', 'Иркутск', 'Хабаровск', 'Владивосток',
    'Ярославль', 'Махачкала', 'Томск', 'Оренбург', 'Кемерово',
    'Новокузнецк', 'Рязань', 'Астрахань', 'Набережные Челны', 'Пенза',
    'Липецк', 'Киров', 'Чебоксары', 'Тула', 'Калининград',
  ];

  return (
    <>
      <section className="pt-8 pb-16 bg-gradient-to-br from-brand-slate-900 to-brand-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="text-sm text-white/70 hover:text-white mb-4 inline-block">← Главная</Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Направления перевозок</h1>
            <p className="text-xl text-white/80 max-w-3xl">
              10+ направлений в КНР и 40+ городов отправки в России. Доставляем грузы по всему Китаю.
            </p>
          </motion.div>
        </div>
      </section>

      {/* China destinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-bold text-brand-slate-900 mb-8 flex items-center gap-3">
            🇨🇳 Направления в Китае
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directions.map((dir, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="bg-brand-slate-50 border border-brand-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-slate-900">{dir.city}</h3>
                    <p className="text-sm text-brand-blue-500 mb-2">{dir.region}</p>
                    <p className="text-sm text-brand-slate-600">{dir.features}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Russia cities */}
      <section className="py-16 bg-brand-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-bold text-brand-slate-900 mb-8 flex items-center gap-3">
            🇷🇺 Города отправки в России
          </motion.h2>
          <p className="text-brand-slate-600 mb-8">
            Организуем подачу транспорта из любого города России. Основные направления:
          </p>
          <div className="flex flex-wrap gap-3">
            {citiesRF.map((city, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.02 }} className="bg-white border border-brand-border rounded-lg px-4 py-2 text-sm text-brand-slate-700">
                {city}
              </motion.span>
            ))}
          </div>
          <p className="text-brand-slate-500 text-sm mt-6">
            Нет вашего города в списке? Свяжитесь с нами — организуем подачу транспорта из любого населённого пункта.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Нужна доставка в другой город?</h2>
            <p className="text-lg opacity-90 mb-8">
              Работаем по всей России и Китаю. Рассчитаем стоимость для вашего маршрута.
            </p>
            <Link to="/kontakty/" className="inline-flex items-center gap-2 bg-white text-brand-orange-500 hover:bg-brand-slate-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Рассчитать стоимость <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
