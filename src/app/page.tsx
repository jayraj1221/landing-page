'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StoryIntro from '@/components/StoryIntro';
import WhatIsCrochet from '@/components/WhatIsCrochet';
import EvolutionTimeline from '@/components/EvolutionTimeline';
import ArtGallery from '@/components/ArtGallery';
import ProcessFlow from '@/components/ProcessFlow';
import MbaBusinessSection from '@/components/MbaBusinessSection';
import BusinessModelFlow from '@/components/BusinessModelFlow';
import ProductCategories from '@/components/ProductCategories';
import ModernSustainability from '@/components/ModernSustainability';
import GrowthOpportunity from '@/components/GrowthOpportunity';
import InstagramStallConversion from '@/components/InstagramStallConversion';
import Footer from '@/components/Footer';
import OrderInquiryModal from '@/components/OrderInquiryModal';

export default function Home() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-parchment-50 relative selection:bg-terracotta/25 selection:text-espresso-900">
      {/* Sticky Header with Navigation & Modal Trigger */}
      <Navbar onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* 01. Brand & Narrative Story */}
      <StoryIntro />

      {/* 02. What is Crochet? Structural Mastery */}
      <WhatIsCrochet />

      {/* 03. Evolutionary Timeline: Tradition to Global Market */}
      <EvolutionTimeline />

      {/* 04. Curated Archive / Art of Crochet Gallery */}
      <ArtGallery onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* 05. The 5-Stage Craft Process */}
      <ProcessFlow />

      {/* 06. MBA Capstone Strategy, Market Sizing & Unit Economics */}
      <MbaBusinessSection />

      {/* 07. The Value Chain & Business Model Flow */}
      <BusinessModelFlow />

      {/* 08. Curated Product Spectrum */}
      <ProductCategories onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* 09. Modern Craft & Zero-Waste Sustainability */}
      <ModernSustainability />

      {/* 10. Future Horizons & Expansion Engine */}
      <GrowthOpportunity />

      {/* 11. Exhibition Stall QR & Instagram Conversion Experience */}
      <InstagramStallConversion onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Calm Luxury Editorial Footer */}
      <Footer />

      {/* Commission & Stall Visitor Inquiry Modal */}
      <OrderInquiryModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </main>
  );
}
