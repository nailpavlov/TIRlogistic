import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, Globe } from 'lucide-react';

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 bg-brand-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          Контакты
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Russia */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8"
          >
            <div className="text-3xl mb-4">🇷🇺 РОССИЯ</div>
            <h3 className="text-2xl font-semibold mb-2">Наиль Павлов</h3>
            <p className="text-brand-slate-400 mb-2">Руководитель отдела продаж в РФ</p>
            <p className="text-sm text-brand-slate-500 mb-6">JINGXIANG COMMERCE SERVICE (SHANDONG) CO., LTD</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                <a href="tel:+79273131102" className="hover:text-brand-blue-500 transition-colors">
                  +7 927 313 11 02
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                <a
                  href="https://t.me/PavlovNail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-blue-500 transition-colors"
                >
                  Telegram: @PavlovNail
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                <a
                  href="mailto:altan.moscow@ya.ru"
                  className="hover:text-brand-blue-500 transition-colors"
                >
                  altan.moscow@ya.ru
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                <span>WeChat: Pavlov_NS</span>
              </div>
            </div>
          </motion.div>

          {/* China */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8"
          >
            <div className="text-3xl mb-4">🇨🇳 КИТАЙ</div>
            <h3 className="text-2xl font-semibold mb-2">Никита</h3>
            <p className="text-brand-slate-400 mb-2">Руководитель отдела продаж в КНР</p>
            <p className="text-sm text-brand-slate-500 mb-6">JINGXIANG COMMERCE SERVICE (SHANDONG) CO., LTD</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                <a href="tel:+8613164293138" className="hover:text-brand-blue-500 transition-colors">
                  +86 131 6429 3138
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                <a href="tel:+79269181308" className="hover:text-brand-blue-500 transition-colors">
                  +7 926 918 13 08
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                <a
                  href="https://t.me/Cargo_Flow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-blue-500 transition-colors"
                >
                  Telegram: @Cargo_Flow
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                <a
                  href="mailto:JSF0110@yandex.com"
                  className="hover:text-brand-blue-500 transition-colors"
                >
                  JSF0110@yandex.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-brand-blue-500 flex-shrink-0" />
                <span>WeChat: mvp5435</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
