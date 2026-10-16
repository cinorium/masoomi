'use client';

import React from 'react';
import { PracticeArea, CHAMBER_INFO } from '@/lib/data';
import { X, Scale, FileText, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

interface PracticeAreaModalProps {
  practiceArea: PracticeArea | null;
  onClose: () => void;
  onSelectForBrief: (id: string) => void;
}

export function PracticeAreaModal({
  practiceArea,
  onClose,
  onSelectForBrief,
}: PracticeAreaModalProps) {
  if (!practiceArea) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="practice-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white border border-stone-300 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-stone-200 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#96722C] font-semibold mb-1">
              <span>{practiceArea.romanId}</span>
              <span aria-hidden="true">·</span>
              <span>{practiceArea.court}</span>
            </div>
            <h3 id="practice-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              {practiceArea.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-slate-900 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-sm font-sans text-slate-700">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-900 font-bold mb-2">
              Chamber Litigation Scope
            </h4>
            <p className="leading-relaxed text-slate-600">
              {practiceArea.description}
            </p>
          </div>

          {/* Statutory Basis */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-900 font-bold mb-2 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#96722C]" />
              <span>Statutory Grounds & Enabling Enactments</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {practiceArea.statutoryBasis.map((statute) => (
                <li key={statute} className="flex items-start gap-2">
                  <span className="text-[#96722C] font-serif font-bold">§</span>
                  <span>{statute}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Procedures */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-900 font-bold mb-2 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#96722C]" />
              <span>Key Bench Procedures & Chamber Motions</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {practiceArea.keyProcedures.map((proc) => (
                <li key={proc} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#96722C] shrink-0 mt-0.5" />
                  <span>{proc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents Required */}
          <div className="bg-stone-50 border border-stone-200 p-4">
            <h4 className="text-xs uppercase tracking-widest text-slate-900 font-bold mb-2">
              Documents to Furnish at Initial Consultation
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-600">
              {practiceArea.documentsRequired.map((doc) => (
                <li key={doc} className="flex items-start gap-2">
                  <span className="text-stone-400">·</span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-6 mt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={CHAMBER_INFO.primaryPhoneTel}
            className="text-xs text-slate-600 hover:text-slate-950 flex items-center gap-1.5 font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-[#96722C]" />
            <span>Direct Clerk Line: {CHAMBER_INFO.primaryPhone}</span>
          </a>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-slate-900 transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onSelectForBrief(practiceArea.id);
                onClose();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-[#96722C] text-white text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
            >
              <span>Submit Brief for this Matter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
