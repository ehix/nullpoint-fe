import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import useScrollDirection from '../hooks/useScrollDirection'

const PublicFooter = () => {
    const scrollDirection = useScrollDirection();    
    const socialButtons = (
        <div class="socials">
            <a href="https://github.com/ehix/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/alex-downing/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
        </div>
    )

    const content = (
        <footer className={`public-footer ${ scrollDirection === "down" ? "hide" : "show"}`}>
            {socialButtons}
            <p>© nullpoint 2023</p>
        </footer >
    )
    return content
}
export default PublicFooter