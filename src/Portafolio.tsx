import { useState } from 'react';
import { ExternalLink, X, ArrowRight, CheckCircle, MonitorSmartphone } from 'lucide-react';

 export const proyectos = [
    {
    id: 1,
    titulo: 'Ramirez',
    categoria: 'Web Emprendedor',
    imagen: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80',
    tecnologias: ['TypeScript (TSX)', 'HTML', 'CSS'],
    descripcionLarga: 'Plataforma digital premium con enfoque "elegante" que permite agendar sesion inicial y consultas reales por WhatsApp.',
    problema: [
    'El Estudio Jurídico Ramírez competía en un mercado legal saturado en San Isidro con dos grandes desventajas: las empresas solo buscaban sus servicios de forma reactiva (cuando ya tenían multas o crisis con SUNAT o SUNAFIL), y su presencia digital previa era fría, aburrida e institucional, lo que no generaba la confianza inmediata que un CEO necesita para contratar un abogado de alto nivel.'
    ],
    solucion: [
    'Diseñamos y desarrollamos una plataforma web estratégica enfocada en la prevención y la alta conversión. Cambié el mensaje tradicional por uno de Compliance (evitar problemas antes de que ocurran), humanicé la marca destacando la autoridad de los socios principales en primer plano y eliminé la fricción digital integrando un embudo directo a WhatsApp. El resultado fue transformar una página web estática en una herramienta comercial capaz de cerrar consultas corporativas privadas con un solo clic.'
    ],
    resultados: ['Reducción del 30% en tiempos operativos', 'Digitalización total de guías de remisión', 'Escalabilidad para nuevas rutas'],
    linkDemo: 'https://clad-services.github.io/Ramirez/',
    tieneAntesDespues: false,
    imgAntes: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=400&auto=format&fit=crop',
    imgDespues: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 2,
    titulo: 'Dental-sonrisas-main',
    categoria: 'Web Emprendedor',
    imagen: 'https://ceodont.com/wp-content/uploads/2021/07/gabinete-clinica-dental.jpg',
    tecnologias: ['TypeScript (TSX)', 'HTML', 'CSS'],
    descripcionLarga: ['Plataforma digital premium con enfoque de "spa dental" y convierte automáticamente las visitas web en citas reales por WhatsApp.'],
    problema: 'Las clínicas dentales con servicios premium suelen perder pacientes en internet debido a páginas web frías, impersonales o anticuadas que elevan la ansiedad dental del usuario. Esto genera una baja percepción de valor que empuja al cliente potencial a comparar tarifas con opciones de bajo costo, además de provocar una fuga constante de prospectos al no ofrecer canales de contacto rápidos, simples y directos para agendar una cita.',
    solucion: 'Se desarrolló una plataforma web estratégica con una estética cálida, moderna y relajante (efecto "spa") que disminuye el temor del paciente antes de su visita. La web posiciona la marca de forma exclusiva para justificar el costo de los tratamientos de alta gama mediante testimonios de confianza, y elimina cualquier barrera de comunicación al integrar un embudo directo a WhatsApp a un solo clic, transformando visitas digitales en citas reales de forma inmediata.',
    resultados: ['Mayor cantidad de visitantes web transformados en chats de WhatsApp reales.', 'Incremento en la reserva de citas para servicios de alto valor (como Invisalign o implantes) al proyectar exclusividad y justificar el precio.','Reducción del temor dental del paciente antes de pisar el consultorio, acelerando su decisión de compra.'],
    linkDemo: 'https://clad-services.github.io/Dental-sonrisas-main/',
    tieneAntesDespues: false,
  },
  {
    id: 3,
    titulo: 'Sweet Cake',
    categoria: 'Web Emprendedor',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZCuIaH2daFDsIWGAUnCkkBgpArg790Wm8RRMJq-PYk2VZzl-QuAjlsnW&s=10',
    tecnologias: ['TypeScript (TSX)', 'HTML', 'CSS'],
    descripcionLarga: 'Landing page para pastelerias con tortas personalizadas,seccion de muestras y hacer pedidos por whatsasp',
    problema: ['La marca dependía exclusivamente de Instagram y Facebook, careciendo de un canal centralizado. Esta fragmentación generaba fricción en el proceso de compra, especialmente porque los clientes tenían dificultades para ubicar el local físico y recoger sus pedidos.'],
    solucion: 'Desarrollamos una plataforma web centralizada que exhibe su catálogo de productos de forma atractiva y unifica sus redes sociales. Además, integramos un mapa interactivo con Google Maps para optimizar la logística de recojo en tienda y mejorar la experiencia del usuario.',
    resultados: ['Consiguio mas clientes', 'Pudo expandirse mas alla de las redes sociales','Los clientes pudieron ubicarla mas facil'],
    linkDemo: 'https://clad-services.github.io/Sweet-Cake/',
    tieneAntesDespues: false,
  },

  {
    id: 4,
    titulo: 'Transmar',
    categoria: 'Web Corporativa',
    imagen: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80',
    tecnologias: ['TypeScript', 'HTML', 'javaScript','CSS','React'],
    descripcionLarga: 'Transportamos carga pesada desde el Callao a todo el Perú de forma rápida y segura, conectando tu negocio sin complicaciones.',
    problema: 'Muchos negocios pierden clientes y dinero porque sus envíos se retrasan en las carreteras, los transportistas no responden el teléfono o la mercadería llega en mal estado por falta de cuidado. No saber dónde está tu carga ni cuándo va a llegar genera una enorme frustración y estrés constante.',
    solucion: 'Armamos un sistema de transporte directo y transparente. Ponemos a tu disposición camiones grandes y modernos que están monitoreados a cada minuto del día, manejados por conductores expertos que conocen muy bien las rutas del Perú. Así, te garantizamos que todo lo que nos confíes llegará exacto, a tiempo y en perfecto estado, devolviéndote la tranquilidad para que te enfoques en hacer crecer tu empresa.',
    resultados: ['Aumento del 45% en la tasa de conversión', 'Tiempo de carga reducido a 1.2s', 'Integración exitosa con operadores logísticos locales'],
    linkDemo: 'https://clad-services.github.io/Transmar/', 
    tieneAntesDespues: false,
    imgAntes: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=400&auto=format&fit=crop',
    imgDespues: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop'
  },

  {
    id: 5,
    titulo: 'TaxPerú-Consulting',
    categoria: 'Web Corporativa',
    imagen: 'https://plus.unsplash.com/premium_photo-1661774953651-d4f658a7e34d?q=80',
    tecnologias: ['TypeScript', 'HTML', 'javaScript','CSS','React'],
    descripcionLarga: 'Asesoría en blindaje tributario y gestión contable para Pymes en el Perú, con un blog dinámico de Alertas Normativas (SUNAT, MEF, MTPE) gestionables en vivo.',
    problema: 'Inestabilidad tributaria y riesgo latente de sanciones ante SUNAT debido a una gestión contable reactiva y desarticulada, que impide una proyección financiera clara y genera incertidumbre en la toma de decisiones estratégicas de la dirección.',
    solucion: 'Sistematización de la estructura fiscal y contable bajo estándares NIIF, que garantiza un blindaje tributario preventivo y centraliza el flujo de información financiera en tiempo real, transformando el cumplimiento obligatorio en una ventaja competitiva de alta precisión.',
    resultados: ['Mayor transparencia con clientes', 'Catálogo digital de planos y calicatas', 'Carga de imágenes optimizada'],
    linkDemo: 'https://clad-services.github.io/TaxPer-Consulting/',
    tieneAntesDespues: false,
  },

  {
    id: 6,
    titulo: 'Constructora-VyV',
    categoria: 'Web Corporativa',
    imagen: 'https://images.unsplash.com/photo-1545186070-de624ed19875?q=80',
    tecnologias: ['HTML', 'Tailwind CSS & PostCSS', 'TypeScript','React','javaScript'],
    descripcionLarga: 'Portal corporativo en TypeScript y Tailwind que digitaliza el portafolio estructural y automatiza la captura de licitaciones selectivas.',
    problema: 'Pérdida de credibilidad ante inversionistas por no visibilizar la flota de maquinaria ni la rigurosidad de los estudios de suelo, sumado al caos comercial de recibir solicitudes de cotización dispersas y sin clasificar.',
    solucion: 'Web coorporativa interactiva que expone el músculo logístico de la empresa y centraliza las solicitudes comerciales, automatizando el embudo de licitaciones mediante un portafolio dinámico y autónomo.',
    resultados: ['Agenda llena al 90%', 'Reducción de inasistencias en un 40%'],
    linkDemo: 'https://clad-services.github.io/Inmobiliaria-VyV/',
    tieneAntesDespues: false,
  },

  {
    id: 7,
    titulo: 'Nova Trend',
    categoria: 'E-commerce',
    imagen: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    tecnologias: ['React', 'Tailwind', 'Shopify'],
    descripcionLarga: 'Desarrollo de tienda virtual de alto rendimiento con pasarela de pagos integrada y gestión de inventario en tiempo real.',
    problema: 'El cliente perdía ventas debido a una web lenta y un proceso de pago confuso de más de 5 pasos.',
    solucion: 'Implementamos una arquitectura Jamstack con React y un checkout optimizado en 2 pasos.',
    resultados: ['Aumento del 45% en la tasa de conversión', 'Tiempo de carga reducido a 1.2s', 'Integración exitosa con operadores logísticos locales'],
    linkDemo: 'https://clad-services.github.io/Nova-trend/', 
    tieneAntesDespues: true,
    imgAntes: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=400&auto=format&fit=crop',
    imgDespues: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop'
  },
];

