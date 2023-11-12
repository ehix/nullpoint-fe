// import { Link } from 'react-router-dom'
import DashHeader from './DashHeader'
import PublicFooter from './PublicFooter'
import Canvas from './Canvas'
import ContactForm from './ContactForm'
import PublishedNotesList from '../features/notes/PublishedNotesList'

const Public = () => {
    const content = (
        <>
            <section className="light-theme">
                <DashHeader />
                <section className="public">
                    <main className="public__main">
                        {/* <section className="canvas">
                            <Canvas />
                        </section> */}
                        <section className="posts">
                            <h2 id="posts" className="public__header">Latest</h2>
                            <p><i className="public__subheader">What's new?</i></p>
                            <PublishedNotesList />
                        </section>
                        <section className="contact">
                            <h2 id="contact" className="public__header">Contact</h2>
                            <p><i className="public__subheader">Drop a note!</i></p>
                            <ContactForm />
                        </section>
                    </main>
                </section>
                <PublicFooter />
            </section>
        </>
    )
    return content
}
export default Public