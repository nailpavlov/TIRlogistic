import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Download, CheckCircle } from 'lucide-react';
import { useNoIndex } from '../hooks/useNoIndex';

export default function DocumentsPage() {
  useNoIndex();
  const documents = [
    {
      title: 'Договор на оказание транспортно-экспедиционных услуг',
      description: 'Типовой договор для разовых и постоянных перевозок. Регулирует права и обязанности сторон.',
      type: 'PDF',
    },
    {
      title: 'Заявка на перевозку груза',
      description: 'Форма заявки с параметрами груза. Заполняется для расчёта стоимости и организации перевозки.',
      type: 'DOCX',
    },
    {
      title: 'Образец CMR (международная накладная)',
      description: 'Международная товарно-транспортная накладная для перевозок через границу.',
      type: 'PDF',
    },
    {
      title: 'Требования к упаковке груза',
      description: 'Рекомендации по упаковке для различных типов грузов при международных перевозках.',
      type: 'PDF',
    },
    {
      title: 'Памятка по подготовке документов',
      description: 'Список документов, необходимых для таможенного оформления при экспорте в Китай.',
      type: 'PDF',
    },
    {
      title: 'Реквизиты компании',
      description: 'Полные реквизиты JINGXIANG COMMERCE SERVICE (SHANDONG) CO., LTD для выставления счетов.',
      type: 'PDF',
    },
  ];

  const requiredDocs = [
    'Инвойс (коммерческий счёт)',
    'Упаковочный лист',
    'Контракт / договор поставки',
    'Сертификат происхождения (форма А / СТ-1)',
    'Транспортная накладная CMR',
    'Декларация на товары (для таможни)',
  ];

  const specialDocs = [
    { category: 'Продукты питания', docs: 'Ветеринарный сертификат, фитосанитарный сертификат' },
    { category: 'Химическая продукция', docs: 'MSDS (паспорт безопасности), декларация соответствия' },
    { category: 'Оборудование', docs: 'Сертификат соответствия, руководство на русском языке' },
    { category: 'Пиломатериалы', docs: 'Фитосанитарный сертификат, сертификат качества' },
    { category: 'Опасные грузы', docs: 'ADR-документация, свидетельство о допуске водителя' },
  ];

  return (
    <>
      <section className="pt-8 pb-16 bg-gradient-to-br from-brand-slate-900 to-brand-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="text-sm text-white/70 hover:text-white mb-4 inline-block">← Главная</Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Документы</h1>
            <p className="text-xl text-white/80 max-w-3xl">
              Шаблоны документов, памятки и информация о необходимом пакете документов для перевозки.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documents for download */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-bold text-brand-slate-900 mb-8">
            Шаблоны документов
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-brand-slate-50 border border-brand-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-8 h-8 text-brand-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-slate-900 mb-1">{doc.title}</h3>
                    <span className="text-xs bg-brand-blue-500/10 text-brand-blue-500 px-2 py-0.5 rounded font-medium">{doc.type}</span>
                  </div>
                </div>
                <p className="text-sm text-brand-slate-600 mb-4">{doc.description}</p>
                <button className="inline-flex items-center gap-2 text-sm text-brand-blue-500 hover:text-brand-blue-600 font-medium transition-colors">
                  <Download className="w-4 h-4" /> Скачать
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required documents */}
      <section className="py-16 bg-brand-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold text-brand-slate-900 mb-6">Базовый пакет документов</h2>
              <p className="text-brand-slate-600 mb-6">Для большинства грузов необходим следующий пакет:</p>
              <ul className="space-y-3">
                {requiredDocs.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-brand-success w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-brand-slate-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold text-brand-slate-900 mb-6">Дополнительные документы</h2>
              <p className="text-brand-slate-600 mb-6">Для отдельных категорий грузов требуются дополнительные документы:</p>
              <div className="space-y-4">
                {specialDocs.map((item, i) => (
                  <div key={i} className="bg-white border border-brand-border rounded-lg p-4">
                    <h4 className="font-semibold text-brand-slate-900 mb-1">{item.category}</h4>
                    <p className="text-sm text-brand-slate-600">{item.docs}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Нужна помощь с документами?</h2>
            <p className="text-lg opacity-90 mb-8">
              Мы помогаем с оформлением полного пакета документов для таможенного оформления.
            </p>
            <Link to="/kontakty/" className="inline-flex items-center gap-2 bg-white text-brand-orange-500 hover:bg-brand-slate-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Получить консультацию
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
