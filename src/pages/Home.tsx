import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Truck, DollarSign, Users, Map, ArrowRight, Phone, MessageCircle, Mail, Send } from 'lucide-react';
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

const serviceIcons: Record<string, React.ElementType> = {
  pilomaterialy: Truck,
  oborudovanie: Truck,
  refrizherator: Truck,
  negabarit: Truck,
  tnp: Truck,
  himiya: Truck,
  vykup: Truck,
};

export default function Home() {
  const benefits = [
    'Экономия до 30% на стоимости перевозки',
    'Прямая работа с перевозчиком — без посредников',
    '10+ направлений в КНР | 40+ городов отправки в РФ',
    'Подбираем машину под груз, а не груз под машину',
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
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
            <ul className="space-y-3 mb-8">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-brand-success w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-brand-slate-900">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/kontakty/"
                className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center"
              >
                Получить расчёт за 24 часа
              </Link>
              <a
                href="https://wa.me/79273131102"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-semibold py-4 px-8 rounded-lg text-center transition-colors duration-200"
              >
                WhatsApp: +7 927 313 11 02
              </a>
            </div>
            <p className="text-sm text-brand-slate-500">
              10+ направлений | 40+ городов | Прямой перевозчик
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-brand-blue-500 to-brand-slate-900 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden">
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

      {/* Trust Bar */}
      <section className="py-12 bg-brand-slate-50 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col items-center">
              <Map className="w-8 h-8 text-brand-blue-500 mb-3" />
              <div className="text-4xl font-bold text-brand-blue-500 mb-2">10+</div>
              <div className="text-brand-slate-600">направлений в КНР</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col items-center">
              <Truck className="w-8 h-8 text-brand-blue-500 mb-3" />
              <div className="text-4xl font-bold text-brand-blue-500 mb-2">40+</div>
              <div className="text-brand-slate-600">городов отправки в РФ</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-center">
              <Users className="w-8 h-8 text-brand-blue-500 mb-3" />
              <div className="text-4xl font-bold text-brand-blue-500 mb-2">100%</div>
              <div className="text-brand-slate-600">Без посредников</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold text-brand-slate-900 text-center mb-16">
            Почему это выгодно
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, title: 'Экономия до 30%', text: 'Обратные рейсы дешевле — вы не платите за обратную дорогу' },
              { icon: Users, title: 'Без посредников', text: 'Прямая работа с перевозчиком — прозрачные цены и контроль' },
              { icon: Map, title: '10+ направлений', text: '40+ городов отправки в РФ, доставка в любой регион КНР' },
              { icon: Truck, title: 'Транспорт под груз', text: 'Не подстраиваем груз под машину — подбираем машину под груз' },
            ].map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white border border-brand-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-brand-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-brand-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-brand-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-brand-slate-600 leading-relaxed">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-brand-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold text-brand-slate-900 text-center mb-4">
            Наши услуги
          </motion.h2>
          <p className="text-brand-slate-600 text-center mb-12 text-lg max-w-2xl mx-auto">
            Перевозим любые грузы из России в Китай. Выберите категорию или свяжитесь с нами для индивидуального расчёта.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, i) => {
              const Icon = serviceIcons[service.slug] || Truck;
              return (
                <motion.div key={service.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <Link to={`/${service.slug}/`} className="block bg-white border border-brand-border rounded-xl p-6 hover:shadow-lg hover:border-brand-blue-500/30 transition-all duration-200 h-full">
                    <div className="w-12 h-12 bg-brand-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-brand-orange-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-slate-900 mb-2">
                      {serviceSlugMap[service.slug]}
                    </h3>
                    <p className="text-brand-slate-600 text-sm leading-relaxed mb-4">
                      {service.subtitle}
                    </p>
                    <span className="inline-flex items-center gap-1 text-brand-blue-500 font-medium text-sm">
                      Подробнее <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold text-brand-slate-900 text-center mb-16">
            Как мы работаем
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Заявка', text: 'Присылаете параметры груза, адреса, сроки' },
              { step: '02', title: 'Расчёт', text: 'Даём цену в течение 24 часов' },
              { step: '03', title: 'Организация', text: 'Подаём машину, согласуем погрузку и маршрут' },
              { step: '04', title: 'Доставка', text: 'Сопровождаем груз до выгрузки в КНР' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-blue-500 rounded-lg flex items-center justify-center text-white font-bold">{item.step}</div>
                </div>
                <h3 className="text-xl font-semibold text-brand-slate-900 mb-3">{item.title}</h3>
                <p className="text-brand-slate-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-12 text-center">
            <Link to="/kak-rabotaem/" className="inline-flex items-center gap-2 text-brand-blue-500 font-medium hover:text-brand-blue-600 transition-colors">
              Подробнее о схеме работы <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-orange-500 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ваш груз в Китае через 14 дней. Гарантия.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Не ждите недели — обратные рейсы стартуют ежедневно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/79273131102" target="_blank" rel="noopener noreferrer" className="bg-white text-brand-orange-500 hover:bg-brand-slate-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a href="https://t.me/PavlovNail" target="_blank" rel="noopener noreferrer" className="bg-brand-blue-600 hover:bg-brand-blue-500 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" /> Telegram
              </a>
              <a href="mailto:altan.moscow@ya.ru" className="bg-brand-blue-600 hover:bg-brand-blue-500 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" /> Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
