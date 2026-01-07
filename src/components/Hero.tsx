import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Truck, Clock, Sparkles, Zap, Award } from 'lucide-react';

interface HeroProps {
  onShopAll: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopAll }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-background.jpg)',
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      {/* Bottom gradient transition to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 z-10">
        <div className="max-w-5xl mx-auto">

          {/* Content */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-gold-400/50 shadow-lg shadow-gold-500/20">
                <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
                <span className="text-sm font-bold tracking-wide uppercase text-gold-400">
                  BIORHYTHM™ Research Series
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
                <span className="text-gold-400 drop-shadow-lg">Where </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent drop-shadow-lg">
                    Science
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8 Q50 2 100 8 T198 8" stroke="url(#underline-gradient)" strokeWidth="4" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#F5D77A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br className="hidden sm:block" />
                <span className="text-gold-400 drop-shadow-lg">Meets Rhythm</span>
              </h1>

              <p className="text-lg md:text-xl text-gold-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Precision-grade research compounds and laboratory reference materials developed for educational, analytical, and scientific study.
              </p>
            </div>

            {/* Animated Pulse Line */}
            <div className="flex justify-center mb-10">
              <div className="relative">
                <svg className="w-80 md:w-96 h-12" viewBox="0 0 300 40" fill="none">
                  <path
                    d="M0 20 L60 20 L80 20 L100 5 L120 35 L140 12 L160 28 L180 20 L220 20 L240 5 L260 35 L280 12 L300 20"
                    stroke="url(#line-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#0D5C4B" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gold-500 rounded-full animate-ping" />
              </div>
            </div>

            {/* Feature Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
              <div className="group flex items-center gap-3 p-4 bg-black/40 backdrop-blur-sm rounded-2xl border border-gold-400/30 shadow-sm hover:shadow-lg hover:border-gold-400/60 transition-all duration-300 hover:-translate-y-1">
                <div className="p-2.5 bg-gradient-to-br from-magenta-500 to-magenta-600 rounded-xl text-white shadow-lg shadow-magenta-500/30 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gold-400 text-sm">Formulation Integrity</p>
                  <p className="text-xs text-gold-200/70">Consistency Guaranteed</p>
                </div>
              </div>

              <div className="group flex items-center gap-3 p-4 bg-black/40 backdrop-blur-sm rounded-2xl border border-gold-400/30 shadow-sm hover:shadow-lg hover:border-gold-400/60 transition-all duration-300 hover:-translate-y-1">
                <div className="p-2.5 bg-gradient-to-br from-magenta-500 to-magenta-600 rounded-xl text-white shadow-lg shadow-magenta-500/30 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gold-400 text-sm">Research-Grade</p>
                  <p className="text-xs text-gold-200/70">Purity Standards</p>
                </div>
              </div>

              <div className="group flex items-center gap-3 p-4 bg-black/40 backdrop-blur-sm rounded-2xl border border-gold-400/30 shadow-sm hover:shadow-lg hover:border-gold-400/60 transition-all duration-300 hover:-translate-y-1">
                <div className="p-2.5 bg-gradient-to-br from-magenta-500 to-magenta-600 rounded-xl text-white shadow-lg shadow-magenta-500/30 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gold-400 text-sm">Lab Reference</p>
                  <p className="text-xs text-gold-200/70">Academic Reliability</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={onShopAll}
                className="group relative px-10 py-5 bg-gradient-to-r from-gold-500 to-gold-400 text-magenta-900 rounded-2xl font-bold text-lg shadow-2xl shadow-gold-500/40 hover:shadow-gold-500/50 hover:from-gold-400 hover:to-gold-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Explore Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gold-400/30">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gold-300">
                <div className="p-1.5 bg-magenta-500/20 rounded-lg">
                  <Truck className="w-4 h-4 text-gold-400" />
                </div>
                <span>Fast Shipping</span>
              </div>
              <div className="w-px h-6 bg-gradient-to-b from-transparent via-gold-400/50 to-transparent" />
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gold-300">
                <div className="p-1.5 bg-magenta-500/20 rounded-lg">
                  <Clock className="w-4 h-4 text-gold-400" />
                </div>
                <span>24/7 Support</span>
              </div>
              <div className="w-px h-6 bg-gradient-to-b from-transparent via-gold-400/50 to-transparent hidden sm:block" />
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gold-300">
                <div className="p-1.5 bg-magenta-500/20 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                </div>
                <span>Secure Checkout</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
