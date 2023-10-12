// import { Link } from 'react-router-dom'
import DashHeader from './DashHeader'
import PublicFooter from './PublicFooter'

const Public = () => {
    const content = (
        <>
            <DashHeader />
            <section className="public">
                <main className="public__main">
                    <h2 class="w3-wide w3-center">Contact</h2>
                    <p class="w3-opacity w3-center"><i>Drop a note!</i></p>
                </main>
            </section>

            <PublicFooter />
        </>

    )
    return content
}
export default Public