import { useEffect,useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";
import api from './api/posts'
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";



const EditPost = ({
}) => {
    const { posts, setPosts } = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    const [postTitleEdit,setpostTitleEdit] = useState('');
    const [postBodyEdit,setpostBodyEdit] = useState('');
    const navigate = useNavigate();
    const handleEdit = async (id) => {
        const date = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedPost = {
          id: id.toString(),
          title: postTitleEdit,
          datetime: date,
          body: postBodyEdit
        };
        try{ 
          const response = await api.put(`posts/${id}`,updatedPost)
          setPosts(posts.map(post => post.id === id ? { ...response.data }: post))
          setpostBodyEdit('')
          setpostTitleEdit('')
          navigate('/')
          
        } catch (err){
          console.log(`Error: ${err.message} `)
        }
    
      }

    

    useEffect(() => {
        if (post) {
            setpostTitleEdit(post.title);
            setpostBodyEdit(post.body);
        }
    }, [post, setpostTitleEdit, setpostBodyEdit])

    return (
        <main className="NewPost">
            {postTitleEdit &&
                <>
                    <h2>Edit Post</h2>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input
                            id="postTitle"
                            type="text"
                            required
                            value={postTitleEdit}
                            onChange={(e) => setpostTitleEdit(e.target.value)}
                        />
                        <label htmlFor="postBody">Post:</label>
                        <textarea
                            id="postBody"
                            required
                            value={postBodyEdit}
                            onChange={(e) => setpostBodyEdit(e.target.value)}
                        />
                        <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }
            {!postTitleEdit &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            }
        </main>
    )
}

export default EditPost