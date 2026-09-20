import { motion } from 'framer-motion';
import { Truck, Box, Snowflake, Archive } from 'lucide-react';

export default function TransportTypes() {
  const transports = [
    {
      icon: Truck,
      title: 'Еврофура',
      specs: 'До 20–22 т',
      cargo: 'Паллеты, стандартные и сборные партии',
    },
    {
      icon: Box,
      title: 'Открытая платформа',
      specs: 'Длинномер, негабарит',
      cargo: 'Верхняя/боковая погрузка',
    },
    {
      icon: Snowflake,
      title: 'Рефрижератор',
      specs: 'Температурный режим',
      cargo: 'Скоропортящаяся продукция',
    },
    {
      icon: Archive,
      title: 'Контейнерное решение',
      specs: '20/40 футов',
      cargo: 'Специализированные отправки',
    },
  ];

  return (
    <section id="transport" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-brand-slate-900 text-center mb-16"
        >
          Транспорт под задачу
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {transports.map((transport, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-brand-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="w-14 h-14 bg-brand-slate-50 rounded-lg flex items-center justify-center mb-4">
                <transport.icon className="w-7 h-7 text-brand-slate-900" />
              </div>
              <h3 className="text-xl font-semibold text-brand-slate-900 mb-2">
                {transport.title}
              </h3>
              <div className="text-brand-blue-500 font-semibold mb-2">
                {transport.specs}
              </div>
              <p className="text-brand-slate-600 text-sm leading-relaxed">
                {transport.cargo}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
