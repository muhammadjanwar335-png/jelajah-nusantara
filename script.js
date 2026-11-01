/**
 * ==========================================================================
 * JELAJAH NUSANTARA – Explore Indonesia
 * Main Interactive Application Script
 * Pure Vanilla JavaScript (ES6+) - 100% Client-Side
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Database Destinasi Wisata (12 Destinasi Wajib & Lengkap)
     -------------------------------------------------------------------------- */
  const destinationsData = [
    {
      id: 'raja-ampat',
      title: 'Raja Ampat',
      location: 'Kepulauan Raja Ampat, Papua Barat Daya',
      region: 'Papua & Maluku',
      category: 'Bahari',
      rating: 5.0,
      reviews: 1420,
      price: 'Rp 500.000 (PIN WNI)',
      bestTime: 'Oktober – April',
      duration: '4 - 6 Hari',
      image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'images/raja-ampat.svg',
      shortDesc: 'Surga bawah laut dunia di jantung Segitiga Karang dengan gugusan pulau karst Wayag dan Misool yang magis.',
      longDesc: 'Raja Ampat di Papua Barat Daya merupakan episentrum keanekaragaman hayati laut dunia. Gugusan pulau karang karst yang menjulang di atas perairan zamrud toska menyembunyikan lebih dari 75% spesies karang keras dunia dan 1.500 spesies ikan tropis.',
      activities: [
        'Diving & snorkeling di terumbu karang kelas dunia (Manta Sandy, Cape Kri)',
        'Trekking ke puncak tebing karst Wayag & Piaynemo',
        'Menyaksikan burung langka Cendrawasih Merah di hutan tropis Waigeo',
        'Island hopping dengan speedboat keliling gugusan Misool'
      ],
      facilities: [
        'Resor apung ekologis (Eco-resort)',
        'Homestay khas warga lokal suku Maya',
        'Pusat penyewaan alat selam (Dive Center PADI)',
        'Pemandu lokal (Local Ranger) berlisensi'
      ],
      tips: 'Musim terbaik adalah Oktober hingga April saat ombak sangat tenang dan visibilitas bawah laut mencapai 30 meter. Bawalah reef-safe sunscreen untuk melindungi ekosistem karang.'
    },
    {
      id: 'bali',
      title: 'Pulau Bali',
      location: 'Provinsi Bali',
      region: 'Bali & Nusa Tenggara',
      category: 'Budaya',
      rating: 4.9,
      reviews: 4850,
      price: 'Gratis – Rp 50.000',
      bestTime: 'Mei – September',
      duration: '3 - 7 Hari',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'images/bali.svg',
      shortDesc: 'Pulau Dewata tersohor dengan perpaduan magis pura sakral, hamparan terasering sawah, dan pantai sunset eksotis.',
      longDesc: 'Bali menyajikan harmoni luar biasa antara spiritualitas Hindu Dharma, seni arsitektur pura yang adiluhung, tarian tradisional memukau seperti Tari Kecak Uluwatu, ombak selancar legendaris, dan ketenangan desa budaya Ubud.',
      activities: [
        'Menyaksikan magisnya Tari Kecak di tebing Pura Luhur Uluwatu saat senja',
        'Menyusuri terasering sawah hijau bertingkat di Jatiluwih & Tegallalang',
        'Wisata spiritual di Pura Ulun Danu Beratan dan Tirta Empul',
        'Berselancar dan menikmati sunset di pantai Seminyak, Canggu & Kuta'
      ],
      facilities: [
        'Akomodasi dari hostel backpacker hingga hotel bintang 5',
        'Pusat kuliner nusantara dan kafe internasional',
        'Layanan sewa motor dan mobil dengan pemandu wisata',
        'Pusat spa relaksasi dan yoga retreat tradisional'
      ],
      tips: 'Gunakan kain sarung dan selendang saat memasuki area suci pura sebagai wujud penghormatan adat istiadat Bali.'
    },
    {
      id: 'bromo',
      title: 'Gunung Bromo',
      location: 'Tengger Semeru, Jawa Timur',
      region: 'Jawa',
      category: 'Pegunungan',
      rating: 4.9,
      reviews: 3210,
      price: 'Rp 29.000 – Rp 34.000',
      bestTime: 'Juli – September',
      duration: '2 - 3 Hari',
      image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'images/bromo.svg',
      shortDesc: 'Kaldera vulkanik megah dengan lautan pasir berbisik dan panorama matahari terbit spektakuler di Penanjakan.',
      longDesc: 'Gunung Bromo (2.329 mdpl) di Taman Nasional Bromo Tengger Semeru menawarkan pemandangan magis yang tiada duanya di dunia. Lautan pasir seluas 10 kilometer persegi mengelilingi kawah aktif yang terus mengepulkan asap putih ke udara biru.',
      activities: [
        'Menyaksikan matahari terbit (Golden Sunrise) di Bukit Penanjakan 1 atau King Kong Hill',
        'Mendaki 250 anak tangga menuju bibir kawah aktif Gunung Bromo',
        'Berkeliling lautan Pasir Berbisik dan Bukit Teletubbies dengan Jeep 4x4',
        'Merasakan sensasi menunggang kuda khas Tengger'
      ],
      facilities: [
        'Armada Jeep Hardtop 4x4 berlisensi',
        'Penyewaan jaket tebal, syal, dan sarung tangan hangat',
        'Warung makan dan kedai kopi hangat 24 jam',
        'Penginapan, homestay, dan hotel berpanorama kaldera'
      ],
      tips: 'Suhu di Bromo dini hari bisa turun hingga 5°C bahkan mendekati 0°C di musim kemarau. Siapkan pakaian berlapis, kupluk, dan masker penyaring debu belerang.'
    },
    {
      id: 'labuan-bajo',
      title: 'Labuan Bajo',
      location: 'Manggarai Barat, Nusa Tenggara Timur',
      region: 'Bali & Nusa Tenggara',
      category: 'Bahari',
      rating: 4.9,
      reviews: 2950,
      price: 'Rp 50.000 – Rp 150.000',
      bestTime: 'April – Juni & Sept – Nov',
      duration: '3 - 5 Hari',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'images/labuan-bajo.svg',
      shortDesc: 'Kota pelabuhan eksotis pintu gerbang Kepulauan Komodo dengan pengalaman sailing Live on Board di atas kapal Phinisi.',
      longDesc: 'Labuan Bajo telah bertransformasi menjadi destinasi pariwisata super prioritas Indonesia. Dari pelabuhan marina yang elok, wisatawan memulai petualangan berlayar menjelajahi pulau-pulau savana berbukit terjal yang menakjubkan.',
      activities: [
        'Sailing Live On Board (LOB) menaiki kapal Phinisi tradisional mewah',
        'Trekking ke puncak Pulau Padar untuk menyaksikan lekukan 3 pantai berbeda',
        'Berenang bersama pari manta raksasa di Manta Point',
        'Berenang di kolam air asin alami di dalam Goa Rangko'
      ],
      facilities: [
        'Marina internasional dan dermaga kapal Phinisi',
        'Hotel resort tepi pantai bertaraf bintang lima',
        'Pusat kuliner seafood segar Kampung Ujung',
        'Bandara Internasional Komodo (LBJ)'
      ],
      tips: 'Pilihlah paket sailing trip 3D2N (3 hari 2 malam) untuk pengalaman berlayar komprehensif mengelilingi seluruh penjuru kepulauan.'
    },
    {
      id: 'danau-toba',
      title: 'Danau Toba',
      location: 'Sumatera Utara',
      region: 'Sumatera',
      category: 'Alam',
      rating: 4.8,
      reviews: 2130,
      price: 'Rp 10.000 – Rp 25.000',
      bestTime: 'Mei – September',
      duration: '3 - 4 Hari',
      image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'images/danau-toba.svg',
      shortDesc: 'Danau kaldera vulkanik terbesar di dunia dengan keindahan Pulau Samosir dan warisan budaya Batak Toba yang luhur.',
      longDesc: 'Danau Toba terbentuk dari letusan dahsyat gunung api purba sekitar 74.000 tahun silam. Memiliki panjang 100 km dan kedalaman 505 meter, danau megah ini menyuguhkan panorama perairan biru yang tenang berlatar perbukitan pinus hijau yang menyejukkan.',
      activities: [
        'Menjelajah desa adat Batak Tomok dan menyaksikan patung mistis Sigale-gale',
        'Bersepeda santai mengelilingi semenanjung Tuk-Tuk di Pulau Samosir',
        'Menikmati panorama Bukit Holbung dan jalan berliku Sibea-bea',
        'Mencicipi kuliner khas ikan mas arsik dan kopi arabika lintong'
      ],
      facilities: [
        'Kapal penyeberangan feri Ajibata - Tomok',
        'Hotel dan homestay bergaya arsitektur Rumah Bolon Batak',
        'Pusat cenderamata kain tenun Ulos tradisional',
        'Spot swafoto berstandar internasional'
      ],
      tips: 'Kunjungi Desa Huta Siallagan untuk melihat persidangan batu kuno dan belajar filosofi kain tenun ulos langsung dari penenun setempat.'
    },
    {
      id: 'borobudur',
      title: 'Candi Borobudur',
      location: 'Magelang, Jawa Tengah',
      region: 'Jawa',
      category: 'Sejarah',
      rating: 4.9,
      reviews: 5400,
      price: 'Rp 50.000 (Pelajar Rp 25.000)',
      bestTime: 'Sepanjang Tahun (Pagi/Sore)',
      duration: '1 - 2 Hari',
      image: 'https://images.unsplash.com/photo-1598890777032-bde13fba5be3?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'images/borobudur.svg',
      shortDesc: 'Mahakarya candi Buddha terbesar di dunia peninggalan Dinasti Syailendra, diakui sebagai Situs Warisan Dunia UNESCO.',
      longDesc: 'Candi Borobudur dibangun pada abad ke-8 masehi tanpa menggunakan semen sedikit pun. Monumen berstruktur punden berundak ini dihiasi dengan 2.672 panel relief naratif yang memukau dan 504 arca Buddha, merefleksikan tingkatan spiritual Kamadhatu, Rupadhatu, hingga Arupadhatu.',
      activities: [
        'Menyaksikan sunrise Borobudur dari Punthuk Setumbu dengan siluet stupa berkabut',
        'Menaiki struktur candi memakai sandal khusus Upanat didampingi pemandu edukasi',
        'Keliling pedesaan sekitar candi dengan mobil antik VW Safari',
        'Belajar membatik dan membuat gerabah di Desa Wisata Klipoh'
      ],
      facilities: [
        'Museum Karmawibhangga & Museum Kapal Samudraraksa',
        'Mobil golf ramah lingkungan keliling pelataran',
        'Area suvenir tertata rapi dan restoran khas Jawa',
        'Pemandu edukatif bersertifikat resmi'
      ],
      tips: 'Pesanlah tiket naik struktur candi jauh-jauh hari secara online karena kuota kunjungan harian dibatasi untuk menjaga kelestarian batu candi.'
    },
    {
      id: 'kawah-ijen',
      title: 'Kawah Ijen',
      location: 'Banyuwangi & Bondowoso, Jawa Timur',
      region: 'Jawa',
      category: 'Pegunungan',
      rating: 4.8,
      reviews: 1980,
      price: 'Rp 5.000 – Rp 7.500',
      bestTime: 'Juli – September (Dini Hari)',
      duration: '1 - 2 Hari',
      image: 'https://images.unsplash.com/photo-1601823984263-b87b59798b70?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'images/kawah-ijen.svg',
      shortDesc: 'Fenomena langka api biru abadi (Blue Fire) di dunia dan danau kawah asam berwarna toska pekat yang memukau.',
      longDesc: 'Kawah Ijen merupakan salah satu keajaiban alam terunik di bumi. Fenomena nyala api biru belerang hanya ada dua di dunia (salah satunya di Islandia). Di fajar hari, kabut tersingkap menampilkan danau kawah klorida paling asam di bumi dengan air berwarna hijau toska yang menakjubkan.',
      activities: [
        'Midnight trekking sejauh 3 km dimulai pukul 01.00 dini hari',
        'Menyaksikan pesona kobaran Blue Fire di dasar kawah belerang',
        'Menikmati matahari terbit di bibir kaldera dengan latar danau toska',
        'Melihat ketangguhan penambang belerang tradisional memikul beban 80 kg'
      ],
      facilities: [
        'Pos awal pendakian Paltuding lengkap dengan mushola & toilet',
        'Jasa ojek troli gerobak dorong tradisional Ijen',
        'Penyewaan masker respirator gas dan senter kepala (headlamp)',
        'Warung makan dan kopi hangat 24 jam'
      ],
      tips: 'Wajib menyewa masker gas respirator yang memadai karena asap gas belerang dapat menjadi pekat saat arah angin berhembus ke jalur trekking.'
    },
    {
      id: 'taman-komodo',
      title: 'Taman Nasional Komodo',
      location: 'Kepulauan Komodo, Nusa Tenggara Timur',
      region: 'Bali & Nusa Tenggara',
      category: 'Alam',
      rating: 4.9,
      reviews: 2410,
      price: 'Rp 150.000 – Rp 250.000',
      bestTime: 'Juni – Agustus',
      duration: '2 - 3 Hari',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'images/taman-komodo.svg',
      shortDesc: 'Habitat purba asli kadal terbesar di dunia (Varanus komodoensis), dilindungi dunia sebagai Biosphere Reserve.',
      longDesc: 'Taman Nasional Komodo mencakup Pulau Komodo, Pulau Rinca, Pulau Padar, serta puluhan pulau karang kecil lainnya. Berada di zona transisi Wallacea, kawasan ini menghadirkan perpaduan bukit savana kering yang eksotis dan hutan bakau dengan satwa liar yang hidup bebas di habitat aslinya.',
      activities: [
        'Trekking safari mencari komodo di Loh Liang atau Loh Buaya bersama Ranger',
        'Mengamati rusa timor, kerbau liar, dan burung kakatua jambul kuning',
        'Foto ikonik bersama komodo dari sudut aman berpemandu',
        'Menikmati keheningan malam bertabur bintang di perairan kepulauan'
      ],
      facilities: [
        'Pusat informasi dan interpretasi konservasi TN Komodo',
        'Jalur kayu (wooden boardwalk) trekking aman',
        'Ranger dan pawang berpengalaman',
        'Dermaga sandar perahu wisata modern'
      ],
      tips: 'Selalu patuhi aba-aba ranger pemandu. Jangan membuat gerakan tiba-tiba atau bersuara gaduh ketika berada di dekat satwa komodo.'
    },
    {
      id: 'nusa-penida',
      title: 'Nusa Penida',
      location: 'Klungkung, Provinsi Bali',
      region: 'Bali & Nusa Tenggara',
      category: 'Pantai',
      rating: 4.8,
      reviews: 3820,
      price: 'Rp 10.000 – Rp 25.000/Spot',
      bestTime: 'Mei – Oktober',
      duration: '1 - 3 Hari',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'images/nusa-penida.svg',
      shortDesc: 'Pulau tebing kapur spektakuler dengan landmark Kelingking Beach berkepala T-Rex dan deburan ombak samudra biru.',
      longDesc: 'Terletak di seberang selat Badung dari daratan utama Bali, Nusa Penida memukau wisatawan dengan tebing-tebing kapur putih vertikal yang menjulang tinggi di atas Samudra Hindia. Kelingking Beach yang menyerupai dinosaurus T-Rex telah menjadi salah satu pemandangan paling ikonik di Asia Tenggara.',
      activities: [
        'Berfoto di punggung tebing Kelingking Beach yang menyerupai T-Rex',
        'Menyaksikan kolam karang alami Broken Beach dan Angel’s Billabong',
        'Snorkeling berenang dengan pari manta di Manta Point Nusa Penida',
        'Bersantai di bawah naungan pohon palem pantai berpasir Crystal Bay'
      ],
      facilities: [
        'Speedboat cepat 30 menit dari Pelabuhan Sanur ke Banjar Nyuh',
        'Penyewaan mobil dan sepeda motor tour harian',
        'Kafe dan restoran estetik di atas tebing',
        'Villa dan resort berpanorama laut lepas'
      ],
      tips: 'Jalur trekking menuruni tebing ke pantai Kelingking sangat curam dan melelahkan. Jika kondisi fisik tidak prima, cukup nikmati keindahan panorama dari gardu pandang atas.'
    },
    {
      id: 'pantai-pink',
      title: 'Pantai Pink (Pink Beach)',
      location: 'Pulau Komodo, Nusa Tenggara Timur',
      region: 'Bali & Nusa Tenggara',
      category: 'Pantai',
      rating: 4.9,
      reviews: 1750,
      price: 'Termasuk Paket Wisata TN Komodo',
      bestTime: 'April – November',
      duration: '1 Hari',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'images/pantai-pink.svg',
      shortDesc: 'Keajaiban alam pantai berpasir merah muda yang tercipta dari serpihan karang merah dan mikroorganisme langka.',
      longDesc: 'Hanya ada segelintir pantai berpasir merah muda di muka bumi, dan salah satu yang tercantik berada di Kepulauan Komodo. Warna merah muda lembut ini terbentuk secara alami ketika serpihan koral merah kalsium karbonat bercampur dengan lembutnya butiran pasir pantai putih bersih.',
      activities: [
        'Snorkeling santai di terumbu karang dangkal yang kaya biota ikan nemo',
        'Berjemur dan bersantai di atas hamparan pasir berwarna merah muda',
        'Trekking ringan ke bukit savana sekitar untuk foto pemandangan pantai dari ketinggian',
        'Eksplorasi foto aerial (drone photography) dengan kontras air laut toska'
      ],
      facilities: [
        'Perahu sekoci transfer dari kapal phinisi ke bibir pantai',
        'Gazebo santai dan warung kelapa muda lokal',
        'Penyewaan alat snorkel, fin, dan jaket pelampung',
        'Spot foto instagramable berlatar bukit savana'
      ],
      tips: 'Dilarang keras mengambil atau membawa pulang butiran pasir pink sebagai suvenir demi menjaga kelestarian dan keaslian ekosistem alam.'
    },
    {
      id: 'wakatobi',
      title: 'Wakatobi',
      location: 'Kepulauan Wakatobi, Sulawesi Tenggara',
      region: 'Sulawesi',
      category: 'Bahari',
      rating: 4.9,
      reviews: 1290,
      price: 'Rp 160.000 (Kawasan TN)',
      bestTime: 'April – Juni & Okt – Des',
      duration: '4 - 6 Hari',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'images/wakatobi.svg',
      shortDesc: 'Cagar Biosfer Dunia UNESCO dengan 942 spesies ikan dan ratusan titik selam terbaik di dunia.',
      longDesc: 'Wakatobi merupakan akronim dari empat pulau utamanya: Wangi-wangi, Kaledupa, Tomia, dan Binongko. Menjadi cagar biosfer dunia UNESCO, kawasan ini adalah permata laut nusantara yang menyimpan 750 dari 850 spesies karang di seluruh dunia.',
      activities: [
        'Scuba diving kelas dunia di Roma Reef, Mari Mabuk, dan Pinnacle Tomia',
        'Menyaksikan kawanan lumba-lumba liar berenang di perairan Wangi-wangi saat fajar',
        'Mengunjungi perkampungan suku Bajo suku laut pengembara di atas air',
        'Mencicipi kuliner khas olahan singkong Kasuami dan ikan bakar cakalang'
      ],
      facilities: [
        'Dive resort bintang lima bersertifikasi internasional',
        'Bandara Matahora (WNI) di Pulau Wangi-wangi',
        'Penyewaan speedboat antar pulau (island hopping)',
        'Dive guide profesional berpengalaman puluhan tahun'
      ],
      tips: 'Perairan Wakatobi sangat tenang pada rentang April-Juni dan Oktober-Desember, memberikan visibilitas bawah laut sempurna hingga kedalaman 40 meter.'
    },
    {
      id: 'tana-toraja',
      title: 'Tana Toraja',
      location: 'Sulawesi Selatan',
      region: 'Sulawesi',
      category: 'Budaya',
      rating: 4.8,
      reviews: 1640,
      price: 'Rp 20.000 – Rp 30.000/Objek',
      bestTime: 'Juli – September (Musim Upacara)',
      duration: '3 - 4 Hari',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'images/tana-toraja.svg',
      shortDesc: 'Dataran tinggi mistis nan sakral dengan arsitektur rumah Tongkonan, upacara Rambu Solo’, dan makam tebing goa.',
      longDesc: 'Tana Toraja di Sulawesi Selatan adalah tanah leluhur yang mempertahankan tradisi megalitikum animisme Aluk Todolo. Di balik perbukitan hijau berkabut sejuk, berdiri megah barisan rumah adat Tongkonan dengan atap melengkung menyerupai haluan perahu, serta tradisi penghormatan arwah leluhur yang sakral.',
      activities: [
        'Menyaksikan upacara pemakaman akbar Rambu Solo’ yang penuh makna kultural',
        'Mengunjungi desa adat tertua Kete Kesu dengan lumbung padi berukir ukiran purba',
        'Mengeksplorasi makam tebing batu goa Londa dan boneka kayu leluhur Tau-Tau',
        'Menyeruput kopi Toraja Arabika single origin langsung di kedai kebun kopi'
      ],
      facilities: [
        'Hotel dan resort berdesain arsitektur ornamen khas Toraja',
        'Pemandu adat lokal (Local Cultural Guide) berwawasan luas',
        'Pusat suvenir kain tenun Toraja, ukiran kayu, dan manik-manik',
        'Kedai kopi autentik dan restoran masakan khas Toraja (Pa’piong)'
      ],
      tips: 'Bila beruntung diundang menyaksikan ritual Rambu Solo’, bawalah bingkisan sopan santun (seperti gula atau rokok) sebagai tanda penghormatan bagi keluarga yang berduka.'
    }
  ];

  /* --------------------------------------------------------------------------
     2. Data Galeri Wisata (12 Foto Menawan & Berkualitas Tinggi)
     -------------------------------------------------------------------------- */
  const galleryData = [
    {
      id: 'gal-1',
      title: 'Gugusan Pulau Karst Wayag',
      location: 'Raja Ampat, Papua Barat Daya',
      category: 'bahari',
      image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1000&q=80',
      fallback: 'images/gal-1.svg'
    },
    {
      id: 'gal-2',
      title: 'Pura Ulun Danu Beratan',
      location: 'Bedugul, Bali',
      category: 'budaya',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
      fallback: 'images/gal-2.svg'
    },
    {
      id: 'gal-3',
      title: 'Matahari Terbit Kaldera Bromo',
      location: 'Gunung Bromo, Jawa Timur',
      category: 'pegunungan',
      image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=80',
      fallback: 'images/gal-3.svg'
    },
    {
      id: 'gal-4',
      title: 'Puncak Eksotis Pulau Padar',
      location: 'Labuan Bajo, NTT',
      category: 'alam',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80',
      fallback: 'images/gal-4.svg'
    },
    {
      id: 'gal-5',
      title: 'Pemandangan Kaldera Danau Toba',
      location: 'Samosir, Sumatera Utara',
      category: 'alam',
      image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1000&q=80',
      fallback: 'images/gal-5.svg'
    },
    {
      id: 'gal-6',
      title: 'Keagungan Stupa Candi Borobudur',
      location: 'Magelang, Jawa Tengah',
      category: 'sejarah',
      image: 'https://images.unsplash.com/photo-1598890777032-bde13fba5be3?auto=format&fit=crop&w=1000&q=80',
      fallback: 'images/gal-6.svg'
    },
    {
      id: 'gal-7',
      title: 'Danau Toska Kawah Ijen',
      location: 'Banyuwangi, Jawa Timur',
      category: 'pegunungan',
      image: 'https://images.unsplash.com/photo-1601823984263-b87b59798b70?auto=format&fit=crop&w=1000&q=80',
      fallback: 'images/gal-7.svg'
    },
    {
      id: 'gal-8',
      title: 'Satwa Purba Komodo Liar',
      location: 'Taman Nasional Komodo, NTT',
      category: 'alam',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=80',
      fallback: 'images/gal-8.svg'
    },
    {
      id: 'gal-9',
      title: 'Tebing T-Rex Kelingking Beach',
      location: 'Nusa Penida, Bali',
      category: 'pantai',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80',
      fallback: 'images/gal-9.svg'
    },
    {
      id: 'gal-10',
      title: 'Kelembutan Pasir Pink Beach',
      location: 'Pulau Komodo, NTT',
      category: 'pantai',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      fallback: 'images/gal-10.svg'
    },
    {
      id: 'gal-11',
      title: 'Pesona Karang Bawah Laut Wakatobi',
      location: 'Kepulauan Wakatobi, Sulawesi Tenggara',
      category: 'bahari',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
      fallback: 'images/gal-11.svg'
    },
    {
      id: 'gal-12',
      title: 'Rumah Adat Tongkonan Kete Kesu',
      location: 'Tana Toraja, Sulawesi Selatan',
      category: 'budaya',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=80',
      fallback: 'images/gal-12.svg'
    }
  ];

  /* --------------------------------------------------------------------------
     3. State Management (Filters, Favorites, Theme)
     -------------------------------------------------------------------------- */
  const state = {
    searchQuery: '',
    selectedCategory: 'all',
    selectedRegion: 'all',
    selectedSort: 'popular',
    favorites: JSON.parse(localStorage.getItem('jelajah_favorites') || '[]'),
    theme: localStorage.getItem('jelajah_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    activeLightboxIndex: 0,
    currentGalleryList: [...galleryData]
  };

  /* --------------------------------------------------------------------------
     4. DOM Elements Cache
     -------------------------------------------------------------------------- */
  const preloader = document.getElementById('preloader');
  const scrollProgressBar = document.getElementById('scroll-progress');
  const navbarWrapper = document.querySelector('.navbar-wrapper');
  const backToTopBtn = document.getElementById('back-to-top');
  const currentYearSpan = document.getElementById('current-year');

  // Theme Toggles
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');

  // Mobile Navigation
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
  const mobileNavCloseBtn = document.getElementById('mobile-nav-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links .nav-link');

  // Search & Filter Elements
  const destinationsGrid = document.getElementById('destinations-grid');
  const searchInput = document.getElementById('search-destinations');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const filterPillBtns = document.querySelectorAll('.filter-category-pills .pill-btn');
  const regionSelect = document.getElementById('region-filter-select');
  const sortSelect = document.getElementById('sort-filter-select');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  const resultCountStrong = document.getElementById('result-count-text');

  // Hero Quick Search
  const heroSearchInput = document.getElementById('hero-search-input');
  const heroCategorySelect = document.getElementById('hero-category-select');
  const heroRegionSelect = document.getElementById('hero-region-select');
  const heroSearchBtn = document.getElementById('hero-search-btn');

  // Category Cards Buttons
  const categoryCards = document.querySelectorAll('.category-card');

  // Destination Detail Modal
  const destModalBackdrop = document.getElementById('dest-modal-backdrop');
  const destModalCloseBtn = document.getElementById('dest-modal-close');
  const modalHeroImg = document.getElementById('modal-hero-img');
  const modalTagCat = document.getElementById('modal-tag-cat');
  const modalTagRegion = document.getElementById('modal-tag-region');
  const modalTitle = document.getElementById('modal-title');
  const modalLocation = document.getElementById('modal-location');
  const modalRating = document.getElementById('modal-rating');
  const modalInfoPrice = document.getElementById('modal-info-price');
  const modalInfoSeason = document.getElementById('modal-info-season');
  const modalInfoDuration = document.getElementById('modal-info-duration');
  const modalDescText = document.getElementById('modal-desc-text');
  const modalActivitiesList = document.getElementById('modal-activities-list');
  const modalFacilitiesList = document.getElementById('modal-facilities-list');
  const modalTipsText = document.getElementById('modal-tips-text');
  const modalShareBtn = document.getElementById('modal-share-btn');
  const modalFavoriteBtn = document.getElementById('modal-favorite-btn');
  const modalMapsBtn = document.getElementById('modal-maps-btn');
  const modalTabBtns = document.querySelectorAll('.modal-tab-btn');
  const modalTabPanes = document.querySelectorAll('.modal-tab-pane');

  // Gallery & Lightbox Elements
  const galleryGrid = document.getElementById('gallery-grid');
  const galleryFilterBtns = document.querySelectorAll('.gallery-filters-row .pill-btn');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn = document.getElementById('lightbox-next-btn');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxLoc = document.getElementById('lightbox-loc');
  const lightboxCounter = document.getElementById('lightbox-counter');

  // Favorites Drawer
  const favDrawerBtn = document.getElementById('fav-drawer-btn');
  const mobileFavDrawerBtn = document.getElementById('mobile-fav-drawer-btn');
  const favoritesDrawer = document.getElementById('favorites-drawer');
  const favDrawerCloseBtn = document.getElementById('fav-drawer-close');
  const favItemsContainer = document.getElementById('fav-items-container');
  const favBadgeCount = document.getElementById('fav-badge-count');
  const mobileFavBadgeCount = document.getElementById('mobile-fav-badge-count');
  const favClearAllBtn = document.getElementById('fav-clear-all-btn');

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  const contactSubmitBtn = document.getElementById('contact-submit-btn');

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');

  // Toast Container
  const toastContainer = document.getElementById('toast-container');

  /* --------------------------------------------------------------------------
     5. Initialization & Theme Setup
     -------------------------------------------------------------------------- */
  function initApp() {
    // 1. Set Copyright Year
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. Apply Theme
    applyTheme(state.theme);

    // 3. Render Destinations
    renderDestinations();

    // 4. Render Gallery
    renderGallery();

    // 5. Update Favorites Counter & UI
    updateFavoritesUI();

    // 6. Setup Animated Counters with IntersectionObserver
    initAnimatedCounters();

    // 7. Setup FAQ Accordion
    initFaqAccordion();

    // 8. Dismiss Preloader smoothly
    setTimeout(() => {
      if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }
    }, 400);
  }

  /* --------------------------------------------------------------------------
     6. Theme Switcher (Dark / Light Mode)
     -------------------------------------------------------------------------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    state.theme = theme;
    localStorage.setItem('jelajah_theme', theme);

    const iconHtml = theme === 'dark' ? '☀️' : '🌙';
    if (themeToggleBtn) themeToggleBtn.innerHTML = iconHtml;
    if (mobileThemeToggleBtn) {
      mobileThemeToggleBtn.innerHTML = `${iconHtml} <span>Mode ${theme === 'dark' ? 'Terang' : 'Gelap'}</span>`;
    }
  }

  function toggleTheme() {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    showToast('Mode Tampilan', `Beralih ke mode ${newTheme === 'dark' ? 'Gelap 🌙' : 'Terang ☀️'}`);
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleTheme);

  /* --------------------------------------------------------------------------
     7. Scroll Progress & Sticky Navbar & Back to Top
     -------------------------------------------------------------------------- */
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    // Update Progress Bar
    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${progress}%`;
    }

    // Scrolled Navbar Glassmorphism
    if (navbarWrapper) {
      if (scrollY > 40) {
        navbarWrapper.classList.add('scrolled');
      } else {
        navbarWrapper.classList.remove('scrolled');
      }
    }

    // Back to Top Button
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }

    // Update Active Nav Links Based on Scroll Position
    updateActiveNavOnScroll();
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-menu .nav-link, .mobile-nav-links .nav-link').forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  /* --------------------------------------------------------------------------
     8. Mobile Navigation Drawer
     -------------------------------------------------------------------------- */
  function openMobileNav() {
    mobileNavDrawer.classList.add('open');
    mobileNavBackdrop.classList.add('open');
    hamburgerBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNavDrawer.classList.remove('open');
    mobileNavBackdrop.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', () => {
    if (mobileNavDrawer.classList.contains('open')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  if (mobileNavCloseBtn) mobileNavCloseBtn.addEventListener('click', closeMobileNav);
  if (mobileNavBackdrop) mobileNavBackdrop.addEventListener('click', closeMobileNav);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  /* --------------------------------------------------------------------------
     9. Render Destinations & Filtering Logic
     -------------------------------------------------------------------------- */
  function getFilteredDestinations() {
    return destinationsData.filter(item => {
      // 1. Text Search (title, description, location)
      const query = state.searchQuery.toLowerCase().trim();
      const matchSearch = !query ||
        item.title.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.shortDesc.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      // 2. Category Filter
      const matchCategory = state.selectedCategory === 'all' ||
        item.category.toLowerCase() === state.selectedCategory.toLowerCase();

      // 3. Region / Island Filter
      const matchRegion = state.selectedRegion === 'all' ||
        item.region.toLowerCase().includes(state.selectedRegion.toLowerCase());

      return matchSearch && matchCategory && matchRegion;
    }).sort((a, b) => {
      if (state.selectedSort === 'rating') {
        return b.rating - a.rating;
      }
      if (state.selectedSort === 'name-asc') {
        return a.title.localeCompare(b.title);
      }
      if (state.selectedSort === 'name-desc') {
        return b.title.localeCompare(a.title);
      }
      // default: popular (reviews count)
      return b.reviews - a.reviews;
    });
  }

  function renderDestinations() {
    if (!destinationsGrid) return;

    const filtered = getFilteredDestinations();

    // Update Result Counter
    if (resultCountStrong) {
      resultCountStrong.textContent = `${filtered.length} dari ${destinationsData.length}`;
    }

    // Empty State Check
    if (filtered.length === 0) {
      destinationsGrid.innerHTML = `
        <div class="destinations-empty-state">
          <div class="empty-icon">🔍</div>
          <h3 class="empty-title">Destinasi Tidak Ditemukan</h3>
          <p class="empty-desc">Maaf, kami tidak menemukan destinasi dengan kriteria "${state.searchQuery || state.selectedCategory}". Coba ubah kata kunci atau bersihkan filter.</p>
          <button type="button" class="btn btn-primary btn-sm" id="empty-state-reset-btn">
            🔄 Reset Semua Filter
          </button>
        </div>
      `;
      const emptyResetBtn = document.getElementById('empty-state-reset-btn');
      if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAllFilters);
      return;
    }

    // Render Cards
    destinationsGrid.innerHTML = filtered.map(item => {
      const isFav = state.favorites.includes(item.id);
      return `
        <article class="destination-card" data-id="${item.id}">
          <div class="destination-media">
            <img 
              src="${item.image}" 
              alt="${item.title} - ${item.location}" 
              class="destination-img"
              loading="lazy"
              onerror="this.onerror=null; this.src='${item.fallbackImage}';"
            >
            <div class="dest-badges-top">
              <span class="dest-tag dest-tag-cat">${item.category}</span>
              <span class="dest-tag">${item.region.split('&')[0].trim()}</span>
            </div>
            <button 
              type="button" 
              class="dest-favorite-btn ${isFav ? 'active' : ''}" 
              data-id="${item.id}"
              title="${isFav ? 'Hapus dari Favorit' : 'Simpan ke Favorit'}"
              aria-label="Simpan ke Favorit"
            >
              ${isFav ? '❤️' : '🤍'}
            </button>
          </div>
          <div class="dest-card-body">
            <div class="dest-meta-header">
              <span class="dest-location">📍 ${item.location.split(',')[0]}</span>
              <span class="dest-rating">⭐ ${item.rating.toFixed(1)} <small style="color:var(--text-muted); font-weight:normal;">(${item.reviews})</small></span>
            </div>
            <h3 class="dest-card-title">${item.title}</h3>
            <p class="dest-card-desc">${item.shortDesc}</p>
            <div class="dest-info-chips">
              <div class="chip-item">
                <span>🎟️</span>
                <span>${item.price.split('(')[0]}</span>
              </div>
              <div class="chip-item">
                <span>🗓️</span>
                <span>${item.bestTime.split('(')[0]}</span>
              </div>
            </div>
            <div class="dest-card-footer">
              <button type="button" class="btn btn-primary dest-btn-detail" data-id="${item.id}">
                Lihat Detail Lengkap ➔
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach Event Listeners to Card Buttons
    attachCardListeners();
  }

  function attachCardListeners() {
    // Detail Buttons
    document.querySelectorAll('.dest-btn-detail').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const destId = e.currentTarget.getAttribute('data-id');
        openDestinationModal(destId);
      });
    });

    // Favorite Buttons on Cards
    document.querySelectorAll('.dest-favorite-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const destId = e.currentTarget.getAttribute('data-id');
        toggleFavorite(destId);
      });
    });
  }

  /* --------------------------------------------------------------------------
     10. Search & Filter Handlers
     -------------------------------------------------------------------------- */
  // Search Input live handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (clearSearchBtn) {
        if (state.searchQuery.length > 0) {
          clearSearchBtn.classList.add('show');
        } else {
          clearSearchBtn.classList.remove('show');
        }
      }
      renderDestinations();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      clearSearchBtn.classList.remove('show');
      searchInput.focus();
      renderDestinations();
    });
  }

  // Category Pills
  filterPillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterPillBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedCategory = btn.getAttribute('data-category');
      renderDestinations();
    });
  });

  // Region / Island Dropdown
  if (regionSelect) {
    regionSelect.addEventListener('change', (e) => {
      state.selectedRegion = e.target.value;
      renderDestinations();
    });
  }

  // Sorting Dropdown
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.selectedSort = e.target.value;
      renderDestinations();
    });
  }

  // Reset Filters Button
  function resetAllFilters() {
    state.searchQuery = '';
    state.selectedCategory = 'all';
    state.selectedRegion = 'all';
    state.selectedSort = 'popular';

    if (searchInput) {
      searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.classList.remove('show');
    }
    if (regionSelect) regionSelect.value = 'all';
    if (sortSelect) sortSelect.value = 'popular';

    filterPillBtns.forEach(btn => {
      if (btn.getAttribute('data-category') === 'all') {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    renderDestinations();
    showToast('Filter Direset', 'Semua filter destinasi telah dikembalikan ke awal.');
  }

  if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetAllFilters);

  /* --------------------------------------------------------------------------
     11. Hero Quick Search & Category Card Actions
     -------------------------------------------------------------------------- */
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const query = heroSearchInput ? heroSearchInput.value.trim() : '';
      const cat = heroCategorySelect ? heroCategorySelect.value : 'all';
      const reg = heroRegionSelect ? heroRegionSelect.value : 'all';

      state.searchQuery = query;
      state.selectedCategory = cat;
      state.selectedRegion = reg;

      if (searchInput) searchInput.value = query;
      if (regionSelect) regionSelect.value = reg;

      filterPillBtns.forEach(btn => {
        if (btn.getAttribute('data-category') === cat) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      renderDestinations();

      // Smooth scroll to destinations section
      const destSection = document.getElementById('destinasi');
      if (destSection) {
        destSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Clicking Category Cards on Home
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-category');
      if (!cat) return;

      state.selectedCategory = cat;

      filterPillBtns.forEach(btn => {
        if (btn.getAttribute('data-category').toLowerCase() === cat.toLowerCase()) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      renderDestinations();

      const destSection = document.getElementById('destinasi');
      if (destSection) {
        destSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* --------------------------------------------------------------------------
     12. Destination Detail Modal (Pop-up)
     -------------------------------------------------------------------------- */
  let activeModalDest = null;

  function openDestinationModal(destId) {
    const dest = destinationsData.find(d => d.id === destId);
    if (!dest) return;

    activeModalDest = dest;

    // Populate Modal Content
    if (modalHeroImg) {
      modalHeroImg.src = dest.image;
      modalHeroImg.alt = dest.title;
      modalHeroImg.onerror = () => { modalHeroImg.src = dest.fallbackImage; };
    }
    if (modalTagCat) modalTagCat.textContent = dest.category;
    if (modalTagRegion) modalTagRegion.textContent = dest.region;
    if (modalTitle) modalTitle.textContent = dest.title;
    if (modalLocation) modalLocation.textContent = `📍 ${dest.location}`;
    if (modalRating) modalRating.textContent = `⭐ ${dest.rating.toFixed(1)} (${dest.reviews} ulasan)`;
    if (modalInfoPrice) modalInfoPrice.textContent = dest.price;
    if (modalInfoSeason) modalInfoSeason.textContent = dest.bestTime;
    if (modalInfoDuration) modalInfoDuration.textContent = dest.duration;
    if (modalDescText) modalDescText.textContent = dest.longDesc;

    // Render Activities List
    if (modalActivitiesList) {
      modalActivitiesList.innerHTML = dest.activities.map(act => `
        <div class="modal-bullet-item">
          <span class="icon">✅</span>
          <span>${act}</span>
        </div>
      `).join('');
    }

    // Render Facilities List
    if (modalFacilitiesList) {
      modalFacilitiesList.innerHTML = dest.facilities.map(fac => `
        <div class="modal-bullet-item">
          <span class="icon">✨</span>
          <span>${fac}</span>
        </div>
      `).join('');
    }

    // Render Tips
    if (modalTipsText) modalTipsText.textContent = dest.tips;

    // Google Maps link
    if (modalMapsBtn) {
      modalMapsBtn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dest.title + ' ' + dest.location)}`;
    }

    // Update Favorite Button State inside Modal
    updateModalFavButtonState();

    // Reset Active Tab to 'Tentang'
    resetModalTabs();

    // Show Modal
    destModalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDestinationModal() {
    if (destModalBackdrop) {
      destModalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
      activeModalDest = null;
    }
  }

  function resetModalTabs() {
    modalTabBtns.forEach((btn, idx) => {
      if (idx === 0) btn.classList.add('active');
      else btn.classList.remove('active');
    });
    modalTabPanes.forEach((pane, idx) => {
      if (idx === 0) pane.classList.add('active');
      else pane.classList.remove('active');
    });
  }

  modalTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabTarget = btn.getAttribute('data-tab');
      modalTabBtns.forEach(b => b.classList.remove('active'));
      modalTabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(tabTarget);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  if (destModalCloseBtn) destModalCloseBtn.addEventListener('click', closeDestinationModal);

  if (destModalBackdrop) {
    destModalBackdrop.addEventListener('click', (e) => {
      if (e.target === destModalBackdrop) closeDestinationModal();
    });
  }

  // Modal Share Button
  if (modalShareBtn) {
    modalShareBtn.addEventListener('click', () => {
      if (!activeModalDest) return;
      const shareUrl = window.location.href.split('#')[0] + '#' + activeModalDest.id;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast('Tautan Disalin! 🔗', `Link ke ${activeModalDest.title} telah disalin ke clipboard.`);
        }).catch(() => {
          showToast('Bagikan Destinasi', `Buka dan bagikan ${activeModalDest.title}`);
        });
      } else {
        showToast('Bagikan Destinasi', `Buka dan bagikan ${activeModalDest.title}`);
      }
    });
  }

  // Modal Favorite Toggle
  if (modalFavoriteBtn) {
    modalFavoriteBtn.addEventListener('click', () => {
      if (!activeModalDest) return;
      toggleFavorite(activeModalDest.id);
      updateModalFavButtonState();
    });
  }

  function updateModalFavButtonState() {
    if (!modalFavoriteBtn || !activeModalDest) return;
    const isFav = state.favorites.includes(activeModalDest.id);
    modalFavoriteBtn.innerHTML = isFav ? '❤️ Hapus dari Favorit' : '🤍 Simpan ke Favorit';
    modalFavoriteBtn.className = isFav ? 'btn btn-secondary' : 'btn btn-secondary';
  }

  /* --------------------------------------------------------------------------
     13. Favorites / Wishlist System (LocalStorage)
     -------------------------------------------------------------------------- */
  function toggleFavorite(destId) {
    const dest = destinationsData.find(d => d.id === destId);
    if (!dest) return;

    const index = state.favorites.indexOf(destId);
    if (index === -1) {
      state.favorites.push(destId);
      showToast('Favorit Ditambahkan ❤️', `${dest.title} telah disimpan ke daftar favorit.`);
    } else {
      state.favorites.splice(index, 1);
      showToast('Favorit Dihapus', `${dest.title} telah dihapus dari daftar favorit.`);
    }

    localStorage.setItem('jelajah_favorites', JSON.stringify(state.favorites));
    updateFavoritesUI();
    renderDestinations();
  }

  function updateFavoritesUI() {
    const count = state.favorites.length;
    if (favBadgeCount) favBadgeCount.textContent = count;
    if (mobileFavBadgeCount) mobileFavBadgeCount.textContent = count;

    renderFavoritesDrawerList();
  }

  function renderFavoritesDrawerList() {
    if (!favItemsContainer) return;

    if (state.favorites.length === 0) {
      favItemsContainer.innerHTML = `
        <div class="fav-empty-state">
          <div class="fav-empty-icon">🤍</div>
          <h4>Belum Ada Favorit</h4>
          <p>Klik ikon hati pada kartu destinasi untuk menyimpannya ke daftar liburan impian Anda.</p>
        </div>
      `;
      if (favClearAllBtn) favClearAllBtn.style.display = 'none';
      return;
    }

    if (favClearAllBtn) favClearAllBtn.style.display = 'inline-block';

    const favDestinations = destinationsData.filter(d => state.favorites.includes(d.id));

    favItemsContainer.innerHTML = favDestinations.map(d => `
      <div class="fav-item-card">
        <img 
          src="${d.image}" 
          alt="${d.title}" 
          class="fav-item-thumb" 
          onerror="this.onerror=null; this.src='${d.fallbackImage}';"
        >
        <div class="fav-item-info">
          <h4 class="fav-item-title">${d.title}</h4>
          <p class="fav-item-loc">📍 ${d.location.split(',')[0]}</p>
        </div>
        <div class="fav-item-actions">
          <button type="button" class="btn-sm fav-btn-view" data-id="${d.id}">Detail ➔</button>
          <button type="button" class="btn-sm fav-btn-remove" data-id="${d.id}">Hapus</button>
        </div>
      </div>
    `).join('');

    // Attach Listeners in Drawer
    favItemsContainer.querySelectorAll('.fav-btn-view').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        closeFavoritesDrawer();
        openDestinationModal(id);
      });
    });

    favItemsContainer.querySelectorAll('.fav-btn-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        toggleFavorite(id);
      });
    });
  }

  function openFavoritesDrawer() {
    if (favoritesDrawer) {
      favoritesDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeFavoritesDrawer() {
    if (favoritesDrawer) {
      favoritesDrawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (favDrawerBtn) favDrawerBtn.addEventListener('click', openFavoritesDrawer);
  if (mobileFavDrawerBtn) mobileFavDrawerBtn.addEventListener('click', () => {
    closeMobileNav();
    openFavoritesDrawer();
  });
  if (favDrawerCloseBtn) favDrawerCloseBtn.addEventListener('click', closeFavoritesDrawer);

  if (favClearAllBtn) {
    favClearAllBtn.addEventListener('click', () => {
      if (confirm('Hapus semua destinasi dari daftar favorit?')) {
        state.favorites = [];
        localStorage.setItem('jelajah_favorites', JSON.stringify([]));
        updateFavoritesUI();
        renderDestinations();
        showToast('Favorit Dikosongkan', 'Semua daftar favorit telah dihapus.');
      }
    });
  }

  /* --------------------------------------------------------------------------
     14. Galeri Wisata & Lightbox Viewer
     -------------------------------------------------------------------------- */
  function renderGallery() {
    if (!galleryGrid) return;

    galleryGrid.innerHTML = state.currentGalleryList.map((item, idx) => `
      <div class="gallery-item" data-index="${idx}">
        <img 
          src="${item.image}" 
          alt="${item.title}" 
          class="gallery-item-img"
          loading="lazy"
          onerror="this.onerror=null; this.src='${item.fallback}';"
        >
        <div class="gallery-overlay">
          <h4 class="gallery-caption-title">${item.title}</h4>
          <span class="gallery-caption-loc">📍 ${item.location}</span>
        </div>
        <div class="gallery-zoom-badge">🔍</div>
      </div>
    `).join('');

    galleryGrid.querySelectorAll('.gallery-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-index'), 10);
        openLightbox(idx);
      });
    });
  }

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCat = btn.getAttribute('data-gallery-filter');
      if (filterCat === 'all') {
        state.currentGalleryList = [...galleryData];
      } else {
        state.currentGalleryList = galleryData.filter(g => g.category.toLowerCase() === filterCat.toLowerCase());
      }
      renderGallery();
    });
  });

  function openLightbox(index) {
    state.activeLightboxIndex = index;
    updateLightboxContent();
    if (lightboxModal) {
      lightboxModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function updateLightboxContent() {
    const item = state.currentGalleryList[state.activeLightboxIndex];
    if (!item) return;

    if (lightboxImg) {
      lightboxImg.src = item.image;
      lightboxImg.alt = item.title;
      lightboxImg.onerror = () => { lightboxImg.src = item.fallback; };
    }
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxLoc) lightboxLoc.textContent = `📍 ${item.location}`;
    if (lightboxCounter) {
      lightboxCounter.textContent = `Foto ${state.activeLightboxIndex + 1} dari ${state.currentGalleryList.length}`;
    }
  }

  function prevLightbox() {
    state.activeLightboxIndex = (state.activeLightboxIndex - 1 + state.currentGalleryList.length) % state.currentGalleryList.length;
    updateLightboxContent();
  }

  function nextLightbox() {
    state.activeLightboxIndex = (state.activeLightboxIndex + 1) % state.currentGalleryList.length;
    updateLightboxContent();
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextLightbox);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Keyboard Shortcuts (ESC, Left, Right)
  window.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    } else if (destModalBackdrop && destModalBackdrop.classList.contains('open')) {
      if (e.key === 'Escape') closeDestinationModal();
    } else if (favoritesDrawer && favoritesDrawer.classList.contains('open')) {
      if (e.key === 'Escape') closeFavoritesDrawer();
    } else if (mobileNavDrawer && mobileNavDrawer.classList.contains('open')) {
      if (e.key === 'Escape') closeMobileNav();
    }
  });

  /* --------------------------------------------------------------------------
     15. Animated Statistics Counter (IntersectionObserver)
     -------------------------------------------------------------------------- */
  function initAnimatedCounters() {
    const counterElements = document.querySelectorAll('.counter-number[data-target]');
    if (counterElements.length === 0) return;

    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          counterElements.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            const duration = 2000;
            const step = Math.ceil(target / (duration / 25));
            let current = 0;

            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              counter.textContent = current.toLocaleString('id-ID');
            }, 25);
          });
        }
      });
    }, { threshold: 0.3 });

    const statsSection = document.querySelector('.stats-counter-strip');
    if (statsSection) {
      observer.observe(statsSection);
    }
  }

  /* --------------------------------------------------------------------------
     16. FAQ Interactive Accordion
     -------------------------------------------------------------------------- */
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      if (questionBtn) {
        questionBtn.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          // Optional: close other accordions
          faqItems.forEach(other => other.classList.remove('active'));
          if (!isActive) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  /* --------------------------------------------------------------------------
     17. Contact Form Validation & Submission
     -------------------------------------------------------------------------- */
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const phoneInput = document.getElementById('contact-phone');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');

      let isValid = true;

      // Validate Name (min 3 chars)
      if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
        nameInput.classList.add('is-invalid');
        isValid = false;
      } else {
        nameInput.classList.remove('is-invalid');
      }

      // Validate Email (regex pattern)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else {
        emailInput.classList.remove('is-invalid');
      }

      // Validate Message (min 10 chars)
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.classList.add('is-invalid');
        isValid = false;
      } else {
        messageInput.classList.remove('is-invalid');
      }

      if (!isValid) {
        showToast('Validasi Gagal ⚠️', 'Mohon lengkapi formulir dengan data yang valid.');
        return;
      }

      // Simulate sending with loading state
      const originalBtnText = contactSubmitBtn.innerHTML;
      contactSubmitBtn.innerHTML = 'Mengirim Pesan... ⏳';
      contactSubmitBtn.disabled = true;

      setTimeout(() => {
        contactSubmitBtn.innerHTML = originalBtnText;
        contactSubmitBtn.disabled = false;

        const ticketNo = 'JN-' + Math.floor(1000 + Math.random() * 9000);
        showToast(
          'Pesan Terkirim! ✅',
          `Terima kasih, ${nameInput.value.trim()}! Pesan Anda telah diterima (No. Tiket #${ticketNo}). Tim kami akan menghubungi Anda segera.`
        );

        contactForm.reset();
      }, 1000);
    });

    // Real-time input validation on change
    contactForm.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid')) {
          input.classList.remove('is-invalid');
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     18. Newsletter Subscription
     -------------------------------------------------------------------------- */
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim()) {
        showToast('Berlangganan Berhasil! 📬', `Email ${emailInput.value.trim()} berhasil didaftarkan untuk buletin mingguan wisata nusantara.`);
        newsletterForm.reset();
      }
    });
  }

  /* --------------------------------------------------------------------------
     19. Toast Notification System
     -------------------------------------------------------------------------- */
  function showToast(title, message) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-icon">✨</div>
      <div class="toast-content">
        <h5 class="toast-title">${title}</h5>
        <p class="toast-desc">${message}</p>
      </div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-hide');
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 300);
    }, 4000);
  }

  // Run App Initialization
  initApp();
});

