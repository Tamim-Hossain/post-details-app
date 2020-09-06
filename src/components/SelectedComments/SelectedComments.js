import React from 'react';

const SelectedComments = ({ comment }) => {
    const { name, body, email } = comment;
    return (
        <div className="shadow-sm p-3 mb-2 bg-white rounded">
            <div className="row">
                <div className="col-md-1">
                    <img className="w-75 rounded-circle" src="https://source.unsplash.com/random" alt=""/>
                </div>
                <div className="col-md-11">
                <h6>Name: {name}</h6>
            <p>Email: {email}</p>
            <p>{body}</p>
                </div>
            </div>
        </div>
    );
};

export default SelectedComments;