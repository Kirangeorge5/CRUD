import {FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";

import { useState,useEffect } from "react";
import {useNavigate,useParams} from "react-router-dom";

import { editUser,getUsers } from "../service/api";

const Container= styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto;
& > div{
    margin-top: 20px;
}
`
//&>div - parent component handling child component css

const defaultValue={
    name:'',
    username:'',
    email:'',
    phone:''
}

const EditUser=()=>{

    const [User,setUser]= useState(defaultValue);
    const navigate= useNavigate();

    const {id}=useParams();

    useEffect(()=>{
        loadUserDetails();
    }, [])
    const loadUserDetails=async()=>{
        const response = await getUsers(id);
        setUser(response.data);
    }

    const valueChange=(e)=>{
        setUser({...User,[e.target.name]:e.target.value})   //...user - spreading: to ensure that the values that are entered new would'nt overwrite but append

    }

    const editUserDetails=async()=>{
       await editUser(User,id)
       navigate('/all')
    }
    return(
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> valueChange(e)} name="name" value={User.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=> valueChange(e)} name="username" value={User.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=> valueChange(e)} name="email" value={User.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=> valueChange(e)} name="phone"value={User.phone}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>editUserDetails()}>EDIT USER</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;