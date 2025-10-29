const courseDetail = {
  description:
    "Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat pemula dalam desain pengalaman pengguna. Desainer UX fokus pada interaksi yang dilakukan orang dengan produk seperti situs web, aplikasi seluler, dan objek fisik. Desainer UX membuat interaksi sehari-hari itu dapat digunakan, menyenangkan, dan dapat diakses. Peran seorang desainer UX tingkat pemula mungkin termasuk berempati dengan pengguna, menentukan poin rasa sakit mereka, memunculkan ide untuk solusi desain, membuat wireframe, prototipe, dan maket, dan menguji desain untuk mendapatkan umpan balik.",
  title:
    "Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.",
  image: {
    url: "/img/card/1.jpg",
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

export function getCourseDetail() {
  return courseDetail;
}
