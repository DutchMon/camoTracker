/*      ./components/Navbar.js      */

import Image from 'next/image'
import ActiveLink from './ActiveLink'
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


export default function Navbar() {
    return (
        <div className="dashboard-panel is-small is-hidden-mobile">
            <div className="dashboard-panel-content">
                <aside className="menu">
                    <ul className="menu-list">
                        <li className="navItemFirst" id="navWeapon">
                            <ActiveLink activeClassName="is-active" href="/">
                                <span>
                                    <h3 className="is-size-6">Dashboard</h3>
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
                </aside>
            </div>
        </div>
    )
}

/*

                        <li>
                            <ActiveLink activeClassName="is-active" href="/reports">
                                <span>
                                    <FontAwesomeIcon icon={faFileInvoice} className="menu-list" />
                                    Reports
                                </span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="is-active" href="/cropAnalytics">
                                <span>
                                    <FontAwesomeIcon icon={faChartBar} className="menu-list" />
                                    Crops
                                </span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="is-active" href="/inbox">
                                <span>
                                    <FontAwesomeIcon icon={faInbox} className="menu-list" />
                                    Inbox
                                </span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="is-active" href="/media">
                                <span>
                                    <FontAwesomeIcon icon={faPhotoFilm} className="menu-list" />
                                    Media
                                </span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="is-active" href="/settings">
                                <span>
                                    <FontAwesomeIcon icon={faGears} className="menu-list" />
                                    Settings
                                </span>
                            </ActiveLink>
                        </li>

*/