import Link from 'next/link'
import { Layout } from '~/components'

const Index = () => {
  return (
    <Layout title="About music events">
      <h1>About</h1>
      <p>This is an app to find the latest singers and other musical events</p>
      <p>Version: 1.0.0</p>
      <Link href="/">Back to Home</Link>
    </Layout>
  )
}

export default Index
