import { motion } from 'framer-motion';
import { DollarSign, Users, Map, Truck } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Экономия до 30%',
      text: 'Обратные рейсы дешевле — вы не платите за обратную дорогу',
    },
    {
      icon: Users,
      title: 'Без посредников',
      text: 'Прямая работа с перевозчиком — прозрачные цены и контроль',
    },
    {
      icon: Map,
      title: '10+ направлений',
      text: '40+ городов отправки в РФ, доставка в любой регион КНР',
    },
    {
      icon: Truck,
      title: 'Транспорт под груз',
      text: 'Не подстраиваем груз под машину — подбираем машину под груз',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-brand-slate-900 text-center mb-16"
        >
          Почему это выгодно
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-brand-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="w-12 h-12 bg-brand-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-brand-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-brand-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-brand-slate-600 leading-relaxed">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
