import { SOCIAL_LINKS } from '../data/contact'

function SocialLinks() {
  return (
    <div className="socials">
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.id}
          className="social"
          href={social.href}
          target={social.href.startsWith('mailto:') ? undefined : '_blank'}
          rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
          aria-label={social.label}
        >
          <svg>
            <use href={`${import.meta.env.BASE_URL}icons.svg#${social.iconId}`} />
          </svg>
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
