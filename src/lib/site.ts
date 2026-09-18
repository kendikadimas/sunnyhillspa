export const site = {
  name: "Sunny Hill Spa & Wellness",
  shortName: "Sunny Hill",
  brandSubtitle: "Luxury Home & Sanctuary Spa 24 Jam",
  tagline: "Exclusive Spa, Massage & Holistic Wellness",
  title: "Spa & Wellness",
  description:
    "Rasakan kemewahan relaksasi holistik, pijat tradisional, aromaterapi esensial, dan perawatan tubuh premium langsung di kediaman, hotel, atau villa Anda 24 jam non-stop.",
  phoneDisplay: "0858-8224-2818",
  phoneRaw: "085882242818",
  waNumber: "6285882242818",
  adminJakarta: {
    name: "Admin Jakarta",
    waNumber: "6285882242818",
    phoneDisplay: "0858-8224-2818",
    waMessage: "Halo Admin Jakarta Sunny Hill Spa, saya ingin booking layanan spa / pijat 24 jam di Jakarta. Mohon info terapis dan jadwal ya.",
  },
  adminSurabaya: {
    name: "Admin Surabaya",
    waNumber: "6285882242818",
    phoneDisplay: "0858-8224-2818",
    waMessage: "Halo Admin Surabaya Sunny Hill Spa, saya ingin booking layanan spa / pijat 24 jam di Surabaya. Mohon info terapis dan jadwal ya.",
  },
  waMessage:
    "Halo Sunny Hill Spa & Wellness, saya ingin booking layanan spa / pijat 24 jam. Mohon info menu treatment, terapis, dan ketersediaan jadwal ya.",
  subheadline: "Relaksasi mendalam, pemulihan energi tubuh, dan peremajaan pikiran dengan standar kenyamanan bintang lima.",
};

export const waLink = `https://wa.me/${site.waNumber}?text=${encodeURIComponent(
  site.waMessage,
)}`;

export const waLinkJakarta = `https://wa.me/${site.adminJakarta.waNumber}?text=${encodeURIComponent(
  site.adminJakarta.waMessage,
)}`;

export const waLinkSurabaya = `https://wa.me/${site.adminSurabaya.waNumber}?text=${encodeURIComponent(
  site.adminSurabaya.waMessage,
)}`;

export const navLinks = [
  { href: "#hero", label: "Beranda" },
  { href: "#services", label: "Daftar Harga" },
  { href: "#providers", label: "Terapis" },
  { href: "#wellness", label: "Perawatan" },
  { href: "#benefits", label: "Keunggulan" },
  { href: "#faq", label: "FAQ & Kontak" },
];

export const stepsToBegin = [
  {
    step: "01",
    title: "Pilih Menu & Jadwal",
    desc: "Pilih paket spa atau pijat favorit Anda, lalu tentukan jam dan alamat kunjungan (rumah, hotel, apartemen, atau villa).",
    bg: "bg-[#4a5f38] text-[#f4f6f0]",
    iconBg: "text-[#c2d6af]",
    hasArrow: true,
    artType: "mushroom",
  },
  {
    step: "02",
    title: "Penugasan Terapis",
    desc: "Care Coordinator kami mengonfirmasi terapis tersertifikasi dengan perlengkapan spa steril & minyak aromaterapi organik.",
    bg: "bg-[#82996d] text-[#1c2715]",
    iconBg: "text-[#dce7ce]",
    hasArrow: false,
    artType: "knot",
  },
  {
    step: "03",
    title: "Nikmati Relaksasi Total",
    desc: "Terapis tiba tepat waktu dan memberikan perawatan spa terbaik untuk memulihkan kebugaran dan ketenangan tubuh Anda.",
    bg: "bg-[#d2dcbe] text-[#24331a]",
    iconBg: "text-[#4a5f38]",
    hasArrow: false,
    artType: "stones",
  },
];

export interface ProviderItem {
  id: string;
  name: string;
  avatar: string;
  specialty: string;
  focus: string;
  isFeatured?: boolean;
}

