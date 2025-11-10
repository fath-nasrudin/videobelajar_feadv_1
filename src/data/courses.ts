import { Course } from "@/types";

export function getCourses() {
  const courses: Course[] = [];

  const titles = [
    "Big 4 Auditor Financial Analyst",
    "Advanced Tax & Compliance Mastery",
    "Financial Modeling & Valuation",
    "Corporate Finance Bootcamp",
    "Investment Banking Fundamental",
    "Risk Management & Audit",
    "Data Analytics for Finance",
    "Excel Expert for Accountants",
    "Financial Report Deep Dive",
  ];

  const instructorsPool = [
    {
      id: "instructor-1",
      name: "Gregorius Edrik Lawanto",
      position: "Senior Talent Acquisition",
      company: "WingsGroup",
      profileUrl: "/img/instructor/8.png",
      description:
        "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
    },
    {
      id: "instructor-2",
      name: "Sarah Felicia Wijaya",
      position: "Finance Manager",
      company: "Tokopedia",
      profileUrl: "/img/instructor/2.png",
      description:
        "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
    },
    {
      id: "instructor-3",
      name: "Rifky Adi Nugroho",
      position: "Senior Auditor",
      company: "KPMG Indonesia",
      profileUrl: "/img/instructor/3.png",
      description:
        "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
    },
  ];

  for (let i = 1; i <= 9; i++) {
    const randomPrice = Math.floor(Math.random() * 400) + 150;
    const discount = Math.floor(Math.random() * 50) + 20;

    courses.push({
      id: `c_${i}`,
      title: titles[i - 1],
      description:
        "Mulai transformasi dengan instruktur profesional, studi kasus real, dan kurikulum intensif yang siap pakai di industri.",
      image: {
        url: `/img/card/${i}.jpg`,
        alt: titles[i - 1],
      },
      instructors: [instructorsPool[i % 3], instructorsPool[(i + 1) % 3]],
      rating: {
        average: +(Math.random() * 1.5 + 3.5).toFixed(1),
        ratingCount: Math.floor(Math.random() * 200) + 20,
      },
      price: {
        discounted: randomPrice - (randomPrice * discount) / 100,
        original: randomPrice,
        discount_percentage: discount,
      },
      modules: Array.from({ length: 4 }).map((_, idx) => ({
        title: `Module ${idx + 1}: Core Competency Section`,
        materials: [
          {
            title: "Video pembelajaran utama",
            type: "video",
            duration: `${8 + idx * 4} minutes`,
          },
          {
            title: "Study case & breakdown",
            type: "video",
            duration: `${10 + idx * 3} minutes`,
          },
          {
            title: "Materi ringkasan PDF",
            type: "pdf",
            duration: `Download`,
          },
        ],
      })),
      reviews: [
        {
          account: {
            id: "user-01",
            name: "Ardian Maulana",
            status: "Alumni Batch 2",
            profileUrl: "/img/instructor/8.png",
          },
          text: "Materinya langsung ke inti, gak banyak teori kosong. Cocok buat yang mau cepat upgrade skill.",
          rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
        },
        {
          account: {
            id: "user-02",
            name: "Nabila Putri",
            status: "Alumni Batch 4",
            profileUrl: "/img/instructor/8.png",
          },
          text: "Instrukturnya enak jelasinnya, banyak contoh real di industri. Worth it.",
          rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
        },
      ],
      features: [
        {
          title: "Kelas Ini Sudah Termasuk",
          items: [
            { iconUrl: "/img/icons/file-check.svg", text: "Ujian Akhir" },
            { iconUrl: "/img/icons/book-2.svg", text: `${30 + i * 2} Video` },
            { iconUrl: "/img/icons/file-edit.svg", text: `${5 + i} Dokumen` },
            { iconUrl: "/img/icons/video.svg", text: "Sertifikat" },
            { iconUrl: "/img/icons/file-certificate.svg", text: "Pretest" },
          ],
        },
        {
          title: "Bahasa Pengantar",
          items: [
            { iconUrl: "/img/icons/world.svg", text: "Bahasa Indonesia" },
          ],
        },
      ],
    });
  }

  return courses;
}

