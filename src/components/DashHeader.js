import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faFileCirclePlus,
    faFilePen,
    faUserGear,
    faUserPlus,
    faRightFromBracket,
    faCaretDown
} from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'
import { useSendLogoutMutation } from '../features/auth/authApiSlice'
import useAuth from '../hooks/useAuth'
import PulseLoader from 'react-spinners/PulseLoader'

// const DASH_REGEX = /^\/dash(\/)?$/
const NOTES_REGEX = /^\/dash\/notes(\/)?$/
const USERS_REGEX = /^\/dash\/users(\/)?$/

const DashHeader = () => {
    const { isUser, isAdmin } = useAuth()
    const loggedIn = () => {
        if (isUser || isAdmin) {
            return true
        }
    }
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const isOnLanding = () => {
        if (pathname === '/') {
            return true
        }
    }
    const [sendLogout, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useSendLogoutMutation()

    useEffect(() => {
        if (isSuccess) navigate('/')
    }, [isSuccess, navigate])

    const onYouClicked = () => {
        if (loggedIn()) {
            navigate('/dash')
        } else {
            navigate('/login')
        }
    }

    const onNewNoteClicked = () => navigate('/dash/notes/new')
    const onNewUserClicked = () => navigate('/dash/users/new')
    const onNotesClicked = () => navigate('/dash/notes')
    const onUsersClicked = () => navigate('/dash/users')

    // let dashClass = null
    // if (!DASH_REGEX.test(pathname) && !NOTES_REGEX.test(pathname) && !USERS_REGEX.test(pathname)) {
    //     dashClass = "dash-header__container--small"
    // }

    // Text buttons:
    const titleButton = (
        <button
            className="dash-header__title text-button"
            title="Home"
            onClick={() => navigate('/')}
        >nullpøint
        </button>
    )

    let contactButton = null
    let moreButton = null
    if (isOnLanding()) {
        contactButton = (
            <button
                className="text-button"
                title="Contact"
                onClick={() => navigate('#contact')}
            >contact
            </button>
        )

        moreButton = (
            <button
              className="text-button"
              title="More"
              onClick={() => navigate('/more')}
            //   style={{ minWidth: '80px' }}
            >
              more&nbsp;<FontAwesomeIcon icon={faCaretDown} />
            </button>
          )
    }

    let textButtonContent
    if (isLoading) {
        textButtonContent = <PulseLoader color={"#FFF"} />
    } else {
        textButtonContent = (
            <>
                {titleButton}
                {contactButton}
                {moreButton}
            </>
        )
    }

    // Icon buttons:

    let logoutButton = null
    if (loggedIn()) {
        logoutButton = (
            <button
                className="icon-button"
                title="Logout"
                onClick={sendLogout}
            >
                <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
        )
    }

    let newNoteButton = null
    if (NOTES_REGEX.test(pathname)) {
        newNoteButton = (
            <button
                className="icon-button"
                title="New Note"
                onClick={onNewNoteClicked}
            >
                <FontAwesomeIcon icon={faFileCirclePlus} />
            </button>
        )
    }

    let newUserButton = null
    if (USERS_REGEX.test(pathname)) {
        newUserButton = (
            <button
                className="icon-button"
                title="New User"
                onClick={onNewUserClicked}
            >
                <FontAwesomeIcon icon={faUserPlus} />
            </button>
        )
    }

    let userButton = null
    if (isAdmin) {
        if (!USERS_REGEX.test(pathname) && pathname.includes('/dash')) {
            userButton = (
                <button
                    className="icon-button"
                    title="Users"
                    onClick={onUsersClicked}
                >
                    <FontAwesomeIcon icon={faUserGear} />
                </button>
            )
        }
    }

    let notesButton = null
    if (!NOTES_REGEX.test(pathname) && pathname.includes('/dash')) {
        notesButton = (
            <button
                className="icon-button"
                title="Notes"
                onClick={onNotesClicked}
            >
                <FontAwesomeIcon icon={faFilePen} />
            </button>
        )
    }

    let selfButton = null
    if (pathname !== '/dash') {
        selfButton = (
            <button
                className="icon-button"
                title="You"
                onClick={onYouClicked}
            >
                <FontAwesomeIcon icon={faUser} />
            </button>
        )
    }

    const errClass = isError ? "errmsg" : "offscreen"

    let iconButtonContent
    if (isLoading) {
        iconButtonContent = <PulseLoader color={"#FFF"} />
    } else {
        iconButtonContent = (
            <>
                {newNoteButton}
                {newUserButton}
                {notesButton}
                {userButton}
                {selfButton}
                {logoutButton}
            </>
        )
    }

    const content = (
        <>
            <p className={errClass}>{error?.data?.message}</p>
            <header className="dash-header">
                <div className={"dash-header__container"}>
                    {/* <Link to="/">
                        <h1 className="dash-header__title">nullpøint</h1>
                    </Link> */}
                    <nav className="dash-header__nav-text">
                        {textButtonContent}
                    </nav>
                    <nav className="dash-header__nav-icons">
                        {iconButtonContent}
                    </nav>
                </div>
            </header>
        </>
    )

    return content
}
export default DashHeader