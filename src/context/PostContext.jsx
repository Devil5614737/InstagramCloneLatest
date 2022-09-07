import { createContext, useState } from "react";

export const PostContext=createContext(null);




export const PostContextProvider=({children})=>{
    const[allPost,setAllPost]=useState([])
    const [fetch, setFetch] = useState(false);
    



    return (
        <PostContext.Provider value={{allPost,setAllPost,fetch,setFetch}}>
            {children}
        </PostContext.Provider>
    )
}