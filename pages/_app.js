import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Layout from '../component/layout'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  return (
    <div>
      <Head>
        <title>OP.GG</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      {router.asPath === "/" &&
        <style jsx global>{'body { background: #3b82f6; }'}</style>
      }
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}