import { usePathname } from 'next/navigation';
import styles from './sidebar.module.scss';
import { headerData } from '@/utils/data/header.data';
import Link from 'next/link';
import { MdClose } from "react-icons/md";
import { PopupContext } from '@/shared/context/popup/popup.context';
import { useContext } from 'react';

export default function Sidebar() {
    const {nav, social} = headerData;
    const { closePopup } = useContext(PopupContext);
    const currentRoute = usePathname();

    const handleClosePopup = () => {
        closePopup();
    }

    return (
        <div className={styles.container}>
            <div className={styles.sidebar__header}>
                <strong>D-ctionary</strong>
                <button onClick={handleClosePopup}>
                    <MdClose />
                </button>
            </div>

            <ul className={`${styles.sidebar__list} ${styles.sidebar__list__nav}`}>
                {nav.map((elem) => (
                    <li key={elem.key}
                    className={currentRoute === elem.ref ? styles.active : ""}>
                        <Link href={elem.ref}>
                            <elem.icon />
                            <span>{elem.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>

            <ul className={`${styles.sidebar__list} ${styles.sidebar__list__social}`}>
                {social.map((elem) => (
                    <li key={elem.key}>
                        <a href={elem.url} target='_blank'>
                            <elem.icon />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}