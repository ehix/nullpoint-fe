import { React } from 'react'
import useTitle from '../../hooks/useTitle'
// import '../../css/dark.css'

export const NotFound = () => {
    useTitle(`nullpoint: 404`)
    return (
        <section className="dark-theme">
            <main className="not-found__main">
                <h1 class="not-found__title line-up">Page nøt found</h1>
            </main>
            <div class="snowflakes" aria-hidden="true">
                <div class="snowflake">
                    �
                </div>
                <div class="snowflake">
                    �
                </div>
                <div class="snowflake">
                    �
                </div>
                <div class="snowflake">
                    �
                </div>
                <div class="snowflake">
                    �
                </div>
                <div class="snowflake">
                    �
                </div>
                <div class="snowflake">
                    �
                </div>
                <div class="snowflake">
                    �
                </div>
                <div class="snowflake">
                    �
                </div>
                <div class="snowflake">
                    �
                </div>
            </div>
        </section>
    )
}

export default NotFound;
