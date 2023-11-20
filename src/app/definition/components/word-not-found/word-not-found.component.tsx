import styles from './word-not-found.module.scss';
import Image from 'next/image'

export default function WordNotFound() {
    return (
        <div className={styles.container}>
            <h1>SORRY</h1>
            <Image src='/assets/srry.png' alt='' width={250} height={200} />
            <h2>We couldn&apos;t found the word you&apos;re searching</h2>
            <p>Please, try to verify the word that you wrote is correctly spelled or search another word</p>
        </div>
    );
}