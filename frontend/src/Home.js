import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import BlogList from "./BlogList";


const BLOGS = gql`
    query GetBlogs{
        blogs {
            id
            title
            body
            author
            category
            blogImage{
              url
            }
          }
    }
`


const Home = () => {

    const {isLoading, error, data} = useQuery(BLOGS)

    const [searchTerm, setSearchTerm] = useState('');
    const [searchCategory, setSearchCategory] = useState("None");
    const [searchResults, setSearchResults] = useState([]);
    const [searchArray, setSearchArray] = useState([]);
    

    const categoryHandler = (searchCategory) => {

        setSearchCategory(searchCategory);

        if(searchCategory !== "None"){
            const newBlogList = data.blogs.filter( (blog) => (
                blog.category.toLowerCase() === searchCategory.toLowerCase()
             ));
             setSearchArray(newBlogList);
             setSearchResults(newBlogList);
        }else{
            setSearchArray(data.blogs);
            setSearchResults(data.blogs);
        }       
    }

    const searchHandler = (searchTerm) => {

        setSearchTerm(searchTerm);   

        if(searchTerm !== ""){
            const newBlogList = searchArray.filter((blog) => {
                return Object.values(blog)
                        .join(" ")
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
            })
            setSearchResults(newBlogList);
        }
        else{
            setSearchResults(data.blogs);
        }
    }
    if(error) return<div>{console.log(error)}</div>
    if(isLoading) return<div>Loading...</div>
    if(data){
    return ( 
        <div>
            
            <div className="w-4/5 md:w-9/12 mx-auto mt-10">
                
            </div>
           
            <BlogList 
                blogs={(searchTerm.length < 1 && searchCategory === "None") ? data.blogs : searchResults } 
                searchTerm={searchTerm} searchCategory={searchCategory} searchHandler={searchHandler}
                categoryHandler={categoryHandler}
            />
            
        </div>
     );
    }return(<div>No blog found</div>)
}
 
export default Home;