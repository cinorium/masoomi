'use client';

import React from 'react';
import Image from 'next/image';
import { CHAMBER_INFO } from '@/lib/data';
import { ArrowRight, Phone, ShieldAlert, FileText, Scale } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Operational Utility Ribbon - Clean unboxed text with typographic separators */}
        <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs uppercase tracking-wider text-stone-500 font-sans pb-8 border-b border-stone-200/80 mb-10">
          <span className="font-semibold text-slate-800">
            Advocate Syed Shahbaz Ali Shah Masoomi
          </span>
          <span aria-hidden="true" className="text-stone-300">
            ·
          </span>
          <span>High Court of Sindh Enrolled</span>
          <span aria-hidden="true" className="text-stone-300">
            ·
          </span>
          <span>DHA Phase 5 Chambers</span>
          <span aria-hidden="true" className="text-stone-300">
            ·
          </span>
          <span>Karachi Bar Association</span>
          <span aria-hidden="true" className="text-stone-300">
            ·
          </span>
          <span className="text-[#96722C] font-semibold">24/7 Urgent Bail Motion Roster</span>
        </div>

        {/* 2-Column Split: Editorial Typography & Chambers Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Column 1: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#96722C]">
                <Scale className="w-3.5 h-3.5" />
                <span>Litigation, Defense & Judicial Relief</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] text-balance">
                Formidable legal defense and constitutional advocacy before the High Court of Sindh.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
                Presided over by Advocate Syed Shahbaz Ali Shah Masoomi, the chambers provide
                decisive representation in criminal defense, expedited bail motions, FIA & NAB
                accountability proceedings, constitutional writs, and complex property litigation across Karachi.
              </p>
            </div>

            {/* Core Action Points */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#urgent-bail"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-[#96722C] text-white text-xs font-semibold uppercase tracking-widest transition-all rounded-sm shadow-xs"
                >
                  <ShieldAlert className="w-4 h-4 text-amber-300" />
                  <span>Urgent Bail Protocol</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#practice-areas"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-stone-300 hover:border-slate-900 bg-white text-slate-800 text-xs font-semibold uppercase tracking-widest transition-colors rounded-sm"
                >
                  <FileText className="w-4 h-4 text-stone-500" />
                  <span>Practice Jurisdictions</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-500 font-sans pt-2">
                <span>Immediate Chamber Access:</span>
                <a
                  href={CHAMBER_INFO.primaryPhoneTel}
                  className="font-bold text-slate-900 hover:text-[#96722C] underline underline-offset-4"
                >
                  {CHAMBER_INFO.primaryPhone}
                </a>
                <span aria-hidden="true" className="text-stone-300">
                  ·
                </span>
                <span>Secondary Line:</span>
                <a
                  href={CHAMBER_INFO.secondaryPhoneTel}
                  className="text-slate-700 hover:text-[#96722C]"
                >
                  {CHAMBER_INFO.secondaryPhone}
                </a>
              </div>
            </div>

            {/* Quiet 3-Metric Proof Strip (Clean, unboxed, strictly tabular) */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-200 text-xs font-sans">
              <div>
                <p className="font-serif text-2xl font-bold text-slate-900 tabular-nums">24/7</p>
                <p className="text-stone-500 mt-1 uppercase tracking-wider text-[11px]">
                  Emergency Motion Roster
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-slate-900 tabular-nums">High Court</p>
                <p className="text-stone-500 mt-1 uppercase tracking-wider text-[11px]">
                  Sindh Enrolled Chambers
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-slate-900 tabular-nums">&lt; 2 Hours</p>
                <p className="text-stone-500 mt-1 uppercase tracking-wider text-[11px]">
                  Rapid Bail Drafting
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Authentic Chambers Visual (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:h-full min-h-[340px] w-full border border-stone-300 bg-stone-100 overflow-hidden shadow-xs">
              <Image
                src="/images/chambers_study.jpg"
                alt="Masoomi Law Associates Chambers Library and Brief Desk"
                fill
                priority
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif text-sm font-semibold tracking-wide">
                  Chamber Library & Case Record Desks
                </p>
                <p className="text-[11px] text-stone-200 mt-0.5 font-sans">
                  PLD, SCMR, and High Court statutory archives · Karachi
                </p>
              </div>
            </div>
            <p className="text-[11px] text-stone-400 font-sans italic mt-2 text-right">
              Tauheed Commercial Chambers, DHA Phase 5, Karachi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
