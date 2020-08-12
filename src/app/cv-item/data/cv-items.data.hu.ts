import { CvItem } from '../cv-item';

// tslint:disable:max-line-length
export const GENERAL = {
  name: 'Erdei Elvira',
  position: 'Szoftverfejlesztő',
  description: `Informatikai karrieremet szoftverfejlesztő informatikusként kezdtem, a Szegedi Tudományegyetem informatikai szakán. A diplomamunkám elvégzése után kezdő szoftverfejlesztővé és tesztelővé váltam a METRIX Hungary Kft.-nél, ahol frontend fejlesztést folytatok.

Új lehetőségeket keresek, amelyek magukba foglalják a modern és progresszív technológiákat egy együttműködésen alapuló munkakörnyezetben. Az új dolgok tanulása és új dolgok kipróbálása része a motivációmnak. Érdeklődésemnek egyik új iránya, ha képes lehetnék a szoftvert végigkísérni - a tervezéstől, a megvalósítástól, a telepítéstől a megfigyelésig. Az állandó visszajelzések a munkámról, valamint a folyamatos tanulás és tapasztalatszerzés határozza meg számomra a megfelelő munkakörnyezetet. Szegeden kívüli állásajánlatok nem relevánsak számomra.

Ezt a weboldalt úgy terveztem, hogy egy egyszerű, saját üzemeltetésű online önéletrajz legyen, amely Angular alapokon nyugszik. Ha többet szeretne megtudni a projektről, kattintson a jobb alsó sarokban található AngularCV logóra.`,
};
// tslint:enable:max-line-length

export const CVITEMS: CvItem[] = [
  {
    title: 'METRIX Hungary Kft',
    subtitle: 'Szoftverfejlesztő, tesztelő',
    begin: '2019-08',
    end: '',
    description: 'A Metrix Hungary Kft. egy kezdő szoftverfejlesztő cég Szegeden. A cég portfóliója a Facebook-tól kezdve, a mobil alkalmazások fejlesztésén' +
      ' át az egyedi szoftverek programozásáig terjed. Az alkalmazottak több mint 10 éves tapasztalattal rendelkeznek a területükön és további ' +
      'mély ismeretekkel rendelkeznek a tervezés és fejlesztés területén, akár vállalati szinten is. Legfontosabb prioritásuk, hogy ' +
      'mindig naprakészek maradjanak a programozás és a technológia örökké változó területén, hogy ügyfeleik számára a legjobb megoldásokat kínálhassák.',
    tags: ['Javascript', 'Typescript', 'Angular', 'Node.js', 'PHP', 'MongoDB', 'Kubernetes', 'Gitlab', 'IntelliJ', 'Webstorm', 'Docker',
      'Firebase', 'CSS3', 'HTML5'],
    link: 'https://www.metrix.co.hu/',
    thumbnail: 'metrix_logo.jpg',
  },
];

export const CERTIFICATES: CvItem[] = [
  {
    title: 'Programtervező informatikus',
    subtitle: 'Szegedi Tudományegyetem | Természettudományi és Informatikai Kar',
    begin: '',
    end: '2019-10-03',
    description: '',
    tags: [],
    attachment: 'informatikus.jpg',
    thumbnail: 'szte_logo_hu.jpg',
  },
  {
    title: 'Okleveles csillagász',
    subtitle: 'Szegedi Tudományegyetem | Természettudományi és Informatikai Kar',
    begin: '',
    end: '2019-05-27',
    description: '',
    tags: [],
    attachment: 'csillagasz.jpg',
    thumbnail: 'szte_logo_hu.jpg',
  },
  {
    title: 'Fizikus',
    subtitle: 'Szegedi Tudományegyetem | Természettudományi és Informatikai Kar',
    begin: '',
    end: '2019-05-20',
    description: '',
    tags: [],
    attachment: 'fizikus.jpg',
    thumbnail: 'szte_logo_hu.jpg',
  },
];

export const EDUCATION: CvItem[] = [
  {
    title: 'Szegedi Tudományegyetem | Természettudományi és Informatikai Kar',
    subtitle: 'Bachelor of Science | Programtervező informatikus',
    begin: '2017-09',
    end: '2020-07',
    description: '',
    tags: [],
    link: 'http://sci.u-szeged.hu/',
    thumbnail: 'szte.png',
  },
  {
    title: 'Szegedi Tudományegyetem | Természettudományi és Informatikai Kar',
    subtitle: 'Master of Science | Okleveles csillagász',
    begin: '2014-09',
    end: '2016-07',
    description: '',
    tags: [],
    link: 'http://sci.u-szeged.hu/',
    thumbnail: 'szte.png',
  },
  {
    title: 'Szegedi Tudományegyetem | Természettudományi és Informatikai Kar',
    subtitle: 'Bachelor of Science | Fizikus',
    begin: '2010-09',
    end: '2014-07',
    description: '',
    tags: [],
    link: 'http://sci.u-szeged.hu/',
    thumbnail: 'szte.png',
  },
];

