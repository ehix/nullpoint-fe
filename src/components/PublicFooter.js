import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import useScrollDirection from '../hooks/useScrollDirection'
import { useCurrentYear } from '../hooks/useCurrentYear';

const PublicFooter = () => {
    const year = useCurrentYear();
    const scrollDirection = useScrollDirection();
    const socialButtons = (
        <div className="socials">
            <a href="https://github.com/ehix/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/alex-downing/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
        </div>
    )

    const content = (
        <footer className={`public-footer ${scrollDirection === "down" ? "hide" : "show"}`}>
            {socialButtons}
            <p>© nullpoint {year}</p>
        </footer >
    )
    return content
}
export default PublicFooter