import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle } from 'lucide-react';

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

export default function QuoteForm() {
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
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form data:', data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <section id="quote" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-brand-success/10 border border-brand-success/30 rounded-2xl p-12"
          >
            <CheckCircle className="w-16 h-16 text-brand-success mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-brand-slate-900 mb-4">
              Заявка отправлена!
            </h3>
            <p className="text-brand-slate-600 text-lg mb-6">
              Мы подготовим расчёт в течение 24 часов и свяжемся с вами.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Отправить ещё одну заявку
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-slate-900 text-center mb-4">
            Получите расчёт стоимости за 24 часа
          </h2>
          <p className="text-brand-slate-600 text-center mb-12 text-lg">
            Направьте данные о грузе — подготовим индивидуальное предложение по вашему маршруту
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 bg-brand-slate-50 border border-brand-border rounded-2xl p-6 sm:p-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-brand-slate-900 font-semibold mb-2">
                Имя *
              </label>
              <input
                type="text"
                {...register('name')}
                className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white"
                placeholder="Иван Петров"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-brand-slate-900 font-semibold mb-2">
                Телефон / WhatsApp *
              </label>
              <input
                type="tel"
                {...register('phone')}
                className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white"
                placeholder="+7 (999) 000-00-00"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-brand-slate-900 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              {...register('email')}
              className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white"
              placeholder="email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-brand-slate-900 font-semibold mb-2">
              Тип груза *
            </label>
            <input
              type="text"
              {...register('cargoType')}
              className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white"
              placeholder="Например: оборудование, запчасти, продукты"
            />
            {errors.cargoType && (
              <p className="text-red-500 text-sm mt-1">{errors.cargoType.message}</p>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-brand-slate-900 font-semibold mb-2">
                Вес (кг) *
              </label>
              <input
                type="number"
                {...register('weight')}
                className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white"
                placeholder="15000"
              />
              {errors.weight && (
                <p className="text-red-500 text-sm mt-1">{errors.weight.message}</p>
              )}
            </div>

            <div>
              <label className="block text-brand-slate-900 font-semibold mb-2">
                Количество мест *
              </label>
              <input
                type="number"
                {...register('places')}
                className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white"
                placeholder="10"
              />
              {errors.places && (
                <p className="text-red-500 text-sm mt-1">{errors.places.message}</p>
              )}
            </div>

            <div>
              <label className="block text-brand-slate-900 font-semibold mb-2">
                Габариты (Д×Ш×В, см) *
              </label>
              <input
                type="text"
                {...register('dimensions')}
                className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white"
                placeholder="120×80×100"
              />
              {errors.dimensions && (
                <p className="text-red-500 text-sm mt-1">{errors.dimensions.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-brand-slate-900 font-semibold mb-2">
              Адрес погрузки (РФ) *
            </label>
            <input
              type="text"
              {...register('pickupAddress')}
              className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white"
              placeholder="Москва, ул. Примерная, д. 1"
            />
            {errors.pickupAddress && (
              <p className="text-red-500 text-sm mt-1">{errors.pickupAddress.message}</p>
            )}
          </div>

          <div>
            <label className="block text-brand-slate-900 font-semibold mb-2">
              Пункт выгрузки (КНР) *
            </label>
            <input
              type="text"
              {...register('deliveryAddress')}
              className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white"
              placeholder="Шанхай, порт"
            />
            {errors.deliveryAddress && (
              <p className="text-red-500 text-sm mt-1">{errors.deliveryAddress.message}</p>
            )}
          </div>

          <div>
            <label className="block text-brand-slate-900 font-semibold mb-2">
              Планируемая дата отправки *
            </label>
            <input
              type="date"
              {...register('date')}
              className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className="block text-brand-slate-900 font-semibold mb-2">
              Комментарий
            </label>
            <textarea
              rows={4}
              {...register('comment')}
              className="w-full border border-brand-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none transition-all bg-white resize-none"
              placeholder="Дополнительная информация о грузе..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-orange-500 hover:bg-brand-orange-600 disabled:bg-brand-orange-500/50 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Отправка...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Получить расчёт
              </>
            )}
          </button>

          <p className="text-sm text-brand-slate-500 text-center">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </motion.form>
      </div>
    </section>
  );
}
