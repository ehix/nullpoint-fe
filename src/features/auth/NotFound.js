import { React } from 'react'
import useTitle from '../../hooks/useTitle'
// import '../../css/dark.css'

export const NotFound = () => {
    useTitle(`nullpoint: 404`)
    return (
        <section className="dark-theme">
            <main className="not-found__main">
                <h1 className="not-found__title line-up">Page nøt found</h1>
            </main>
            <div className="snowflakes" aria-hidden="true">
                <div className="snowflake">
                    �
                </div>
                <div className="snowflake">
                    �
                </div>
                <div className="snowflake">
                    �
                </div>
                <div className="snowflake">
                    �
                </div>
                <div className="snowflake">
                    �
                </div>
                <div className="snowflake">
                    �
                </div>
                <div className="snowflake">
                    �
                </div>
                <div className="snowflake">
                    �
                </div>
                <div className="snowflake">
                    �
                </div>
                <div className="snowflake">
                    �
                </div>
            </div>
        </section>
    )
}

export default NotFound;
