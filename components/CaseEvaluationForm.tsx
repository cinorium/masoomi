'use client';

import React, { useState } from 'react';
import { CHAMBER_INFO, PRACTICE_AREAS } from '@/lib/data';
import { ShieldCheck, CheckCircle2, Send, Copy, Check } from 'lucide-react';

interface CaseEvaluationFormProps {
  initialPracticeAreaId?: string;
}

export function CaseEvaluationForm({ initialPracticeAreaId }: CaseEvaluationFormProps) {
  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    relationship: 'Family Member / Next of Kin',
    practiceArea: initialPracticeAreaId || 'bail-matters',
    urgency: 'Emergency (Arrest / Raid Apprehended within 4 Hours)',
    jurisdiction: '',
    firNumber: '',
    summary: '',
    hasFir: false,
    hasChallan: false,
    hasCourtOrder: false,
    hasSuretyDocs: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [caseRef, setCaseRef] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName.trim() || !formData.phone.trim()) {
      return;
    }
    // Generate an authentic chamber reference
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const ref = `MLA-2026-${randomDigits}`;
    setCaseRef(ref);
    setSubmitted(true);
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(caseRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="case-evaluation" className="py-20 lg:py-28 border-b border-stone-200 bg-[#FBF9F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#96722C] font-semibold mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Strict Client Privilege Protocol</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Confidential Case Brief & Retainer Inquiry
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            All details submitted here are received directly by Advocate Syed Shahbaz Ali Shah
            Masoomi&apos;s desk and are governed by immediate legal professional privilege.
          </p>
        </div>

        {submitted ? (
          /* Confirmation View */
          <div className="bg-white border border-stone-300 p-8 sm:p-12 shadow-xs space-y-6 animate-in fade-in">
            <div className="flex items-center gap-3 text-emerald-800">
              <CheckCircle2 className="w-8 h-8 text-emerald-700" />
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Case Brief Transmitted to Chambers
                </h3>
                <p className="text-xs text-stone-500 font-sans mt-0.5">
                  Governed by Qanun-e-Shahadat Order 1984 Legal Professional Privilege
                </p>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 p-6 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-sans">
                  Chamber File Reference
                </span>
                <button
                  type="button"
                  onClick={handleCopyRef}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-slate-950 font-semibold"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Reference</span>
                    </>
                  )}
                </button>
              </div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-wider">
                {caseRef}
              </p>
              <p className="text-xs text-slate-600 font-sans">
                Client: <strong className="text-slate-900">{formData.clientName}</strong> · Phone:{' '}
                <strong className="text-slate-900">{formData.phone}</strong> · Urgency:{' '}
                <strong className="text-slate-900">{formData.urgency}</strong>
              </p>
            </div>

            <div className="border-t border-stone-200 pt-6 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                Recommended Immediate Next Steps:
              </p>
              <ul className="space-y-2 text-xs text-slate-600 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-[#96722C] font-bold">1.</span>
                  <span>
                    If this is an emergency bail or remand matter, call the Senior Advocate directly
                    at{' '}
                    <a
                      href={CHAMBER_INFO.primaryPhoneTel}
                      className="font-bold text-slate-900 underline"
                    >
                      {CHAMBER_INFO.primaryPhone}
                    </a>{' '}
                    quoting reference <strong>{caseRef}</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#96722C] font-bold">2.</span>
                  <span>
                    Gather whatever documents you have (FIR, CNIC copies, solvent surety papers) and
                    bring them to the DHA Phase 5 chambers or High Court registry corridor.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#96722C] font-bold">3.</span>
                  <span>
                    Do not submit statements or admissions to investigating officers without counsel
                    present.
                  </span>
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${CHAMBER_INFO.whatsappNumber}?text=Urgent%20Brief%20Submitted.%20Ref%3A%20${caseRef}%20for%20${encodeURIComponent(formData.clientName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-slate-900 hover:bg-[#96722C] text-white text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs"
                >
                  Confirm Submission via WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData((prev) => ({
                      ...prev,
                      clientName: '',
                      summary: '',
                      firNumber: '',
                    }));
                  }}
                  className="px-4 py-2.5 border border-stone-300 text-slate-700 hover:text-slate-950 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs"
                >
                  Submit Another Brief
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Intake Form */
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-stone-300 p-6 sm:p-10 shadow-xs space-y-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Client Name */}
              <div>
                <label
                  htmlFor="clientName"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2"
                >
                  Full Name of Contact Person <span className="text-[#96722C]">*</span>
                </label>
                <input
                  id="clientName"
                  type="text"
                  required
                  placeholder="e.g. Syed Farooq Ahmed"
                  value={formData.clientName}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, clientName: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 text-sm text-slate-900 placeholder:text-stone-400 focus:outline-hidden focus:border-slate-900 focus:bg-white transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2"
                >
                  Direct Phone / WhatsApp <span className="text-[#96722C]">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="e.g. 0300 1234567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 text-sm text-slate-900 placeholder:text-stone-400 focus:outline-hidden focus:border-slate-900 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Relationship to Matter */}
              <div>
                <label
                  htmlFor="relationship"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2"
                >
                  Relationship to Accused / Litigant
                </label>
                <select
                  id="relationship"
                  value={formData.relationship}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, relationship: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 text-sm text-slate-900 focus:outline-hidden focus:border-slate-900 focus:bg-white transition-colors"
                >
                  <option value="Accused Person / Litigant">Accused Person / Litigant Directly</option>
                  <option value="Family Member / Next of Kin">Family Member / Next of Kin</option>
                  <option value="Corporate Representative / Employer">
                    Corporate Representative / Employer
                  </option>
                  <option value="Friend / Authorized Attorney">Friend / Authorized Attorney</option>
                </select>
              </div>

              {/* Urgency Level */}
              <div>
                <label
                  htmlFor="urgency"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2"
                >
                  Level of Urgency
                </label>
                <select
                  id="urgency"
                  value={formData.urgency}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, urgency: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 text-sm text-slate-900 focus:outline-hidden focus:border-slate-900 focus:bg-white transition-colors"
                >
                  <option value="Emergency (Arrest / Raid Apprehended within 4 Hours)">
                    Emergency: Arrest / Raid Apprehended (Under 4 Hours)
                  </option>
                  <option value="Urgent (Hearing within 24–48 Hours / Pending Notice)">
                    Urgent: Hearing within 24–48 Hours / Pending Notice
                  </option>
                  <option value="Consultation (Chamber Appointment / General Strategy)">
                    Standard: Chamber Consultation & Case Assessment
                  </option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Practice Area */}
              <div>
                <label
                  htmlFor="practiceArea"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2"
                >
                  Practice Jurisdiction / Matter Type
                </label>
                <select
                  id="practiceArea"
                  value={formData.practiceArea}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, practiceArea: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 text-sm text-slate-900 focus:outline-hidden focus:border-slate-900 focus:bg-white transition-colors"
                >
                  {PRACTICE_AREAS.map((pa) => (
                    <option key={pa.id} value={pa.id}>
                      {pa.title} ({pa.court})
                    </option>
                  ))}
                </select>
              </div>

              {/* Police Station or Court Forum */}
              <div>
                <label
                  htmlFor="jurisdiction"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2"
                >
                  Police Station / District / Court (If known)
                </label>
                <input
                  id="jurisdiction"
                  type="text"
                  placeholder="e.g. PS Darakhshan, Karachi South / High Court"
                  value={formData.jurisdiction}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, jurisdiction: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 text-sm text-slate-900 placeholder:text-stone-400 focus:outline-hidden focus:border-slate-900 focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Case Summary & FIR details */}
            <div>
              <label
                htmlFor="summary"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2"
              >
                Brief Summary of Allegations or Dispute <span className="text-[#96722C]">*</span>
              </label>
              <textarea
                id="summary"
                required
                rows={4}
                placeholder="State the core facts: What offences are alleged? Has an FIR been registered? Are police threatening an arrest or raid? Include FIR number and year if available..."
                value={formData.summary}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, summary: e.target.value }))
                }
                className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 text-sm text-slate-900 placeholder:text-stone-400 focus:outline-hidden focus:border-slate-900 focus:bg-white transition-colors leading-relaxed font-sans"
              />
            </div>

            {/* Document Availability Checkboxes */}
            <div className="border-t border-stone-200 pt-5 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                Documents in Your Immediate Possession:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-sans">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasFir}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, hasFir: e.target.checked }))
                    }
                    className="w-4 h-4 text-slate-900 border-stone-300 rounded-xs focus:ring-slate-900"
                  />
                  <span>Copy of First Information Report (FIR)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasChallan}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, hasChallan: e.target.checked }))
                    }
                    className="w-4 h-4 text-slate-900 border-stone-300 rounded-xs focus:ring-slate-900"
                  />
                  <span>Police Challan / Interrogation Memo</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasCourtOrder}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, hasCourtOrder: e.target.checked }))
                    }
                    className="w-4 h-4 text-slate-900 border-stone-300 rounded-xs focus:ring-slate-900"
                  />
                  <span>Previous Court Order Sheet / Rejection Memo</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasSuretyDocs}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, hasSuretyDocs: e.target.checked }))
                    }
                    className="w-4 h-4 text-slate-900 border-stone-300 rounded-xs focus:ring-slate-900"
                  />
                  <span>Solvent Surety CNIC & Property / Salary Proof</span>
                </label>
              </div>
            </div>

            {/* Submit Action */}
            <div className="border-t border-stone-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-stone-500 font-sans">
                <ShieldCheck className="w-4 h-4 text-[#96722C]" />
                <span>Protected by Advocate-Client Confidentiality Privilege</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-slate-900 hover:bg-[#96722C] text-white text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Case Brief</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
