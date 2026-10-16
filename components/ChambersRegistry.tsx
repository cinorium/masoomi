'use client';

import React, { useState } from 'react';
import { CHAMBER_INFO } from '@/lib/data';
import { MapPin, Clock, Phone, Mail, Check, Copy, ExternalLink, Building2 } from 'lucide-react';

export function ChambersRegistry() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyAddress = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="chambers-registry" className="py-20 lg:py-28 border-b border-stone-200 bg-[#F4EFE6]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#96722C] font-semibold mb-3">
            <Building2 className="w-4 h-4" />
            <span>Official Chamber Jurisdictions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Chambers & Judicial Registry Venues
          </h2>
          <p className="mt-4 text-base text-slate-600 font-sans leading-relaxed">
            In-person consultations are conducted strictly by prior appointment at our DHA Phase 5
            chambers, or within the High Court of Sindh registry corridors during active bench hours.
          </p>
        </div>

        {/* 2-Column Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {CHAMBER_INFO.locations.map((loc, idx) => (
            <div
              key={loc.name}
              className="bg-white border border-stone-300 p-8 flex flex-col justify-between shadow-xs hover:border-slate-900 transition-colors"
            >
              <div className="space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#96722C] font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Venue 0{idx + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span>{loc.type}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    {loc.name}
                  </h3>
                </div>

                <div className="space-y-4 text-xs font-sans text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <div className="space-y-2 flex-1">
                      <p className="text-slate-900 font-medium leading-relaxed">{loc.address}</p>
                      <button
                        type="button"
                        onClick={() => handleCopyAddress(loc.address, idx)}
                        className="inline-flex items-center gap-1.5 text-[11px] text-[#96722C] hover:text-[#7A5C22] font-semibold uppercase tracking-wider"
                      >
                        {copiedIndex === idx ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span>Address Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Full Address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <Clock className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Chamber Hours:</p>
                      <p className="text-stone-600 mt-0.5">{loc.hours}</p>
                    </div>
                  </div>

                  <div className="bg-stone-50 border border-stone-200 p-3.5 text-stone-600 leading-relaxed">
                    <p>{loc.notes}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    loc.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-[#96722C] transition-colors"
                >
                  <span>Open Directions on Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="text-[11px] uppercase tracking-wider text-stone-400 font-sans">
                  Karachi, Pakistan
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Contact Bar */}
        <div className="bg-white border border-stone-300 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-slate-900">
              Immediate Telephonic Access to Chamber Registry
            </h4>
            <p className="text-xs text-stone-500 font-sans">
              For urgent bail applications, remand hearings, or Vakalatnama execution.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={CHAMBER_INFO.primaryPhoneTel}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-[#96722C] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Direct: 0321 3103004</span>
            </a>

            <a
              href={CHAMBER_INFO.secondaryPhoneTel}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-300 text-slate-800 hover:border-slate-900 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
            >
              <span>Office: {CHAMBER_INFO.secondaryPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
