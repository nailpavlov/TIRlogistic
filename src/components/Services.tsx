import { motion } from 'framer-motion';
import { Truck, ArrowDownUp, Package, FileText, ShieldCheck, RotateCcw } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: 'TIR-перевозки РФ → КНР',
      text: 'Тент, борт, платформа, рефрижератор, изотерм',
    },
    {
      icon: ArrowDownUp,
      title: 'Погрузка с любой стороны',
      text: 'Задняя, боковая, верхняя',
    },
    {
      icon: Package,
      title: 'Догруз',
      text: 'Платите только за место в фуре',
    },
    {
      icon: FileText,
      title: 'Документы',
      text: 'CMR, счёт-фактура, акт, ГЛОНАСС с ФГИС ЛК',
    },
    {
      icon: ShieldCheck,
      title: 'Таможенное сопровождение',
      text: 'Оформление на всём маршруте',
    },
    {
      icon: RotateCcw,
      title: 'Обратные рейсы',
      text: 'Загрузка транспорта, возвращающегося в КНР',
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-brand-slate-900 text-center mb-16"
        >
          Услуги
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-brand-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="w-12 h-12 bg-brand-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-brand-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-brand-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-brand-slate-600 leading-relaxed">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
