import {apiClient} from './client';

 const getPost=()=>apiClient.get('/all-post');
 const upload=(caption,image)=>apiClient.post('/upload',{caption,image});
 const getMyPost=()=>apiClient.get('/my-post');
const like=(postId)=>apiClient.put('/like',{postId})
const unLike=(postId)=>apiClient.put('/unlike',{postId});
const removePost=(postId)=>apiClient.post('/remove-post',{postId});
const comment=(postId,text)=>apiClient.put('/comment',{postId,text})


 export default {getPost,upload,getMyPost,like,unLike,removePost,comment};