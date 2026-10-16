'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { UrgentBailProtocol } from '@/components/UrgentBailProtocol';
import { PracticeAreas } from '@/components/PracticeAreas';
import { AdvocateProfile } from '@/components/AdvocateProfile';
import { CaseEvaluationForm } from '@/components/CaseEvaluationForm';
import { ChambersRegistry } from '@/components/ChambersRegistry';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<string>('bail-matters');

  const handleSelectPracticeArea = (id: string) => {
    setSelectedPracticeArea(id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-slate-800 selection:bg-[#EBE2D3] selection:text-[#7A5C22]">
      {/* 3-Zone Contract Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Editorial Hero */}
        <Hero />

        {/* Emergency Bail Protocol & Liberty Defense */}
        <UrgentBailProtocol />

        {/* Practice Areas Catalog with Deep-Dive Inspector */}
        <PracticeAreas onSelectPracticeArea={handleSelectPracticeArea} />

        {/* Head of Practice & High Court Jurisprudence */}
        <AdvocateProfile />

        {/* Confidential Case Evaluation & Brief Intake */}
        <CaseEvaluationForm
          key={selectedPracticeArea}
          initialPracticeAreaId={selectedPracticeArea}
        />

        {/* Official Chambers Registry & Court Corridors */}
        <ChambersRegistry />
      </main>

      {/* Institutional Bar Council Compliant Footer */}
      <Footer />
    </div>
  );
}