export const providersList: ProviderItem[] = [
  {
    id: "1",
    name: "Siti Rahmawati",
    avatar: "/3cd961d1-d40f-4c73-8f0c-9d2741b92d61.jpg",
    specialty: "SENIOR BALINESE & TRADITIONAL THERAPIST",
    focus: "Pijat relaksasi tradisional, pelepasan simpul otot punggung & bahu, dan totok sirkulasi herbal.",
  },
  {
    id: "2",
    name: "Dewi Anggraini",
    avatar: "/7e18472d-740b-42c0-a74a-94da3e7a1791.jpg",
    specialty: "HOLISTIC AROMATHERAPIST",
    focus: "Perpaduan minyak esensial organik untuk relaksasi saraf, anti-insomnia, dan peredaan stres mental.",
  },
  {
    id: "3",
    name: "Nabila Putri",
    avatar: "/67b62277-1672-4776-a481-e0a3c01746bd.jpg",
    specialty: "BODY SCRUB & ROYAL LULUR SPECIALIST",
    focus: "Eksfoliasi kulit tradisional Jawa, masker herbal pencerah alami, totok wajah, dan peremajaan kulit.",
  },
  {
    id: "4",
    name: "Ayu Kartika",
    avatar: "/665824fb-1f1e-46ce-b29e-c1ae454b310d.jpg",
    specialty: "FULL BODY & REFLEKSIOLOGI",
    focus: "Pijat kombinasi tubuh dan stimulasi titik akupresur kaki untuk pelancaran sirkulasi darah.",
  },
  {
    id: "5",
    name: "Maya Lestari",
    avatar: "/73591800-84e1-4533-b3fa-8757b426936a.jpg",
    specialty: "TOTOK WAJAH & KEROKAN HERBAL",
    focus: "Totok wajah anti-aging, peredaan pusing/migrain, dan terapi kerokan herbal peredaan masuk angin.",
  },
];

export interface PriceOption {
  duration: string;
  price: string;
}

export interface ServiceItem {
  no: number;
  id: string;
  title: string;
  subTitle: string;
  desc: string;
  prices: PriceOption[];
  badge: string;
  image: string;
}

export const services: ServiceItem[] = [
  {
    no: 1,
    id: "massage-tradisional",
    title: "MASSAGE TRADISIONAL",
    subTitle: "TRADISIONAL MASSAGE",
    desc: "Pijat tradisional Nusantara menggunakan teknik urut ritmik dan minyak herbal hangat untuk meredakan pegal linu dan mengembalikan stamina.",
    prices: [
      { duration: "60 Menit", price: "250.000" },
      { duration: "90 Menit", price: "300.000" },
      { duration: "120 Menit", price: "350.000" },
    ],
    badge: "Paling Populer",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&auto=format&fit=crop&q=90",
  },
  {
    no: 2,
    id: "massage-balinese",
    title: "MASSAGE BALINESE",
    subTitle: "BALINESE MASSAGE",
    desc: "Pijat khas Bali dengan tekanan lembut sedang dipadu minyak aromaterapi bunga kamboja untuk melancarkan sirkulasi & relaksasi pikiran.",
    prices: [
      { duration: "60 Menit", price: "300.000" },
      { duration: "90 Menit", price: "350.000" },
      { duration: "120 Menit", price: "400.000" },
    ],
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1600&auto=format&fit=crop&q=90",
  },
  {
    no: 3,
    id: "massage-refleksiologi",
    title: "MASSAGE REFLEKSIOLOGI",
    subTitle: "REFLEXOLOGY MASSAGE",
    desc: "Penekanan titik syaraf pada telapak kaki dan betis untuk merangsang organ dalam, detoksifikasi alami, serta mengatasi insomnia.",
    prices: [
      { duration: "60 Menit", price: "250.000" },
      { duration: "90 Menit", price: "300.000" },
      { duration: "120 Menit", price: "350.000" },
    ],
    badge: "Detoks Tubuh",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1600&auto=format&fit=crop&q=90",
  },
  {
    no: 4,
    id: "massage-aroma-terapi",
    title: "MASSAGE AROMA TERAPI",
    subTitle: "AROMATHERAPY MASSAGE",
    desc: "Pijat lembut pemulihan menggunakan 100% minyak esensial murni (Lavender/Eucalyptus/Jasmine) untuk meredakan stres mental & kelelahan.",
    prices: [
      { duration: "60 Menit", price: "300.000" },
      { duration: "90 Menit", price: "350.000" },
      { duration: "120 Menit", price: "400.000" },
    ],
    badge: "Deep Calm",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1600&auto=format&fit=crop&q=90",
  },
  {
    no: 5,
    id: "massage-full-body-refleksiologi",
    title: "MASSAGE FULL BODY + REFLEKSIOLOGI",
    subTitle: "FULL BODY & REFLEXOLOGY",
    desc: "Kombinasi sempurna pijat seluruh tubuh dari kepala hingga kaki dilanjutkan refleksi akupresur untuk kesegaran tubuh secara menyeluruh.",
    prices: [
      { duration: "60 Menit", price: "300.000" },
      { duration: "90 Menit", price: "350.000" },
      { duration: "120 Menit", price: "400.000" },
    ],
    badge: "Paket Hemat",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1600&auto=format&fit=crop&q=90",
  },
  {
    no: 6,
    id: "massage-full-body-totok-wajah",
    title: "MASSAGE FULL BODY + TOTOK WAJAH",
    subTitle: "FULL BODY & FACE ACUPRESSURE",
    desc: "Pijat tubuh relaksasi dipadukan totok titik akupresur wajah untuk mencerahkan aura, meredakan migrain, dan melancarkan aliran darah wajah.",
    prices: [
      { duration: "60 Menit", price: "300.000" },
      { duration: "90 Menit", price: "350.000" },
      { duration: "120 Menit", price: "400.000" },
    ],
    badge: "Rejuvenation",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&auto=format&fit=crop&q=90",
  },
  {
    no: 7,
    id: "massage-full-body-kerokan",
    title: "MASSAGE FULL BODY + KEROKAN",
    subTitle: "FULL BODY & TRADITIONAL SCRAPING",
    desc: "Terapi pijat tubuh ditambah kerokan herbal tradisional minyak zaitun untuk meredakan angin duduk, perut kembung, dan pegal berat.",
    prices: [
      { duration: "60 Menit", price: "300.000" },
      { duration: "90 Menit", price: "350.000" },
      { duration: "120 Menit", price: "400.000" },
    ],
    badge: "Relief Pegal",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&auto=format&fit=crop&q=90",
  },
  {
    no: 8,
    id: "massage-full-body-body-scrub",
    title: "MASSAGE FULL BODY + BODY SCRUB",
    subTitle: "FULL BODY & ROYAL LULUR",
    desc: "Pijat relaksasi tubuh disusul lulur rempah tradisional untuk mengelupas sel kulit mati, menjadikan kulit terasa sangat halus, bersih, dan harum.",
    prices: [
      { duration: "60 Menit", price: "300.000" },
      { duration: "90 Menit", price: "350.000" },
      { duration: "120 Menit", price: "400.000" },
    ],
    badge: "Glowing Skin",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1600&auto=format&fit=crop&q=90",
  },
];

