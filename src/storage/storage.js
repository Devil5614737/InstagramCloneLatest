const key='token';

const storeData=(data)=>{
    return localStorage.setItem(key,JSON.stringify(data));
};


const getData=()=>{
    return JSON.parse(localStorage.getItem(key));
};


const removeData=()=>{
    return localStorage.removeItem(key)
}

export default {storeData,getData,removeData}