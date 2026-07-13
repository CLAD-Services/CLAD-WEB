import React, { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { proyectos } from './Portafolio';
// @ts-ignore
import logoImg from './assets/logo.webp';

import {
  X, ArrowRight, CheckCircle, MonitorSmartphone,
  Code, Layout, Rocket, ChevronRight, Menu, Phone, Mail, 
  CircleHelp, Search, PenTool, Terminal, Zap
} from 'lucide-react';


// --- DATA ---
const navItems = [
  { label: 'Inicio', view: 'home' },
  { label: 'Servicios', view: 'servicios' },
  { label: 'Portafolio', view: 'portafolio' },
  { label: 'Planes', view: 'planes' },
  { label: 'Nosotros & Contacto', view: 'contacto' }
];



// --- ICONS ---
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.72 5.39-1.14 1.36-2.78 2.14-4.59 2.27-1.84.13-3.67-.32-5.15-1.43-1.47-1.1-2.45-2.73-2.69-4.55-.24-1.83.15-3.69 1.17-5.21 1.05-1.55 2.65-2.58 4.47-2.91 1.83-.34 3.7.07 5.14 1.1.03-.04.05-.08.08-.12V15.1c-.81-.46-1.74-.69-2.69-.64-1.05.05-2.07.41-2.88 1.05-.82.65-1.37 1.55-1.54 2.58-.16 1.04.08 2.1.66 2.96.59.87 1.46 1.43 2.5 1.59 1.03.17 2.1-.03 2.97-.58.88-.55 1.5-1.38 1.76-2.38.25-.99.2-2.05-.13-3-.12-.34-.28-.67-.47-.98V.02h3.08z"/>
  </svg>
);

// --- HOOKS & COMPONENTS ---
function useScrollReveal(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

const Reveal = ({ children, delay = 0, direction = 'up' }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'left' | 'right' }) => {
  const { ref, isVisible } = useScrollReveal();
  
  let transform = 'translate-y-10';
  if (direction === 'left') transform = '-translate-x-10';
  if (direction === 'right') transform = 'translate-x-10';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${transform}`
      }`}
    >
      {children}
    </div>
  );
};

