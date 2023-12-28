import {FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";

import { useState } from "react";
import {useNavigate} from "react-router-dom";

import { addUser } from "../service/api";

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

const AddUser=()=>{

    const [User,setUser]= useState(defaultValue);
    const navigate= useNavigate();

    const valueChange=(e)=>{
        console.log(e.target.name,e.target.value)
        setUser({...User,[e.target.name]:e.target.value})   //...user - spreading: to ensure that the values that are entered new would'nt overwrite but append
        console.log(User)
    }

    const userDetails=async()=>{
       await addUser(User)
       navigate('/all')
    }
    return(
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> valueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=> valueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=> valueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=> valueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>userDetails()}>ADD USER</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;