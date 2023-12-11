import { useParams, Link } from "react-router-dom";
import DataContext from './context/DataContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import api from './api/posts'
function PostPage() {
  const {posts, setPosts} = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id)
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    try{
      const response = await api.delete(`/posts/${id}`)
      const postsList = posts.filter((post) => post.id !== id)
      setPosts(postsList)
      navigate('/')
    } catch(err) {
      console.log(`Error: ${err.message} `)
    }

  }
    return (
      <main className="PostPage">
        <article className="post">
          {post && 
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <div className="buttonsBar">
            <Link className="editLink" to={`/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button className="deleteButton" onClick={() =>handleDelete(post.id)}>Delete Post</button>
            </div>
            
          </>
          }
          {!post &&
          <>
          <h2>Post Not Found</h2>
          <p>well, thats disappointing</p>
          <p>
          <Link to='/'>Visit Our Home page</Link>
          </p>
          </>
          }


        </article>
      </main>
    );
  }
  
  export default PostPage;