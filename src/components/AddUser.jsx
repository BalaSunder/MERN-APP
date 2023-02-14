
import { useState } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';




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

const AddUser = () => {
    const [user, setUser] = useState(defaultValue);
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }


return (
   <Container>
    <Typography variant="h4">Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="name"/>
        </FormControl>
        <FormControl>
            <InputLabel>User_Name</InputLabel>
            <Input  onChange={(e) => onValueChange(e)} name="user_name"/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input  onChange={(e) => onValueChange(e)} name="email" />
        </FormControl>
        <FormControl>
            <InputLabel>Phone_No</InputLabel>
            <Input  onChange={(e) => onValueChange(e)}name="phone_no"/>
        </FormControl>
        <FormControl>
            <InputLabel>Salary</InputLabel>
            <Input  onChange={(e) => onValueChange(e)} name="salary"/>
        </FormControl>
        <FormControl>
            <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
        </FormControl>
   </Container> 
) 

}
export default AddUser;