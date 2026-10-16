'use client';

import React, { useState } from 'react';
import { CHAMBER_INFO } from '@/lib/data';
import { Shield, X, Phone, Scale, FileText } from 'lucide-react';

export function Footer() {
  const [modalType, setModalType] = useState<'compliance' | 'privilege' | 'clerk' | null>(null);

  const modalContents = {
    compliance: {
      title: 'Sindh Bar Council Regulatory Disclaimer',
      text: 'Under the Legal Practitioners and Bar Councils Act 1973 and the rules formulated by the Sindh Bar Council and Pakistan Bar Council, this digital publication is solely for institutional informational purposes and does not constitute formal legal advertisement, public solicitation, or a guarantee of outcome. Formal legal representation and advocate-client relationship commence strictly upon formal execution of a Vakalatnama, chamber retainer agreement, and payment of the prescribed court filing fees.',
    },
    privilege: {
      title: 'Legal Professional Privilege & Discretion',
      text: 'All communications, initial briefs, documents, and disclosures transmitted to Masoomi Law Associates are protected by inviolable legal professional privilege pursuant to Article 9, 10, and 11 of the Qanun-e-Shahadat Order 1984. No information submitted in confidence will be disclosed to investigating agencies, police authorities, or opposing parties without express written authorization of the client.',
    },
    clerk: {
      title: 'Chamber Clerk & Registry Liaison Office',
      text: 'The chamber registry handles certified copying (nuqal) applications, filing of powers of attorney (Vakalatnama), submission of solvent bail bonds before the Nazir / Registrar of the High Court, and cause list monitoring. For case status updates or certified order sheets, contact the chief clerk at registry@masoomilaw.com or via telephone at 0321 3103004.',
    },
  };

  return (
    <>
      <footer className="bg-slate-950 text-stone-300 font-sans text-xs">
        {/* Main Footer Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800">
            {/* Brand / Chambers Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight block">
                Masoomi Law Associates
              </span>
              <p className="text-stone-400 text-xs leading-relaxed max-w-md">
                Chambers of Advocate Syed Shahbaz Ali Shah Masoomi, ASC. Providing rigorous trial
                advocacy, constitutional litigation, expedited bail motions, and white-collar defense
                before the High Court of Sindh and Special Courts in Karachi.
              </p>
              <div className="pt-2 text-[11px] text-stone-500 space-y-1">
                <p>Advocate High Court of Sindh · Member Sindh Bar Council</p>
                <p>Karachi Bar Association · High Court Bar Association</p>
              </div>
            </div>

            {/* Practice Areas Links (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#DFBA73] font-semibold block">
                Practice Jurisdictions
              </span>
              <ul className="space-y-2 text-stone-400 text-xs">
                <li>
                  <a href="#practice-areas" className="hover:text-white transition-colors">
                    Criminal Defense & Trial Advocacy
                  </a>
                </li>
                <li>
                  <a href="#urgent-bail" className="hover:text-white transition-colors">
                    Pre-Arrest & Post-Arrest Bail
                  </a>
                </li>
                <li>
                  <a href="#practice-areas" className="hover:text-white transition-colors">
                    FIA & NAB White-Collar Defense
                  </a>
                </li>
                <li>
                  <a href="#practice-areas" className="hover:text-white transition-colors">
                    Constitutional Writs (Article 199)
                  </a>
                </li>
                <li>
                  <a href="#practice-areas" className="hover:text-white transition-colors">
                    Civil Injunctions & Property Suits
                  </a>
                </li>
                <li>
                  <a href="#practice-areas" className="hover:text-white transition-colors">
                    Family & Child Custody Law
                  </a>
                </li>
              </ul>
            </div>

            {/* Chamber Locations & Helpline (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#DFBA73] font-semibold block">
                Emergency Retainer Desk
              </span>
              <p className="text-stone-400 text-xs leading-relaxed">
                Direct telephonic access for immediate pre-arrest bail, police remand
                interventions, or urgent midnight injunctions.
              </p>
              <div className="pt-1 space-y-1 font-sans">
                <a
                  href={CHAMBER_INFO.primaryPhoneTel}
                  className="font-serif text-lg font-bold text-white hover:text-[#DFBA73] block tracking-wide transition-colors"
                >
                  {CHAMBER_INFO.primaryPhone}
                </a>
                <p className="text-stone-400 text-[11px]">
                  Secondary Line: {CHAMBER_INFO.secondaryPhone}
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="#case-evaluation"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#96722C] hover:bg-[#7A5C22] text-white text-[11px] font-semibold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Submit Urgent Case Brief</span>
                </a>
              </div>
            </div>
          </div>

          {/* Statutory Bar Council Notice Box */}
          <div className="my-8 p-5 bg-slate-900/80 border border-slate-800 text-[11px] text-stone-400 leading-relaxed">
            <p className="font-semibold text-stone-200 uppercase tracking-wider mb-1">
              Sindh Bar Council Regulatory Disclaimer:
            </p>
            <p>
              As per the Legal Practitioners and Bar Councils Act 1973 and the rules formulated by
              the Sindh Bar Council and Pakistan Bar Council, this digital publication is solely for
              informative institutional purposes and does not constitute formal legal solicitation
              or guaranteed representation. Retainer commences strictly upon execution of a formal
              Vakalatnama and Chamber Engagement Memorandum.
            </p>
          </div>

          {/* Bottom Bar: Copyright & Compliance Modals Trigger */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 pt-4">
            <div>
              © 2026 Masoomi Law Associates. All Rights Reserved. Chambers of Syed Shahbaz Ali Shah
              Masoomi, ASC.
            </div>

            <div className="flex items-center gap-6 uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setModalType('compliance')}
                className="hover:text-stone-300 transition-colors"
              >
                Bar Compliance
              </button>
              <button
                type="button"
                onClick={() => setModalType('privilege')}
                className="hover:text-stone-300 transition-colors"
              >
                Privilege & Discretion
              </button>
              <button
                type="button"
                onClick={() => setModalType('clerk')}
                className="hover:text-stone-300 transition-colors"
              >
                Clerk Registry
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Compliance / Privilege Informational Modal */}
      {modalType && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in"
          onClick={() => setModalType(null)}
        >
          <div
            className="bg-white border border-stone-300 max-w-lg w-full p-6 sm:p-8 text-slate-900 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="font-serif text-lg font-bold text-slate-900">
                {modalContents[modalType].title}
              </h3>
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="text-stone-400 hover:text-slate-900 p-1"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="py-5 text-xs font-sans text-slate-600 leading-relaxed">
              {modalContents[modalType].text}
            </p>

            <div className="pt-3 border-t border-stone-200 flex justify-end">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors"
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
