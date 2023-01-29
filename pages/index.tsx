import { VFC } from 'react'
import { Layout } from '../components/Layout'

//デフォルトではfunctionになっていたのでarrow関数の形に変更
const Home: VFC = () => {
  return (
    <Layout title = "Home">
      <p className='text-3xl font-bold'>Next.js+GraphQL</p>
    </Layout>
  )
}
export default Home