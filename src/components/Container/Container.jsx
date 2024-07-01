import styles from "./Container.module.css"

const Container = ({children}) => {
  return (
    <section className={styles.containerHeight}>
    {children}
    </section>
  )
}

export default Container
