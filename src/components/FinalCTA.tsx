import { motion } from 'framer-motion';
import { MessageCircle, Send, Mail } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-brand-orange-500 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ваш груз в Китае через 14 дней. Гарантия.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Не ждите недели — обратные рейсы стартуют ежедневно.
          </p>
          <p className="text-lg mb-10 opacity-90">
            <strong>👉 Пришлите данные о грузе в WhatsApp за 1 минуту</strong> и получите готовое предложение с ценой и сроками.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/79273131102"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-orange-500 hover:bg-brand-slate-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: +7 927 313 11 02
            </a>
            <a
              href="https://t.me/PavlovNail"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue-600 hover:bg-brand-blue-500 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Telegram: @PavlovNail
            </a>
            <a
              href="mailto:altan.moscow@ya.ru"
              className="bg-brand-blue-600 hover:bg-brand-blue-500 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
