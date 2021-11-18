import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ActiveLink from './ActiveLink'
import vgIcon from '../public/vgIcon.png'
import AR from '../public/guns/icons/AR.png'
import SMG from '../public/guns/icons/SMG.png'
import shotgun from '../public/guns/icons/shotgun.png'
import LMG from '../public/guns/icons/LMG.png'
import marksman from '../public/guns/icons/marksman.png'
import sniper from '../public/guns/icons/sniper.png'
import pistol from '../public/guns/icons/pistol.png'
import launcher from '../public/guns/icons/launcher.png'
import melee from '../public/guns/icons/melee.png'
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
                                        <h3 id="loggedIn">{session.user.name}</h3>
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
                                            <a href="">
                                                <img src="/shield_icon.png" width="32" height="32" />
                                            </a>
                                        </li>
                                        <li>
                                            <Link href="/login">
                                                <a>Login</a>
                                            </Link>
                                        </li>
                                    </>
                                )}
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="navbar is-fixed-top is-black is-hidden-desktop is-flex" id="mobileCenter" ref={node}>
                <Logo></Logo>
                <div className="column is-flex is-justify-content-flex-end">

                    <ul className="login-list">
                        {session ? (
                            <>
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
                                <li>
                                    <button className="button is-link is-small" onClick={() => signOut()}>Sign Out</button>
                                </li>
                            </>
                        ) : (
                                <>
                                    <li>
                                        <a href="">
                                            <img src="/shield_icon.png" width="32" height="32" />
                                        </a>
                                    </li>
                                    <li>
                                        <Link href="/login">
                                            <a>Login</a>
                                        </Link>
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
                <div className="navbar-menu is-black is-hidden-desktop" id="navMenu">
                    <ul className="menu-list burgerMenu">
                        <li className="navItemFirst" id="navWeapon">
                            <ActiveLink activeClassName="is-active" href="/">
                                <span className="level">
                                    <h3 className="is-size-6">Dashboard</h3>
                                    <FontAwesomeIcon icon={faHome} className="weaponIcon" />
                                </span>
                            </ActiveLink>
                        </li>
                        <li id="navWeapon">
                            <ActiveLink activeClassName="is-active" href="/assaultRifles">
                                <span className="level" id="weaponIconParent">
                                    <h3 className="is-size-6">ARs</h3>
                                    <Image
                                        src={AR}
                                        priority={true}
                                        alt="weaponIcon"
                                        className="weaponIcon"
                                    />
                                </span>
                            </ActiveLink>
                        </li>
                        <li id="navWeapon">
                            <ActiveLink activeClassName="is-active" href="/smgs">
                                <span className="level" id="weaponIconParent">
                                    <h3 className="is-size-6">SMGs</h3>
                                    <Image
                                        src={SMG}
                                        priority={true}
                                        alt="weaponIcon"
                                        className="weaponIcon"
                                    />
                                </span>
                            </ActiveLink>
                        </li>
                        <li id="navWeapon">
                            <ActiveLink activeClassName="is-active" href="/shotguns">
                                <span className="level" id="weaponIconParent">
                                    <h3 className="is-size-6">Shotguns</h3>
                                    <Image
                                        src={shotgun}
                                        priority={true}
                                        alt="weaponIcon"
                                        className="weaponIcon"
                                    />
                                </span>
                            </ActiveLink>
                        </li>
                        <li id="navWeapon">
                            <ActiveLink activeClassName="is-active" href="/lmgs">
                                <span className="level" id="weaponIconParent">
                                    <h3 className="is-size-6">LMGs</h3>
                                    <Image
                                        src={LMG}
                                        priority={true}
                                        alt="weaponIcon"
                                        className="weaponIcon"
                                    />
                                </span>
                            </ActiveLink>
                        </li>
                        <li id="navWeapon">
                            <ActiveLink activeClassName="is-active" href="/sniperRifles">
                                <span className="level" id="weaponIconParent">
                                    <h3 className="is-size-6">Sniper Rifles</h3>
                                    <Image
                                        src={sniper}
                                        priority={true}
                                        alt="weaponIcon"
                                        className="weaponIcon"
                                    />
                                </span>
                            </ActiveLink>
                        </li>
                        <li id="navWeapon">
                            <ActiveLink activeClassName="is-active" href="/marksmanRifles">
                                <span className="level" id="weaponIconParent">
                                    <h3 className="is-size-6">Marksman Rifles</h3>
                                    <Image
                                        src={marksman}
                                        priority={true}
                                        alt="weaponIcon"
                                        className="weaponIcon"
                                    />
                                </span>
                            </ActiveLink>
                        </li>
                        <li id="navWeapon">
                            <ActiveLink activeClassName="is-active" href="/pistols">
                                <span className="level" id="weaponIconParent">
                                    <h3 className="is-size-6">Pistols</h3>
                                    <Image
                                        src={pistol}
                                        priority={true}
                                        alt="weaponIcon"
                                        className="weaponIcon"
                                    />
                                </span>
                            </ActiveLink>
                        </li>
                        <li id="navWeapon">
                            <ActiveLink activeClassName="is-active" href="/melee">
                                <span className="level" id="weaponIconParent">
                                    <h3 className="is-size-6">Melee</h3>
                                    <Image
                                        src={melee}
                                        priority={true}
                                        alt="weaponIcon"
                                        className="weaponIcon"
                                    />
                                </span>
                            </ActiveLink>
                        </li>
                        <li id="navWeapon">
                            <ActiveLink activeClassName="is-active" href="/launchers">
                                <span className="level" id="weaponIconParent">
                                    <h3 className="is-size-6">Launchers</h3>
                                    <Image
                                        src={launcher}
                                        priority={true}
                                        alt="weaponIcon"
                                        className="weaponIcon"
                                    />
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