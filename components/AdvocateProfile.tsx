'use client';

import React from 'react';
import Image from 'next/image';
import { CHAMBER_INFO } from '@/lib/data';
import { Award, BookOpen, ShieldCheck, Scale, Phone } from 'lucide-react';

export function AdvocateProfile() {
  return (
    <section id="advocate-profile" className="py-20 lg:py-28 border-b border-stone-200 bg-[#F4EFE6]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Column 1: Bio and Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#96722C] font-semibold mb-2">
                <Scale className="w-4 h-4" />
                <span>Head of Practice · Chambers Profile</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Advocate Syed Shahbaz Ali Shah Masoomi
              </h2>
              {/* Clean unboxed credentials list with typographic separators */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#96722C] mt-3 font-sans">
                {CHAMBER_INFO.credentials.map((cred, idx) => (
                  <React.Fragment key={cred}>
                    {idx > 0 && (
                      <span aria-hidden="true" className="text-stone-300">
                        ·
                      </span>
                    )}
                    <span>{cred}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Editorial Narrative with Elegant Drop Cap */}
            <div className="space-y-5 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
              <p>
                <span className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 float-left mr-3 mt-1 leading-none">
                  A
                </span>
                dvocate Syed Shahbaz Ali Shah Masoomi presides over a dynamic litigation and
                advisory practice founded on meticulous statutory mastery and fearless courtroom
                tenacity. Enrolled with the High Court of Sindh and actively representing clients
                before Federal Accountability Benches, Sessions Courts, and the Karachi Judicial
                Complex, Advocate Masoomi formulates robust defenses for individuals and entities
                facing substantial liberty or proprietary jeopardy.
              </p>

              <p className="text-base text-slate-600">
                His practice centers on the conviction that judicial victory is determined long
                before final arguments are delivered — during the granular dissection of police
                challans, the scrutiny of chain of custody, and the forensic cross-examination of
                prosecution witnesses. Every constitutional writ, bail motion, or plaint originating
                from the chambers is drafted with scrupulous fidelity to Pakistani jurisprudence and
                Supreme Court precedents.
              </p>
            </div>

            {/* Three Institutional Chamber Standards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-300">
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest text-slate-900 font-bold flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#96722C]" />
                  <span>Statutory Rigor</span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Every legal pleading is anchored in verified statutes, high court citations, and
                  substantive case law.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest text-slate-900 font-bold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#96722C]" />
                  <span>Direct Counsel</span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Personal bench appearances before High Court and Sessions Judges by Advocate
                  Masoomi himself.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest text-slate-900 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#96722C]" />
                  <span>Absolute Privilege</span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Strict legal professional confidentiality under Article 9 of the
                  Qanun-e-Shahadat Order.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CHAMBER_INFO.primaryPhoneTel}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 hover:text-[#96722C] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#96722C]" />
                <span>Schedule a Confidential Chamber Brief: 0321 3103004</span>
              </a>
            </div>
          </div>

          {/* Column 2: Architectural Visual of High Court of Sindh (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full border border-stone-300 bg-stone-100 overflow-hidden shadow-xs">
              <Image
                src="/images/high_court.jpg"
                alt="High Court of Sindh, Karachi colonial facade"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif text-sm font-semibold tracking-wide">
                  High Court of Sindh · Karachi
                </p>
                <p className="text-[11px] text-stone-200 mt-0.5 font-sans">
                  Historic neoclassical judicial corridors on Court Road
                </p>
              </div>
            </div>

            <div className="bg-white border border-stone-200 p-5 space-y-2 text-xs font-sans text-slate-600">
              <p className="font-semibold text-slate-900 uppercase tracking-wider text-[11px]">
                Bar Enrolment & Compliance Record
              </p>
              <p>
                Enrolled under the Sindh Bar Council and practicing in continuous standing.
                Authorized to appear before all subordinate courts, tribunals, and the High Court
                of Sindh across all territorial circuits (Karachi, Hyderabad, Sukkur, Larkana, and Mirpurkhas).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
