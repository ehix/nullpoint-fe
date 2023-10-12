// import { Link } from 'react-router-dom'
import DashHeader from './DashHeader'
import PublicFooter from './PublicFooter'

const Public = () => {
    const content = (
        <section className="public">
            <DashHeader />
            {/* <header>
                <h1><span className="nowrap">nullpøint</span></h1>
                <Link to="/login">Login</Link>
            </header> */}
            <main className="public__main">
                <p></p>
                <br />
                <p></p>
            </main>
            <PublicFooter />
        </section>
    )
    return content
}
export default Public