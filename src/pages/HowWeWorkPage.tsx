import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Calculator, Settings, CheckCircle2, ArrowRight, Clock, Shield, Users } from 'lucide-react';
import { useNoIndex } from '../hooks/useNoIndex';

export default function HowWeWorkPage() {
  useNoIndex();
  const steps = [
    {
      icon: FileText,
      step: '01',
      title: 'Заявка',
      text: 'Вы присылаете параметры груза: тип, вес, габариты, адреса погрузки и выгрузки, желаемые сроки. Принимаем заявку по WhatsApp, Telegram, Email или через форму на сайте.',
      details: ['Заполните форму на сайте', 'Напишите в WhatsApp', 'Позвоните по телефону'],
    },
    {
      icon: Calculator,
      step: '02',
      title: 'Расчёт',
      text: 'В течение 24 часов готовим индивидуальное предложение: стоимость перевозки, сроки, тип транспорта. Учитываем все особенности вашего груза.',
      details: ['Стоимость перевозки', 'Оптимальный тип транспорта', 'Сроки доставки', 'Необходимые документы'],
    },
    {
      icon: Settings,
      step: '03',
      title: 'Организация',
      text: 'После согласования подаём транспорт, организуем погрузку, оформляем все документы. Координатор контролирует каждый этап.',
      details: ['Подача транспорта', 'Организация погрузки', 'Оформление CMR и документов', 'Таможенное оформление'],
    },
    {
      icon: CheckCircle2,
      step: '04',
      title: 'Доставка',
      text: 'Сопровождаем груз на всём маршруте. Вы получаете уведомления о статусе доставки. Контроль по ГЛОНАСС.',
      details: ['Мониторинг по ГЛОНАСС', 'Уведомления о статусе', 'Сопровождение до выгрузки', 'Документы по факту доставки'],
    },
  ];

  return (
    <>
      <section className="pt-8 pb-16 bg-gradient-to-br from-brand-slate-900 to-brand-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="text-sm text-white/70 hover:text-white mb-4 inline-block">← Главная</Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Как мы работаем</h1>
            <p className="text-xl text-white/80 max-w-3xl">
              Простая и прозрачная схема работы. От заявки до доставки — один координатор на связи.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {steps.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-brand-blue-500 rounded-lg flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-brand-slate-200">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-slate-900 mb-3">{item.title}</h3>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-brand-slate-600 text-lg leading-relaxed mb-6">{item.text}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {item.details.map((detail, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-brand-slate-700">
                        <div className="w-2 h-2 bg-brand-blue-500 rounded-full"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-brand-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-bold text-brand-slate-900 text-center mb-12">
            Наши гарантии
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white border border-brand-border rounded-xl p-6 text-center">
              <Clock className="w-12 h-12 text-brand-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-brand-slate-900 mb-2">Расчёт за 24 часа</h3>
              <p className="text-brand-slate-600 text-sm">Готовое предложение с ценой и сроками в течение суток</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white border border-brand-border rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-brand-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-brand-slate-900 mb-2">Страхование груза</h3>
              <p className="text-brand-slate-600 text-sm">Полное страхование на весь маршрут следования</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white border border-brand-border rounded-xl p-6 text-center">
              <Users className="w-12 h-12 text-brand-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-brand-slate-900 mb-2">Личный координатор</h3>
              <p className="text-brand-slate-600 text-sm">Один человек на связи от заявки до выгрузки</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Готовы начать?</h2>
            <p className="text-lg opacity-90 mb-8">
              Отправьте заявку — и мы подготовим расчёт в течение 24 часов.
            </p>
            <Link to="/kontakty/" className="inline-flex items-center gap-2 bg-white text-brand-orange-500 hover:bg-brand-slate-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Оставить заявку <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
