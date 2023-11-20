"use client";
import Link from 'next/link';
import styles from './header.module.scss';
import { usePathname } from 'next/navigation';
import { HiMenu } from "react-icons/hi";
import { useContext } from 'react';
import { PopupContext } from '@/shared/context/popup/popup.context';
import Sidebar from '../sidebar/sidebar.component';
import { headerData } from '@/utils/data/header.data';

export default function Header() {
    const { openPopup } = useContext(PopupContext);
    const currentRoute = usePathname();
    const {nav, social} = headerData;

    const handleOpenPopup = () => {
      openPopup(<Sidebar />, null, 'right');
    };

    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                D-ctionary
            </div>

            <ul className={`${styles.header__list} ${styles.header__list__nav}`}>
                {nav.map((elem) => (
                    <li key={elem.key}
                    className={currentRoute === elem.ref ? styles.active : ""}>
                        <Link href={elem.ref}>{elem.label}</Link>
                    </li>
                ))}
            </ul>

            <ul className={`${styles.header__list} ${styles.header__list__social}`}>
                {social.map((elem) => (
                    <li key={elem.key}>
                        <a href={elem.url} target='_blank'>
                            <elem.icon />
                        </a>
                    </li>
                ))}
            </ul>

            <button className={styles.header__menu_btn}
            onClick={handleOpenPopup}>
                <HiMenu />
            </button>
        </header>
    )
}