export interface TeamMember {
  id: number
  name: string
  role: string
  tagLine: string
  photoUrl: string
  github?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Andres H.',
    role: 'Project Coordinator',
    tagLine: 'Part-time Kangaroo',
    photoUrl: 'images/team/andres.png',
    github: 'https://github.com/andreshungbz',
  },
  {
    id: 2,
    name: 'Jennessa S.',
    role: 'Designer & Coder',
    tagLine: 'Epic Gamer',
    photoUrl: 'images/team/jenn.png',
    github: 'https://github.com/jennxsierra',
  },
  {
    id: 3,
    name: 'Tysha D.',
    role: 'UX Designer',
    tagLine: 'Novel Enthusiast',
    photoUrl: 'images/team/tysha.jpg',
    github: 'https://github.com/aoideee',
  },
]
