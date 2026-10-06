'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Compass, Palette, HeartHandshake, Gift, Sparkles } from 'lucide-react';

interface Step {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  metric: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Step[] = [
    {
      num: '01',
      title: 'Ethical Fiber Selection',
      subtitle: 'THREAD & TEXTURE',
      desc: 'We curate premium 100% combed cotton, lustrous mercerized yarns, and hypoallergenic organic milk fibers. Colors are custom-swatched to match client photographs with lifelike fidelity.',
      metric: 'Zero synthetic polyester microplastics',
      icon: Scissors,
    },
    {
      num: '02',
      title: 'Ergonomic Hook Mastery',
      subtitle: 'GAUGE & TENSION',
      desc: 'Our artisans calibrate custom hook gauges (from 1.5mm micro-hooks for sacred idol jewelry to 4.0mm hooks for structural tote bags), ensuring uniform stitch density that holds its shape forever.',
      metric: 'Tension deviation < 2% across 5,000 stitches',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Bespoke Memory Translation',
      subtitle: 'PATTERN TOPOLOGY',
      desc: 'For personalized dolls, 2D client photographs (weddings, graduations, pets) are reverse-engineered into 3D volumetric stitch patterns before a single loop is pulled.',
      metric: '100% custom pattern formulation per order',
      icon: Palette,
    },
    {
      num: '04',
      title: 'Rhythmic Sculptural Weave',
      subtitle: 'THE ARTISAN TOUCH',
      desc: 'Through thousands of single and double crochet stitches, facial features are embroidered by hand. No two dolls share identical expressions; each carries an authentic human smile.',
      metric: 'Average 25–45 hours of patient handwork',
      icon: HeartHandshake,
    },
    {
      num: '05',
      title: 'Heirloom Packaging & Delivery',
      subtitle: 'THE MAGIC UNBOXING',
      desc: 'Every piece is tagged with the Kalapriti seal, nestled in recyclable linen-lined boxes, and accompanied by a handwritten certificate of authenticity from founder Tisha Vaghasiya.',
      metric: 'Zero-waste compostable luxury packaging',
      icon: Gift,
    },
  ];

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-parchment-50 overflow-hidden border-t border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
              Methodology & Precision
            </span>
            <h2 className="mt-3 font-editorial-heading text-4xl sm:text-6xl text-espresso-900 leading-[1.05] font-light">
              FROM UNSPUN THREAD TO
              <br />
              <span className="italic text-terracotta-dark">TIMELESS HEIRLOOM.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-espresso-700 font-light leading-relaxed">
              Trace the rigorous 5-stage transformation that turns humble cotton into treasured emotional capital.
            </p>
          </motion.div>
        </div>

        {/* Interactive Thread Path / Stepper Grid */}
        <div className="relative">
          {/* Animated Connecting SVG Thread for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-12 pointer-events-none z-0">
            <svg className="w-full h-24" viewBox="0 0 1200 100" fill="none" preserveAspectRatio="none">
              <path
                d="M 50,50 Q 200,10 350,50 T 650,50 T 950,50 T 1150,50"
                stroke="#D97752"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeOpacity="0.35"
              />
            </svg>
          </div>

          {/* 5 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px 60px 0px' }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between border transform-gpu ${
                    isSelected
                      ? 'bg-parchment-100 border-terracotta shadow-soft-lift scale-[1.02]'
                      : 'bg-white/80 hover:bg-parchment-100 border-parchment-300 hover:border-parchment-400'
                  }`}
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-editorial-heading text-2xl font-bold ${
                        isSelected ? 'text-terracotta' : 'text-espresso-600'
                      }`}>
                        {step.num}
                      </span>
                      <div className={`p-2.5 rounded-2xl transition-colors ${
                        isSelected ? 'bg-terracotta text-white shadow-sm' : 'bg-parchment-200 text-espresso-700'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <span className="text-[10px] uppercase tracking-wider font-semibold text-terracotta-dark block mb-1">
                      {step.subtitle}
                    </span>
                    <h3 className="font-editorial-heading text-lg font-semibold text-espresso-900 leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-xs text-espresso-700 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Metric footer */}
                  <div className="mt-6 pt-3 border-t border-parchment-200/80">
                    <span className="text-[10px] font-medium text-espresso-600 flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3 text-terracotta flex-shrink-0" />
                      <span>{step.metric}</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
