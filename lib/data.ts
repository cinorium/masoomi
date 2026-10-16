export interface PracticeArea {
  id: string;
  romanId: string;
  category: 'criminal' | 'regulatory' | 'civil' | 'property' | 'family' | 'service';
  title: string;
  court: string;
  isUrgent?: boolean;
  description: string;
  statutoryBasis: string[];
  keyProcedures: string[];
  documentsRequired: string[];
}

export const CHAMBER_INFO = {
  firmName: 'Masoomi Law Associates',
  subtitle: 'Chambers of Advocate Syed Shahbaz Ali Shah Masoomi',
  leadCounsel: 'Advocate Syed Shahbaz Ali Shah Masoomi, ASC',
  credentials: [
    'Advocate High Court of Sindh',
    'Member Sindh Bar Council',
    'Karachi Bar Association',
  ],
  primaryPhone: '0321 3103004',
  primaryPhoneTel: 'tel:+923213103004',
  secondaryPhone: '+92 371 3898818',
  secondaryPhoneTel: 'tel:+923713898818',
  whatsappNumber: '923213103004',
  email: 'chambers@masoomilaw.com',
  clerkEmail: 'registry@masoomilaw.com',
  locations: [
    {
      name: 'Tauheed Commercial Chambers',
      type: 'Principal Chambers & Private Consultations',
      address: 'Tauheed Commercial, Phase 5, Defence Housing Authority (DHA), Karachi, Sindh 75500, Pakistan',
      hours: 'Monday – Saturday: 4:00 PM – 9:00 PM (Strictly by Prior Appointment)',
      notes: 'Private conference rooms for client briefs, evidence review, and litigation strategy.',
    },
    {
      name: 'High Court of Sindh Chamber Complex',
      type: 'Judicial Registry & Courtroom Presence',
      address: 'Opposite Court Registry, High Court of Sindh, Court Road, Karachi, Pakistan',
      hours: 'Monday – Friday: 8:30 AM – 2:30 PM (Bench Filings & Hearings)',
      notes: 'Direct liaison with High Court filing branch, duty magistrate, and urgent motion benches.',
    },
  ],
  emergencySupport: '24/7 Chamber Roster for Pre-Arrest Bail, Remand Interventions & Midnight FIR Motions',
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'criminal-defense',
    romanId: 'I. Criminal Litigation',
    category: 'criminal',
    title: 'Criminal Defense & Trial Advocacy',
    court: 'Sessions Courts & High Court of Sindh',
    description:
      'Formidable defense strategy for Sessions trials, FIR quashment under Section 561-A CrPC, cross-examinations, state appeals, and constitutional writs against unlawful police excess.',
    statutoryBasis: [
      'Code of Criminal Procedure 1898 (CrPC)',
      'Pakistan Penal Code 1860 (PPC)',
      'Constitution of Pakistan (Article 199 — Habeas Corpus & Mandamus)',
      'Qanun-e-Shahadat Order 1984 (Law of Evidence)',
    ],
    keyProcedures: [
      'Quashment of Malafide FIRs under Section 561-A CrPC before High Court of Sindh',
      'Defense in Sessions & Additional Sessions Court Murder, Robbery & Heinous Crime Trials',
      'Evidentiary scrutiny & rigorous cross-examination of prosecution witnesses',
      'Appeals against conviction and criminal revision petitions before appellate benches',
    ],
    documentsRequired: [
      'Copy of First Information Report (FIR) from relevant Police Station',
      'Police Challan / Charge Sheet under Section 173 CrPC (if submitted)',
      'Certified order sheets of the trial court',
      'Identity documents (CNIC) of accused person and proposed solvent sureties',
    ],
  },
  {
    id: 'bail-matters',
    romanId: 'II. Personal Liberty',
    category: 'criminal',
    title: 'Bail Matters & Personal Liberty',
    court: '24/7 Urgent Motions · Sessions & High Court',
    isUrgent: true,
    description:
      'Expedited motions for Pre-Arrest Bail, Post-Arrest Bail, Protective Bail to restrain arbitrary detention, and Transit Bail across provincial jurisdictions with immediate bench filings.',
    statutoryBasis: [
      'Section 498 CrPC (Anticipatory / Pre-Arrest Bail)',
      'Section 497 CrPC (Post-Arrest Bail in Non-Bailable Offences)',
      'Constitutional Protective Bail (High Court of Sindh inherent jurisdiction)',
      'Transit Bail under CrPC for inter-provincial warrants',
    ],
    keyProcedures: [
      'Immediate drafted petition moved before the Duty Judge / Sessions Court within 2 hours',
      'Urgent motion before Sindh High Court Single Bench for Protective Bail against arrest',
      'Furnishing solvent sureties and Personal Recognizance (PR) Bonds to avoid custodial transfer',
      'Habeas Corpus petitions under Section 491 CrPC for illegal police confinement',
    ],
    documentsRequired: [
      'FIR Number, Police Station name and District jurisdiction',
      'Arrest memo or remand order (for post-arrest bail applications)',
      'CNIC copy of the accused person and primary family guarantor',
      'Documentary evidence showing prima facie malafide motive or civil dispute history',
    ],
  },
  {
    id: 'white-collar',
    romanId: 'III. Regulatory Defense',
    category: 'regulatory',
    title: 'FIA & NAB White Collar Defense',
    court: 'Special Accountability Courts & High Court',
    description:
      'Comprehensive defense in National Accountability Bureau (NAB) references, Federal Investigation Agency (FIA) cybercrime, money laundering, bank fraud, and anti-corruption inquiries.',
    statutoryBasis: [
      'National Accountability Ordinance 1999 (NAO)',
      'Prevention of Electronic Crimes Act 2016 (PECA)',
      'Anti-Money Laundering Act 2010 (AMLA)',
      'Federal Investigation Agency Act 1974',
    ],
    keyProcedures: [
      'Legal representation during Call-Up Notices and Inquiry Stage before FIA & NAB',
      'Constitutional Bail Petitions before Division Bench of the High Court of Sindh',
      'Challenging jurisdiction and arbitrary freezing of corporate bank accounts',
      'Defense in Special Courts for Banking, Cyber Crimes & Anti-Corruption',
    ],
    documentsRequired: [
      'Copy of FIA / NAB Call-Up Notice or Inquiry questionnaire',
      'Relevant bank statements and commercial transaction ledgers',
      'Board resolutions, commercial agreements, and procurement vouchers in question',
      'Forensic audit reports or financial reconciliation papers (if available)',
    ],
  },
  {
    id: 'anti-narcotics',
    romanId: 'IV. Special Statute',
    category: 'criminal',
    title: 'Anti-Narcotics (CNSA Court Matters)',
    court: 'Special CNSA Courts & High Court',
    description:
      'Rigorous evidentiary defense under the Control of Narcotic Substances Act (CNSA). Scrutinizing chain of custody, chemical examiner reports, and procedural search irregularities.',
    statutoryBasis: [
      'Control of Narcotic Substances Act 1997 (CNSA)',
      'Anti-Narcotics Force Act 1997',
      'Sindh Forensic Science Laboratory Protocols',
    ],
    keyProcedures: [
      'Scrutiny of mandatory search & seizure procedural compliance under Section 21 CNSA',
      'Challenging chain of custody and chemical analyst dispatch delays',
      'Bail petitions under Section 9(a), 9(b), and 9(c) CNSA before Special Courts and High Court',
      'Trial defense based on independent public witness requirements',
    ],
    documentsRequired: [
      'FIR registered by ANF, Excise, or Local Police Station',
      'Recovery memo / Seizure list (Fard-e-Maqboozi)',
      'Chemical Examiner / Government Forensic Laboratory report',
      'Remand papers and previous bail rejection orders (if any)',
    ],
  },
  {
    id: 'civil-litigation',
    romanId: 'V. Civil Equity',
    category: 'civil',
    title: 'Civil Litigation & Injunctions',
    court: 'District Civil Courts & High Court (Original Side)',
    description:
      'Suits for declaration, specific performance of contracts, permanent and temporary restraining orders (stay applications), partition, recovery of damages, and appellate revisions.',
    statutoryBasis: [
      'Code of Civil Procedure 1908 (CPC)',
      'Specific Relief Act 1877 (Sections 42, 52, 54)',
      'Limitation Act 1908',
      'Sindh Chief Court Rules (Original Side)',
    ],
    keyProcedures: [
      'Ex-parte stay orders and temporary injunctions under Order XXXIX Rules 1 & 2 CPC',
      'Plaint drafting for Declaration of Title, Specific Performance, and Partition',
      'Regular First Appeals (RFA) and Civil Revisions before High Court of Sindh',
      'Execution of decrees and contempt proceedings for deliberate injunction breaches',
    ],
    documentsRequired: [
      'Agreement to Sell, Registered Sale Deed, or Lease Contract',
      'Revenue records, mutation entries, and registry extracts',
      'Written correspondence and formal legal notices served',
      'Site photographs, demarcation sketches, and utility bills',
    ],
  },
  {
    id: 'family-law',
    romanId: 'VI. Matrimonial Jurisprudence',
    category: 'family',
    title: 'Family Law, Khula & Child Custody',
    court: 'Family Courts & High Court Appellate Benches',
    description:
      'Compassionate, legally rigorous handling of Child Custody (Hizanat), Visitation Rights, Guardianship Certificates, Khula, Dower recovery, and spousal maintenance litigation.',
    statutoryBasis: [
      'Family Courts Act 1964',
      'Guardians and Wards Act 1890',
      'Muslim Family Laws Ordinance 1961 (MFLO)',
      'Dissolution of Muslim Marriages Act 1939',
    ],
    keyProcedures: [
      'Petition for Child Custody & interim weekly visitation schedule preservation',
      'Guardianship certificate applications for minor property and overseas relocation',
      'Khula decrees with judicial determination of Haq Mehr / deferred dower',
      'Enforcement of maintenance decrees and attachment against defaulting spouses',
    ],
    documentsRequired: [
      'Nikahnama (original or certified NADRA marriage registration certificate)',
      'Birth certificates / NADRA B-Form of minor children',
      'Proof of father/mother monthly income, salary slips, and school fee receipts',
      'Previous notices or reconciliatory union council arbitration records',
    ],
  },
  {
    id: 'property-disputes',
    romanId: 'VII. Real Property',
    category: 'property',
    title: 'Property Disputes & Title Verification',
    court: 'Revenue, Civil Courts & High Court',
    description:
      'Complex land title due diligence, demarcation disputes, fraudulent transfer challenges, succession certificates, and property rights enforcement across DHA, Clifton, and all Karachi districts.',
    statutoryBasis: [
      'Transfer of Property Act 1882',
      'Registration Act 1908',
      'Succession Act 1925',
      'Sindh Land Revenue Act 1967',
    ],
    keyProcedures: [
      'Exhaustive 30-year title verification and non-encumbrance search across sub-registries',
      'Cancellation of forged and fabricated registered sale deeds / gift deeds',
      'Succession Certificate & Letter of Administration before Karachi District Courts',
      'Protection of lawful possession under the Illegal Dispossession Act 2005',
    ],
    documentsRequired: [
      'Title Deeds, Sub-Lease, or Allotment Order (DHA / KDA / PECHS / MDA)',
      'Search certificate issued by Sub-Registrar Office',
      'Mutation in Revenue Records (Form VII / PRAL / Board of Revenue)',
      'Death Certificate and Family Registration Certificate (FRC) for inheritance matters',
    ],
  },
  {
    id: 'rent-cases',
    romanId: 'VIII. Tenancy Jurisprudence',
    category: 'property',
    title: 'Rent Cases & Eviction Proceedings',
    court: 'Rent Controller Courts & Appellate Tribunals',
    description:
      'Representation before the Rent Controller under the Sindh Rented Premises Ordinance. Bona fide personal need evictions, default in rent recovery, and tenancy drafting.',
    statutoryBasis: [
      'Sindh Rented Premises Ordinance 1979 (SRPO)',
      'Sindh Tenancy Act',
      'Code of Civil Procedure (relevant evidentiary provisions)',
    ],
    keyProcedures: [
      'Eviction application under Section 15 SRPO for default in payment of monthly rent',
      'Eviction applications on grounds of bona fide personal use of landlord or family',
      'Defense of legitimate commercial and residential tenants against wrongful dispossession',
      'Rent Appeal before Additional District Judge (Appellate Rent Tribunal)',
    ],
    documentsRequired: [
      'Original Tenancy Agreement with stamp duty payment and witness signatures',
      'Bank statement showing rent receipts or postal money orders / default notice receipts',
      'Legal notice served upon the tenant through registered post with acknowledgment due',
      'Proof of ownership of the rented premises',
    ],
  },
  {
    id: 'service-tribunal',
    romanId: 'IX. Administrative Law',
    category: 'service',
    title: 'Service Tribunal Matters',
    court: 'Provincial (Sindh) & Federal Service Tribunals',
    description:
      'Protecting civil servants, judicial staff, and public officers in departmental inquiries, wrongful terminations, seniority disputes, promotion denials, and Sindh Service Tribunal appeals.',
    statutoryBasis: [
      'Sindh Service Tribunals Act 1973',
      'Federal Service Tribunals Act 1973',
      'Sindh Civil Servants Act 1973 & Efficiency and Discipline (E&D) Rules',
      'Constitution of Pakistan (Article 212 — Administrative Courts and Tribunals)',
    ],
    keyProcedures: [
      'Appeals against major penalties (dismissal, removal from service, compulsory retirement)',
      'Challenging denial of promotion and incorrect seniority list placement',
      'Departmental appeals and representation before competent appellate authorities',
      'Enforcement of tribunal judgments through contempt proceedings',
    ],
    documentsRequired: [
      'Show Cause Notice and Charge Sheet issued by the department',
      'Inquiry Officer report and departmental inquiry findings',
      'Final penalty notification / termination order',
      'Copy of departmental appeal filed within statutory timeline',
    ],
  },
];

