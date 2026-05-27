export interface StudentData {
  id: number;
  name: string;
  avatar: string;
}

const generateAvatar = (name: string): string => {
  const encodedName = name.replace(/\s+/g, "+");
  return `https://ui-avatars.com/api/?name=${encodedName}&background=0D8ABC&color=fff`;
};

export const studentsData: StudentData[] = [
  {
    id: 1,
    name: "Adiwitya Firjatullah",
    avatar: generateAvatar("Adiwitya Firjatullah"),
  },
  {
    id: 2,
    name: "Andreas Rajendra Nurcahyo",
    avatar: generateAvatar("Andreas Rajendra Nurcahyo"),
  },
  {
    id: 3,
    name: "Benediktus Bintang Sulistiantoro",
    avatar: generateAvatar("Benediktus Bintang Sulistiantoro"),
  },
  {
    id: 4,
    name: "Carolina Beatrix Buavida Da Costa",
    avatar: generateAvatar("Carolina Beatrix Buavida Da Costa"),
  },
  {
    id: 5,
    name: "Cesya Magdalena Pardede",
    avatar: generateAvatar("Cesya Magdalena Pardede"),
  },
  {
    id: 6,
    name: "Desty Mikayla Ariana",
    avatar: generateAvatar("Desty Mikayla Ariana"),
  },
  {
    id: 7,
    name: "Dyah Ayu Kumala Sari",
    avatar: generateAvatar("Dyah Ayu Kumala Sari"),
  },
  {
    id: 8,
    name: "Faith Radhin Mahmuda",
    avatar: generateAvatar("Faith Radhin Mahmuda"),
  },
  {
    id: 9,
    name: "Fathan Rizky Achmad",
    avatar: generateAvatar("Fathan Rizky Achmad"),
  },
  {
    id: 10,
    name: "Fathir Rizki Hadiansyah",
    avatar: generateAvatar("Fathir Rizki Hadiansyah"),
  },
  {
    id: 11,
    name: "Ghaitsaa Kahla",
    avatar: generateAvatar("Ghaitsaa Kahla"),
  },
  {
    id: 12,
    name: "Ilham Dwi Arsandy",
    avatar: generateAvatar("Ilham Dwi Arsandy"),
  },
  {
    id: 13,
    name: "Joshuo Sutandhi",
    avatar: generateAvatar("Joshuo Sutandhi"),
  },
  {
    id: 14,
    name: "Labib Lintang Habibie",
    avatar: generateAvatar("Labib Lintang Habibie"),
  },
  {
    id: 15,
    name: "Lauvin Dondi",
    avatar: generateAvatar("Lauvin Dondi"),
  },
  {
    id: 16,
    name: "Muhammad Egar Fahreza",
    avatar: generateAvatar("Muhammad Egar Fahreza"),
  },
  {
    id: 17,
    name: "Muhammad Gewa Rizqnugroho",
    avatar: generateAvatar("Muhammad Gewa Rizqnugroho"),
  },
  {
    id: 18,
    name: "Muhammad Poundra Al-Fasya",
    avatar: generateAvatar("Muhammad Poundra Al-Fasya"),
  },
  {
    id: 19,
    name: "Muhammad Rafa Raditya",
    avatar: generateAvatar("Muhammad Rafa Raditya"),
  },
  {
    id: 20,
    name: "Nayomi Bataritoja Laksmono",
    avatar: generateAvatar("Nayomi Bataritoja Laksmono"),
  },
  {
    id: 21,
    name: "Nur Sidik",
    avatar: generateAvatar("Nur Sidik"),
  },
  {
    id: 22,
    name: "Rafael Abimanyu",
    avatar: generateAvatar("Rafael Abimanyu"),
  },
  {
    id: 23,
    name: "Rafa Mandala",
    avatar: generateAvatar("Rafa Mandala"),
  },
  {
    id: 24,
    name: "Raffi Aldhan Afghani",
    avatar: generateAvatar("Raffi Aldhan Afghani"),
  },
  {
    id: 25,
    name: "Rasya Al Riza",
    avatar: generateAvatar("Rasya Al Riza"),
  },
  {
    id: 26,
    name: "Rasya Ghazi Anggara",
    avatar: generateAvatar("Rasya Ghazi Anggara"),
  },
  {
    id: 27,
    name: "Rava Kadavi",
    avatar: generateAvatar("Rava Kadavi"),
  },
  {
    id: 28,
    name: "Razqha Fahzry Alfisyahrain",
    avatar: generateAvatar("Razqha Fahzry Alfisyahrain"),
  },
  {
    id: 29,
    name: "Rico Febrian Pratama",
    avatar: generateAvatar("Rico Febrian Pratama"),
  },
  {
    id: 30,
    name: "Rizki Putra Perbawa",
    avatar: generateAvatar("Rizki Putra Perbawa"),
  },
  {
    id: 31,
    name: "Rizky Teguh Ananda Surkakti",
    avatar: generateAvatar("Rizky Teguh Ananda Surkakti"),
  },
  {
    id: 32,
    name: "Syahfalah Muchtar",
    avatar: generateAvatar("Syahfalah Muchtar"),
  },
  {
    id: 33,
    name: "Tegar Bela Bangsa",
    avatar: generateAvatar("Tegar Bela Bangsa"),
  },
  {
    id: 34,
    name: "Yehezkiel Alberto Purnama",
    avatar: generateAvatar("Yehezkiel Alberto Purnama"),
  },
  {
    id: 35,
    name: "Yero Virdhan Akifan",
    avatar: generateAvatar("Yero Virdhan Akifan"),
  },
  {
    id: 36,
    name: "Zwingli Savanarola Lubis",
    avatar: generateAvatar("Zwingli Savanarola Lubis"),
  },
  {
    id: 37,
    name: "Nawri Ibrahim Ar-Giffari",
    avatar: generateAvatar("Nawri Ibrahim Ar-Giffari"),
  },
  {
    id: 38,
    name: "Maura",
    avatar: generateAvatar("Maura"),
  },
  {
    id: 39,
    name: "Afriansya Alfian",
    avatar: generateAvatar("Afriansya Alfian"),
  },
];