export const therapyFormats = [
  {
    title: "Home & Hotel Visit 24 Jam",
    badge: "Layanan Panggilan",
    desc: "Terapis kami datang langsung ke kediaman, hotel, apartemen, atau villa Anda lengkap dengan linen higienis, matras spa, dan minyak esensial aromatik.",
    theme: "light",
    art: "totem",
  },
  {
    title: "Sanctuary Spa Suite",
    badge: "Sesi Eksklusif",
    desc: "Pengalaman spa privat dengan suasana botanical menenangkan, alunan musik meditatif, pencahayaan temaram, dan kenyamanan tanpa gangguan.",
    theme: "dark",
    art: "pills",
  },
];

export const otherPaths = [
  {
    title: "Express Back & Shoulder Massage",
    desc: "Pijat fokus pada punggung, pundak, dan leher untuk mengatasi kelelahan bekerja di depan laptop atau setelah perjalanan jauh.",
    action: "BOOKING SEKARANG",
  },
  {
    title: "Customized Spa & Body Treatment",
    desc: "Kombinasikan pilihan massage, scrub lulur, totok wajah, dan refleksi sesuai kebutuhan durasi dan preferensi kenyamanan Anda.",
    action: "KONSULTASI PAKET",
  },
];

export const benefits = [
  {
    title: "Terapis Berpengalaman & Bersertifikat",
    text: "Semua terapis kami telah melalui pelatihan ketat, berlisensi resmi di bidang spa wellness, dan menjunjung tinggi etika sopan santun.",
  },
  {
    title: "Layanan 24 Jam Non-Stop",
    text: "Siap melayani panggilan ke rumah, kamar hotel, apartemen, dan villa di area Jakarta & Surabaya kapan pun Anda butuhkan.",
  },
  {
    title: "Higienis & Steril Terjamin",
    text: "Kami menggunakan linen sekali pakai yang bersih, handuk higienis, dan minyak esensial alami berkualitas prima.",
  },
  {
    title: "Free Biaya Transportasi",
    text: "Tidak ada biaya transportasi tambahan untuk layanan panggilan terapis di seluruh area Jakarta dan Surabaya.",
  },
  {
    title: "Minyak Esensial Alami 100%",
    text: "Menggunakan bahan organik dan essential oils pilihan yang aman, tidak lengket di kulit, dan beraroma aromaterapi menenangkan.",
  },
  {
    title: "Respon Cepat Admin Jakarta & Surabaya",
    text: "Booking instan via WhatsApp Admin Jakarta & Admin Surabaya dalam hitungan menit. Terapis terdekat segera diberangkatkan.",
  },
];