export const LANGUAGES = [
  // RATE YOURSELF  =>  100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
  { title: 'Magyar', level: '100' },
  { title: 'Angol', level: '80' },
  { title: 'Német', level: '20' },
  { title: 'Koreai', level: '10' },
];

export const PROJECTS: CvItem[] = [
  {
    title: 'AngularCV',
    subtitle: 'Egy egyszerű, saját üzemeltetésű online önéletrajz.',
    begin: '2020-06',
    end: '',
    description: 'A projekt célja az volt, hogy egy online önéletrajzot készítsek saját célra.',
    tags: ['Angular', 'MaterialDesign', 'GitHub', 'CSS', 'TypeScript', 'JetBrains WebStorm', 'Firebase', 'jsPDF', 'npm'],
    link: '',
    thumbnail: '../AngularCV.svg',
  },
];

export const CONTACT = {
  city: 'Szeged, Magyarország',
  phone: '06302662064',
  mail: 'elvira.erdei@gmail.com',
  skype: '', // just the account name
  linkedin: 'https://www.linkedin.com/in/elvira-erdei-5247301b1/', // full url
  github: 'https://github.com/Chocoreo217', // full url
  facebook: 'https://www.facebook.com/elvira.erdei', // full url
  /*other: [
    { title: 'Medium', icon: 'icon-medium', link: '' },
    { title: 'GitHub Page', icon: 'icon-github', link: '' },
  ],*/
};

export const INTERESTS = [
  {
    title: 'Sorozatnézés',
    icon: 'ondemand_video',
  },
  {
    title: 'Utazás',
    icon: 'not_listed_location',
  },
  {
    title: 'Olvasás',
    icon: 'icon-book',
  },
  {
    title: 'Főzés',
    icon: 'local_dining',
  },
  {
    title: 'Rajzolás',
    icon: 'brush',
  },
  {
    title: 'Zenehallgatás',
    icon: 'audiotrack',
  },
];

export const PUBLICATIONS: CvItem[] = [
  {
    title: 'Korongban “bújócskázó” csillagpárra bukkant a Spitzer',
    subtitle: 'csillagaszat.hu',
    begin: '',
    end: '2013-09-10',
    description: 'Asztrofizika | Csillagok fejlődése',
    tags: [],
    link: 'https://www.csillagaszat.hu/hirek/asztrofizika-hirek/af-csillagok-fejlodese/korongban-bujocskazo-csillagparra-bukkant-a-spitzer/',
    thumbnail: 'csillagaszat_logo.png',
  },
  {
    title: 'Ősrégi havazásról árulkodnak a marsi völgyrendszerek',
    subtitle: 'csillagaszat.hu',
    begin: '',
    end: '2013-08-08',
    description: 'Naprendszer | Mars',
    tags: [],
    link: 'https://www.csillagaszat.hu/hirek/nr-egyeb-naprendszer/nr-mars/osi-havazasrol-arulkodnak-a-marsi-volgyrendszerek/',
    thumbnail: 'csillagaszat_logo.png',
  },
  {
    title: 'Két csillaggenerációt talált a Hubble a híres gömbhalmazban',
    subtitle: 'csillagaszat.hu',
    begin: '',
    end: '2013-08-02',
    description: 'Tejútrendszer | Csillaghalmazok',
    tags: [],
    link: 'https://www.csillagaszat.hu/hirek/tejutrendszer/tr-csillaghalmazok/ket-csillaggeneraciot-talalt-a-hubble-a-hires-gombhalmazban/',
    thumbnail: 'csillagaszat_logo.png',
  },
  {
    title: 'Változatosak a forró jupiterek légkörei',
    subtitle: 'csillagaszat.hu',
    begin: '',
    end: '2013-07-21',
    description: 'Asztrofizika | Exobolygók',
    tags: [],
    link: 'https://www.csillagaszat.hu/hirek/asztrofizika-hirek/af-exobolygok/valtozatosak-a-forro-jupiterek-legkorei/',
    thumbnail: 'csillagaszat_logo.png',
  },
  {
    title: 'Látványos planetáris ködök az űrtávcsövek célkeresztjeiben',
    subtitle: 'csillagaszat.hu',
    begin: '',
    end: '2012-11-11',
    description: 'Asztrofizika | Csillagok fejlődése',
    tags: [],
    link: 'https://www.csillagaszat.hu/hirek/asztrofizika-hirek/af-csillagok-fejlodese/latvanyos-planetaris-kodok-az-urtavcsovek-celkeresztjeiben/',
    thumbnail: 'csillagaszat_logo.png',
  },
];

