import Head from 'next/head'
import { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import { Button } from '@material-ui/core'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData, PostData } from '../utils/posts'

type PostProps = {
  allPostsData: PostData[]
}
export default function Home({ allPostsData }: PostProps): ReactElement {
  return (
    <Layout home>
      <div>
        <Head>…</Head>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <Button onClick={login}>Login</Button>
        </section>
      </div>
    </Layout>
  )
}

async function login(): Promise<void> {
  const res = await fetch('http://localhost:8080/api/auth/login')
  const body = await res.json()
  console.log('WAIT')
  console.log(body)
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
