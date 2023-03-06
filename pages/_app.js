import '@/styles/common.scss'
import Layout from './component/Layout'
import MyContext from './component/MyContext'

export default function App({ Component, pageProps }) {
  return (
    <MyContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyContext>
  )
}
