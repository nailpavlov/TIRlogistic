import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Truck, Box, Snowflake, Archive, ArrowRight } from 'lucide-react';
import { useNoIndex } from '../hooks/useNoIndex';

export default function TransportPage() {
  useNoIndex();
  const transports = [
    {
      icon: Truck,
      title: 'Еврофура тентованная',
      specs: 'До 20–22 т | 82 м³',
      description: 'Стандартный транспорт для большинства грузов. Тент защищает от влаги и пыли. Подходит для паллетированных и сборных грузов.',
      features: ['Задняя погрузка', 'Боковая погрузка (шторная)', 'Объём до 82 м³', 'Грузоподъёмность до 22 т'],
    },
    {
      icon: Box,
      title: 'Открытая платформа',
      specs: 'До 25 т | Длинномер',
      description: 'Для негабаритных и крупногабаритных грузов. Позволяет перевозить грузы большой длины и высоты.',
      features: ['Верхняя погрузка', 'Боковая погрузка', 'Длина платформы до 13.6 м', 'Для негабарита и длинномеров'],
    },
    {
      icon: Snowflake,
      title: 'Рефрижератор',
      specs: 'До 20 т | -25°C до +25°C',
      description: 'Специализированный транспорт для скоропортящихся грузов. Поддержание температуры на всём маршруте.',
      features: ['Две температурные зоны', 'Контроль температуры 24/7', 'Для продуктов и лекарств', 'Ветеринарные сертификаты'],
    },
    {
      icon: Archive,
      title: 'Контейнер 20/40 футов',
      specs: '20 ft / 40 ft',
      description: 'Для специализированных отправок. Подходит для тяжёлых и ценных грузов, требующих дополнительной защиты.',
      features: ['Стандартные 20 и 40 футов', 'Повышенная защита груза', 'Для морских и ж/д перевозок', 'Возможность пломбировки'],
    },
  ];

  return (
    <>
      <section className="pt-8 pb-16 bg-gradient-to-br from-brand-slate-900 to-brand-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="text-sm text-white/70 hover:text-white mb-4 inline-block">← Главная</Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Типы автомобилей</h1>
            <p className="text-xl text-white/80 max-w-3xl">
              Подбираем транспорт под ваш груз — от стандартной еврофуры до специализированных рефрижераторов и платформ для негабарита.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {transports.map((transport, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white border border-brand-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="w-14 h-14 bg-brand-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                  <transport.icon className="w-7 h-7 text-brand-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-brand-slate-900 mb-2">{transport.title}</h3>
                <div className="text-brand-blue-500 font-semibold mb-4">{transport.specs}</div>
                <p className="text-brand-slate-600 mb-6 leading-relaxed">{transport.description}</p>
                <ul className="space-y-2">
                  {transport.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-brand-slate-700">
                      <div className="w-1.5 h-1.5 bg-brand-blue-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Не знаете, какой транспорт выбрать?</h2>
            <p className="text-lg opacity-90 mb-8">
              Свяжитесь с нами — подберём оптимальный транспорт под ваш груз и бюджет.
            </p>
            <Link to="/kontakty/" className="inline-flex items-center gap-2 bg-white text-brand-orange-500 hover:bg-brand-slate-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Получить консультацию <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
