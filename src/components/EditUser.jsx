
import { useState, useEffect } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import { editUser,  getUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';



const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto;
& > div {
    margin-top: 20px;
}
`;


const defaultValue = {
    Name: '',
    Username:'',
    Email: '',
    Phone: '',
    Salary: ''
}

const EditUser = () => {
    const [user, setUser] = useState(defaultValue);
    
    let navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, [])

    const loadUserDetails = async () => {
        const response = await getUser(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editUserDetails = async() => {
        await editUser(user, id);
        navigate('/all');
    }


return (
   <Container>
    <Typography variant="h4">Edit User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
        </FormControl>
        <FormControl>
            <InputLabel>User_Name</InputLabel>
            <Input  onChange={(e) => onValueChange(e)} name="user_name" value={user.username} />
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input  onChange={(e) => onValueChange(e)} name="email" value={user.email} />
        </FormControl>
        <FormControl>
            <InputLabel>Phone_No</InputLabel>
            <Input  onChange={(e) => onValueChange(e)}name="phone_no" value={user.phone_no} />
        </FormControl>
        <FormControl>
            <InputLabel>Salary</InputLabel>
            <Input  onChange={(e) => onValueChange(e)} name="salary" value={user.salary} />
        </FormControl>
        <FormControl>
        <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
        </FormControl>
   </Container> 
) 

}
export default EditUser;