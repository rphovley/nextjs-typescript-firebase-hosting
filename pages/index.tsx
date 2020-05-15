import Head from 'next/head'
import { useRouter } from 'next/router'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { ReactElement, useState, useEffect } from 'react'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { isLoggedIn } from '../utils/login_store'

export default function Home(): ReactElement {
  const router = useRouter()
  const [errMessage, setErrMessage] = useState('')

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push('/login')
    }
  }, [])

  return (
    <Layout home>
      <div>
        <Head>…</Head>
        <section
          className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
        />
        <Snackbar
          open={!!errMessage}
          autoHideDuration={3000}
          onClose={(): void => {
            setErrMessage('')
          }}
        >
          <Alert severity="error">{errMessage}</Alert>
        </Snackbar>
      </div>
    </Layout>
  )
}
