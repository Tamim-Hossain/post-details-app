import React from 'react';
import UsersImage from '../UsersImage/UsersImage';

const SelectedComments = ({ comment }) => {
    const { id, name, body, email } = comment;
    return (
        <div className="shadow-sm p-3 mb-2 bg-white rounded">
            <div className="row">
                <div className="col-md-2">
                    <UsersImage />
                </div>
                <div className="col-md-10">
                    <small>User ID: {id}</small>
                    <p>Email: {email}</p>
                    <h6>Subject: {name}</h6>
                    <p>Comment: {body}</p>
                </div>
            </div>
        </div>
    );
};

export default SelectedComments;