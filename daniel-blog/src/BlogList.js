const BlogList = ({blogs,title,handelDelete})=> {
    
       return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Wriiten by {blog.author}</p>
                    <button onClick={()=>handelDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>

    );
}
 
export default BlogList;