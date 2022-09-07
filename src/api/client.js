import { create } from "apisauce";
import Storage from '../storage/storage';

export const apiClient=create({
    baseURL:"https://instagram-clone-backend-new.herokuapp.com/api"
})

apiClient.addAsyncRequestTransform(async (request)=>{
    const authToken=Storage.getData('token');
    if(!authToken) return ;
    request.headers["x-auth-token"]=authToken
      });