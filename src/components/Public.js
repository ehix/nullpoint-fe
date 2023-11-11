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
                        <h2 id="posts" className="contact__header">Latest</h2>
                            <PublishedNotesList />
                        </section>
                        <section className="contact">
                            <h2 id="contact" className="contact__header">Contact</h2>
                            <p><i className="contact__subheader">Drop a note!</i></p>
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