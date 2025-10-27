'use client'

import { useState, useEffect } from 'react'
import { Play, Clock, Star, TrendingUp, DollarSign, Zap, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react'

export default function VSLPage() {
  const [videoTime, setVideoTime] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isVideoPlaying) {
      interval = setInterval(() => {
        setVideoTime(prev => {
          const newTime = prev + 1
          if (newTime >= 300 && !showButton) { // 5 minutos
            setShowButton(true)
          }
          if (newTime >= 420 && !showContent) { // 7 minutos
            setShowContent(true)
          }
          return newTime
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isVideoPlaying, showButton, showContent])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header com Countdown */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-center py-3 px-4">
        <div className="flex items-center justify-center gap-2 text-sm font-bold">
          <Clock className="w-4 h-4" />
          <span>⚠️ OFERTA LIMITADA: Solo 12 cupos disponibles</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Headline Principal */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="text-white">¿Cansado de vivir</span><br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              AL LÍMITE FINANCIERO?
            </span>
          </h1>
          
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-4">
              Descubre el ÚNICO método que está generando
            </h2>
            <div className="text-3xl md:text-5xl font-black text-white mb-2">
              $2,200 - $9,000 USD
            </div>
            <p className="text-lg text-green-300">
              CADA MES en renta automática... ¡Incluso mientras duermes!
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-green-400">ATENCIÓN:</strong> Si estás harto de trabajar como esclavo por migajas... 
            Si ya no soportas ver cómo otros viven la vida que TÚ mereces... 
            <span className="text-white font-bold">Este video cambiará tu vida PARA SIEMPRE.</span>
          </p>
        </div>

        {/* Video Section */}
        <div className="bg-gray-900 rounded-3xl p-8 mb-8 shadow-2xl">
          <div className="aspect-video bg-black rounded-2xl relative overflow-hidden mb-6">
            <script src="https://fast.wistia.com/player.js" async></script>
            <script src="https://fast.wistia.com/embed/9zjjw7dgrb.js" async type="module"></script>
            <style dangerouslySetInnerHTML={{
              __html: `
                wistia-player[media-id='9zjjw7dgrb']:not(:defined) { 
                  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/9zjjw7dgrb/swatch'); 
                  display: block; 
                  filter: blur(5px); 
                  padding-top:56.25%; 
                }
              `
            }} />
            <wistia-player media-id="9zjjw7dgrb" aspect="1.7777777777777777"></wistia-player>
          </div>

          {/* Botão que aparece depois de 5 minutos */}
          {showButton && (
            <div className="text-center animate-fade-in">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black text-xl px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl border-2 border-green-400/50 hover:border-green-300">
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6" />
                  ¡QUIERO ACCESO INMEDIATO!
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div className="text-sm font-normal mt-1 text-green-200">
                  Método Renta Automática - Acceso de por vida
                </div>
              </button>
            </div>
          )}
        </div>

        {/* Contenido que aparece depois de 7 minutos */}
        {showContent && (
          <div className="animate-fade-in space-y-12">
            {/* Bullets de Beneficios */}
            <div className="bg-gray-900 rounded-3xl p-8">
              <h3 className="text-3xl font-black text-center mb-8 text-green-400">
                Lo que descubrirás en el Método Renta Automática:
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <DollarSign className="w-8 h-8 text-green-400" />,
                    title: "Sistema de $5,000+ mensuales",
                    desc: "El método exacto que uso para generar entre $2,200 y $9,000 USD cada mes, trabajando máximo 2 horas al día"
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-yellow-400" />,
                    title: "Automatización total",
                    desc: "Cómo configurar el sistema para que genere dinero 24/7, incluso cuando estás durmiendo o de vacaciones"
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
                    title: "Escalamiento rápido",
                    desc: "La estrategia secreta para multiplicar tus ingresos x10 en los primeros 90 días (nadie te enseña esto)"
                  },
                  {
                    icon: <Shield className="w-8 h-8 text-purple-400" />,
                    title: "Sin riesgo ni inversión",
                    desc: "Empiezas con $0. No necesitas experiencia, productos propios ni invertir miles de dólares"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-black/50 rounded-2xl p-6 border border-green-500/20">
                    <div className="flex items-start gap-4">
                      {item.icon}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prova Social */}
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-3xl p-8 border border-green-500/30">
              <h3 className="text-3xl font-black text-center mb-8 text-white">
                Resultados REALES de estudiantes:
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "María González",
                    country: "México",
                    result: "$4,230 USD",
                    time: "en 45 días",
                    testimonial: "No podía creer que fuera tan simple. En menos de 2 meses ya estaba ganando más que en mi trabajo de oficina."
                  },
                  {
                    name: "Carlos Rodríguez",
                    country: "Colombia",
                    result: "$7,890 USD",
                    time: "en 3 meses",
                    testimonial: "Dejé mi trabajo y ahora vivo de esto. Mi familia no puede creer el cambio en nuestras vidas."
                  },
                  {
                    name: "Ana Martínez",
                    country: "Argentina",
                    result: "$3,567 USD",
                    time: "en 30 días",
                    testimonial: "Pensé que era una estafa, pero decidí intentarlo. Mejor decisión de mi vida. ¡Gracias!"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-black/60 rounded-2xl p-6 border border-green-400/30">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                    <div className="text-2xl font-black text-green-400 mb-1">{testimonial.result}</div>
                    <div className="text-sm text-green-300 mb-3">{testimonial.time}</div>
                    <p className="text-gray-300 text-sm mb-4 italic">"{testimonial.testimonial}"</p>
                    <div className="text-white font-bold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.country}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgência e Escassez */}
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-3xl p-8 border-2 border-red-500/50">
              <div className="text-center">
                <h3 className="text-3xl font-black text-white mb-4">
                  ⚠️ ÚLTIMA OPORTUNIDAD ⚠️
                </h3>
                <p className="text-xl text-red-300 mb-6">
                  Solo quedan <span className="text-red-400 font-black">47 cupos</span> disponibles a este precio especial.
                  Después de eso, el precio sube a $497 USD.
                </p>
                
                <div className="bg-black/60 rounded-2xl p-6 mb-6">
                  <div className="text-gray-400 line-through text-2xl mb-2">Precio normal: $497 USD</div>
                  <div className="text-5xl font-black text-green-400 mb-2">$97 USD</div>
                  <div className="text-green-300">Precio especial por tiempo limitado</div>
                </div>

                <div className="flex items-center justify-center gap-4 mb-6">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">Acceso inmediato y de por vida</span>
                </div>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">Garantía de 30 días o tu dinero de vuelta</span>
                </div>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">Soporte personalizado incluido</span>
                </div>

                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black text-2xl px-16 py-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl border-2 border-green-400/50 hover:border-green-300 w-full md:w-auto">
                  <div className="flex items-center justify-center gap-4">
                    <Zap className="w-8 h-8" />
                    ¡SÍ, QUIERO CAMBIAR MI VIDA AHORA!
                    <ArrowRight className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-normal mt-2 text-green-200">
                    Acceso inmediato por solo $97 USD
                  </div>
                </button>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-900 rounded-3xl p-8">
              <h3 className="text-3xl font-black text-center mb-8 text-white">
                Preguntas Frecuentes:
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    q: "¿Necesito experiencia previa?",
                    a: "¡Para nada! El método está diseñado para principiantes. Te guío paso a paso desde cero hasta generar tus primeros $1,000 USD."
                  },
                  {
                    q: "¿Cuánto tiempo necesito invertir?",
                    a: "Máximo 2 horas al día durante las primeras 2 semanas. Después, el sistema funciona prácticamente solo."
                  },
                  {
                    q: "¿Funciona en mi país?",
                    a: "¡SÍ! El método funciona desde cualquier país de Latinoamérica. Solo necesitas internet y ganas de cambiar tu vida."
                  },
                  {
                    q: "¿Qué pasa si no funciona para mí?",
                    a: "Tienes 30 días de garantía total. Si no ves resultados, te devuelvo cada centavo sin preguntas."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-black/50 rounded-2xl p-6 border border-green-500/20">
                    <h4 className="text-xl font-bold text-green-400 mb-3">{faq.q}</h4>
                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-3xl p-12 border-2 border-green-400/50">
              <h3 className="text-4xl font-black text-white mb-6">
                Tu momento es AHORA
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Puedes seguir viviendo la misma vida de siempre... o puedes tomar la decisión que cambiará todo. 
                <span className="text-green-400 font-bold"> La elección es tuya.</span>
              </p>
              
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black text-3xl px-20 py-10 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl border-2 border-green-400/50 hover:border-green-300 pulse-animation">
                <div className="flex items-center justify-center gap-4">
                  <Users className="w-10 h-10" />
                  ¡ÚNETE A LOS GANADORES AHORA!
                  <TrendingUp className="w-10 h-10" />
                </div>
                <div className="text-xl font-normal mt-3 text-green-200">
                  Último día a $97 USD - Mañana sube a $497 USD
                </div>
              </button>
              
              <p className="text-sm text-gray-400 mt-6">
                🔒 Pago 100% seguro | ✅ Garantía de 30 días | 🚀 Acceso inmediato
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
      `}</style>
    </div>
  )
}