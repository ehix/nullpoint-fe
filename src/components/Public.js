// import { Link } from 'react-router-dom'
import DashHeader from './DashHeader'
import PublicFooter from './PublicFooter'

const Public = () => {
    const content = (
        <section className="public">
            <DashHeader />
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