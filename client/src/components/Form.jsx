import React from 'react';

const Form = props => {
    return (
        <div>
            <form onSubmit={props.onSubmitHandler}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" className="form-control" onChange={props.onChangeHandler} value={props.form.name}/>
                    {
                        props.error.name ?
                        <span className="text-danger">{props.error.name.message}</span>
                        :""
                    }
                </div>
                <input type="submit" value="Submit" className="btn btn-info"></input>

            </form>
        </div>
    )
}
export default Form;
