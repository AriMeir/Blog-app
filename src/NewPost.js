import { useContext,useState } from "react";
import DataContext from "./context/DataContext";
import api from './api/posts'
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";
function NewPost() {
    const {posts,setPosts} = useContext(DataContext);
    const [newPostTitle,setNewPostTitle] = useState('');
    const [newPostBody,setNewPostBody] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
      e.preventDefault();
     const id =posts.length? posts[posts.length - 1].id + 1 : 1;
     const date = format(new Date(), 'MMMM dd, yyyy pp');
   
     const post = {
       id: id.toString(),
       title: newPostTitle,
       datetime: date,
       body: newPostBody
     };
     
     try {
     const response = await api.post ('/posts',post)
     const postsList = [...posts, response.data]; 
     setPosts(postsList);
     setNewPostTitle('');
     setNewPostBody('');
     navigate('/');
     } catch (err){
       console.log(`Error: ${err.message} `)
     }
 
     
   };
    return (
      <main className="NewPost">
        <h2>New Post</h2>
        <form className="newPostForm" onSubmit={(e) => {handleSubmit(e)}}>
          <label htmlFor="PostTitle">Title:</label>
          <input 
            type="text"
            id="newPost"
            required
            placeholder="Title"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}/>
            <label htmlFor="PostBody"></label>
          <textarea
            id="postBody"
            placeholder="Write your new post"
            value={newPostBody}
            onChange={(e) => setNewPostBody(e.target.value)}
          />
          <button 
            type="submit">
              Post
          </button>

                  

                  
          
          

        </form>

      </main>
    );
  }
  
  export default NewPost;