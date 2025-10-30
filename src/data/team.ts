export interface TeamMember {
  id: number
  name: string
  role: string
  tagLine: string
  photoUrl: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Andres H.',
    role: 'Project Coordinator',
    tagLine: 'Part-time kangaroo',
    photoUrl: 'favicon.ico',
  },
  {
    id: 2,
    name: 'Jennessa S.',
    role: 'Designer & Coder',
    tagLine: 'Gamer',
    photoUrl: 'favicon.ico',
  },
  {
    id: 3,
    name: 'Tysha D.',
    role: 'UX Designer',
    tagLine: 'Novel Enthusiast',
    photoUrl: 'favicon.ico',
  },
]
