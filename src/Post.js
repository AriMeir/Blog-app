import { Link } from 'react-router-dom'
function Post({ post }) {
    return (
      <article className='post'>
        <Link to = {`/post/${post.id}`}>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
        
        <p className='postBody'>{
            (post.body) <= 25 ?
            post.body :
            (post.body).slice(0,25)
        }
        </p>
        </Link>
      </article>
    );
  }
  
  export default Post;