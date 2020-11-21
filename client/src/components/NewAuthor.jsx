import React, { useState } from 'react';
import Form from './Form';
import axios from 'axios';
import { navigate } from '@reach/router'; 

const NewAuthor = props => {
    const [form, setForm] = useState({
        name:""
    })

    const [error, setError] = useState({});


    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new', form)
        .then(res => {
            if(res.data.error){
                console.log(res.data.error.errors)
                setError(res.data.error.errors)
            } else {
                console.log("itworkeddd");
                navigate("/") 
            }
        })
        .catch(console.log("something went wrong"));
    }

    return (
        <div>
            <Form onSubmitHandler={onSubmitHandler} form={form} onChangeHandler={onChangeHandler} error = {error} />
        </div>
    )
}

export default NewAuthor;