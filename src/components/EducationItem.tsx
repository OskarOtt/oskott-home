import '../styles/education-item.css'

type EducationItemProps = {
  title: string
  meta: string
}

function EducationItem({ title, meta }: EducationItemProps) {
  return (
    <div className="about__education-item">
      <p className="about__education-title"><strong>{title}</strong></p>
      <p className="about__education-meta">{meta}</p>
    </div>
  )
}

export default EducationItem
