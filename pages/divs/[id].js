import { useRouter } from 'next/router'
import Layout from '../../components/MyLayout'
import axios from 'axios'

const Post = props => {
  const router = useRouter()
  console.log('in id.js props',props.comic)
  return (

  <Layout>
    <h3>{props.comic.safe_title}</h3>
      {props.comic.img ? <img src={props.comic.img} /> : null}
  </Layout>
  )
}

Post.getInitialProps = async function(context) {
  const response = await axios.get(`https://xkcd.com/${context.query.id}/info.0.json`) 
  return {
    comic: response.data
  }
}

export default Post