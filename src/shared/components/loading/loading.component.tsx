import styles from './loading.module.scss';

export default function Loading(
    {size = 100, suptext, text}
    :
    {size?: number, suptext?: string, text?: string}
) {
    return (
        <div className={styles.container}>
            <p>{suptext}</p>
            <div className={styles.circle__container}
            style={{ width: `${size}px`, height: `${size}px` }}>
                <div className={styles.circle__intern}>&nbsp;</div>
            </div>
            <p>{text}</p>
        </div>
    )
}