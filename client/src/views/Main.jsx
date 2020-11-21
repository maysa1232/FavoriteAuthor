import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = props => {
    const [authors, setAuthors] = useState();
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then(res => setAuthors(res.data.authors))
    }, [])

    const removeAuthor = _id => {
        axios.delete(`http://localhost:8000/api/authors/delete/${_id}`)
        .then(res => console.log("Author was booted!"))
        .catch(err => console.log(err))
    }
    
    return(
        <div>
            <h3>We have quotes by:</h3>
            <table className="table table-danger">
                <tr>
                    <td>Name:</td>
                    <td>Update</td>
                    <td>Delete</td>
                </tr>
            
            {
                authors ?
                authors.map((auth, i) => {
                    return <tr>
                        <td>{auth.name}</td>
                        <td><a href={`http://localhost:3000/authors/update/${auth._id}`}>update</a></td><td><button onClick={() => removeAuthor(auth._id)} className="btn btn-danger">remove</button></td>
                    </tr>
                }): ""
            }
            </table>
        </div>
    )
};

export default Main;