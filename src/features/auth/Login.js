import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import { useCurrentYear } from '../../hooks/useCurrentYear';
import usePersist from '../../hooks/usePersist'
import useTitle from '../../hooks/useTitle'
import PulseLoader from 'react-spinners/PulseLoader'

const Login = () => {
    useTitle('Login')
    const year = useCurrentYear();

    const userRef = useRef()
    const errRef = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [persist, setPersist] = usePersist()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { accessToken } = await login({ username, password }).unwrap()
            dispatch(setCredentials({ accessToken }))
            setUsername('')
            setPassword('')
            navigate('/dash')
        } catch (err) {
            if (!err.status) {
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg(err.data?.message);
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleToggle = () => setPersist(prev => !prev)

    const errClass = errMsg ? "errmsg" : "offscreen"

    if (isLoading) return <PulseLoader color={"#FFF"} />

    const content = (
        <section className="public dark-theme">
            <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>
            <header>
                <h1 className="login__title">Login</h1>
            </header>

            <main className="login">
                <form className="form" onSubmit={handleSubmit}>
                    <fieldset className="login__fieldset">
                        <legend className="login__legend">Credentials</legend>
                        <div className="form__col">

                            <input
                                className="form__input"
                                type="text"
                                placeholder="Username"
                                id="username"
                                ref={userRef}
                                value={username}
                                onChange={handleUserInput}
                                autoComplete="off"
                                required
                            />

                            <input
                                className="form__input"
                                type="password"
                                placeholder="Password"
                                id="password"
                                onChange={handlePwdInput}
                                value={password}
                                required
                            />
                            <button className="login__button animated-button">Sign In</button>
                            <label htmlFor="persist" className="form__persist">
                                <input
                                    type="checkbox"
                                    className="form__checkbox"
                                    id="persist"
                                    onChange={handleToggle}
                                    checked={persist}
                                />
                                Trust this device
                            </label>
                        </div>
                    </fieldset>
                    <p>© nullpoint {year}</p>
                </form>
            </main>

            <footer>
                <Link to="/">Back</Link>
            </footer>
        </section >
    )

    return content
}
export default Login