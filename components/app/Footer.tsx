import styles from '~/styles/components/app/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Music event 2022</p>
      <p>
        <Link href="/about">About this project</Link>
      </p>
    </footer>
  )
}
export default Footer
