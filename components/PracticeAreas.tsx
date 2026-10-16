'use client';

import React, { useState } from 'react';
import { PRACTICE_AREAS, PracticeArea } from '@/lib/data';
import { PracticeAreaModal } from './PracticeAreaModal';
import { ArrowUpRight, Scale } from 'lucide-react';

interface PracticeAreasProps {
  onSelectPracticeArea?: (id: string) => void;
}

export function PracticeAreas({ onSelectPracticeArea }: PracticeAreasProps) {
  const [filter, setFilter] = useState<string>('all');
  const [activeModalArea, setActiveModalArea] = useState<PracticeArea | null>(null);

  const categories = [
    { id: 'all', label: 'All Jurisdictions' },
    { id: 'criminal', label: 'Criminal Defense & Bail' },
    { id: 'regulatory', label: 'FIA & NAB White Collar' },
    { id: 'civil', label: 'Civil Litigation' },
    { id: 'property', label: 'Property & Tenancy' },
    { id: 'family-service', label: 'Family & Service Tribunal' },
  ];

  const filteredAreas = PRACTICE_AREAS.filter((pa) => {
    if (filter === 'all') return true;
    if (filter === 'criminal') return pa.category === 'criminal';
    if (filter === 'regulatory') return pa.category === 'regulatory';
    if (filter === 'civil') return pa.category === 'civil';
    if (filter === 'property') return pa.category === 'property';
    if (filter === 'family-service')
      return pa.category === 'family' || pa.category === 'service';
    return true;
  });

  const handleSelectForBrief = (id: string) => {
    if (onSelectPracticeArea) {
      onSelectPracticeArea(id);
    }
    const target = document.getElementById('case-evaluation');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="practice-areas" className="py-20 lg:py-28 border-b border-stone-200 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#96722C] font-semibold mb-3">
            <Scale className="w-4 h-4" />
            <span>Chambers Practice Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Practice Areas & Judicial Forums
          </h2>
          <p className="mt-4 text-base text-slate-600 font-sans leading-relaxed">
            Advocate Syed Shahbaz Ali Shah Masoomi conducts proceedings across all major
            jurisdictional benches in Karachi — from Trial Courts and Special Statutory Tribunals to the High Court of Sindh.
          </p>
        </div>

        {/* Filter Navigation (Interactive button tabs) */}
        <div className="flex flex-wrap items-center gap-2 pb-8 mb-10 border-b border-stone-200">
          {categories.map((cat) => {
            const active = filter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs ${
                  active
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-stone-100 text-slate-700 hover:bg-stone-200 hover:text-slate-950'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((pa) => (
            <article
              key={pa.id}
              className="bg-white border border-stone-300 p-7 flex flex-col justify-between hover:border-slate-900 transition-all shadow-xs group"
            >
              <div className="space-y-4">
                {/* Clean unboxed metadata with typographic separators */}
                <div className="flex items-center gap-2 text-xs text-stone-500 font-sans">
                  <span className="font-semibold text-slate-800">{pa.romanId}</span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate">{pa.court}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-slate-900 leading-snug group-hover:text-[#96722C] transition-colors">
                  {pa.title}
                </h3>

                <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3">
                  {pa.description}
                </p>

                {/* Statutory Basis Highlights (Unboxed text) */}
                <div className="pt-2">
                  <p className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
                    Primary Statutes:
                  </p>
                  <p className="text-xs text-slate-700 font-sans line-clamp-2">
                    {pa.statutoryBasis.slice(0, 2).join(' · ')}
                  </p>
                </div>
              </div>

              {/* Card Footer with clean actionable trigger */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalArea(pa)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-[#96722C] transition-colors"
                >
                  <span>Procedural Scope & Checklist</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#96722C]" />
                </button>

                {pa.isUrgent && (
                  <span className="text-[11px] font-semibold text-[#96722C] uppercase tracking-wider">
                    24/7 Filing
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep-Dive Modal */}
      <PracticeAreaModal
        practiceArea={activeModalArea}
        onClose={() => setActiveModalArea(null)}
        onSelectForBrief={handleSelectForBrief}
      />
    </section>
  );
}
