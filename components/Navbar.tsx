'use client';

import React, { useState, useEffect } from 'react';
import { CHAMBER_INFO } from '@/lib/data';
import { Phone, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenUrgentBail?: () => void;
}

export function Navbar({ onOpenUrgentBail }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Practice Areas', href: '#practice-areas' },
    { label: 'Urgent Bail Protocol', href: '#urgent-bail' },
    { label: 'Advocate Bio', href: '#advocate-profile' },
    { label: 'Case Evaluation', href: '#case-evaluation' },
    { label: 'Chambers Registry', href: '#chambers-registry' },
  ];

  return (
    <>
      {/* Top Bar strictly following the 3-Zone Contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs'
            : 'bg-[#FBF9F5] border-b border-stone-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Single text element wordmark in display face */}
            <div className="flex flex-col">
              <a
                href="#"
                className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-[#96722C] transition-colors"
              >
                Masoomi Law Associates
              </a>
              <span className="text-[11px] uppercase tracking-wider text-stone-500 font-sans hidden sm:block">
                High Court of Sindh Enrolled Chambers · Karachi
              </span>
            </div>

            {/* Zone 2: Clean single-line text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-slate-950 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={CHAMBER_INFO.primaryPhoneTel}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-[#96722C] rounded-sm transition-colors whitespace-nowrap shrink-0 tracking-wide"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>0321 3103004</span>
                <span className="text-stone-300 font-normal">· Helpline</span>
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-slate-950 focus:outline-hidden"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Clean, minimalist, within 15% sticky limit) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 z-30 bg-[#FBF9F5] border-b border-stone-200 shadow-xl p-6 transition-all animate-in fade-in">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-stone-500 pb-2 border-b border-stone-200">
              <ShieldCheck className="w-4 h-4 text-[#96722C]" />
              <span>Chambers of Advocate Syed Shahbaz Ali Shah Masoomi</span>
            </div>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif font-medium text-slate-800 hover:text-[#96722C] py-1 border-b border-stone-100 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}
            </nav>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={CHAMBER_INFO.primaryPhoneTel}
                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#96722C] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Chambers: 0321 3103004</span>
              </a>
              <a
                href={`https://wa.me/${CHAMBER_INFO.whatsappNumber}?text=Urgent%20legal%20inquiry%20regarding%20bail%20or%20litigation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-stone-200 text-slate-800 text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-stone-300 transition-colors"
              >
                <span>WhatsApp Urgent Roster</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
