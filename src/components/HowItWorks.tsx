import { motion } from 'framer-motion';
import { FileText, Calculator, Settings, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      step: '01',
      title: 'Заявка',
      text: 'Присылаете параметры груза, адреса, сроки',
    },
    {
      icon: Calculator,
      step: '02',
      title: 'Расчёт',
      text: 'Даём цену в течение 24 часов',
    },
    {
      icon: Settings,
      step: '03',
      title: 'Организация',
      text: 'Подаём машину, согласуем погрузку и маршрут',
    },
    {
      icon: CheckCircle2,
      step: '04',
      title: 'Доставка',
      text: 'Сопровождаем груз до выгрузки в КНР',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-brand-slate-900 text-center mb-16"
        >
          Схема работы
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-blue-500 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold text-brand-slate-200">{item.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-brand-slate-600 leading-relaxed">{item.text}</p>

              {/* Connector Arrow (desktop only) */}
              {i < 3 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 -z-10">
                  <div className="w-full h-full bg-brand-slate-200"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue-500/10 text-brand-blue-600 px-6 py-3 rounded-full font-medium">
            <CheckCircle2 className="w-5 h-5" />
            <span>Один координатор — контроль от заявки до выгрузки</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
