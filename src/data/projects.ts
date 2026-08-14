export type Project = {
  title: string
  description: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Dopamine Checklist',
    description:
      'A small app for adding daily and one-time goals and checking them off. Designed for larger touchscreens. Uses local storage for persistence.',
    link: 'https://oskarott.github.io/dopamine-calender/',
  },
  {
    title: 'Shop App',
    description:
      'A complete webshop template, with jwt token user auth, product listing, shopping cart, stripe payment and order management (Migth be slow to load since it is hosted on free render).',
    link: 'https://oskarott.github.io/webshop-template-frontend/',
  },
]