const AnimatedCounter = ({ end, suffix = '', duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollReveal(0.5);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// --- VIEWS ---

const HomeView = ({ changeView }: { changeView: (v: string) => void }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section con Carrusel Integrado */}
      <section className="carrusel-hero relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/90 to-slate-950 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <Reveal>
            <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-bold tracking-widest mb-8 uppercase">
              Agencia de Desarrollo y Diseño
            </span>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Escala tu negocio con <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                tecnología de impacto
              </span>
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium">
              Transformamos marcas tradicionales en líderes digitales. Diseñamos plataformas web rápidas, interfaces intuitivas y software a medida que realmente convierte visitantes en clientes.
            </p>
          </Reveal>
          <Reveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => changeView('contacto')} className="group flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:-translate-y-1">
                Iniciar Proyecto
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => changeView('portafolio')} className="flex items-center justify-center px-8 py-4 bg-slate-800/50 backdrop-blur-md text-white border border-slate-600 rounded-full font-bold text-lg hover:bg-slate-800 transition-all hover:-translate-y-1">
                Ver Portafolio
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-950 border-b border-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800/50">
            {[
              { end: 30, suffix: '+', label: 'Proyectos Entregados' },
              { end: 100, suffix: '%', label: 'Clientes Satisfechos' },
              { end: 3, label: 'Años de Experiencia' },
              { text: '24/7', label: 'Soporte Técnico', isText: true },
            ].map((stat, idx) => (
              <Reveal key={idx} delay={idx * 100} direction="up">
                <div className="text-center px-4">
                  <div className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
                    {stat.isText ? stat.text : <AnimatedCounter end={stat.end || 0} suffix={stat.suffix || ''} />}
                  </div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Nuestras Soluciones</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Expertise Técnico Integral</h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">No usamos plantillas genéricas. Dominamos las herramientas modernas para construir productos robustos, seguros y hechos a tu medida.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Layout className="w-8 h-8"/>, title: 'Web Emprendedor', desc: 'Interfaces intuitivas, responsivas y centradas en la conversión. Tu vitrina digital abierta las 24 horas.' },
              { icon: <Rocket className="w-8 h-8"/>, title: 'E-commerce', desc: 'Tiendas online optimizadas con pasarelas de pago seguras para maximizar tus ventas diarias y gestionar tu inventario.' },
              { icon: <Code className="w-8 h-8"/>, title: 'Web Corporativa', desc: 'Sistemas administrativos, CRMs y Dashboards diseñados exclusivamente para automatizar los procesos únicos de tu empresa.' }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group cursor-pointer h-full flex flex-col" onClick={() => changeView('servicios')}>
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{item.desc}</p>
                  <span className="text-blue-600 font-bold flex items-center group-hover:text-blue-800 transition-colors">
                    Explorar servicio <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

        {/* Trust Badge Section - CINTA DESLIZANTE */}
        <section className="py-12 bg-slate-50 border-t border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900">Construido con las mejores tecnologías del mercado</h3>
          </div>
          
          <div className="marquee-container">
            <div className="marquee-track flex gap-12 md:gap-24 items-center px-12">
              {/* Duplicamos la lista para que el bucle sea infinito */}
              {[
                'ReactJS', 'Next.js', 'Tailwind', 'Node.js', 'AWS', 
                'JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'Ruby', 'Go (Golang)',
                'ReactJS', 'Next.js', 'Tailwind', 'Node.js', 'AWS', 
                'JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'Ruby', 'Go (Golang)'
              ].map((tech, index) => (
                <span key={index} className="text-xl md:text-2xl font-black text-slate-400 whitespace-nowrap opacity-60">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
};

const ServiciosView = () => (
  <div className="pt-24 pb-24 bg-slate-50 min-h-screen animate-in fade-in slide-in-from-bottom-8 duration-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <Reveal>
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Lo que hacemos</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">Servicios <span className="text-blue-600">Premium</span></h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            No solo hacemos páginas web; construimos activos digitales de alto rendimiento. Combinamos estrategia de negocios, diseño centrado en el usuario y código limpio para garantizar un retorno de inversión (ROI) medible.
          </p>
        </Reveal>
      </div>

      <div className="space-y-32">
        {/* Service 1 */}
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Layout className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Diseño Web y Portales Corporativos</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Tu sitio web es el vendedor más importante de tu empresa. Creamos landing pages y portales corporativos estructurados para capturar leads, educar a tu audiencia y cerrar ventas. Nos enfocamos en la velocidad de carga (menos de 2 segundos) y en un diseño impecable para móviles.
              </p>
              <ul className="space-y-4 font-medium">
                {['Arquitectura de Información Persuasiva', 'Desarrollo Frontend React/Next.js', 'Optimización SEO Técnica Integrada', 'Integración de CMS para autogestión'].map((i) => (
                  <li key={i} className="flex items-center text-slate-700"><CheckCircle className="w-6 h-6 text-blue-500 mr-3 shrink-0"/> {i}</li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" alt="Desarrollo Web" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </Reveal>

        {/* Service 2 */}
        <Reveal direction="left">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1200&auto=format&fit=crop" alt="Software a Medida" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
            </div>
            <div>
              <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Software a Medida y Dashboards</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Los procesos manuales y las hojas de cálculo frenan el crecimiento. Desarrollamos plataformas internas, CRMs y sistemas de gestión personalizados que se adaptan exactamente a las reglas de tu negocio, mejorando la eficiencia operativa y centralizando tus datos.
              </p>
              <ul className="space-y-4 font-medium">
                {['Sistemas de Gestión (ERP / CRM)', 'Automatización de Tareas Repetitivas', 'Paneles de Administración e Indicadores', 'Bases de Datos Seguras y Escalables'].map((i) => (
                  <li key={i} className="flex items-center text-slate-700"><CheckCircle className="w-6 h-6 text-cyan-500 mr-3 shrink-0"/> {i}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      {/* METODOLOGIA DE TRABAJO (PROCESO) */}
      <div className="mt-40">
         <Reveal>
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Nuestra Metodología de Trabajo</h2>
               <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Un proceso transparente, paso a paso, diseñado para garantizar el éxito de tu proyecto sin sorpresas.</p>
            </div>
         </Reveal>
         
         <div className="grid md:grid-cols-4 gap-8">
            {[
               { icon: <Search/>, title: '1. Descubrimiento', desc: 'Analizamos tus objetivos comerciales, tu competencia y tu público objetivo para definir la estrategia técnica.' },
               { icon: <PenTool/>, title: '2. Diseño UI/UX', desc: 'Creamos prototipos interactivos (Wireframes) y definimos la identidad visual antes de escribir una sola línea de código.' },
               { icon: <Terminal/>, title: '3. Desarrollo', desc: 'Programamos tu plataforma utilizando tecnologías modernas, asegurando un código limpio, rápido y seguro.' },
               { icon: <Rocket/>, title: '4. Lanzamiento', desc: 'Realizamos pruebas exhaustivas (QA), configuramos tu dominio, lanzamos a producción y te capacitamos en el uso.' }
            ].map((step, idx) => (
               <Reveal key={idx} delay={idx * 150} direction="up">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow h-full">
                     <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6">
                        {step.icon}
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                     <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                  </div>
               </Reveal>
            ))}
         </div>
      </div>
    </div>
  </div>
);

const PortafolioView = () => {
  const [filtroActivo, setFiltroActivo] = useState('Todos');
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<any>(null);
  const categorias = ['Todos', 'Web Emprendedor', 'E-commerce', 'Web Corporativa'];
  
  const proyectosFiltrados = proyectos.filter(
    (p) => filtroActivo === 'Todos' || p.categoria === filtroActivo
  );

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Nuestro Trabajo</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">Casos de <span className="text-blue-600">Éxito</span></h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Explora nuestro portafolio de proyectos reales. Descubre cómo hemos ayudado a empresas a digitalizarse y escalar sus operaciones a través de tecnología a medida.</p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltroActivo(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                  filtroActivo === cat
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosFiltrados.map((proyecto, idx) => (
            <Reveal key={proyecto.id} delay={idx * 100}>
              <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col h-full" onClick={() => setProyectoSeleccionado(proyecto)}>
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-sm">
                      {proyecto.categoria}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proyecto.tecnologias.map(tech => (
                      <span key={tech} className="text-xs font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{proyecto.titulo}</h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {proyecto.descripcionLarga}
                  </p>
                  
                  <div className="flex items-center gap-6">
                    {/* Enlace: Ver Estudio Completo - Reacción individual */}
                    <a href="#" className="flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors [&:hover_svg]:translate-x-2">
                      Ver Estudio Completo <ArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-200" />
                    </a>

                    {/* Botón: Demo - Reacción individual */}
                    {proyecto.linkDemo && (
                      <a 
                        href={proyecto.linkDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} 
                        className="flex items-center text-white font-bold bg-slate-950 px-4 py-2 rounded-lg hover:bg-slate-900 transition-colors cursor-pointer [&:hover_svg]:translate-x-2"
                      >
                        Previsualización <ArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-200" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal Re-estilizado */}
      {proyectoSeleccionado && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setProyectoSeleccionado(null)} />
          <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300">
            <button onClick={() => setProyectoSeleccionado(null)} className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors z-10">
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold">{proyectoSeleccionado.categoria}</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">{proyectoSeleccionado.titulo}</h3>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                  <h4 className="text-slate-900 font-bold text-xl mb-4 flex items-center"><X className="w-6 h-6 mr-2 text-red-500" /> El Desafío</h4>
                  <p className="text-slate-600 leading-relaxed">{proyectoSeleccionado.problema}</p>
                </div>
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                  <h4 className="text-blue-900 font-bold text-xl mb-4 flex items-center"><CheckCircle className="w-6 h-6 mr-2 text-blue-500" /> La Solución</h4>
                  <p className="text-blue-800/80 leading-relaxed">{proyectoSeleccionado.solucion}</p>
                </div>
              </div>

              {proyectoSeleccionado.tieneAntesDespues && (
                <div className="mb-12">
                  <h4 className="text-2xl font-bold text-slate-900 mb-6">Transformación Visual</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200">
                      <div className="absolute top-4 left-4 bg-slate-900/80 text-white text-xs font-bold px-3 py-1 rounded-full z-10 backdrop-blur-md">VERSIÓN ANTERIOR</div>
                      <img src={proyectoSeleccionado.imgAntes} alt="Antes" className="w-full h-48 md:h-72 object-cover grayscale opacity-70" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-blue-500 shadow-xl shadow-blue-500/20">
                      <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">NUEVA VERSIÓN</div>
                      <img src={proyectoSeleccionado.imgDespues} alt="Después" className="w-full h-48 md:h-72 object-cover" />
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-slate-900 p-8 rounded-3xl text-white flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                  <h4 className="text-2xl font-bold mb-2">¿Listo para resultados similares?</h4>
                  <p className="text-slate-400">Transformamos tu visión en una plataforma de alto rendimiento.</p>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                  <a href="https://wa.me/51925928592" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none text-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-colors">
                    Solicitar Cotización
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const PlanesView = () => (
  <div className="pt-24 pb-24 bg-slate-50 min-h-screen animate-in fade-in duration-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Nuestras Tarifas</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">Inversión <span className="text-blue-600">Transparente</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Soluciones escalables diseñadas para impulsar el crecimiento de tu negocio en cada etapa, sin costos ocultos.</p>
        </div>
      </Reveal>

      {/* PLANES GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {/* Plan 1 */}
        <Reveal delay={100}>
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-2xl transition-all">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900">Plan Básico</h3>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">Web Emprendedor</p>
            </div>
            <div className="mb-8">
              <p className="text-5xl font-black text-slate-900">S/ 350 <span className="text-xl text-slate-400 font-normal">a S/ 500</span></p>
              <p className="text-3xl font-black text-slate-900">$ 110 <span className="text-xl text-slate-400 font-normal">a $ 150</span></p>
              <p className="text-slate-500 mt-2">Pago único por desarrollo</p>
            </div>
            <div className="mb-6">
               <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">Ideal para:</span> Clínicas dentales, abogados, restaurantes o negocios locales.</p>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {['Una sola página web (Landing Page)', 'Secciones: Inicio, Servicios, Testimonios', 'Integración directa de WhatsApp', 'Diseño Responsivo (Mobile-First)'].map((feature, i) => (
                <li key={i} className="flex items-start text-slate-600">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" /> {feature}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/51925928592?text=Hola%20quiero%20cotizar%20el%20Plan%20Básico" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 rounded-xl font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors">Elegir Plan Básico</a>
          </div>
        </Reveal>

        {/* Plan 2 - Popular */}
        <Reveal delay={200}>
          <div className="bg-slate-900 rounded-3xl p-10 shadow-2xl shadow-blue-900/20 border border-slate-800 flex flex-col h-full transform md:-translate-y-4 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-black uppercase tracking-widest py-2 px-6 rounded-full shadow-lg">
                Más Popular
              </span>
            </div>
            <div className="mb-8 mt-2">
              <h3 className="text-2xl font-bold text-white">Plan Normal</h3>
              <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mt-2">Web Corporativa</p>
            </div>
            <div className="mb-8">
              <p className="text-5xl font-black text-white">S/ 800 <span className="text-xl text-slate-400 font-normal">a S/ 1,200</span></p>
              <p className="text-3xl font-black text-white">$ 260 <span className="text-xl text-slate-400 font-normal">a $ 350</span></p>
              <p className="text-slate-400 mt-2">Pago único por desarrollo</p>
            </div>
            <div className="mb-6">
               <p className="text-sm text-slate-300"><span className="font-bold text-white">Ideal para:</span> Pymes, constructoras, consultoras o agencias.</p>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {['Hasta 5 secciones completas', 'Panel de administración de contenidos', 'Correos corporativos (ventas@)', 'Optimización de carga ultrarrápida'].map((feature, i) => (
                <li key={i} className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" /> {feature}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/51925928592?text=Hola%20quiero%20cotizar%20el%20Plan%20Normal" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 rounded-xl font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-xl">Elegir Plan Normal</a>
          </div>
        </Reveal>

        {/* Plan 3 */}
        <Reveal delay={300}>
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-2xl transition-all">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900">Plan Premium</h3>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">Tienda E-commerce</p>
            </div>
            <div className="mb-8">
              <p className="text-4xl font-black text-slate-900">S/ 1,800 <span className="text-xl text-slate-400 font-normal">a S/ 2,800</span>
              <p className="text-2xl font-black text-slate-900">$ 530 <span className="text-xl text-slate-400 font-normal">a $ 820</span></p></p>
              <p className="text-slate-500 mt-2">Pago único por desarrollo</p>
            </div>
            <div className="mb-6">
               <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">Ideal para:</span> Marcas de ropa, tecnología o catálogos físicos.</p>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {['Catálogo de productos y carrito', 'Pasarela de pagos integrada', 'Gestión de stock e inventario', 'Configuración de envíos', 'Capacitación técnica de 1 hora'].map((feature, i) => (
                <li key={i} className="flex items-start text-slate-600">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" /> {feature}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/51925928592?text=Hola%20quiero%20cotizar%20el%20Plan%20Premium" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 rounded-xl font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors">Elegir Plan Premium</a>
          </div>
        </Reveal>
      </div>

      {/* REQUISITO OBLIGATORIO: Información Importante (Políticas) */}
      <Reveal>
         <div className="max-w-5xl mx-auto bg-blue-50/50 p-8 md:p-12 rounded-3xl border border-blue-100 mb-20 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-950 mb-8 flex items-center">
               <CircleHelp className="w-8 h-8 mr-3 text-blue-600" />
               Información Importante sobre el Servicio
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
               <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">1. Dominio y Hosting</h4>
                  <p className="text-slate-700 leading-relaxed">
                     Los precios de los planes <strong>no incluyen un dominio (.com/.pe) ni hosting</strong>. Brindamos orientación técnica para que puedas adquirirlos por tu cuenta, o los gestionamos como un costo adicional (aprox. S/ 120 - S/ 200 anuales).
                  </p>
               </div>
               <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">2. Condiciones de Pago</h4>
                  <p className="text-slate-700 leading-relaxed">
                     Requerimos un <strong>50% de pago inicial</strong> para comenzar el proyecto, y el <strong>50% restante</strong> el día de la entrega final, previo a la publicación del sitio web en su dominio permanente.
                  </p>
               </div>
            </div>
         </div>
      </Reveal>

      {/* FAQ (Preguntas Frecuentes) */}
      <Reveal>
         <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-10 text-center">Preguntas Frecuentes</h3>
            <div className="space-y-6">
               {[
                  { q: '¿Cuánto tiempo tardan en entregar la página web?', a: 'Dependiendo de la complejidad, una Landing Page puede tomar de 7 a 10 días, mientras que un E-commerce o Sistema a Medida toma de 3 a 5 semanas de desarrollo y pruebas.' },
                  { q: '¿Ofrecen soporte o mantenimiento luego de entregar la web?', a: 'Sí. Todos nuestros planes incluyen 15 días de soporte técnico post-lanzamiento para garantizar estabilidad. Además, ofrecemos planes mensuales de mantenimiento preventivo si lo deseas.' },
                  { q: '¿Ustedes redactan los textos y toman las fotos?', a: 'Nosotros nos encargamos de la estructura y el diseño UX/UI. El material corporativo (textos específicos de la marca, fotografías de productos o equipo) debe ser proporcionado por el cliente antes de iniciar.' }
               ].map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors">
                     <h4 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h4>
                     <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </Reveal>
    </div>
  </div>
);

const ContactoView = () => (
  <div className="pt-24 pb-24 bg-white min-h-screen animate-in fade-in duration-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* IDENTIDAD / NOSOTROS */}
      <div className="mb-24 mt-8">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
               <div>
                  <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Nuestra Identidad</span>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">Elevamos el estándar del diseño web.</h1>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                     Nuestra misión en CLAD Services es empoderar a marcas y emprendedores con tecnología de primer nivel. Nos alejamos de las soluciones lentas y anticuadas, enfocándonos en construir código limpio, plataformas seguras y diseños que dejen una impresión duradera.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                     Creemos firmemente que una buena interfaz no solo es "bonita", sino que facilita la vida del usuario e incrementa drásticamente las ventas de tu negocio.
                  </p>
               </div>
            </Reveal>
            <Reveal direction="right">
               <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-8">El Estándar CLAD</h3>
                  <div className="space-y-6">
                     <div className="flex items-start">
                        <Zap className="w-8 h-8 text-cyan-400 mr-4 shrink-0" />
                        <div>
                           <h4 className="font-bold text-lg">Speed Optimization</h4>
                           <p className="text-slate-400 text-sm mt-1">Garantizamos tiempos de carga inferiores a 2 segundos para no perder clientes impacientes.</p>
                        </div>
                     </div>
                     <div className="flex items-start">
                        <Search className="w-8 h-8 text-cyan-400 mr-4 shrink-0" />
                        <div>
                           <h4 className="font-bold text-lg">SEO Técnico (Ready)</h4>
                           <p className="text-slate-400 text-sm mt-1">Estructura de etiquetas (H1, Meta) optimizada de fábrica para posicionar en Google.</p>
                        </div>
                     </div>
                     <div className="flex items-start">
                        <MonitorSmartphone className="w-8 h-8 text-cyan-400 mr-4 shrink-0" />
                        <div>
                           <h4 className="font-bold text-lg">Diseño 100% Responsivo</h4>
                           <p className="text-slate-400 text-sm mt-1">Adaptación perfecta en pantallas Retina, Tablets y cualquier dispositivo móvil moderno.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </Reveal>
         </div>
      </div>

      <hr className="border-slate-100 mb-24" />

      {/* FORMULARIO Y CONTACTO DIRECTO */}
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">Hablemos de tu <span className="text-blue-600">Proyecto</span></h2>
          <p className="text-xl text-slate-600">Completa el formulario o contáctanos por WhatsApp para recibir una asesoría gratuita.</p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto mt-12">
        <Reveal direction="left">
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Información Directa</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mr-6 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg font-bold text-slate-900">info.cladservices@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mr-6 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Teléfono / WhatsApp</p>
                  <p className="text-lg font-bold text-slate-900">+51 925 928 592</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST" 
            className="space-y-6 bg-white p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.05)] border border-slate-100"
            >
            {/* Campo oculto con tu llave de acceso */}
            <input type="hidden" name="access_key" value="71cbdabc-403f-4e5e-ae83-e644df9fe517" />
            
            {/* Aquí van tus otros inputs */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Nombre Completo</label>
              <input 
                type="text" 
                name="nombre" 
                required
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                placeholder="Ej. Juan Pérez" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Correo Electrónico o Teléfono</label>
              {/* IMPORTANTE: Agrega el atributo name="contacto" */}
              <input 
                type="text" 
                name="contacto"
                required 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                placeholder="Para responderte..." 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Detalles del Proyecto</label>
              {/* IMPORTANTE: Agrega el atributo name="mensaje" */}
              <textarea 
                name="mensaje"
                rows={4} 
                required
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none" 
                placeholder="Me gustaría cotizar un E-commerce para mi marca..."
              ></textarea>
            </div>
            {/* IMPORTANTE: Cambia type="button" por type="submit" */}
            <button 
              type="submit" 
              className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg"
            >
              Enviar Mensaje
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  </div>
);


// --- MAIN APP COMPONENT ---

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home': return <HomeView changeView={setCurrentView} />;
      case 'servicios': return <ServiciosView />;
      case 'portafolio': return <PortafolioView />;
      case 'planes': return <PlanesView />;
      case 'contacto': return <ContactoView />;
      default: return <HomeView changeView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white flex flex-col">
      {/* Navbar Superior */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentView !== 'home' ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-200/50 py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div 
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={() => setCurrentView('home')}
          >
            <div >
              <img src={logoImg} alt="Logo" className="w-32 h-auto" />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 bg-slate-100/50 backdrop-blur-md p-1 rounded-full border border-slate-200/50">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => setCurrentView(item.view)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  currentView === item.view
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button onClick={() => setCurrentView('contacto')} className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-slate-900/20">
              Cotizar
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 rounded-lg text-slate-600 bg-white shadow-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col space-y-2 z-50"
            >
              {navItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => {
                    setCurrentView(item.view);
                    setMobileMenuOpen(false); // Se cierra al hacer clic
                  }}
                  className={`text-left px-4 py-3 rounded-xl font-bold transition-colors ${
                    currentView === item.view ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Footer Minimalista Moderno */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <div>
              <img src={logoImg} alt="Logo" className="w-32 h-auto" />
             </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:space-x-6 text-sm font-medium">
            <button onClick={() => setCurrentView('home')} className="hover:text-white transition-colors">Inicio</button>
            <button onClick={() => setCurrentView('servicios')} className="hover:text-white transition-colors">Servicios</button>
            <button onClick={() => setCurrentView('portafolio')} className="hover:text-white transition-colors">Portafolio</button>
            <button onClick={() => setCurrentView('planes')} className="hover:text-white transition-colors">Precios</button>
          </div>
          <div className="flex space-x-4">
             {/* Redes Sociales con TikTok Incluido */}
             <a href="https://www.instagram.com/clad.services?igsh=NTJ3anAwZXFiMHps" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-transparent transition-all">
               <FaInstagram className="w-4 h-4" />
             </a>
             <a href="https://www.linkedin.com/in/clad-services-22584941a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-transparent transition-all">
               <FaLinkedin className="w-4 h-4" />
             </a>
             <a href="https://www.tiktok.com/@clad.services?_r=1&_t=ZS-97KH0EgwP8i" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-transparent transition-all">
               <TikTokIcon />
             </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center md:text-left text-sm text-slate-600">
          © 2026 CLAD Services. Diseñado y Desarrollado en Perú.
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/51925928592?text=Hola%20quiero%20cotizar%20un%20proyecto!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
}