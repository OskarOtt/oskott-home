export type EducationEntry = {
  title: string
  meta: string
}

export const EDUCATION: EducationEntry[] = [
  { title: 'Bachelor of Science in Computer Engineering', meta: 'Høgskolen i Østfold (HiØ)' },
  { title: 'Vocational Certificate in Data Electronics', meta: 'Thor Heyerdahl VGS / EMSolutions AS' },
  { title: 'GH-300: GitHub Copilot Certification', meta: 'Microsoft' },
  { title: 'CKAD: Certified Kubernetes Application Developer', meta: 'The Linux Foundation' },
  { title: 'Claude Code 101', meta: 'Anthropic Academy' },
  { title: "Building with the Claude API", meta: 'Anthropic Academy' },
  { title: 'PSD I: Professional Scrum Developer I', meta: 'Scrum.org' },
  { title: 'Kotlin for Java Developers', meta: 'JetBrains' },
  { title: 'React JS: From the Beginning (with Redux and React Router)', meta: 'Udemy' },
]

export const TECH_STACK: string[] = [
  'React', 'TypeScript', 'Java', 'Kotlin',
  'SQL', 'Kubernetes', 'Git', 'REST APIs',
]
