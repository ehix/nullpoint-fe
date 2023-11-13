import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const Welcome = () => {

    const { username, isAdmin } = useAuth()

    useTitle(`nullpoint: ${username}`)

    const content = (
        <section className="welcome">
            <div className="welcome__container">

                <h1>Welcome, {username}!</h1>
                <p><Link to="/dash/notes">View notes</Link></p>
                <p><Link to="/dash/notes/new">Add new note</Link></p>

                {(isAdmin) && <p><Link to="/dash/users">View user settings</Link></p>}
                {(isAdmin) && <p><Link to="/dash/users/new">Add new user</Link></p>}
            </div>
        </section>
    )

    return content
}
export default Welcome