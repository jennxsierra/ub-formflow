export interface ProjectPhase {
  id: number
  name: string
  code: string
  description: string
  image: string
  report?: string
  presentation?: string
  externalLinks?: {
    name: string
    url: string
  }[]
}

export const projectPhases: ProjectPhase[] = [
  {
    id: 1,
    name: 'Needfinding',
    code: 'CMPS3141-SPP1-25S1',
    description: 'Initial interviews with key users and the key insights/inferences determined.',
    image: 'images/phases/01-empathy-map.png',
    presentation: 'documents/presentations/CMPS3141-SPP1-25S1-P.pdf',
  },
  {
    id: 2,
    name: 'POV and Experience Prototypes',
    code: 'CMPS3141-SPP2-25S1',
    description:
      'Points of views, how might we statements, and experience prototypes from additional interviews',
    image: 'images/phases/02-prototype.png',
    report: 'documents/reports/CMPS3141-SPP2-25S1-R.pdf',
    presentation: 'documents/presentations/CMPS3141-SPP2-25S1-P.pdf',
  },
  {
    id: 3,
    name: 'Website',
    code: 'CMPS3141-SPP3-25S1',
    description: 'Professional website showcasing the project.',
    image: 'images/phases/03-github.png',
    externalLinks: [{ name: 'GitHub', url: 'https://github.com/jennxsierra/ub-formflow' }],
  },
  {
    id: 4,
    name: 'Concept Video',
    code: 'CMPS3141-SPP4-25S1',
    description:
      "Videos showcasing UB Formflow's value proposition. Also includes an AI video test",
    image: 'images/phases/04-thumbnail.png',
    externalLinks: [
      { name: 'Main Video', url: 'https://youtu.be/ALXrb68nyQU' },
      { name: 'AI Video', url: 'https://youtu.be/SQ9J25YneqA' },
    ],
  },
  {
    id: 5,
    name: 'Low-Fi Prototyping & Pilot Usability Test',
    code: 'CMPS3141-SPP5-25S1',
    description: 'Sketches upon sketches of the initial prototypes and UI storyboards.',
    image: 'images/phases/05-testing.JPG',
    report: 'documents/reports/CMPS3141-SPP5-25S1-R.pdf',
    presentation: 'documents/presentations/CMPS3141-SPP5-25S1-P.pdf',
  },
  {
    id: 6,
    name: 'Medium-Fi Prototype',
    code: 'CMPS3141-SPP6-25S1',
    description:
      'Prototype with increased fidelity, showcased at FST STEM Fair 2025 (November 13, 2025).',
    image: 'images/phases/06-progress.png',
    presentation: 'documents/presentations/CMPS3141-SPP6-25S1-P.pdf',
    externalLinks: [
      { name: 'README', url: 'documents/readmes/CMPS3141-SPP6-25S1-README.pdf' },
      { name: 'Prototype', url: 'https://ub-formflow-medium-fi.figma.site/' },
    ],
  },
  {
    id: 7,
    name: 'Interactive Hi-Fi Prototype (Coming Soon!)',
    code: 'CMPS3141-SPP6-25S1',
    description: 'Final revised prototype implementing the three main tasks prototyped.',
    image: 'images/phases/07-soon.jpg',
    // report: 'documents/reports/CMPS3141-SPP7-25S1-R.pdf',
    // presentation: 'documents/presentations/CMPS3141-SPP7-25S1-P.pdf',
    // externalLinks: [
    //   { name: 'README', url: '#' },
    //   { name: 'Prototype', url: '#' },
    // ],
  },
  {
    id: 8,
    name: 'Poster & Pitch',
    code: 'CMPS3141-SPP8-25S1',
    description:
      'Pitch slide and informative poster, showcased at the FST STEM Fair 2025 (November 13, 2025).',
    image: 'images/phases/07-soon.jpg',
    externalLinks: [
      { name: 'Poster', url: 'images/team/raccoon-theater.png' },
      { name: 'Pitch Slide', url: 'images/team/raccoon-theater.png' },
    ],
  },
]
