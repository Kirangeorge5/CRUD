//axios is a library which is used to call api
import axios from 'axios';

const userURL='http://localhost:8000';

export const addUser=async(data)=>{                //api calls is an asynchronous request, so you have to handle it using await
    try{
       return await axios.post(`${userURL}/add` ,data );    //to retrun the result
    }
    catch(error){
        console.log("error while calling addUser api",error);
    }
}
export const getUser=async()=>{
    try{
       return await axios.get(`${userURL}/all`);
    }
    catch(error){
        console.log("error while calling getUsers API",error);
    }
}
export const getUsers=async()=>{
    try{
        return await axios.get(`${userURL}/${id}`)
    }catch(error){
        console.log('Error while calling getUser api',error)
    }
}

export const editUser=async(User,id)=>{
    try{
        return await axios.post(`${userURL}/${id}`,User)
    }catch(error){
        console.log('Error while calling editUser api',error)
    }
}

export const deleteUser=async(id)=>{
    try{
        return await axios.delete(`${userURL}/${id}`);
    }catch(error){
        console.log('Error while calling deleteUser api',error)
    }
}