export const testimonials = [
  {
    name: "Nia Rahmadani",
    area: "Jakarta Selatan",
    text: "Layanan spa panggilan terbaik yang pernah saya pesan. Terapisnya sangat ramah, membawa perlengkapan yang sangat bersih, dan minyak aromaterapinya juara. Badan langsung enteng setelah lelah seminggu penuh kerja.",
    rating: 5,
    tag: "Massage Balinese",
  },
  {
    name: "Bpk. Hendra & Istri",
    area: "Surabaya Barat",
    text: "Pesan paket Full Body + Totok Wajah ke hotel jam 11 malam lewat Admin Surabaya, responnya super cepat dan terapis datang on-time. Pijatan sangat profesional dan sopan. Pasti langganan!",
    rating: 5,
    tag: "Full Body + Totok Wajah",
  },
  {
    name: "Dr. Amanda V.",
    area: "Jakarta Pusat",
    text: "Kombinasi Full Body + Body Scrub-nya luar biasa menenangkan. Kulit jadi halus dan cerah, kepala yang tadinya migrain langsung segar. Sangat praktis tanpa harus macet keluar rumah.",
    rating: 5,
    tag: "Full Body + Body Scrub",
  },
];

export const statsMetrics = [
  { value: "24 Jam", label: "Layanan Non-Stop" },
  { value: "15.000+", label: "Sesi Spa Terlayani" },
  { value: "100%", label: "Minyak Alami & Steril" },
  { value: "Rp 0", label: "Free Transportasi Terapis" },
];

export const faqs = [
  {
    q: "Apakah layanan spa Sunny Hill tersedia 24 jam ke hotel dan rumah?",
    a: "Ya, kami melayani jasa spa dan pijat panggilan (home service ke rumah, kamar hotel, apartemen, atau villa) selama 24 jam non-stop di seluruh area Jakarta dan Surabaya tanpa batasan waktu.",
  },
  {
    q: "Bagaimana cara memesan terapis untuk wilayah Jakarta atau Surabaya?",
    a: "Anda cukup memilih tombol Hubungi Admin Jakarta atau Hubungi Admin Surabaya via WhatsApp. Care Coordinator kami di kota masing-masing akan segera mengirimkan pilihan terapis stanby terdekat.",
  },
  {
    q: "Apakah ada biaya transportasi tambahan untuk terapis?",
    a: "Tidak ada biaya tambahan. Kami memberikan fasilitas GRATIS biaya transportasi terapis untuk seluruh wilayah Jakarta dan Surabaya.",
  },
  {
    q: "Peralatan apa saja yang dibawa oleh terapis saat berkunjung?",
    a: "Terapis kami datang membawa perlengkapan lengkap dan steril: kain/linen bersih sekali pakai, matras atau alas spa, minyak esensial aromaterapi alami pilihan, dan peralatan perawatan tubuh higienis.",
  },
  {
    q: "Berapa lama estimasi terapis tiba di lokasi setelah pemesanan?",
    a: "Setelah booking terkonfirmasi via WhatsApp, terapis terdekat kami akan segera diberangkatkan dengan estimasi waktu tiba berkisar 30 hingga 45 menit tergantung kondisi lalu lintas.",
  },
];

export const branches = [
  {
    city: "Jakarta",
    areas: ["Jakarta Pusat", "Jakarta Selatan", "Jakarta Barat", "Jakarta Timur", "Jakarta Utara"],
    adminLink: waLinkJakarta,
  },
  {
    city: "Surabaya",
    areas: ["Surabaya Pusat", "Surabaya Selatan", "Surabaya Barat", "Surabaya Timur", "Surabaya Utara"],
    adminLink: waLinkSurabaya,
  },
];

export const steps = stepsToBegin;
export const providers = providersList.map((p) => ({
  name: p.name,
  role: p.specialty,
  photo: p.avatar,
  city: "Jakarta & Surabaya",
  experience: "5+ Tahun",
  bio: p.focus,
}));