const courseDetail: Course = {
  id: `c_7`,
  rating: {
    average: 3.6,
    ratingCount: 86,
  },
  description:
    "Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat pemula dalam desain pengalaman pengguna. Desainer UX fokus pada interaksi yang dilakukan orang dengan produk seperti situs web, aplikasi seluler, dan objek fisik. Desainer UX membuat interaksi sehari-hari itu dapat digunakan, menyenangkan, dan dapat diakses. Peran seorang desainer UX tingkat pemula mungkin termasuk berempati dengan pengguna, menentukan poin rasa sakit mereka, memunculkan ide untuk solusi desain, membuat wireframe, prototipe, dan maket, dan menguji desain untuk mendapatkan umpan balik.",
  title:
    "Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.",
  image: {
    url: "/img/card/1.jpg",
    alt: "course card image",
  },
  instructors: [
    {
      id: "instructor-1",
      name: "Gregorius Edrik Lawanto",
      position: "Senior Talent Acquisition",
      company: "WingsGroup",
      description:
        "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
      profileUrl: "/img/instructor/8.png",
    },

    {
      id: "instructor-2",
      name: "Gregorius Edrik Lawanto",
      position: "Senior Talent Acquisition",
      company: "WingsGroup",
      description:
        "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
      profileUrl: "/img/instructor/8.png",
    },
  ],
  modules: [
    {
      title: "Introduction to Course 1: Foundations of User Experience Design",
      materials: [
        {
          title: "The basics of user experience design",
          type: "video",
          duration: "12 minutes",
        },
        {
          title: "Jobs in the field of user experience",
          type: "video",
          duration: "12 minutes",
        },
        {
          title: "The product development life cycle",
          type: "video",
          duration: "12 minutes",
        },
      ],
    },
    {
      title: "Universal design, inclusive design, and equity-focused design",
      materials: [
        {
          title: "The basics of user experience design",
          type: "video",
          duration: "12 minutes",
        },
        {
          title: "Jobs in the field of user experience",
          type: "video",
          duration: "12 minutes",
        },
        {
          title: "The product development life cycle",
          type: "video",
          duration: "12 minutes",
        },
      ],
    },
    {
      title: "Introduction to design sprints",
      materials: [
        {
          title: "The basics of user experience design",
          type: "video",
          duration: "12 minutes",
        },
        {
          title: "Jobs in the field of user experience",
          type: "video",
          duration: "12 minutes",
        },
        {
          title: "The product development life cycle",
          type: "video",
          duration: "12 minutes",
        },
      ],
    },
    {
      title: "Introduction to UX research",
      materials: [
        {
          title: "The basics of user experience design",
          type: "video",
          duration: "12 minutes",
        },
        {
          title: "Jobs in the field of user experience",
          type: "video",
          duration: "12 minutes",
        },
        {
          title: "The product development life cycle",
          type: "video",
          duration: "12 minutes",
        },
      ],
    },
  ],
  reviews: [
    {
      account: {
        id: "user-01",
        name: "Gregorius Edrik Lawanto",
        status: "Alumni Batch 2",
        profileUrl: "/img/instructor/8.png",
      },
      text: "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
      rating: 3.5,
    },
    {
      account: {
        id: "user-02",
        name: "Julious Edrik Lawanto",
        status: "Alumni Batch 4",
        profileUrl: "/img/instructor/8.png",
      },
      text: "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
      rating: 3.5,
    },
  ],
  price: {
    discounted: 250,
    original: 500,
    discount_percentage: 50,
  },
  features: [
    {
      title: "Kelas Ini Sudah Termasuk",
      items: [
        { iconUrl: "/img/icons/file-check.svg", text: "Ujian Akhir" },
        { iconUrl: "/img/icons/book-2.svg", text: "49 Video" },
        { iconUrl: "/img/icons/file-edit.svg", text: "7 Dokumen" },
        { iconUrl: "/img/icons/video.svg", text: "Sertifikat" },
        { iconUrl: "/img/icons/file-certificate.svg", text: "Pretest" },
      ],
    },
    {
      title: "Bahasa pengantar",
      items: [{ iconUrl: "/img/icons/world.svg", text: "Bahasa Indonesia" }],
    },
  ],
};

export function getCourseDetail(id: string) {
  const courses = getCourses();
  return courses.find((course) => course.id === id);
}
