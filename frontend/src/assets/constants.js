// ── Steps Configuration ───────────────────────────────────────────────────────
export const STEPS = [
  {
    id: 0,
    label: 'Education',
    description: 'Academic details',
    icon: '🎓',
    color: '#4f6ef7',
    bgColor: 'rgba(79,110,247,0.12)',
  },
  {
    id: 1,
    label: "Parents",
    description: "Family information",
    icon: '👨‍👩‍👧',
    color: '#a78bfa',
    bgColor: 'rgba(167,139,250,0.12)',
  },
  {
    id: 2,
    label: 'Temp. Address',
    description: 'Current residence',
    icon: '🏠',
    color: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.12)',
  },
  {
    id: 3,
    label: 'Perm. Address',
    description: 'Home address',
    icon: '📍',
    color: '#34d399',
    bgColor: 'rgba(52,211,153,0.12)',
  },
]

// ── Dropdown Options ──────────────────────────────────────────────────────────
export const INDIAN_STATES = [
  'Achham', 'Arghakhanchi', 'Baglung', 'Baitadi', 'Bajhang', 'Bajura', 'Banke',
  'Bara', 'Bardiya', 'Bhaktapur', 'Bhojpur', 'Chitwan', 'Dadeldhura', 'Dailekh', 'Dang',
  'Darchula', 'Dhading', 'Dhanusha', 'Dhankuta', 'Dolakha', 'Dolpa', 'Doti', 'Gorkha', 'Gulmi',
  'Humla', 'Ilam', 'Jajarkot', 'Jhapa', 'Jumla', 'Kailali', 'Kalikot', 'Kanchanpur', 'Kapilvastu',
  'Kaski', 'Kathmandu', 'Kavrepalanchok', 'Khotang', 'Lalitpur', 'Lamjung', 'Mahottari', 'Makwanpur',
  'Manang', 'Morang', 'Mustang', 'Myagdi', 'Nawalpur (Nawalparasi East)', 'Nuwakot', 'Okhaldhunga', 'Palpa',
  'Panchthar', 'Parasi (Nawalparasi West)', 'Parbat', 'Parsa', 'Pyuthan', 'Ramechhap', 'Rasuwa', 'Rautahat',
  'Rolpa', 'Rukum East', 'Rukum West', 'Rupandehi', 'Salyan', 'Sankhuwasabha', 'Saptari', 'Sarlahi', 'Sindhuli',
  'Sindhupalchok', 'Siraha', 'Solukhumbu', 'Sunsari', 'Surkhet', 'Syangja', 'Tanahun', 'Taplejung', 'Terhathum', 'Udayapur',
]

export const DEGREE_OPTIONS = [
  'B.Tech / B.E.',
  'B.Sc',
  'B.Com',
  'B.A.',
  'BBA',
  'BCA',
  'B.Arch',
  'B.Pharm',
  'MBBS',
  'M.Tech / M.E.',
  'M.Sc',
  'M.A.',
  'MBA',
  'MCA',
  'M.Pharm',
  'Ph.D',
  'Diploma',
  'Certificate Course',
  'Other',
]

export const YEAR_OPTIONS = [
  '1st Year',
  '2nd Year',
  '3rd Year',
  '4th Year',
  '5th Year',
]

export const GENDER_OPTIONS = [
  'Male',
  'Female',
  'Non-binary',
  'Prefer not to say',
]

export const INCOME_OPTIONS = [
  'Below ₹1 Lakh',
  '₹1–3 Lakhs',
  '₹3–5 Lakhs',
  '₹5–10 Lakhs',
  '₹10–20 Lakhs',
  'Above ₹20 Lakhs',
]

export const DURATION_OPTIONS = [
  'Less than 6 months',
  '6–12 months',
  '1–2 years',
  'More than 2 years',
]