import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
 const [blogs,setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
   ]);
   const handelDelete =(id)=>{
      const newBlog=blogs.filter(blog=>blog.id !== id);
      setBlogs(newBlog);
   }
   
 
    return (
        <div className="home">
          <BlogList blogs = {blogs} title ="All Blogs!!" handelDelete={handelDelete}/>
                                    
       </div>
    );
}
 
export default Home;
