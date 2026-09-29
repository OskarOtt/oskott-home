export type Project = {
  title: string
  description: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Towerdef.io',
    description:
        'A small browser tower defense game. Terminal themed, with towers, waves, different enemies and achievements. Written with React, TypeScript and Vite, uses local storage for game saves.',
    link: 'https://towerdef.io/',
  },
  {
    title: 'Webshop demo',
    description:
      'A complete webshop template, with jwt token user auth, product listing, shopping cart, stripe payment, email and order management.',
    link: 'https://webshop-demo.oskott.com',
  },
  {
    title: 'Flink - Dog training app',
    description:
        'Appstore available phone application for tracking, planning and posting dog training sessions. Written in React native with Expo and a Spring Java backend.',
    link: 'https://apps.apple.com/no/app/flink-dog-training/id6812715256',
  },
  {
    title: 'Dopamine Checklist',
    description:
        'A small app for adding daily and one-time goals and checking them off. Designed for larger touchscreens. Uses local storage for persistence.',
    link: 'https://oskarott.github.io/dopamine-calender/',
  },
]
