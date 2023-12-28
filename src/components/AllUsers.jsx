import {Table, TableHead, TableBody, TableCell, TableRow, Button} from '@mui/material';

import { getUser, deleteUser } from '../service/api';

import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const StyledTable = styled(Table)`
width: 90%;
margin: 50px auto 0 auto;
`
const StyledHead = styled(TableRow)`
background: #000000;
& > th{
    color: #fff;
    font-size: 20px;
}
`
const StyledBody= styled(TableRow)`
& > td{
    font-size: 20px;
}
`


const AllUsers=()=>{

    const[users,setUsers]= useState([]);

    useEffect(()=>{
        getAllUsers();

    }, []);

    const getAllUsers=async ()=>{
        let response = await getUser();
        setUsers(response.data);
    }

    const deleteUserDetails=async(id)=>{
        await deleteUser();
        getAllUsers();
    }

    return(
        <StyledTable>
            <TableHead>
                <StyledHead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </StyledHead>
            </TableHead>
            <TableBody>
                {
                    users.map((user) => (
                        <StyledBody key={user._id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button variant='contained' style={{marginRight: 10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button variant='contained' color='secondary' onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
                        </TableCell>
                        </StyledBody>

                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;