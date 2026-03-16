import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, BookOpen, AlertTriangle, CheckCircle2, XCircle, 
  Info, Skull, Flame, Bomb, Droplet, Wind, Activity, TreePine, 
  Sun, Beaker, Archive, Layers, ShieldAlert, ArrowRight, ChevronRight
} from 'lucide-react';

const regulations = [
  {
    id: 'clp',
    title: 'Reglament (CE) 1272/2008 (CLP)',
    subtitle: 'Classificació, Etiquetatge i Envasat',
    description: 'Estableix els criteris per identificar els perills de les substàncies i com comunicar-los mitjançant pictogrames i etiquetes estandarditzades a nivell europeu.',
    icon: ShieldCheck,
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    sections: [
      'Classificació de perills (físics, salut, medi ambient)',
      'Etiquetatge (pictogrames, paraules d\'advertència, frases H i P)',
      'Envasat segur per evitar pèrdues',
      'Catàleg C&L de l\'ECHA'
    ]
  },
  {
    id: 'apq',
    title: 'Reial Decret 656/2017 (APQ)',
    subtitle: 'Emmagatzematge de Productes Químics',
    description: 'Regula les condicions tècniques i de seguretat de les instal·lacions on s\'emmagatzemen productes químics perillosos per protegir els treballadors i el medi ambient.',
    icon: Layers,
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    sections: [
      'APQ-1: Líquids inflamables i combustibles',
      'APQ-8: Fertilitzants a base de nitrat amònic',
      'APQ-9: Peròxids orgànics',
      'APQ-10: Emmagatzematge en recipients mòbils'
    ]
  },
  {
    id: 'reach',
    title: 'Reglament (CE) 1907/2006 (REACH)',
    subtitle: 'Registre, Avaluació i Autorització',
    description: 'Obliga a identificar i gestionar els riscos vinculats a les substàncies químiques que es fabriquen i comercialitzen a la UE, assegurant un alt nivell de protecció.',
    icon: BookOpen,
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    sections: [
      'Registre de substàncies (≥ 1 tona/any)',
      'Avaluació de dossiers i substàncies',
      'Autorització de substàncies altament preocupants (SVHC)',
      'Restriccions de fabricació i ús'
    ]
  },
  {
    id: 'ntp',
    title: 'NTP 725 i NTP 726 (INSST)',
    subtitle: 'Notes Tècniques de Prevenció',
    description: 'Proporciona directrius pràctiques per a l\'emmagatzematge segur en laboratoris i magatzems, destacant la separació per incompatibilitats químiques.',
    icon: Info,
    color: 'bg-amber-50 text-amber-700 border-amber-200',
    sections: [
      'Identificació d\'incompatibilitats',
      'Separació i aïllament de productes',
      'Condicions ambientals del magatzem',
      'Gestió d\'estocs i caducitats'
    ]
  }
];

