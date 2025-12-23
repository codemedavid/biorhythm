import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Truck, Clock, Sparkles, Zap, Award } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

interface HeroProps {
  onShopAll: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopAll }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { siteSettings } = useSiteSettings();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Use settings or fallbacks if loading/missing
  const badgeText = siteSettings?.hero_badge_text || 'Premium Peptide Solutions';
  const tagline = siteSettings?.hero_tagline || 'Quality-tested products. Reliable performance. Trusted by our community.';
  const description = siteSettings?.hero_description || 'Your all-in-one destination for high-quality peptides, peptide pens, and essential accessories for a smooth and confident wellness routine.';

  return (
    <div className="relative min-h-[85vh] bg-gradient-to-br from-gray-50 via-white to-magenta-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top gradient bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-magenta-600 via-magenta-400 to-teal-400" />

        {/* Floating orbs */}
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-gradient-to-br from-magenta-400/20 to-magenta-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 left-[5%] w-56 h-56 bg-gradient-to-br from-teal-400/15 to-teal-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-[20%] w-64 h-64 bg-gradient-to-br from-magenta-300/15 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-gradient-to-tr from-magenta-500/10 to-transparent rounded-full blur-3xl" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

        {/* Decorative pulse lines */}
        <svg className="absolute top-1/4 left-0 w-full h-20 opacity-10" viewBox="0 0 1200 80" fill="none">
          <path d="M0 40 L200 40 L250 10 L300 70 L350 25 L400 55 L450 40 L1200 40" stroke="url(#pulse-gradient)" strokeWidth="2" />
          <defs>
            <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E91E63" stopOpacity="0" />
              <stop offset="50%" stopColor="#E91E63" />
              <stop offset="100%" stopColor="#00B3A4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 z-10">
        <div className="max-w-5xl mx-auto">

          {/* Content */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-magenta-200 shadow-lg shadow-magenta-500/10">
                <Sparkles className="w-4 h-4 text-magenta-500 animate-pulse" />
                <span className="text-sm font-bold tracking-wide uppercase bg-gradient-to-r from-magenta-600 to-magenta-500 bg-clip-text text-transparent">
                  {badgeText}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
                <span className="text-gray-900">Your </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-magenta-600 via-magenta-500 to-pink-500 bg-clip-text text-transparent">
                    Peptide
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8 Q50 2 100 8 T198 8" stroke="url(#underline-gradient)" strokeWidth="4" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#E91E63" />
                        <stop offset="100%" stopColor="#FF4F9A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br className="hidden sm:block" />
                <span className="text-gray-900">Journey Starts Here</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {description}
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
                      <stop offset="0%" stopColor="#E91E63" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#E91E63" />
                      <stop offset="100%" stopColor="#00B3A4" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-magenta-500 rounded-full animate-ping" />
              </div>
            </div>

            {/* Feature Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
              <div className="group flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-magenta-200 transition-all duration-300 hover:-translate-y-1">
                <div className="p-2.5 bg-gradient-to-br from-magenta-500 to-magenta-600 rounded-xl text-white shadow-lg shadow-magenta-500/30 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Lab Tested</p>
                  <p className="text-xs text-gray-500">99%+ Purity</p>
                </div>
              </div>

              <div className="group flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300 hover:-translate-y-1">
                <div className="p-2.5 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl text-white shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Fast Acting</p>
                  <p className="text-xs text-gray-500">Premium Quality</p>
                </div>
              </div>

              <div className="group flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-magenta-200 transition-all duration-300 hover:-translate-y-1">
                <div className="p-2.5 bg-gradient-to-br from-magenta-400 to-pink-500 rounded-xl text-white shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Trusted</p>
                  <p className="text-xs text-gray-500">By Community</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={onShopAll}
                className="group relative px-10 py-5 bg-gradient-to-r from-magenta-600 to-magenta-500 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-magenta-500/40 hover:shadow-magenta-500/50 hover:from-magenta-500 hover:to-magenta-400 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Shop All Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-200/50">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-600">
                <div className="p-1.5 bg-teal-100 rounded-lg">
                  <Truck className="w-4 h-4 text-teal-600" />
                </div>
                <span>Fast Shipping</span>
              </div>
              <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-600">
                <div className="p-1.5 bg-magenta-100 rounded-lg">
                  <Clock className="w-4 h-4 text-magenta-600" />
                </div>
                <span>24/7 Support</span>
              </div>
              <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden sm:block" />
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-600">
                <div className="p-1.5 bg-green-100 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
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
