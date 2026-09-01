export type Project = {
  title: string
  description: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Towerdef.io',
    description:
        'A small browser tower defense game, terminal themed, with towers, waves, different enemies and achievements. Written with React, TypeScript and Vite, uses local storage for game saves.',
    link: 'https://towerdef.io/',
  },
  {
    title: 'Dopamine Checklist',
    description:
      'A small app for adding daily and one-time goals and checking them off. Designed for larger touchscreens. Uses local storage for persistence.',
    link: 'https://oskarott.github.io/dopamine-calender/',
  },
  {
    title: 'Shop App',
    description:
      'A complete webshop template, with jwt token user auth, product listing, shopping cart, stripe payment, email and order management.',
    link: 'https://oskarott.github.io/webshop-template-frontend/',
  },
]
