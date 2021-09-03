import React, {setState, useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow,Input,InputLabel, TableBody, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {getUsers, getoneUser} from '../actions/user.js'
const initialValue = {
    id:'',
    name: '',
    username: '',
    email: '',
    phone: ''
}

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

const AllUsers = () => {

    const usersData = useSelector((state) => state.userReducer)

    const [users, setUsers] = useState([]);
    
    const dispatch = useDispatch()
    
    const [id,setId]=useState(0);
 
    const classes = useStyles();
    

    useEffect(() => {
        if (id === 0 || id === '') {
            dispatch(getUsers())
        } else {
            dispatch(getoneUser(id))
        }
    }, [id])
    
     useEffect(() => {
        setUsers(usersData)
     }, [usersData])
    
    const handleInput = async event => {
        setId(event.target.value) ;
     };

    return (
        <div>
            <center>
            <div>
                <br></br>
            <InputLabel htmlFor="my-input">Search by Id</InputLabel>
             <Input  onChange={handleInput} />
             </div>
             </center>
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    user !== null ? 
                    <TableRow className={classes.row} key={user._id}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        
                        </TableRow> :
                        <TableRow className={classes.row}>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        
                        </TableRow>
                ))}
            </TableBody>
        </Table>
        </div>
    )
}

export default AllUsers;