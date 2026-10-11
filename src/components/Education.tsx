import { motion } from 'motion/react';
import { DATA } from '../data';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Education</h3>
            <div className="space-y-6">
              {DATA.education.map((edu, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200 p-4 rounded">
                  <p className="text-sm font-bold text-slate-800 mb-1">{edu.degree} <span className="text-blue-600">({edu.score})</span></p>
                  <p className="text-xs text-slate-500 font-medium mb-2">{edu.institution}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Certifications</h3>
            <div className="space-y-4">
              {DATA.certifications.map((cert, index) => (
                <div key={index} className="bg-white border border-slate-200 p-4 rounded flex justify-between items-center gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 mb-1 leading-snug">{cert.name}</h4>
                    <p className="text-[10px] text-slate-500 font-medium">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-100 uppercase">
                    {cert.date.split(' ')[2] || cert.date.split(' ')[0]} 
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Leadership</h3>
            <div className="space-y-4">
              {DATA.leadership.map((item, index) => (
                <div key={index} className="bg-white border border-slate-200 p-4 rounded">
                  <h4 className="text-xs font-bold text-slate-800 mb-1">{item.role}</h4>
                  <p className="text-[10px] text-slate-500 mb-3 leading-relaxed">{item.organization}</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{item.date}</p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
