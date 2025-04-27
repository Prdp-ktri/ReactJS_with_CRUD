import { getPost } from "./api/PostAPI"
import { useEffect } from "react";

const App = () => {
  console.log(getPost());

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
  }

  useEffect(() => {
    getPostData();
  },[])

  return <h1>Hello React CRUD Operations</h1>
}

export default App