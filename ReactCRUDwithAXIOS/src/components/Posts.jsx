import { useEffect, useState } from "react";
import { getPost } from "../api/PostAPI";
import '../App.css'

export const Posts = () => {

  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  }

  useEffect(() => {
    getPostData();
  },[]);

  // function to delete post
  const handleDeletePost = async (id) => {
    try {
    const res = await deletePost(id);
    if(res.status === 200){
      const newUpdatedPosts = data.filter((currPost) => {
        return currPost.id === id;
      });
      setData(newUpdatedPosts);
    }
    } catch (error) {
      console.log(error);
    }
  };

  return <section className="section-post">
    <ol>
      {
        data.map((curElem) => {
          const {id, body, title} = curElem;
          return(
            <li key={id}>
              <p>Title: {title}</p>
              <p>Body: {body}</p>
              <button>Edit</button>
              <button onClick={() => handleDeletePost(id)} className="btn-delete">Delete</button>
            </li>
          )
        })
      }
    </ol>
  </section>
}