import styles from './Heading.module.css';

export const Heading = (() => {
    const classes = `${styles.cyan} ${styles.heading} ${styles.yellow}`
    return <h1 className={classes}>Olá Mundo</h1>
})