export const BAIL_PROTOCOLS = [
  {
    stage: '01',
    title: 'Pre-Arrest Bail (Anticipatory Bail)',
    section: 'Section 498 CrPC',
    urgency: 'Immediate (Within Hours of FIR)',
    target: 'When an FIR is lodged or arbitrary arrest is apprehended by police or agencies.',
    legalMechanism:
      'Moving the Sessions Judge or High Court for interim protective bail before arrest occurs, preventing humiliating detention.',
    requirements: ['FIR copy or Police Station name', 'CNIC', 'Solvent surety ready'],
    turnaround: 'Interim relief granted same day during court hours',
  },
  {
    stage: '02',
    title: 'Post-Arrest Bail & Remand Interventions',
    section: 'Section 497 CrPC',
    urgency: 'Within 24 Hours of Custody',
    target: 'When the accused is already detained or remanded to police custody.',
    legalMechanism:
      'Challenging physical remand before the Area Judicial Magistrate and moving comprehensive post-arrest bail based on absence of incriminating evidence or statutory delay.',
    requirements: ['Remand order', 'FIR copy', 'Surety documentation'],
    turnaround: 'Argument heard upon call of police diary / record',
  },
  {
    stage: '03',
    title: 'Constitutional Protective Bail',
    section: 'Article 199 & High Court Inherent Jurisdiction',
    urgency: 'Prior to Travel or In Custody Threat',
    target: 'For clients facing out-of-district warrants, Federal agencies (FIA/NAB), or political victimization.',
    legalMechanism:
      'High Court of Sindh single-bench motion granting time-bound immunity to enable surrender before the court of competent jurisdiction without interim detention.',
    requirements: ['Proof of threat or warrant', 'CNIC', 'Affidavit of bona fides'],
    turnaround: 'Urgent motion listed same day before High Court Bench',
  },
  {
    stage: '04',
    title: 'Habeas Corpus & Unlawful Detention',
    section: 'Section 491 CrPC & Article 199',
    urgency: 'Emergency (Person Missing in Custody)',
    target: 'When a family member is picked up without formal FIR or kept in unacknowledged detention.',
    legalMechanism:
      'Urgent writ petition resulting in Court Bailiff raid on the police station to recover the detained individual and produce them before the court.',
    requirements: ['Time & place of pickup', 'Witness statements', 'Family CNIC'],
    turnaround: 'Emergency Bailiff deputed within 3 to 6 hours',
  },
];
