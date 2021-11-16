import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ActiveLink from './ActiveLink'
import vgIcon from '../public/vgIcon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFileInvoice, faChartBar, faInbox, faPhotoFilm, faGears } from '@fortawesome/free-solid-svg-icons'
import { getSession, signIn, signOut, useSession } from 'next-auth/react'
import { useOnClickOutside } from './hooks'


function Logo() {
    return (
        <div className="column" id="mobileLogo">
            <div className="is-centered-mobile">
                <div className="mobile-logo-wrapper">
                    <Image
                        src={vgIcon}
                        alt="webapp logo icon image"
                    />
                </div>
            </div>
        </div>
    )
}

const toggleBurger = (e) => {
    let burgerIcon = document.getElementById('burger');
    let dropMenu = document.getElementById('navMenu');
    burgerIcon.classList.toggle('is-active');
    dropMenu.classList.toggle('is-active');
}

const closeBurger = (e) => {
    let burgerIcon = document.getElementById('burger');
    let dropMenu = document.getElementById('navMenu');
    burgerIcon.classList.remove('is-active');
    dropMenu.classList.remove('is-active')
}

const Header = () => {
    const { data: session } = useSession()
    const node = useRef();
    useOnClickOutside(node, (e) => closeBurger())


    return (
        <>
            <nav className="navbar is-fixed-top is-black is-hidden-touch">
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <ul className="login-list">
                            {session ? (
                                <>
                                    <li className="welcomeSignOut">
                                        <h3 id="loggedIn">Welcome, {session.user.name}</h3>
                                        <button className="button is-link is-small" onClick={() => signOut()}>Sign Out</button>
                                    </li>
                                    <li>
                                        <Image
                                            className="roundProfilePic"
                                            src={session.user.image}
                                            alt="user profile picture"
                                            width={50}
                                            height={50}
                                            layout='fixed'
                                        />
                                    </li>
                                </>
                            ) : (
                                    <>
                                        <li>
                                            <Link href="/login">
                                                <a>Login</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="/shield_icon.png" width="32" height="32" />
                                            </a>
                                        </li>
                                    </>
                                )}
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="navbar is-fixed-top is-dark is-hidden-desktop is-flex" id="mobileCenter" ref={node}>
                <Logo></Logo>
                <div className="column is-flex is-justify-content-flex-end">

                    <ul className="login-list">
                        {session ? (
                            <>
                                <li className="welcomeSignOut">
                                    <p id="loggedIn">Welcome, {session.user.name}</p>
                                    <button className="button is-link is-small" onClick={() => signOut()}>Sign Out</button>
                                </li>
                                <li>
                                    <Image
                                        className="roundProfilePic"
                                        src={session.user.image}
                                        alt="user profile picture"
                                        width={50}
                                        height={50}
                                        layout='fixed'
                                    />
                                </li>
                            </>
                        ) : (
                                <>
                                    <li>
                                        <Link href="/login">
                                            <a>Login</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="/farmerIcon.png" width="32" height="32" />
                                        </a>
                                    </li>
                                </>
                            )}
                    </ul>
                    <div className="navbar-burger burger" id="burger" onClick={toggleBurger}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>
                <div className="navbar-menu is-light has-background-grey-lighter is-hidden-desktop" id="navMenu">
                    <ul className="menu-list burgerMenu">
                        <li>
                            <ActiveLink activeClassName="is-active" href="/">
                                <span>
                                    Dashboard
                                    <FontAwesomeIcon icon={faHome} className="menu-list" />
                                </span>
                            </ActiveLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header

export async function getServerSideProps(context) {
    return {
        props: {
            session: await getSession(context),
        },
    }
}

/*

                        <li>
                            <ActiveLink activeClassName="is-active" href="/reports">
                                <span>
                                    Reports
                                    <FontAwesomeIcon icon={faFileInvoice} className="menu-list" />
                                </span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="is-active" href="/cropAnalytics">
                                <span>
                                    Crops
                                    <FontAwesomeIcon icon={faChartBar} className="menu-list" />
                                </span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="is-active" href="/inbox">
                                <span>
                                    Inbox
                                    <FontAwesomeIcon icon={faInbox} className="menu-list" />
                                </span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="is-active" href="/media">
                                <span>
                                    Media
                                    <FontAwesomeIcon icon={faPhotoFilm} className="menu-list" />
                                </span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="is-active" href="/settings">
                                <span>
                                    Settings
                                    <FontAwesomeIcon icon={faGears} className="menu-list" />
                                </span>
                            </ActiveLink>
                        </li>
*/