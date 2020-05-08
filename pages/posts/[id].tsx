/* eslint-disable react/no-danger */
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ReactElement } from 'react'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../utils/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

type PostProps = {
  postData: PostData
}
type PostData = {
  title: string
  date: string
  contentHtml: string
}
export default function Post({ postData }: PostProps): ReactElement {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // console.log(params)
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