const pictograms = [
  { id: 'ghs01', name: 'Explosiu', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/GHS-pictogram-explos.svg', desc: 'Substàncies que poden explotar per efecte d\'una flama, xoc o fricció.' },
  { id: 'ghs02', name: 'Inflamable', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/GHS-pictogram-flamme.svg', desc: 'Gasos, líquids o sòlids que poden encendre\'s fàcilment.' },
  { id: 'ghs03', name: 'Comburent', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/GHS-pictogram-rondflam.svg', desc: 'Substàncies que faciliten la inflamació de materials combustibles.' },
  { id: 'ghs04', name: 'Gas a pressió', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/GHS-pictogram-bottle.svg', desc: 'Gasos comprimits, liquats o dissolts. Risc d\'explosió per calor.' },
  { id: 'ghs05', name: 'Corrosiu', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/GHS-pictogram-acid.svg', desc: 'Poden destruir metalls i causar cremades greus a la pell i ulls.' },
  { id: 'ghs06', name: 'Toxicitat aguda', img: 'https://upload.wikimedia.org/wikipedia/commons/5/58/GHS-pictogram-skull.svg', desc: 'Poden causar la mort o efectes greus per exposició breu.' },
  { id: 'ghs07', name: 'Irritant / Nociu', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/GHS-pictogram-exclam.svg', desc: 'Poden causar irritació, al·lèrgies o toxicitat menor.' },
  { id: 'ghs08', name: 'Perill greu salut', img: 'https://upload.wikimedia.org/wikipedia/commons/2/21/GHS-pictogram-silhouette.svg', desc: 'Cancerígens, mutàgens o tòxics per a la reproducció.' },
  { id: 'ghs09', name: 'Medi ambient', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/GHS-pictogram-pollu.svg', desc: 'Tòxics per als organismes aquàtics i el medi natural.' }
];

const matrixClasses = ['Inflamables', 'Comburents', 'Tòxics', 'Àcids', 'Bases', 'Nocius'];
const matrixData = [
  ['+', '-', '-', '-', '-', 'O'],
  ['-', '+', '-', '-', '-', 'O'],
  ['-', '-', '+', 'O', 'O', '+'],
  ['-', '-', 'O', '+', '-', '+'],
  ['-', '-', 'O', '-', '+', '+'],
  ['O', 'O', '+', '+', '+', '+']
];

const matrixLegend = [
  { symbol: '+', desc: 'Emmagatzematge conjunt permès', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  { symbol: '-', desc: 'Emmagatzematge conjunt prohibit', color: 'bg-red-100 text-red-800 border-red-200' },
  { symbol: 'O', desc: 'Permès amb precaucions (separació física)', color: 'bg-amber-100 text-amber-800 border-amber-200' }
];

const detailedIncompatibilities = [
  { group1: 'Inflamables', group2: 'Comburents', status: 'danger', reason: 'Els comburents aporten oxigen, provocant que els inflamables cremin de forma explosiva o incontrolable.' },
  { group1: 'Àcids', group2: 'Bases', status: 'danger', reason: 'Reacció de neutralització altament exotèrmica que pot provocar projeccions corrosives i ebullició.' },
  { group1: 'Àcids', group2: 'Cianurs / Sulfurs', status: 'danger', reason: 'Generació de gasos altament tòxics i letals (cianur d\'hidrogen o sulfur d\'hidrogen).' },
  { group1: 'Àcids', group2: 'Lleixiu (Hipoclorit)', status: 'danger', reason: 'Alliberament de gas clor (Cl2), altament tòxic i irritant per a les vies respiratòries.' },
  { group1: 'Inflamables', group2: 'Tòxics', status: 'warning', reason: 'S\'han de separar per evitar que un incendi dispersi substàncies tòxiques a l\'ambient.' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-slate-900 text-white pt-24 pb-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium mb-6 border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Seguretat Industrial i Laboratori</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Emmagatzematge Segur de <span className="text-emerald-400">Productes Químics</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Guia visual de la normativa vigent i bones pràctiques per garantir un entorn de treball segur, evitant riscos per a la salut i el medi ambient.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 relative z-20 pb-24 space-y-24">
        
        {/* Normativa Section */}
        <section>
          <div className="mb-12 text-center max-w-2xl mx-auto mt-16 md:mt-0">
            <h2 className="text-3xl font-bold mb-4 text-white md:text-slate-900">Marc Normatiu</h2>
            <p className="text-slate-300 md:text-slate-600">
              Principals reglaments i normatives que regulen la classificació i l'emmagatzematge de productes químics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regulations.map((reg, index) => {
              const Icon = reg.icon;
              return (
                <motion.div 
                  key={reg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border ${reg.color.split(' ')[2]} hover:shadow-md transition-shadow flex flex-col h-full`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${reg.color.split(' ')[0]} ${reg.color.split(' ')[1]}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{reg.title}</h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{reg.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">{reg.description}</p>
                  
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <h4 className="text-sm font-bold text-slate-800 mb-3">Seccions clau:</h4>
                    <ul className="space-y-2">
                      {reg.sections.map((section, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                          <span>{section}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Pictogrames Section */}
        <section>
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Pictogrames Oficials (SGA/CLP)</h2>
            <p className="text-slate-600">
              El Sistema Globalment Harmonitzat (SGA) i el Reglament CLP utilitzen 9 pictogrames estandarditzats per comunicar visualment els perills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pictograms.map((pic, index) => (
              <motion.div 
                key={pic.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center text-center group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-red-200 hover:shadow-md transition-all"
              >
                <div className="relative w-28 h-28 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={pic.img} 
                    alt={`Pictograma ${pic.name}`} 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-bold text-slate-800 mb-2 text-lg">{pic.name}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{pic.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Matriu d'Incompatibilitats Detallada */}
        <section>
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Matriu d'Incompatibilitats Detallada</h2>
            <p className="text-slate-600">
              Guia d'emmagatzematge conjunt basada en les directrius de la NTP 725. La separació adequada és la mesura preventiva més eficaç contra reaccions perilloses.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-8">
            <div className="overflow-x-auto p-6">
              <table className="w-full text-sm text-center border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className="p-3 border border-slate-200 bg-slate-50"></th>
                    {matrixClasses.map(c => (
                      <th key={c} className="p-3 border border-slate-200 bg-slate-50 font-bold text-slate-700 w-1/6">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {matrixClasses.map((rowClass, i) => (
                    <tr key={rowClass}>
                      <th className="p-3 border border-slate-200 bg-slate-50 font-bold text-slate-700 text-left">{rowClass}</th>
                      {matrixData[i].map((val, j) => {
                        let bgColor = '';
                        if (val === '+') bgColor = 'bg-emerald-50 text-emerald-700';
                        if (val === '-') bgColor = 'bg-red-50 text-red-700';
                        if (val === 'O') bgColor = 'bg-amber-50 text-amber-700';
                        return (
                          <td key={j} className={`p-4 border border-slate-200 font-black text-xl ${bgColor}`}>
                            {val}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-slate-50 p-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4 justify-center">
              {matrixLegend.map((leg, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded flex items-center justify-center font-bold border ${leg.color}`}>
                    {leg.symbol}
                  </div>
                  <span className="text-sm text-slate-700 font-medium">{leg.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Exemples de reaccions perilloses */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 bg-slate-900 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                Interaccions Crítiques a Evitar
              </h3>
            </div>
            <ul className="divide-y divide-slate-100">
              {detailedIncompatibilities.map((inc, index) => (
                <li key={index} className="p-6 flex flex-col md:flex-row md:items-center gap-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3 md:w-1/3 flex-shrink-0">
                    <span className="font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">{inc.group1}</span>
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">{inc.group2}</span>
                  </div>
                  <div className="flex items-start gap-3 flex-1">
                    <Info className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 leading-relaxed">{inc.reason}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <ShieldCheck className="w-8 h-8 mx-auto mb-4 text-slate-600" />
          <p className="text-sm">
            Aquesta pàgina és una guia informativa. Consulteu sempre les Fitxes de Dades de Seguretat (FDS) de cada producte i la normativa oficial vigent.
          </p>
        </div>
      </footer>
    </div>
  );
}
