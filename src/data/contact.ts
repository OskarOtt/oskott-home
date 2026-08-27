export const CONTACT = {
  name: 'Oskar Ottesen',
  role: 'Software Developer',
  location: 'Norway',
  email: 'ottskar@gmail.com',
  github: {
    label: 'OskarOtt',
    url: 'https://github.com/OskarOtt',
  },
  linkedin: {
    label: 'linkedin.com/in/...',
    url: 'https://www.linkedin.com/in/oskar-lynum-ottesen-497b45228/',
  },
  instagram: {
    url: 'https://www.instagram.com/oskar_l_ottesen/',
  },
} as const

export type SocialLink = {
  id: string
  href: string
  label: string
  iconId: string
}

/** Icon ids reference symbols defined in public/icons.svg. */
export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'linkedin', href: CONTACT.linkedin.url, label: 'LinkedIn', iconId: 'linkedin-icon' },
  { id: 'instagram', href: CONTACT.instagram.url, label: 'Instagram', iconId: 'instagram-icon' },
  { id: 'github', href: CONTACT.github.url, label: 'GitHub', iconId: 'github-icon' },
]
