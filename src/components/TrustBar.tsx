import { motion } from 'framer-motion';
import { MapPin, Building2, Shield } from 'lucide-react';

export default function TrustBar() {
  const stats = [
    { icon: MapPin, value: '10+', label: 'направлений в КНР' },
    { icon: Building2, value: '40+', label: 'городов отправки в РФ' },
    { icon: Shield, value: '100%', label: 'Без посредников' },
  ];

  return (
    <section className="py-12 bg-brand-slate-50 border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <stat.icon className="w-8 h-8 text-brand-blue-500 mb-3" />
              <div className="text-4xl font-bold text-brand-blue-500 mb-2">{stat.value}</div>
              <div className="text-brand-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
