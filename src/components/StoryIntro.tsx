'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Quote } from 'lucide-react';

export default function StoryIntro() {
  return (
    <section id="story" className="relative py-24 sm:py-32 bg-parchment-100 overflow-hidden border-t border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Editorial Statement */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-parchment-200 border border-parchment-300 text-espresso-700 text-xs uppercase tracking-widest font-semibold mb-4">
                <Sparkles className="h-3.5 w-3.5 text-terracotta" />
                The Kalapriti Narrative
              </div>
              <h2 className="font-editorial-heading text-4xl sm:text-6xl text-espresso-900 leading-[1.08] font-light">
                More than a craft.
                <br />
                <span className="italic font-normal text-terracotta">A story woven</span> by hand.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-espresso-700 text-base sm:text-lg font-light leading-relaxed"
            >
              <p>
                In an era dominated by hyper-speed mass manufacturing and synthetic disposable novelties,
                <strong className="font-semibold text-espresso-900"> Kalapriti</strong> reclaims the sacred sanctity of the human touch.
              </p>
              <p>
                Founded by <strong className="font-semibold text-espresso-900">Tisha Vaghasiya</strong>, Kalapriti was born from a singular conviction:
                that an ordinary strand of cotton yarn, guided by mindful patience and rhythmic hook strokes, can capture the intangible warmth of a human relationship.
              </p>
              <blockquote className="p-6 rounded-2xl bg-parchment-50 border-l-4 border-terracotta shadow-sm italic text-espresso-800 text-base font-serif relative">
                <Quote className="h-6 w-6 text-terracotta/30 absolute top-3 right-3" />
                "When you hold a Kalapriti piece, you aren't holding factory output. You are holding someone's hours, someone's quiet prayer, and a tangible memory that will outlast trends."
                <footer className="not-italic text-xs font-sans uppercase tracking-widest text-espresso-600 mt-2 font-semibold">
                  — Tisha Vaghasiya, Founder & Creative Director
                </footer>
              </blockquote>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-parchment-300"
            >
              <div>
                <p className="font-editorial-heading text-3xl font-semibold text-espresso-900">100%</p>
                <p className="text-xs uppercase tracking-wider text-espresso-600">Manual Hooking</p>
              </div>
              <div>
                <p className="font-editorial-heading text-3xl font-semibold text-terracotta">0%</p>
                <p className="text-xs uppercase tracking-wider text-espresso-600">Microplastics</p>
              </div>
              <div>
                <p className="font-editorial-heading text-3xl font-semibold text-sage-dark">Lifetime</p>
                <p className="text-xs uppercase tracking-wider text-espresso-600">Keepsake Value</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Layered Editorial Imagery */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9 }}
              className="relative aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src="/assets/custom-grandparents.jpg"
                alt="Kalapriti Custom Keepsake - Grandparents holding baby on natural wood slice"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/70 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-widest text-terracotta-light font-semibold">
                  Custom Memory In Clay & Cotton
                </span>
                <p className="font-editorial-heading text-2xl font-light mt-1">
                  Three Generations, One Woven Heirloom
                </p>
                <p className="text-xs text-parchment-200 mt-1 max-w-sm">
                  Created from a client's multi-generational family portrait, mounted permanently on a polished wood slice.
                </p>
              </div>
            </motion.div>

            {/* Overlapping secondary photo for high fashion editorial depth */}
            <motion.div
              initial={{ opacity: 0, x: 25, y: 25 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="hidden sm:block absolute -bottom-10 -left-10 w-48 sm:w-56 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-parchment-200"
            >
              <Image
                src="/assets/bouquet-sunflower.jpg"
                alt="Sunflower Bouquet with handcrafted bee"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-espresso-900/80 p-2 text-center">
                <p className="text-[10px] text-white font-medium uppercase tracking-wider">
                  Everlasting Florals
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