export const THESES: CvItem[] = [
  {
    title: 'Felhő alkalmazások adatvédelmi megfelelőségének vizsgálata egy ChatBot alkalmazáson keresztül',
    subtitle: 'Programtervező informatikus BSc',
    begin: '',
    end: '2020-05-14',
    description: `Az okos eszközök és környezetek internetes megjelenésével és elterjedésével olyan adatvédelmi problémák merültek fel, amelyek kezeléséhez új Európai Uniós szabályozásra volt szükség. Ennek következtében 2018. május 25-étől valamennyi EU országban kötelezően alkalmazandó személyes Általános Adatvédelmi Rendeletet (General Data Protection Regulation – GDPR, 2016/679/EU) alkottak, amely képes szabályozni a technológiai újítások által kialakult helyzetet. Az IoT (Internet of Things) eszközök esetében különösen fontos tudatában lenni annak, hogy mekkora kockázatot vállalunk az eszközök alkalmazásával, hiszen könnyedén illetéktelen felek számára is elérhetővé válhatnak az adataink

A szakdolgozat célja az IoT és felhő alkalmazások használata során előfordulható személyiségi és adatvédelmi kockázatok kategorizálása, valamint GDPR megfelelőségi irányelvek megfogalmazása. További feladat egy Chatbot mintaalkalmazás fejlesztése, amelyen keresztül szemléltethető a felhő, IoT és mesterséges intelligencia alkalmazása által esetlegesen fellépő biztonsági problémák jelenléte.`,
    tags: ['GDPR', 'adatvédelem', 'felhő', 'chatbot', 'mesterséges intelligencia', 'Facebook'],
    thumbnail: 'gdpr_bot.png',
  },
  {
    title: 'Nagy tömegű csillagok modellezése és szupernóva-robbanásaik vizsgálata',
    subtitle: 'Csillagász MSc',
    begin: '',
    end: '2016-05-12',
    description: `A szupernóvák a kataklizmikus változócsillagok csoportjába tartoznak. Ezek az
objektumok alapvetően két eltérő módon jöhetnek létre. Munkám során ezek közül azon
szupernóva-robbanásokat elemeztem, amelyek nagy tömegű csillagok összeomlásakor
keletkeztek. Diplomamunkámban megvizsgáltam az ilyen típusú progenítorok
tömegvesztését befolyásoló fizikai paramétereket, és tanulmányoztam a belőlük kialakuló
szupernóva-robbanások fénygörbéjét is. Ehhez az analízishez a MESA, illetve az SNEC
programokat használtam fel úgy, hogy a kollapszár szupernóvák fénygörbéinek
előállításánál a progenitor és a robbanás fizikai tulajdonságait is figyelembe vettem.
Dolgozatom első felében ismertetem a nagy tömegű csillagok fejlődésének elméleti
hátterét és a szupernóva-robbanások osztályozását, valamint rövid leírást adok a MESA és
az SNEC programokról. Diplomamunkám másik felében részletezem az elért
eredményeket és azok lehetséges asztrofizikai magyarázatát. Végül pedig összegzem az
ezekből nyert információkat.`,
    tags: [],
    link: 'http://astro.u-szeged.hu/szakdolg/erdeielvira_szdMSc/ErdeiElvira_szdMSc.pdf',
    thumbnail: 'supernova.jpg',
  },
  {
    title: 'Exoholdak',
    subtitle: 'Fizikus BSc',
    begin: '',
    end: '2014-05-02',
    description: `Napjainkban a csillagász társadalom jelentős része a Naprendszertől távoli csillagok körül
keringő, Földhöz hasonló bolygók felfedezésének lázában ég. Vannak azonban olyan
kutatók, akik már ennél is előbbre tekintenek, extraszoláris rendszerben keringő
exobolygók kísérőinek kimutatásán fáradoznak. Rendelkezésünkre állnak tudományosan
megalapozott, elméletben kidolgozott detektálási eljárások, azonban a technika mostani
színvonala mellett kivitelezésük nehéz feladatnak számít.
Az emberiség számára az exoholdak felfedezése fontos lehet, méretük és tulajdonságuk
alapján az általunk ismert életformák kialakulhatnak rajtuk. Elengedhetetlen feltétele
azonban ennek, hogy a bolygó, ami körül kering, a lakható övezetben legyen. Az eddigi
felfedezett exobolygók jelentős része a Jupiterhez hasonló vagy annál nagyobb óriás,
amelyeken az élet feltétele nem biztosított. A holdjaik viszont tulajdonságaik alapján
alkalmasak lehetnek az élet számára.`,
    tags: [],
    link: 'http://astro.u-szeged.hu/szakdolg/erdeielvira_szdBSc/ErdeiElvira_szdBSc.pdf',
    thumbnail: 'exomoon.jpg',
  },
];
