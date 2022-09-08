import { ReactNode } from 'react'
import Head from 'next/head'
//
import styles from '~/styles/components/layout/Layout.module.css'
import { Header } from '~/components'
import Footer from '~/components/app/Footer'

type LayoutProps = {
  title?: string
  description?: string
  keywords?: string
  children: ReactNode
}

const Layout = ({
  title = 'Music Event | Find the best parties',
  description = 'Find the latest singer and musical events',
  keywords = 'music, singer, events',
  children,
}: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
