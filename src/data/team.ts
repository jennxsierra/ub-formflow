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
    tagLine: 'Part-time Kangaroo',
    photoUrl: 'images/team/andres.png',
  },
  {
    id: 2,
    name: 'Jennessa S.',
    role: 'Designer & Coder',
    tagLine: 'Epic Gamer',
    photoUrl: 'images/team/jenn.png',
  },
  {
    id: 3,
    name: 'Tysha D.',
    role: 'UX Designer',
    tagLine: 'Novel Enthusiast',
    photoUrl: 'images/team/tysha.jpg',
  },
]