const categorias = ['Todos', 'Diseño Web', 'E-commerce', 'Software a Medida'];

export default function Portafolio() {
  const [filtroActivo, setFiltroActivo] = useState('Todos');
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<any>(null);

  const proyectosFiltrados = proyectos.filter(
    (p) => filtroActivo === 'Todos' || p.categoria === filtroActivo
  );

  return (
    <section id="portafolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Casos de Éxito</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-primary-900">Nuestro Portafolio</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Explora cómo hemos ayudado a empresas a escalar sus operaciones a través de tecnología a medida.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltroActivo(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filtroActivo === cat
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Galería de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosFiltrados.map((proyecto) => (
            <div key={proyecto.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={proyecto.imagen} 
                  alt={proyecto.titulo} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-primary-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {proyecto.categoria}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyecto.tecnologias.map(tech => (
                    <span key={tech} className="text-xs font-medium bg-primary-50 text-primary-600 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 
                  className="text-2xl font-bold text-primary-900 mb-2 cursor-pointer hover:text-primary-600 transition-colors"
                  onClick={() => setProyectoSeleccionado(proyecto)}
                >
                  {proyecto.titulo}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                  {proyecto.descripcionLarga}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <button 
                    onClick={() => setProyectoSeleccionado(proyecto)}
                    className="text-sm font-semibold text-primary-600 hover:text-primary-800 flex items-center"
                  >
                    Ver Detalles <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                  <a 
                    href={proyecto.linkDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-semibold bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors"
                  >
                    <MonitorSmartphone className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Caso de Estudio */}
      {proyectoSeleccionado && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setProyectoSeleccionado(null)}
          />
          <div className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setProyectoSeleccionado(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-bold">
                  {proyectoSeleccionado.categoria}
                </span>
                <span className="text-gray-400 text-sm font-medium flex gap-2">
                  {proyectoSeleccionado.tecnologias.join(' • ')}
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Caso de Estudio: {proyectoSeleccionado.titulo}
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="text-red-800 font-bold text-lg mb-3 flex items-center">
                    <X className="w-5 h-5 mr-2" /> El Problema
                  </h4>
                  <p className="text-red-900/80 leading-relaxed">{proyectoSeleccionado.problema}</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                  <h4 className="text-emerald-800 font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" /> La Solución
                  </h4>
                  <p className="text-emerald-900/80 leading-relaxed">{proyectoSeleccionado.solucion}</p>
                </div>
              </div>

              {/* Sección Antes y Después */}
              {proyectoSeleccionado.tieneAntesDespues && (
                <div className="mb-10">
                  <h4 className="text-xl font-bold text-primary-900 mb-4">Transformación Visual</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative rounded-xl overflow-hidden border-2 border-gray-200">
                      <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded z-10">ANTES</div>
                      <img src={proyectoSeleccionado.imgAntes} alt="Antes" className="w-full h-48 md:h-64 object-cover grayscale opacity-80" />
                    </div>
                    <div className="relative rounded-xl overflow-hidden border-2 border-primary-500 shadow-lg">
                      <div className="absolute top-2 left-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded z-10">DESPUÉS</div>
                      <img src={proyectoSeleccionado.imgDespues} alt="Después" className="w-full h-48 md:h-64 object-cover" />
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-10">
                <h4 className="text-xl font-bold text-primary-900 mb-4">Resultados Clave</h4>
                <ul className="space-y-3">
                  {proyectoSeleccionado.resultados.map((res: string, idx: number) => (
                    <li key={idx} className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                      {res}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA dentro del modal */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-primary-900 p-6 rounded-xl text-white">
                <div>
                  <h4 className="font-bold text-lg">¿Impresionado con los resultados?</h4>
                  <p className="text-primary-200 text-sm mt-1">Podemos hacer lo mismo por tu empresa.</p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <a 
                    href={proyectoSeleccionado.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none text-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center justify-center border border-white/20"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Ver Demo
                  </a>
                  <a 
                    href="https://wa.me/51925928592?text=Hola%20CLAD%20Services,%20quiero%20cotizar%20un%20proyecto%20similar%20a%20su%20demo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none text-center bg-white text-primary-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-colors shadow-lg"
                  >
                    Quiero un sitio así
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}