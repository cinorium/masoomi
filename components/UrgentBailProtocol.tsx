'use client';

import React, { useState } from 'react';
import { BAIL_PROTOCOLS, CHAMBER_INFO } from '@/lib/data';
import { Phone, AlertCircle, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export function UrgentBailProtocol() {
  const [selectedScenario, setSelectedScenario] = useState<number>(0);

  const scenarios = [
    {
      label: 'FIR Lodged / Arrest Apprehended',
      title: 'Anticipatory & Pre-Arrest Protection',
      forum: 'Sessions Court / High Court of Sindh',
      statute: 'Section 498 CrPC',
      action:
        'Immediate petition drafting and urgent motion before the Sessions Judge or High Court Single Bench for grant of interim pre-arrest bail before police can execute custodial arrest.',
      timeline: 'Filing within 2–4 hours during court hours; Duty Judge motion on holidays.',
      docsNeeded: [
        'FIR Copy or Police Station name & District',
        'CNIC of the accused and family contact',
        'Solvent surety ready with original CNIC',
      ],
    },
    {
      label: 'In Custody / Police Remand',
      title: 'Post-Arrest Bail & Remand Challenge',
      forum: 'Area Judicial Magistrate & Sessions Court',
      statute: 'Section 497 CrPC',
      action:
        'Intervention at physical remand stage before the Magistrate to oppose police custody. Moving post-arrest bail petition citing lack of incriminating material or bailable nature of allegations.',
      timeline: 'Immediate appearance at remand hearing; bail argued upon receipt of police diary.',
      docsNeeded: [
        'Arrest memo / Remand order sheet',
        'Copy of FIR from Police Station',
        'Surety documentation and solvency proof',
      ],
    },
    {
      label: 'FIA / NAB Summons / Federal Notice',
      title: 'Regulatory Defense & Division Bench Writs',
      forum: 'Division Bench, High Court of Sindh',
      statute: 'NAO 1999 / PECA 2016 / Article 199',
      action:
        'Legal counsel during call-up inquiries, filing protective constitutional petitions against arbitrary freeze of bank accounts, and moving high-level bail petitions before the Division Bench.',
      timeline: 'Response drafted prior to call-up date; urgent restraining motion filed.',
      docsNeeded: [
        'Call-Up Notice or Inquiry questionnaire',
        'Relevant business/banking transaction records',
        'Identity & authorization credentials',
      ],
    },
    {
      label: 'Detained Without FIR / Missing in Custody',
      title: 'Habeas Corpus & Bailiff Search Motion',
      forum: 'High Court of Sindh (Single Bench) / Sessions Judge',
      statute: 'Section 491 CrPC & Article 199',
      action:
        'Emergency habeas corpus petition citing illegal confinement. The court deputes a Judicial Bailiff to conduct an unannounced raid on the suspected police post to liberate the detainee.',
      timeline: 'Emergency listing same day; Bailiff deputed within 3 to 6 hours.',
      docsNeeded: [
        'Time, date, and location of detention',
        'Names of witnessing family members',
        'Affidavit affirming lack of known registered FIR',
      ],
    },
  ];

  return (
    <section id="urgent-bail" className="py-20 lg:py-28 border-b border-stone-200 bg-[#F4EFE6]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#96722C] font-semibold mb-3">
            <AlertCircle className="w-4 h-4" />
            <span>Emergency Judicial Procedure</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Urgent Bail Protocol & Liberty Defense
          </h2>
          <p className="mt-4 text-base text-slate-600 font-sans leading-relaxed">
            When freedom is jeopardized, hours matter. The chambers maintain an immediate drafting
            and bench-appearance roster for clients facing imminent arrest, police remand, or regulatory detentions.
          </p>
        </div>

        {/* Interactive Situation Advisor */}
        <div className="bg-white border border-stone-300 shadow-xs mb-16 p-6 sm:p-8">
          <div className="border-b border-stone-200 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 font-sans">
                Chamber Diagnostic Helper
              </p>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Select Current Custody or Investigation Status
              </h3>
            </div>
            <div className="text-xs text-stone-500 font-sans flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#96722C]" />
              <span>Chamber Desk Active 24/7 for Bail Emergencies</span>
            </div>
          </div>

          {/* Scenario Buttons (Clean segmented selector) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
            {scenarios.map((sc, index) => {
              const active = selectedScenario === index;
              return (
                <button
                  key={sc.label}
                  type="button"
                  onClick={() => setSelectedScenario(index)}
                  className={`text-left p-3.5 text-xs font-medium transition-all border ${
                    active
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100 hover:text-slate-950'
                  }`}
                >
                  <span className="block text-[10px] uppercase tracking-wider opacity-70 mb-1">
                    Scenario 0{index + 1}
                  </span>
                  <span className="font-semibold block leading-snug">{sc.label}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Scenario Output Grid */}
          <div className="bg-stone-50 border border-stone-200 p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#96722C] font-semibold uppercase tracking-wider mb-1">
                    <span>{scenarios[selectedScenario].statute}</span>
                    <span aria-hidden="true">·</span>
                    <span>{scenarios[selectedScenario].forum}</span>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-slate-900">
                    {scenarios[selectedScenario].title}
                  </h4>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed font-sans">
                  {scenarios[selectedScenario].action}
                </p>

                <div className="pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-2">
                    Action Timeline & Judicial Forum:
                  </p>
                  <p className="text-xs text-stone-600 font-sans">
                    {scenarios[selectedScenario].timeline}
                  </p>
                </div>
              </div>

              {/* Required Documents Column */}
              <div className="lg:col-span-5 bg-white border border-stone-200 p-5 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-900">
                  Required Documentation to Assemble:
                </p>
                <ul className="space-y-2 text-xs text-slate-600 font-sans">
                  {scenarios[selectedScenario].docsNeeded.map((doc) => (
                    <li key={doc} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#96722C] shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
                  <a
                    href={CHAMBER_INFO.primaryPhoneTel}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-900 hover:bg-[#96722C] text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Advocate: 0321 3103004</span>
                  </a>
                  <a
                    href={`https://wa.me/${CHAMBER_INFO.whatsappNumber}?text=Urgent%20Bail%20Brief%3A%20${encodeURIComponent(scenarios[selectedScenario].label)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2 text-xs font-medium text-slate-700 hover:text-slate-950 underline underline-offset-4"
                  >
                    Dispatch Details via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Stage Statutory Bail Framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BAIL_PROTOCOLS.map((bp) => (
            <div
              key={bp.stage}
              className="bg-white border border-stone-300 p-6 flex flex-col justify-between hover:border-slate-900 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                  <span className="font-serif text-lg font-bold text-slate-400 tabular-nums">
                    {bp.stage}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#96722C]">
                    {bp.section}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug">
                  {bp.title}
                </h3>

                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {bp.legalMechanism}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 text-[11px] text-stone-500 font-sans">
                <span className="font-semibold text-slate-800">Timeline: </span>
                <span>{bp.turnaround}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
