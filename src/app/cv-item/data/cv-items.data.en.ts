import { CvItem } from '../cv-item';

// tslint:disable:max-line-length
export const GENERAL = {
  name: 'Elvira Erdei',
  position: 'Software developer',
  description: `I started my career in IT as a software engineer during my studies of Computer Science at University of Szeged. After completing my bachelor's thesis, I became a junior software developer and tester at METRIX Hungary Kft. doing frontend development.
I am looking for new opportunities which include modern, progressive technologies in a collaborative working environment. Learning new things and trying out new stuff are part of my motivation. New roles are of interest if I can accompany the software end to end - from planning, implementation, deployment towards monitoring. The constant feedback of my work and the opportunity of continuous learning and experimentation define a proper working environment for me. Job offers outside of Szeged are not relevant to me.
This website is designed to be a simple, self-hosted online-CV, based on Angular. To find out more about the project, please click on the AngularCV logo in the bottom right corner.`,
};
// tslint:enable:max-line-length

export const CVITEMS: CvItem[] = [
  {
    title: 'METRIX Hungary Kft',
    subtitle: 'Software developer, tester',
    begin: '2019-08',
    end: '',
    description: 'Metrix Hungary Kft. is a young software development company based in Szeged Hungary. The portfolio of the company spreads from Facebook, ' +
      'mobile application development, to custom software programming. The employees have more than 10 years of experience in their fields, ' +
      'and have deep knowledge of design and development, even on enterprise levels. ' +
      'Their top priority is to always stay up to date in the forever changing field of programming and technology, so they can offer the best solutions to their customers.',
    tags: ['Javascript', 'Typescript', 'Angular', 'Node.js', 'PHP', 'MongoDB', 'Kubernetes', 'Gitlab', 'IntelliJ', 'Webstorm', 'Docker', 'Firebase', 'CSS3', 'HTML5'],
    link: 'https://www.metrix.co.hu/',
    thumbnail: 'metrix_logo.jpg',
  },
];

export const CERTIFICATES: CvItem[] = [
  {
    title: 'Computer Scientist',
    subtitle: 'University of Szeged | Faculty of Science and Informatics',
    begin: '',
    end: '2020-07-05',
    description: '',
    tags: [],
    attachment: 'computerscientist.jpg',
    thumbnail: 'szte_logo_en.jpg',
  },
  {
    title: 'Astronomer',
    subtitle: 'University of Szeged | Faculty of Science and Informatics',
    begin: '',
    end: '2016-07-03',
    description: '',
    tags: [],
    attachment: 'astronomer.jpg',
    thumbnail: 'szte_logo_en.jpg',
  },
  {
    title: 'Physicist',
    subtitle: 'University of Szeged | Faculty of Science and Informatics',
    begin: '',
    end: '2014-07-01',
    description: '',
    tags: [],
    attachment: 'physicist.jpg',
    thumbnail: 'szte_logo_en.jpg',
  },
];

export const EDUCATION: CvItem[] = [
  {
    title: 'University of Szeged | Faculty of Science and Informatics',
    subtitle: 'Bachelor of Science | Software Engineer',
    begin: '2017-09',
    end: '2020-07',
    description: '',
    tags: [],
    link: 'http://sci.u-szeged.hu/',
    thumbnail: 'szte.png',
  },
  {
    title: 'University of Szeged | Faculty of Science and Informatics',
    subtitle: 'Master of Science | Astronomer',
    begin: '2014-09',
    end: '2016-07',
    description: '',
    tags: [],
    link: 'http://sci.u-szeged.hu/',
    thumbnail: 'szte.png',
  },
  {
    title: 'University of Szeged | Faculty of Science and Informatics',
    subtitle: 'Bachelor of Science | Physicist',
    begin: '2010-09',
    end: '2014-07',
    description: '',
    tags: [],
    link: 'http://sci.u-szeged.hu/',
    thumbnail: 'szte.png',
  },
];

export const LANGUAGES = [
  // 100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
  { title: 'Hungarian', level: '100' },
  { title: 'English', level: '80' },
  { title: 'German', level: '20' },
  { title: 'Korean', level: '10' },
];

