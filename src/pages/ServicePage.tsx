import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Truck, Phone, MessageCircle } from 'lucide-react';
import { servicesData } from '../data/services';

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !servicesData[slug]) {
    return <Navigate to="/" replace />;
  }

  const data = servicesData[slug];

  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-brand-slate-900 to-brand-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="text-sm text-white/70 hover:text-white mb-4 inline-block">← Главная</Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{data.title}</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl">{data.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/kontakty/" className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center">
                {data.cta}
              </Link>
              <a href="https://wa.me/79273131102" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-slate-900 mb-6">О перевозке</h2>
                <p className="text-brand-slate-600 text-lg leading-relaxed mb-8">{data.description}</p>
                
                <h3 className="text-xl font-semibold text-brand-slate-900 mb-4">Что перевозим:</h3>
                <ul className="space-y-3 mb-8">
                  {data.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-brand-success w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="bg-brand-slate-50 border border-brand-border rounded-xl p-6 sticky top-28">
                <h4 className="font-semibold text-brand-slate-900 mb-4">Нужен расчёт?</h4>
                <p className="text-brand-slate-600 text-sm mb-6">
                  Отправьте параметры груза и получите расчёт в течение 24 часов.
                </p>
                <Link to="/kontakty/" className="block bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center mb-4">
                  Получить расчёт
                </Link>
                <a href="tel:+79273131102" className="flex items-center gap-2 text-brand-slate-600 hover:text-brand-blue-500 transition-colors justify-center">
                  <Phone className="w-4 h-4" /> +7 927 313 11 02
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-brand-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-bold text-brand-slate-900 text-center mb-12">
            Преимущества
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.benefits.map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white border border-brand-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-brand-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-brand-slate-600">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-bold text-brand-slate-900 text-center mb-12">
            Транспорт для перевозки
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.transportTypes.map((type, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-brand-slate-50 border border-brand-border rounded-xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-brand-blue-500" />
                </div>
                <span className="font-medium text-brand-slate-900">{type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Готовы обсудить перевозку?</h2>
            <p className="text-lg opacity-90 mb-8">
              Свяжитесь с нами для расчёта стоимости и сроков доставки вашего груза.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakty/" className="bg-white text-brand-orange-500 hover:bg-brand-slate-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                Оставить заявку <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="https://wa.me/79273131102" target="_blank" rel="noopener noreferrer" className="bg-brand-blue-600 hover:bg-brand-blue-500 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
