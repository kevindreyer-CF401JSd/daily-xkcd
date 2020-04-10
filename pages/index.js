import Layout from '../components/MyLayout'
import Link from 'next/link'
import axios from 'axios'

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
)

const Index = props => {
  const num = props.current.num
  let lastTen = [num-1,num-2,num-3,num-4,num-5,num-6,num-7,num-8,num-9,num-10]
  return (
    <Layout>
      <h1>XKCD todays comic</h1>
      <h3>{props.current.safe_title}</h3>
      {props.current.img ? <img src={props.current.img} /> : null}
      <h3>Previous 10</h3>
      <ul>
        {lastTen.map(id => (
          <li key={id}>
            <Link href="/divs/[id]" as={`/divs/${id}`}>
              <a>{id}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

Index.getInitialProps = async function() {
  const response = await axios.get('https://xkcd.com/info.0.json')
  const data = response.data
  console.log('data',data)

  return {
    current: data
  }
}


export default Index