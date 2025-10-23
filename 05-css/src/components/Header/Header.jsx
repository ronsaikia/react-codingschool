import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h3 className={styles.logo}>Chiron's website</h3>
        <button>Login</button>
         
    </div>
  )
}

export default Header
