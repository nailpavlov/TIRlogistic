import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: 'Что такое TIR-перевозка?',
    answer: 'TIR (Transports Internationaux Routiers) — международная система перевозок грузов автомобильным транспортом. Позволяет упростить таможенные процедуры при пересечении границ. Груз опломбирован и следует под таможенной пломбой до пункта назначения.',
  },
  {
    question: 'Почему цена ниже рыночной?',
    answer: 'Мы загружаем фуры, которые возвращаются в Китай после доставки груза из КНР в Россию. Обратный рейс обычно пустой, поэтому мы предлагаем сниженную цену. Вы платите только за доставку в одну сторону — обратный маршрут уже оплачен заказчиком основного груза.',
  },
  {
    question: 'Какие сроки доставки?',
    answer: 'Средний срок доставки из центральной России в восточный Китай — 14-18 дней. Точные сроки зависят от маршрута, типа груза и таможенного оформления. Для срочных грузов возможна авиадоставка за 5-7 дней.',
  },
  {
    question: 'Какие грузы вы не перевозите?',
    answer: 'Мы не перевозим: оружие и боеприпасы, наркотические вещества, контрафактную продукцию, грузы без необходимых документов. Для некоторых категорий (животные, растения, оружие гражданского назначения) требуется специальное разрешение.',
  },
  {
    question: 'Как происходит оплата?',
    answer: 'Стандартная схема: 50% предоплата при подтверждении заявки, 50% после подачи транспорта. Для постоянных клиентов возможна постоплата. Принимаем оплату по безналичному расчёту (для юрлиц) и на карту (для физлиц).',
  },
  {
    question: 'Нужна ли страховка груза?',
    answer: 'Все грузы застрахованы по умолчанию. Базовая страховка включена в стоимость. Для ценных грузов рекомендуем расширенное страхование — оно покрывает полную стоимость товара.',
  },
  {
    question: 'Какие документы нужны для перевозки?',
    answer: 'Для перевозки необходимы: инвойс (счёт-фактура), упаковочный лист, контракт (для коммерческих грузов), CMR (международная товарно-транспортная накладная). Для отдельных категорий грузов: фитосанитарные сертификаты, ветеринарные справки, сертификаты происхождения.',
  },
  {
    question: 'Можно ли отследить груз?',
    answer: 'Да, все наши машины оснащены системой ГЛОНАСС. Вы получаете доступ к отслеживанию в реальном времени. Также координатор регулярно сообщает о статусе доставки.',
  },
  {
    question: 'Что такое догруз?',
    answer: 'Догруз — это размещение вашего груза в фуре, которая уже частично загружена. Вы платите только за занятое место (объём или вес). Это самый экономичный вариант для небольших партий.',
  },
  {
    question: 'Работаете ли вы с физическими лицами?',
    answer: 'Да, мы работаем как с юридическими, так и с физическими лицами. Для физлиц возможна оплата на карту или наличными. Для юрлиц — полный пакет закрывающих документов.',
  },
  {
    question: 'Как происходит таможенное оформление?',
    answer: 'Мы предоставляем полное таможенное сопровождение: подготовка документов, декларирование, уплата пошлин (за счёт грузоотправителя/получателя), прохождение таможенного контроля. Наши брокеры работают на всех основных переходах.',
  },
  {
    question: 'Можно ли организовать выкуп товара в Китае?',
    answer: 'Да, мы предоставляем услугу выкупа товара в Китае. Наш представитель проверит товар на складе поставщика, организует оплату в юанях и консолидирует грузы от разных поставщиков. Подробнее на странице /vykup/.',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="pt-8 pb-16 bg-gradient-to-br from-brand-slate-900 to-brand-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="text-sm text-white/70 hover:text-white mb-4 inline-block">← Главная</Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Часто задаваемые вопросы</h1>
            <p className="text-xl text-white/80 max-w-3xl">
              Ответы на популярные вопросы о TIR-перевозках из России в Китай.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="border border-brand-border rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-slate-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="text-lg font-semibold text-brand-slate-900 pr-4">{item.question}</span>
                  {openIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-brand-slate-600 leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold text-brand-slate-900 mb-4">Не нашли ответ?</h2>
            <p className="text-brand-slate-600 mb-8">
              Свяжитесь с нами — ответим на любые вопросы о перевозке вашего груза.
            </p>
            <Link to="/kontakty/" className="inline-flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Связаться с нами
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
