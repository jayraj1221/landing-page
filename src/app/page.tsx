'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VisionMission from '@/components/VisionMission';
import StoryIntro from '@/components/StoryIntro';
import ProductCategories from '@/components/ProductCategories';
import WhatIsCrochet from '@/components/WhatIsCrochet';
import ProcessFlow from '@/components/ProcessFlow';
import ArtGallery from '@/components/ArtGallery';
import ModernSustainability from '@/components/ModernSustainability';
import InstagramStallConversion from '@/components/InstagramStallConversion';
import Footer from '@/components/Footer';
import OrderInquiryModal from '@/components/OrderInquiryModal';

export default function Home() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [modalInitialCategory, setModalInitialCategory] = useState<string | undefined>(undefined);
  const [modalInitialDetails, setModalInitialDetails] = useState<string | undefined>(undefined);

  const handleOpenOrderModal = (category?: string, details?: string) => {
    setModalInitialCategory(category);
    setModalInitialDetails(details);
    setIsOrderModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-parchment-50 relative selection:bg-terracotta/25 selection:text-espresso-900">
      {/* 00. Header with Prominent Brand Logo & Clean Navigation */}
      <Navbar onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* 01. The Welcome / Magic Door Hero (Section 01 of Brief) */}
      <Hero onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* 02. Vision & Mission Cards (Section 02 of Brief) */}
      <VisionMission />

      {/* 03. The Kalapriti Story & Journey (Section 03 of Brief) */}
      <StoryIntro />

      {/* 04. Product Highlights: "A Little of What We Create" (Section 04 of Brief) */}
      <ProductCategories onOpenOrderModal={(cat, det) => handleOpenOrderModal(cat, det)} />

      {/* 05. The Craft: Machine-Defying Geometry & 100% Hand-Hooked (Needful context) */}
      <WhatIsCrochet />

      {/* 06. The 5-Stage Craft Methodology: Unspun Thread to Heirloom */}
      <ProcessFlow />

      {/* 07. Curated Archive Gallery: Close-Up Inspection of Handmade Pieces */}
      <ArtGallery onOpenOrderModal={(cat, det) => handleOpenOrderModal(cat, det)} />

      {/* 08. Conscious Craft & Zero-Waste Sustainability */}
      <ModernSustainability />

      {/* 09. Instagram Follow + Founder Details + Final CTA (Sections 05, 06, 07 of Brief) */}
      <InstagramStallConversion onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* 10. Calm Luxury Editorial Footer */}
      <Footer />

      {/* 11. Bespoke Commission & Stall Visitor Inquiry Modal */}
      <OrderInquiryModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialCategory={modalInitialCategory}
        initialDetails={modalInitialDetails}
      />
    </main>
  );
}
