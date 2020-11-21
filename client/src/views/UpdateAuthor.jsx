import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from '@reach/router'; 

const UpdateAuthor = props => {
    const [form, setForm] = useState({
        name:""
    })
    
    const [error, setError] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props._id}`)
        .then(res => setForm(res.data.authors))
    }, [])


    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${props._id}`, form)
        .then(res => {
            if(res.data.error){
                setError(res.data.error.errors)
            } else {
                navigate("/")
            }
        })
    }
    
    return(
        <div>
            <h3>Edit this author!</h3>
            <Form form={form} onChangeHandler={onChangeHandler} error={error}/>
        </div>
    )
}
export default UpdateAuthor;