export const PROJECTS: CvItem[] = [
  {
    title: 'AngularCV',
    subtitle: 'A simple self-hosted online-CV.',
    begin: '2020-06',
    end: '',
    description: 'This project was created for the purpose of having a basic online-CV.',
    tags: ['Angular', 'MaterialDesign', 'GitHub', 'CSS3', 'TypeScript', 'JetBrains WebStorm', 'Firebase', 'jsPDF', 'npm'],
    link: '',
    thumbnail: '../AngularCV.svg',
  },
  {
    title: 'Personal resume site',
    subtitle: 'A fluid single-page personal portfolio site showcasing my skills as a front end web developer.',
    begin: '2020-07',
    end: '',
    description: 'I would have liked an eye-catching, aesthetically arranged page about myself.',
    tags: ['HTML5', 'CSS3', 'Javascript', 'Github', 'Firebase', 'JetBrains WebStorm'],
    link: 'https://viradev.web.app/',
    thumbnail: '../portitem1.jpeg',
  },
  {
    title: 'Memory game app',
    subtitle: 'A simple memory game with cute kitties.',
    begin: '2019-04',
    end: '2019-5',
    description: 'This was my first Android App in Java with Android Studio.',
    tags: ['Java', 'Android Studio', 'Github'],
    link: 'https://github.com/Chocoreo217/memorygame',
    thumbnail: '../portitem3_1.png',
  },
  {
    title: 'Softpaws - Dogshelter site',
    subtitle: 'Webpage for an imaginary Softpaws dog shelter in PHP.',
    begin: '2018-03',
    end: '2018-5',
    description: 'This was a project where I started learning the basics of HTML, CSS and PHP.',
    tags: ['HTML5', 'CSS3', 'PHP', 'Github'],
    link: 'https://github.com/Chocoreo217/softpaws-dogshelter',
    thumbnail: '../portitem4.JPG',
  },
];

export const CONTACT = {
  city: 'Szeged, Hungary',
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
    title: 'Watching moovies',
    icon: 'ondemand_video',
  },
  {
    title: 'Travelling',
    icon: 'not_listed_location',
  },
  {
    title: 'Reading',
    icon: 'icon-book',
  },
  {
    title: 'Cooking',
    icon: 'local_dining',
  },
  {
    title: 'Drawing',
    icon: 'brush',
  },
  {
    title: 'Listening music',
    icon: 'audiotrack',
  },
];

export const PUBLICATIONS: CvItem[] = [
  {
    title: 'Spitzer Discovers Young Stars with a \'Hula Hoop\'',
    subtitle: 'csillagaszat.hu',
    begin: '',
    end: '2013-09-10',
    description: 'Astrophysics | Star evolution',
    tags: [],
    link: 'https://www.csillagaszat.hu/hirek/asztrofizika-hirek/af-csillagok-fejlodese/korongban-bujocskazo-csillagparra-bukkant-a-spitzer/',
    thumbnail: 'csillagaszat_logo.png',
  },
  {
    title: 'Valley networks suggest ancient snowfall on Mars',
    subtitle: 'csillagaszat.hu',
    begin: '',
    end: '2013-08-08',
    description: 'Solar system | Mars',
    tags: [],
    link: 'https://www.csillagaszat.hu/hirek/nr-egyeb-naprendszer/nr-mars/osi-havazasrol-arulkodnak-a-marsi-volgyrendszerek/',
    thumbnail: 'csillagaszat_logo.png',
  },
  {
    title: 'Hubble shows link between stars\' ages and their orbits in dense cluster',
    subtitle: 'csillagaszat.hu',
    begin: '',
    end: '2013-08-02',
    description: 'Milky Way | Star clusters',
    tags: [],
    link: 'https://www.csillagaszat.hu/hirek/tejutrendszer/tr-csillaghalmazok/ket-csillaggeneraciot-talalt-a-hubble-a-hires-gombhalmazban/',
    thumbnail: 'csillagaszat_logo.png',
  },
  {
    title: 'Variation between hot extrasolar planet atmospheres revealed',
    subtitle: 'csillagaszat.hu',
    begin: '',
    end: '2013-07-21',
    description: 'Astrophysics | Exoplanets',
    tags: [],
    link: 'https://www.csillagaszat.hu/hirek/asztrofizika-hirek/af-exobolygok/valtozatosak-a-forro-jupiterek-legkorei/',
    thumbnail: 'csillagaszat_logo.png',
  },
  {
    title: 'Hubble Sees a Planetary Nebula in the Making',
    subtitle: 'csillagaszat.hu',
    begin: '',
    end: '2012-11-11',
    description: 'Astrophysics | Star evolution',
    tags: [],
    link: 'https://www.csillagaszat.hu/hirek/asztrofizika-hirek/af-csillagok-fejlodese/latvanyos-planetaris-kodok-az-urtavcsovek-celkeresztjeiben/',
    thumbnail: 'csillagaszat_logo.png',
  },
];


export const THESES: CvItem[] = [
  {
    title: 'Investigating data protection compliance of cloud services through a ChatBot application',
    subtitle: 'Software Engineer BSc',
    begin: '',
    end: '2020-05-14',
    description: '',
    tags: ['GDPR', 'data protection', 'cloud', 'chatbot', 'artificial intelligence', 'Facebook'],
    thumbnail: 'gdpr_bot.png',
  },
  {
    title: 'Modeling high mass stars and analyzing their supernova explosions',
    subtitle: 'Astronomer MSc',
    begin: '',
    end: '2016-05-12',
    description: '',
    tags: [],
    thumbnail: 'supernova.jpg',
  },
  {
    title: 'Exomoons',
    subtitle: 'Physicist BSc',
    begin: '',
    end: '2014-05-02',
    description: '',
    tags: [],
    thumbnail: 'exomoon.jpg',
  },
];
