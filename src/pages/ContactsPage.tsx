import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, MessageCircle, Mail, Globe, Send, CheckCircle, MapPin, Clock } from 'lucide-react';

const quoteSchema = z.object({
  name: z.string().min(2, 'Введите имя'),
  phone: z.string().min(10, 'Введите номер телефона'),
  email: z.string().email('Некорректный email').optional().or(z.literal('')),
  cargoType: z.string().min(2, 'Укажите тип груза'),
  weight: z.string().min(1, 'Укажите вес'),
  dimensions: z.string().min(1, 'Укажите габариты'),
  places: z.string().min(1, 'Укажите количество мест'),
  pickupAddress: z.string().min(2, 'Укажите адрес погрузки'),
  deliveryAddress: z.string().min(2, 'Укажите пункт выгрузки'),
  date: z.string().min(1, 'Укажите дату'),
  comment: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function ContactsPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <section className="pt-8 pb-16 bg-gradient-to-br from-brand-slate-900 to-brand-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="text-sm text-white/70 hover:text-white mb-4 inline-block">← Главная</Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Контакты</h1>
            <p className="text-xl text-white/80 max-w-3xl">
              Свяжитесь с нами для расчёта стоимости перевозки или консультации.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Russia */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-brand-slate-50 border border-brand-border rounded-xl p-8">
              <div className="text-3xl mb-4">🇷🇺 РОССИЯ</div>
              <h3 className="text-2xl font-semibold text-brand-slate-900 mb-2">Наиль Павлов</h3>
              <p className="text-brand-slate-500 mb-2">Руководитель отдела продаж в РФ</p>
              <p className="text-sm text-brand-slate-400 mb-6">JINGXIANG COMMERCE SERVICE (SHANDONG) CO., LTD</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                  <a href="tel:+79273131102" className="text-brand-slate-700 hover:text-brand-blue-500 transition-colors">+7 927 313 11 02</a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                  <a href="https://t.me/PavlovNail" target="_blank" rel="noopener noreferrer" className="text-brand-slate-700 hover:text-brand-blue-500 transition-colors">Telegram: @PavlovNail</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                  <a href="mailto:altan.moscow@ya.ru" className="text-brand-slate-700 hover:text-brand-blue-500 transition-colors">altan.moscow@ya.ru</a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                  <span className="text-brand-slate-700">WeChat: Pavlov_NS</span>
                </div>
              </div>
            </motion.div>

            {/* China */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-brand-slate-50 border border-brand-border rounded-xl p-8">
              <div className="text-3xl mb-4">🇨🇳 КИТАЙ</div>
              <h3 className="text-2xl font-semibold text-brand-slate-900 mb-2">Никита</h3>
              <p className="text-brand-slate-500 mb-2">Руководитель отдела продаж в КНР</p>
              <p className="text-sm text-brand-slate-400 mb-6">JINGXIANG COMMERCE SERVICE (SHANDONG) CO., LTD</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                  <a href="tel:+8613164293138" className="text-brand-slate-700 hover:text-brand-blue-500 transition-colors">+86 131 6429 3138</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                  <a href="tel:+79269181308" className="text-brand-slate-700 hover:text-brand-blue-500 transition-colors">+7 926 918 13 08</a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                  <a href="https://t.me/Cargo_Flow" target="_blank" rel="noopener noreferrer" className="text-brand-slate-700 hover:text-brand-blue-500 transition-colors">Telegram: @Cargo_Flow</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                  <a href="mailto:JSF0110@yandex.com" className="text-brand-slate-700 hover:text-brand-blue-500 transition-colors">JSF0110@yandex.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                  <span className="text-brand-slate-700">WeChat: mvp5435</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-brand-blue-500/5 border border-brand-blue-500/20 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-brand-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-brand-slate-900 mb-1">Режим работы</h4>
              <p className="text-brand-slate-600 text-sm">Пн-Пт: 9:00 - 18:00 (МСК)</p>
            </div>
            <div className="bg-brand-blue-500/5 border border-brand-blue-500/20 rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-brand-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-brand-slate-900 mb-1">Офис в России</h4>
              <p className="text-brand-slate-600 text-sm">Москва</p>
            </div>
            <div className="bg-brand-blue-500/5 border border-brand-blue-500/20 rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-brand-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-brand-slate-900 mb-1">Офис в Китае</h4>
              <p className="text-brand-slate-600 text-sm">Шаньдун, КНР</p>
            </div>
          </motion.div>

          {/* Quote Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-slate-900 text-center mb-4">
              Получите расчёт стоимости за 24 часа
            </h2>
            <p className="text-brand-slate-600 text-center mb-12 text-lg">
              Заполните форму — и мы подготовим индивидуальное предложение
            </p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto bg-brand-success/10 border border-brand-success/30 rounded-2xl p-12 text-center">
              <CheckCircle className="w-16 h-16 text-brand-success mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-brand-slate-900 mb-4">Заявка отправлена!</h3>
              <p className="text-brand-slate-600 text-lg mb-6">Мы подготовим расчёт в течение 24 часов и свяжемся с вами.</p>
              <button onClick={() => setSubmitted(false)} className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Отправить ещё одну заявку
              </button>
            </motion.div>
          ) : (
            <motion.form onSubmit={handleSubmit(onSubmit)} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="max-w-3xl mx-auto bg-brand-slate-50 border border-brand-border rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-brand-slate-900 font-semibold mb-2">Имя *</label>
                  <input type="text" {...register('name')} className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white" placeholder="Иван Петров" />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-brand-slate-900 font-semibold mb-2">Телефон / WhatsApp *</label>
                  <input type="tel" {...register('phone')} className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white" placeholder="+7 (999) 000-00-00" />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-brand-slate-900 font-semibold mb-2">Email</label>
                <input type="email" {...register('email')} className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white" placeholder="email@example.com" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-brand-slate-900 font-semibold mb-2">Тип груза *</label>
                <input type="text" {...register('cargoType')} className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white" placeholder="Например: оборудование, запчасти, пиломатериалы" />
                {errors.cargoType && <p className="text-red-500 text-sm mt-1">{errors.cargoType.message}</p>}
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-brand-slate-900 font-semibold mb-2">Вес (кг) *</label>
                  <input type="number" {...register('weight')} className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white" placeholder="15000" />
                  {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight.message}</p>}
                </div>
                <div>
                  <label className="block text-brand-slate-900 font-semibold mb-2">Количество мест *</label>
                  <input type="number" {...register('places')} className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white" placeholder="10" />
                  {errors.places && <p className="text-red-500 text-sm mt-1">{errors.places.message}</p>}
                </div>
                <div>
                  <label className="block text-brand-slate-900 font-semibold mb-2">Габариты (Д×Ш×В, см) *</label>
                  <input type="text" {...register('dimensions')} className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white" placeholder="120×80×100" />
                  {errors.dimensions && <p className="text-red-500 text-sm mt-1">{errors.dimensions.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-brand-slate-900 font-semibold mb-2">Адрес погрузки (РФ) *</label>
                <input type="text" {...register('pickupAddress')} className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white" placeholder="Москва, ул. Примерная, д. 1" />
                {errors.pickupAddress && <p className="text-red-500 text-sm mt-1">{errors.pickupAddress.message}</p>}
              </div>
              <div>
                <label className="block text-brand-slate-900 font-semibold mb-2">Пункт выгрузки (КНР) *</label>
                <input type="text" {...register('deliveryAddress')} className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white" placeholder="Шанхай, порт" />
                {errors.deliveryAddress && <p className="text-red-500 text-sm mt-1">{errors.deliveryAddress.message}</p>}
              </div>
              <div>
                <label className="block text-brand-slate-900 font-semibold mb-2">Планируемая дата отправки *</label>
                <input type="date" {...register('date')} className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white" />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
              </div>
              <div>
                <label className="block text-brand-slate-900 font-semibold mb-2">Комментарий</label>
                <textarea rows={4} {...register('comment')} className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white resize-none" placeholder="Дополнительная информация о грузе..." />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-brand-orange-500 hover:bg-brand-orange-600 disabled:bg-brand-orange-500/50 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                {isSubmitting ? (<><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>Отправка...</>) : (<><Send className="w-5 h-5" />Получить расчёт</>)}
              </button>
              <p className="text-sm text-brand-slate-500 text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </motion.form>
          )}
        </div>
      </section>
    </>
  );
}
